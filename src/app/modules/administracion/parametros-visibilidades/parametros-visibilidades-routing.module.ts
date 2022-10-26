import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ParametrosVisibilidadesComponent} from './parametros-visibilidades.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosVisibilidadesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosVisibilidadesRoutingModule { }
