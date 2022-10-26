import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosLitofacieColoresComponent} from './parametros-litofacie-colores.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosLitofacieColoresComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosLitofacieColoresRoutingModule { }
