import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosTipoPerforacionesComponent} from './parametros-tipo-perforaciones.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosTipoPerforacionesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosTipoPerforacionesRoutingModule { }
