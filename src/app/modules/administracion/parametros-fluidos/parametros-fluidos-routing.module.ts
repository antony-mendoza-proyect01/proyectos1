import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosFluidosComponent} from './parametros-fluidos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosFluidosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosFluidosRoutingModule { }
