import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosHumedadesComponent} from './parametros-humedades.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosHumedadesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosHumedadesRoutingModule { }
