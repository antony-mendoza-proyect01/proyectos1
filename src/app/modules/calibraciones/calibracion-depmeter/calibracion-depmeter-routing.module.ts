import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibracionDepmeterComponent} from './calibracion-depmeter.component';


const routes: Routes = [
  {
    path: '',
    component: CalibracionDepmeterComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibracionDepmeterRoutingModule { }



