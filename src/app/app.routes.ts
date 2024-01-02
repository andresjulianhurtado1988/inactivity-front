import { Routes } from '@angular/router';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';
import { VistaDosComponent } from './components/vista-dos/vista-dos.component';
import { VistaTresComponent } from './components/vista-tres/vista-tres.component';
import { EnsayosComponent } from './components/ensayos/ensayos.component';
import { VistaCuatroComponent } from './components/vista-cuatro/vista-cuatro.component';

export const ROUTES: Routes = [
  { path: 'vista-uno', component: VistaUnoComponent },
  { path: 'vista-dos', component: VistaDosComponent },
  { path: 'vista-tres', component: VistaTresComponent },
  { path: 'vista-cuatro', component: VistaCuatroComponent },
  { path: 'ensayos', component: EnsayosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'vista-uno' },
];
