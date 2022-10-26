import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibracionComponent} from './calibracion.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {MODULO} from '../../../core/const/navigation.string.const';

const routes: Routes = [
  {
    path: '',
    component: CalibracionComponent,
    children: [
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SONDA_CABEZA_CABLE,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.SONDA_CABEZA_CABLE.titulo},
        loadChildren: () => import('../calibracion-sonda-cabeza-cable/calibracion-sonda-cabeza-cable.module').then(m => m.CalibracionSondaCabezaCableModule)
      },
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SONDA_RUEDA_CONTADORA,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.SONDA_RUEDA_CONTADORA.titulo},
        loadChildren: () => import('../calibracion-sonda-rueda-contadora/calibracion-sonda-rueda-contadora.module').then(m => m.CalibracionSondaRuedaContadoraModule)
      },
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SUSCEPTIBILIDAD_MAGNETICA,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.SUSCEPTIBILIDAD_MAGNETICA.titulo},
        loadChildren: () => import('../calibracion-suceptibilidad-magnetica/calibracion-suceptibilidad-magnetica.module').then(m => m.CalibracionSuceptibilidadMagneticaModule)
      },
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__DEPMETER,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.DEPMETER.titulo},
        loadChildren: () => import('../calibracion-depmeter/calibracion-depmeter.module').then(m => m.CalibracionDepmeterModule)
      },
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__DATO_POZO_REGISTRADO,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.DATO_POZO_REGISTRADO.titulo},
        loadChildren: () => import('../calibracion-datos-pozo-registrado/calibracion-datos-pozo-registrado.module').then(m => m.CalibracionDatosPozoRegistradoModule)
      },
      {
        path: INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__DENSIDAD,
        data: {title: MODULO.CALIBRACIONES.CALIBRACION.DENSIDAD.titulo},
        loadChildren: () => import('../calibracion-densidad/calibracion-densidad.module').then(m => m.CalibracionDensidadModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibracionRoutingModule { }



