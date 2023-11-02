import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-ensayos',
  templateUrl: './ensayos.component.html',
  styleUrls: ['./ensayos.component.css'],
})
export class EnsayosComponent {
  myControl = new FormControl('');

  conceptos: string[] = [];
  concept: string[] = [];

  filteredOptions!: Observable<string[]>;

  constructor(private _cuentasService: CuentasService) {
    this._cuentasService.verConceptos().subscribe((resp) => {
      resp.conceptos.forEach((element: any) => {
        this.concept.push(element['concepto']);
      });
      this.conceptos = this.concept;

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }

  filtradoOpciones() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.conceptos.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  selectedConcept(option: any) {
    console.log(option);
  }
}
