import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosCalificadoresComponent} from './parametros-calificadores.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosCalificadoresComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosCalificadoresRoutingModule { }
