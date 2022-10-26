import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosSupervisoresComponent} from './parametros-supervisores.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosSupervisoresComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosSupervisoresRoutingModule { }
