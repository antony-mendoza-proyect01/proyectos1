import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosPatronComponent} from './parametros-patron.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosPatronComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosPatronRoutingModule { }
