import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosEmpresasComponent} from './parametros-empresas.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosEmpresasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosEmpresasRoutingModule { }
