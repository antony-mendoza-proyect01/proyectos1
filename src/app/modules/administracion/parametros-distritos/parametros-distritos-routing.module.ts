import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosDistritosComponent} from './parametros-distritos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosDistritosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosDistritosRoutingModule { }
