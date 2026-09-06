import { Routes } from '@angular/router';
import { HubComponent } from './hub/hub';
import { HomeComponent } from './home/home';
import { AgenteDetalheComponent } from './agente-detalhe/agente-detalhe';

export const routes: Routes = [
  { path: '', component: HubComponent },
  { path: 'zzz', component: HomeComponent },
  { path: 'agente/:id', component: AgenteDetalheComponent }
];