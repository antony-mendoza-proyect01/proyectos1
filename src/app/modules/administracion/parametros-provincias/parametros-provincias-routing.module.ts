import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosProvinciasComponent} from './parametros-provincias.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosProvinciasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosProvinciasRoutingModule { }
