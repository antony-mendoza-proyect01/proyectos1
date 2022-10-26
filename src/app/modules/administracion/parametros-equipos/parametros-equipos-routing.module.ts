import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosEquiposComponent} from './parametros-equipos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosEquiposComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosEquiposRoutingModule { }
