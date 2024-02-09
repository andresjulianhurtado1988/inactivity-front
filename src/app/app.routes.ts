import { Routes } from '@angular/router';
import { VistaDosComponent } from './components/vista-dos/vista-dos.component';
import { VistaCuatroComponent } from './components/vista-cuatro/vista-cuatro.component';

export const ROUTES: Routes = [
  { path: 'exportar-excel', component: VistaDosComponent },
  { path: 'generar-archivo', component: VistaCuatroComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'exportar-excel' },
];
