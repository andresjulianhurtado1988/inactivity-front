import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-descripcion-conceptos',
  templateUrl: './descripcion-conceptos.component.html',
  styleUrls: ['./descripcion-conceptos.component.css'],
})
export class DescripcionConceptosComponent {
  public descriptions_concept: any;
  public descriptions_count: any;
  public datosFiltrados: any = [];
  public nombreConcepto: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public infoDescript: any,
    private _cuentasService: CuentasService
  ) {
    this._cuentasService
      .detalleConceptos(this.infoDescript)
      .subscribe((resp) => {
        this.datosFiltrados = resp.respuesta;
        this.nombreConcepto = resp.nombreConcepto;
      });
  }
}
