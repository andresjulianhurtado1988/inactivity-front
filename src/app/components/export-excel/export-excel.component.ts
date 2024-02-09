import { Component } from '@angular/core';
import { InactivityService } from 'src/app/services/inactivity.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { LetShow } from 'src/app/let-show';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AlertaExcelComponent } from '../modal/alerta-excel/alerta-excel.component';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.css'],
})
export class ExportExcelComponent {
  public form: FormGroup;
  today = new Date();
  durationInSeconds = 5;
  public progreso: number = 0;

  public letShow: LetShow = {
    barra: false,
    miBoton: false,
    miTabla: false,
    miSelect: false,
    noData: true,
    inhabilitar: true,
    datosFiltrados: [],
    misJoyerias: [],
    message_no_data: 'No hay datos que mostrar...',
    arrayJoyerias: [],
    vendedor: [],
    mensaje_reporte: 'Generandoooo reporte...',
  };

  get joyeriaFormArray() {
    return this.form.controls['joyeria_id'] as FormArray;
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _inactivityService: InactivityService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      fechaIni: ['', Validators.required],
      fechaFin: ['', Validators.required],
      joyeria_id: new FormArray([]),
      vendedor_id: [[], []],
    });

    this.verTiendas();
    this.cargarData();
  }

  cargarData() {
    this.form.reset({
      fechaIni: this.today,
      fechaFin: this.today,
    });
  }

  verTiendas() {
    this._inactivityService.verTiendas().subscribe((datos: any) => {
      this.letShow.misJoyerias = datos.tiendas;
      this.addCheckboxesToForm(this.letShow.misJoyerias);
    });
  }

  addCheckboxesToForm(misJoyerias: any[]) {
    this.letShow.misJoyerias.forEach(() =>
      this.joyeriaFormArray.push(new FormControl(''))
    );
  }

  verTabla() {
    this.form.value.joyeria_id = this.form.value.joyeria_id.map(
      (checked: any, i: number) =>
        checked ? this.letShow.misJoyerias[i].id : 0
    );

    this.letShow.datosFiltrados = new Array();

    this._inactivityService.verTabla(this.form.value).subscribe((datos) => {
      if (datos.ventas.length !== 0) {
        this.letShow.datosFiltrados = datos.ventas;

        this.letShow.miBoton = true;
        this.letShow.inhabilitar = false;
        this.letShow.miTabla = true;
        this.letShow.noData = false;
      } else {
        this.letShow.miBoton = false;
        this.letShow.inhabilitar = true;
        this.letShow.miTabla = false;
        this.letShow.noData = true;
      }
    });
  }

  datosChange() {
    this.form.value.joyeria_id = this.form.value.joyeria_id.map(
      (checked: any, i: number) =>
        checked ? this.letShow.misJoyerias[i].id : null
    );

    let joyerias = { ['joyeria_id']: this.form.value.joyeria_id };

    this.verEmpleados(joyerias);

    this._inactivityService.verTabla(this.form.value).subscribe((datos) => {
      if (datos.ventas.length !== 0) {
        this.letShow.inhabilitar = false;
      } else {
        this.letShow.inhabilitar = true;
      }
    });
  }

  verEmpleados(joyerias: any) {
    this._inactivityService.verEmpleados(joyerias).subscribe((datos) => {
      this.letShow.vendedor = datos.vendedores;

      if (datos.vendedores.length !== 0) {
        this.letShow.miSelect = true;
      } else {
        this.letShow.miSelect = false;
      }
    });
  }

  generarExcel() {
    this.letShow.barra = true;
    this.letShow.inhabilitar = true;
    this._inactivityService.verTabla(this.form.value).subscribe((datos) => {
      if (datos.ventas.length !== 0) {
        this._inactivityService
          .crearExcel(this.form.value)
          .subscribe((data) => {
            console.log(data);
            const filename = 'ventas.xlsx';
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.download = filename;
            link.click();
            this.letShow.barra = false;
            this.letShow.inhabilitar = false;
          });
      } else {
        const dialogRef = this.dialog.open(AlertaExcelComponent);
        this.letShow.inhabilitar = true;
      }
    });
  }
}
