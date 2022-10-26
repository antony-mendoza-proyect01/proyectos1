import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ParametrosContratosRegistroComponent
} from './parametros-contrato-registro.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosContratosRegistroComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosContratoRegistroRoutingModule { }
