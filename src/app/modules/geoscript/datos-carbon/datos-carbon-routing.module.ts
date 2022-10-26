import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatosCarbonComponent} from './datos-carbon.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {ListadoSuperficiePozoComponent} from "./components/listado-superficie-pozo/listado-superficie-pozo.component";


const routes: Routes = [
  {
    path: '',
    component: DatosCarbonComponent,
    children: [
      {
        path: INTERNAL_PATHS.GEOSCRIPT_DATOS_CARBON__COMPONENTS__SUPERFICIE_POZO,
        component: ListadoSuperficiePozoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosCarbonRoutingModule { }
