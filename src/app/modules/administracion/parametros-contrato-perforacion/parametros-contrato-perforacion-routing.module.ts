 import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 import {ListadoTarifaComponent} from "./components/listado-tarifa/listado-tarifa.component";
 import { INTERNAL_PATHS } from 'src/app/core/const/routes.conts';
 import {
   ListadoAjustesDesviacionComponent
 } from "./components/listado-ajustes-desviacion/listado-ajustes-desviacion.component";
 import {
   ListadoAjustesPorcentajeVerticalidadComponent
 } from "./components/listado-ajustes-porcentaje-verticalidad/listado-ajustes-porcentaje-verticalidad.component";
 import {
   ListadoAjustesPorcentajeRecuperacionComponent
 } from "./components/listado-ajustes-porcentaje-recuperacion/listado-ajustes-porcentaje-recuperacion.component";
 import {ParametrosContratosPerforacionComponent} from './parametros-contrato-perforacion.component';
 import { SeleccionComponent } from './components/seleccion/seleccion.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosContratosPerforacionComponent,
    children: [
      {
        path: '',
        component: SeleccionComponent
      },
      {
        path: INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS,
        component: ListadoTarifaComponent
      },
      {
        path: INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_DESVIACION,
        component: ListadoAjustesDesviacionComponent
      },
      {
        path: INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_VERTICALIDAD,
        component: ListadoAjustesPorcentajeVerticalidadComponent
      },
      {
        path: INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_RECUPERACION,
        component: ListadoAjustesPorcentajeRecuperacionComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosContratoPerforacionRoutingModule { }
