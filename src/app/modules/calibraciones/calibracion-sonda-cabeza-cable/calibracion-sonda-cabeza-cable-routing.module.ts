import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibracionSondaCabezaCableComponent} from './calibracion-sonda-cabeza-cable.component';


const routes: Routes = [
  {
    path: '',
    component: CalibracionSondaCabezaCableComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibracionSondaCabezaCableRoutingModule { }



