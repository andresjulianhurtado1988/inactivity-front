import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InactivityService } from 'src/app/services/inactivity.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
})
export class AlertaComponent {
  constructor(public dialogRef: MatDialogRef<AlertaComponent>) {}
}
