import { Component } from '@angular/core';
import { DescargaService } from 'src/app/services/descarga.service';

@Component({
  selector: 'app-vista-cuatro',
  templateUrl: './vista-cuatro.component.html',
  styleUrls: ['./vista-cuatro.component.css'],
})
export class VistaCuatroComponent {
  constructor(private servicioArchivo: DescargaService) {}

  generarArchivo() {
    const textContent = 'contenido del archivo.';
    const fileName = 'textFile.txt';
    const fileType = 'text/plain';

    this.servicioArchivo.downloadFile(textContent, fileName, fileType);

    /******** */
    // const blob = new Blob(['prueba de descarga'], { type: 'text/csv' });
    // const filename = 'holamundo.txt';
    // var link = document.createElement('a');
    // link.href = window.URL.createObjectURL(blob);
    // link.download = filename;
    // link.click();
  }
}
