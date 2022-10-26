import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosDescripcionesComponent} from './parametros-descripciones.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosDescripcionesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosDescripcionesRoutingModule { }
