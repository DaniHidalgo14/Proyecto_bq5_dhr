import { Routes } from '@angular/router';
import { Todos } from './pages/todos/todos';
import { PorPosicion } from './pages/por-posicion/por-posicion';
import { PorNombre } from './pages/por-nombre/por-nombre';

export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: Todos },
  { path: 'por-posicion', component: PorPosicion },
  { path: 'por-nombre', component: PorNombre },
  { path: '**', redirectTo: 'todos' }
];