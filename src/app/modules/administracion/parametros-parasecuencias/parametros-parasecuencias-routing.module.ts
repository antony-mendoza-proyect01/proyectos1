import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosParasecuenciasComponent} from './parametros-parasecuencias.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosParasecuenciasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosParasecuenciasRoutingModule { }
