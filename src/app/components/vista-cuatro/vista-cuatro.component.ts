import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DescargaService } from 'src/app/services/descarga.service';

@Component({
  selector: 'app-vista-cuatro',
  templateUrl: './vista-cuatro.component.html',
  styleUrls: ['./vista-cuatro.component.css'],
  providers: [DatePipe],
})
export class VistaCuatroComponent {
  public form: FormGroup;
  public today = new Date();
  public formattedDate: string | null;
  public misJoyerias: any[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;
  public ruta: string = '';

  constructor(
    private servicioArchivo: DescargaService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.formattedDate = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.form = this.fb.group({
      fechaIni: [''],
      fechaFin: [''],
      ejemplo: [''],
    });
  }

  generandoArchivo() {
    // const contenido = this.form.value.ejemplo;

    const contenido = [
      'Hamburguesa',
      'Pizza',
      'Papas Fritas',
      'Hot Dog',
      'Tacos',
      'Sushi',
    ];

    this.ruta = 'agregar-contenido';

    let fechaIni = this.datePipe.transform(
      this.form.value.fechaIni,
      'yyyy-MM-dd'
    );
    let fechaFin = this.datePipe.transform(
      this.form.value.fechaFin,
      'yyyy-MM-dd'
    );

    let contenidoArchivo = {
      ['contenidoArchivo']: contenido,
      ['fechaCreacion']: fechaIni,
      ['fechaModificacion']: fechaFin,
    };

    if (fechaIni == fechaFin) {
      this.ruta = 'agregar-contenido';
    } else {
      this.ruta = 'limpiar-y-agregar';
    }

    this.servicioArchivo.servicioAgregar(contenidoArchivo, this.ruta).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data);
        if (data && data.mensaje) {
          this.openSnackBar(data.mensaje);
        } else {
          console.error('Error en la respuesta del servidor:', data);
        }
      },
      (error) => {
        console.error('Error en la solicitud al servidor:', error);
      }
    );
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
