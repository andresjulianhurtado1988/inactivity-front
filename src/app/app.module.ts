import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VistaDosComponent } from './components/vista-dos/vista-dos.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service
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
import { BarraComponent } from './components/barra/barra.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { VistaTresComponent } from './components/vista-tres/vista-tres.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DescripcionConceptosComponent } from './components/dialogs/descripcion-conceptos/descripcion-conceptos.component';
import { EditarConceptoComponent } from './components/dialogs/editar-concepto/editar-concepto.component';
import { VistaCuatroComponent } from './components/vista-cuatro/vista-cuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaDosComponent,
    NavegacionComponent,
    AlertaComponent,
    AlertaExcelComponent,
    BarraComponent,
    ProgressBarComponent,
    VistaTresComponent,
    DescripcionConceptosComponent,
    EditarConceptoComponent,
    VistaCuatroComponent,
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
