import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alerta-excel',
  templateUrl: './alerta-excel.component.html',
  styleUrls: ['./alerta-excel.component.css'],
})
export class AlertaExcelComponent {
  constructor(public dialogRef: MatDialogRef<AlertaExcelComponent>) {}
}
