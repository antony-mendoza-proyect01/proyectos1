import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosTipoTectonicasComponent} from './parametros-tipo-tectonicas.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosTipoTectonicasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosTipoTectonicasRoutingModule { }
