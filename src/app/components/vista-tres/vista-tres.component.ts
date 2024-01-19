import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CuentasService } from 'src/app/services/cuentas.service';
import { MostrarDatos } from 'src/app/vista-tres';
import { MatDialog } from '@angular/material/dialog';
import { DescripcionConceptosComponent } from '../dialogs/descripcion-conceptos/descripcion-conceptos.component';
import { EditarConceptoComponent } from '../dialogs/editar-concepto/editar-concepto.component';

@Component({
  selector: 'app-vista-tres',
  templateUrl: './vista-tres.component.html',
  styleUrls: ['./vista-tres.component.css'],
})
export class VistaTresComponent {
  public form: FormGroup;
  public counts: any[] = [];
  public numCuentas: any[] = [];
  public numeros_de_cuentas: any[] = [];
  public datosFiltrados: any[] = [];

  dataSource: any;
  public mostrarDatos: MostrarDatos = {
    tabla_cuentas: false,
    allConceptos: [],
    concepto_vs_cuenta: true,
    cuenta_vs_concepto: false,
    input_disabled: true,
    is_checked: 1,
    myButton: false,
  };

  constructor(
    public dialog: MatDialog,
    private cuentasService: CuentasService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      cuentas: [[], []],
      conceptos_id: [[], []],
    });
  }

  ngOnInit(): void {
    this.optionSelected(this.mostrarDatos.is_checked);
  }

  selectedConcept(ob: any) {
    this.mostrarDatos.tabla_cuentas = false;
    let concepto_id = { ['concepto_id']: ob.value };
    this.cuentasService.concepto_cuenta(concepto_id).subscribe((resp) => {
      this.counts = resp.cuentas;
      if (this.counts.length !== 0) {
        this.mostrarDatos.myButton = true;

        this.mostrarDatos.input_disabled = false;
      } else {
        this.mostrarDatos.input_disabled = false;
      }
    });
  }

  verTabla() {
    this.cuentasService.verTablaCuentas(this.form.value).subscribe((datos) => {
      if (datos.cuentas.length !== 0) {
        this.datosFiltrados = datos.cuentas;

        console.log(this.datosFiltrados);

        this.mostrarDatos.tabla_cuentas = true;
      } else {
        this.mostrarDatos.tabla_cuentas = false;
      }
    });
  }

  verDetalle(concept: any, cuenta: any) {
    const dialogRef = this.dialog.open(DescripcionConceptosComponent, {
      data: {
        datos_concepto: concept,
        datos_cuenta: cuenta,
      },
    });

    //   console.log(concept, cuenta);
  }

  buscadorCuenta(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource = filtro.trim().toLowerCase();

    let numeros_cuentas = this.counts.filter(
      (cuentica) => cuentica.cuenta == this.dataSource
    );
    if (numeros_cuentas.length === 0) {
      this.numCuentas = this.counts;
    } else {
      this.numCuentas = numeros_cuentas;
    }

    this.numCuentas;
  }

  optionSelected(value: any) {
    this.mostrarDatos.input_disabled = true;
    if (value == 1) {
      this.cuentasService.verConceptos().subscribe((resp) => {
        this.mostrarDatos.allConceptos = resp.conceptos;
      });

      this.mostrarDatos.concepto_vs_cuenta = true;
      this.mostrarDatos.cuenta_vs_concepto = false;

      // conceptos
    } else {
      this.cuentasService.verCuentas().subscribe((cuent) => {
        this.numCuentas = cuent.cuentas;
      });

      this.mostrarDatos.cuenta_vs_concepto = true;
      this.mostrarDatos.concepto_vs_cuenta = false;
    }
  }

  editar_concepto() {
    const dialogEdit = this.dialog.open(EditarConceptoComponent);
  }
}
