import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibracionSondaRuedaContadoraComponent} from './calibracion-sonda-rueda-contadora.component';


const routes: Routes = [
  {
    path: '',
    component: CalibracionSondaRuedaContadoraComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibracionSondaRuedaContadoraRoutingModule { }



