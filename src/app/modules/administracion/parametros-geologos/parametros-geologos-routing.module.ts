import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosGeologosComponent} from './parametros-geologos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosGeologosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosGeologosRoutingModule { }
