import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosTipoPozosComponent} from './parametros-tipo-pozos.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosTipoPozosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosTipoPozosRoutingModule { }
