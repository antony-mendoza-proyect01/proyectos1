import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosCaudalesComponent} from './parametros-caudales.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosCaudalesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosCaudalesRoutingModule { }
