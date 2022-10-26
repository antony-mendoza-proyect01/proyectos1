import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosDurezasComponent} from './parametros-durezas.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosDurezasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosDurezasRoutingModule { }
