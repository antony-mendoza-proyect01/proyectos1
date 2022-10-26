import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosProgramasComponent} from './parametros-programas.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosProgramasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosProgramasRoutingModule { }
