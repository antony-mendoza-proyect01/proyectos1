import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ParametrosMunicipiosComponent} from './parametros-municipios.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosMunicipiosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosMunicipiosRoutingModule { }
