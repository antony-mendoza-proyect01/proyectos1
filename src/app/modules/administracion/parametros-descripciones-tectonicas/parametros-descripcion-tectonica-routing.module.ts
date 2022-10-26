import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ParametrosDescripcionTectonicaComponent } from './parametros-descripcion-tectonica.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosDescripcionTectonicaComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosDescripcionTectonicaRoutingModule { }
