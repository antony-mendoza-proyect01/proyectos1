import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibracionDatosPozoRegistradoComponent} from './calibracion-datos-pozo-registrado.component';


const routes: Routes = [
  {
    path: '',
    component: CalibracionDatosPozoRegistradoComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibracionDatosPozoRegistradoRoutingModule { }



