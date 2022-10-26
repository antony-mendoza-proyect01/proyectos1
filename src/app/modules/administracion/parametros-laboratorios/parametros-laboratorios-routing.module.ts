import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosLaboratoriosComponent} from './parametros-laboratorios.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosLaboratoriosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosLaboratoriosRoutingModule { }
