import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosNombresIntervalosComponent} from './parametros-nombres-intervalos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosNombresIntervalosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosNombresIntervalosRoutingModule { }
