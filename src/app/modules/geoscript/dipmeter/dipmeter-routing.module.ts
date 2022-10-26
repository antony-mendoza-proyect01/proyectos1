import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DipmeterComponent} from './dipmeter.component';

const routes: Routes = [
  {
    path: '',
    component: DipmeterComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DipmeterRoutingModule { }



