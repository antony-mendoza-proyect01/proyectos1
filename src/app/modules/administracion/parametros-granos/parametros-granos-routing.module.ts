import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosGranosComponent} from './parametros-granos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosGranosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosGranosRoutingModule { }
