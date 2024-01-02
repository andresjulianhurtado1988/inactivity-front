import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescargaService {

  constructor() { }

  downloadFile(content: string, fileName: string, fileType: string) {
    const blob = new Blob([content], { type: fileType });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }
}
