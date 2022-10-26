import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosEspaciamientoComponent} from './parametros-espaciamiento.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosEspaciamientoComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosEspaciamientoRoutingModule { }
