import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosColoresComponent} from './parametros-colores.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosColoresComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosColoresRoutingModule { }
