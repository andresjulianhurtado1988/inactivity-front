import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertaComponent } from './components/modal/alerta/alerta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertaExcelComponent } from './components/modal/alerta-excel/alerta-excel.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExportExcelComponent } from './components/export-excel/export-excel.component';
import { GenerarArchivoComponent } from './components/generar-archivo/generar-archivo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    AlertaComponent,
    AlertaExcelComponent,
    ExportExcelComponent,
    GenerarArchivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
