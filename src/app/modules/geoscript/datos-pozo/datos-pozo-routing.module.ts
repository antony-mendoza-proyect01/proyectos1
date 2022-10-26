import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatosPozoComponent} from './datos-pozo.component';

const routes: Routes = [
  {
    path: '',
    component: DatosPozoComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosPozoRoutingModule { }



