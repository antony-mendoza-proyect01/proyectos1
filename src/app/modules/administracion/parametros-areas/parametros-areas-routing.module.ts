import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosAreasComponent} from './parametros-areas.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosAreasComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosAreasRoutingModule { }
