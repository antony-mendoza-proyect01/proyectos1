import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosCodigosProyectosComponent} from './parametros-codigos-proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosCodigosProyectosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosCodigosProyectosRoutingModule { }
