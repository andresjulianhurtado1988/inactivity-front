import { RouterModule, Routes } from '@angular/router';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';
import { VistaDosComponent } from './components/vista-dos/vista-dos.component';

export const ROUTES: Routes = [
  { path: 'vista-uno', component: VistaUnoComponent },
  { path: 'vista-dos', component: VistaDosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'vista-uno' },
];
