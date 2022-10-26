import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosNombreSuperficiesComponent} from './parametros-nombre-superficies.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosNombreSuperficiesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosNombreSuperficiesRoutingModule { }
