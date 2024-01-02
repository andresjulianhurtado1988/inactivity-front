import { Component } from '@angular/core';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-vista-uno',
  templateUrl: './vista-uno.component.html',
  styleUrls: ['./vista-uno.component.css'],
})
export class VistaUnoComponent {
  constructor(public _validatorService: ValidadoresService) {}

  descargarArchivo() {
    let algo = { ['algunaCosa']: 5 };

    //  this._validatorService.descargarArchivo(algo).subscribe((data) => {
    //  console.log(data);
    //  const filename = 'holamundodospuntocerofront.txt';
    //  var link = document.createElement('a');
    //  link.href = window.URL.createObjectURL(data);
    //  link.download = filename;
    //  link.click();
    // this.end();
    //  });
    //} else {
    //const dialogRef = this.dialog.open(AlertaExcelComponent);
    //this.letShow.inhabilitar = true;
    //}
    //  });
  }
}
