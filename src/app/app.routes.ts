import { Routes } from '@angular/router';
import { ExportExcelComponent } from './components/export-excel/export-excel.component';
import { GenerarArchivoComponent } from './components/generar-archivo/generar-archivo.component';

export const ROUTES: Routes = [
  { path: 'exportar-excel', component: ExportExcelComponent },
  { path: 'generar-archivo', component: GenerarArchivoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'exportar-excel' },
];
