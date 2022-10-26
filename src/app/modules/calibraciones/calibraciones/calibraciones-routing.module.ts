import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibracionesComponent} from './calibraciones.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {MODULO} from '../../../core/const/navigation.string.const';

const routes: Routes = [
  {
    path: '',
    component: CalibracionesComponent,
    children: [
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.titulo},
        loadChildren: () => import('../calibracion/calibracion.module').then(m => m.CalibracionModule)
      },
      // {
      //   path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SONDA_CABEZA_CABLE,
      //   data: {title: MODULO.CALIBRACIONES.SONDA_CABEZA_CABLE.titulo},
      //   loadChildren: () => import('../calibracion/calibracion.module').then(m => m.CalibracionModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibracionesRoutingModule { }
