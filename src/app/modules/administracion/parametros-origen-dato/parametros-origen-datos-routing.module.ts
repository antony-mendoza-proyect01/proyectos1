import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosOrigenDatosComponent} from './parametros-origen-datos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosOrigenDatosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosOrigenDatosRoutingModule { }
