import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DescargaService } from 'src/app/services/descarga.service';

@Component({
  selector: 'app-vista-cuatro',
  templateUrl: './vista-cuatro.component.html',
  styleUrls: ['./vista-cuatro.component.css'],
})
export class VistaCuatroComponent {
  constructor(
    private servicioArchivo: DescargaService,
    private http: HttpClient
  ) {}

  generarArchivo() {}

  generandoArchivo() {
    const contenidoArchivo = 'CONTENIDO DOS';

    this.servicioArchivo.crearArchivo(contenidoArchivo).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data);
        if (data && data.mensaje) {
          console.log('Archivo creado correctamente');
        } else {
          console.error('Error en la respuesta del servidor:', data);
        }
      },
      (error) => {
        console.error('Error en la solicitud al servidor:', error);
      }
    );
  }
}
