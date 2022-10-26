import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosTurnosComponent} from './parametros-turnos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosTurnosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosTurnosRoutingModule { }
