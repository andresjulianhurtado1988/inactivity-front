import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { data } from 'src/app/global/data';
import { DescargaService } from 'src/app/services/descarga.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-generar-archivo',
  templateUrl: './generar-archivo.component.html',
  styleUrls: ['./generar-archivo.component.css'],
  providers: [DatePipe],
})
export class GenerarArchivoComponent {
  public form: FormGroup;
  public datos = data.datos;
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
    this.form = this.fb.group({
      fechaIni: [''],
      fechaFin: [''],
    });
  }

  generandoArchivo() {
    // const contenido = [
    //   'Hamburguesa',
    //   'Pizza',
    //   'Papas Fritas',
    //   'Hot Dog',
    //   'Tacos',
    //   'Sushi',
    // ];

    const contenido = this.datos;

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

    // this.ruta = 'verificar-permisos';

    if (fechaIni == fechaFin) {
      this.ruta = 'agregar-contenido';
    } else {
      this.ruta = 'limpiar-y-agregar';
    }

    this.servicioArchivo
      .servicioAgregar(contenidoArchivo, this.ruta)
      .pipe(
        catchError((error) => {
          if (error.status === 403) {
            const mensajeSinPermisos =
              'No cuenta con permisos de lectura o escritura. Comuníquese con soporte TI';

            this.openSnackBar(mensajeSinPermisos);
          } else {
            console.error('Error en la solicitud al servidor:', error);
          }
          return throwError(error); // Propaga el error después de manejarlo
        })
      )
      .subscribe(
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
