import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosLitofaciesComponent} from './parametros-litofacies.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosLitofaciesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosLitofaciesRoutingModule { }
