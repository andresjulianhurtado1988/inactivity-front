import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-editar-concepto',
  templateUrl: './editar-concepto.component.html',
  styleUrls: ['./editar-concepto.component.css'],
})
export class EditarConceptoComponent {
  public form: FormGroup;
  public allConceptos: any[] = [];
  public counts: any[] = [];
  public input_disabled: boolean;
  constructor(
    public dialogRef: MatDialogRef<EditarConceptoComponent>,
    private fb: FormBuilder,
    private cuentasService: CuentasService
  ) {
    this.form = this.fb.group({
      cuentas: [[], []],
      conceptos_id: [[], []],
    });

    this.input_disabled = true;
    this.cuentasService.verConceptos().subscribe((resp) => {
      this.allConceptos = resp.conceptos;
    });
  }

  editar_concepto() {}

  selectedConcept(ob: any) {
    this.cuentasService.concepto_cuenta(ob).subscribe((resp) => {
      this.counts = resp.cuentas;
      if (this.counts.length !== 0) {
        this.input_disabled = false;
      } else {
        this.input_disabled = true;
      }
    });
  }
}
