import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosLitologiasComponent} from './parametros-litologias.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosLitologiasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosLitologiasRoutingModule { }
