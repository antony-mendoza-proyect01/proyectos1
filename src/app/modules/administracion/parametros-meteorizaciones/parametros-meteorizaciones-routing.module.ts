import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosMeteorizacionesComponent} from './parametros-meteorizaciones.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosMeteorizacionesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosMeteorizacionesRoutingModule { }
