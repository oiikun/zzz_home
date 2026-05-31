import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AgenteDetalheComponent } from './agente-detalhe/agente-detalhe';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agente/:id', component: AgenteDetalheComponent }
];