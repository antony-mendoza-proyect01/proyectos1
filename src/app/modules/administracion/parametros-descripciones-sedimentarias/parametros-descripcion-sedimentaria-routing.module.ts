import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosDescripcionSedimentariaComponent} from './parametros-descripcion-sedimentaria.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosDescripcionSedimentariaComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosDescripcionSedimentariaRoutingModule { }
