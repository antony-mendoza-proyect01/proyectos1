import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosTonosComponent} from './parametros-tonos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosTonosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosTonosRoutingModule { }
