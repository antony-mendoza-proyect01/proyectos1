import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeoscriptComponent} from './geoscript.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {MODULO} from '../../../core/const/navigation.string.const';
import {VerificacionPozoGuardService} from '../../../core/guards/verificacion-pozo-guard.service';

const routes: Routes = [
  {
    path: '',
    component: GeoscriptComponent,
    children: [
      {
        path: INTERNAL_PATHS.GEOSCRIPT_DATOPOZO,
        canActivate: [VerificacionPozoGuardService],
        data: {title: `${MODULO.GEOSCRIPT.titulo} ${MODULO.GEOSCRIPT.DATO_POZO.titulo}`},
        loadChildren: () => import('../datos-pozo/datos-pozo.module').then(m => m.DatosPozoModule)
      },
      {
        path: INTERNAL_PATHS.GEOSCRIPT_DIPMETER,
        canActivate: [VerificacionPozoGuardService],
        data: {title: `${MODULO.GEOSCRIPT.titulo} ${MODULO.GEOSCRIPT.DIPMETER.titulo}`},
        loadChildren: () => import('../dipmeter/dipmeter.module').then(m => m.DipmeterModule)
      },
      {
        path: INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS,
        canActivate: [VerificacionPozoGuardService],
        data: {title: `${MODULO.GEOSCRIPT.titulo} ${MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.titulo}`},
        loadChildren: () => import('../descripcion-nucleos/descripcion-nucleos.module').then(m => m.DescripcionNucleosModule)
      },
      {
        path: INTERNAL_PATHS.GEOSCRIPT_DATOS_CARBON,
        canActivate: [VerificacionPozoGuardService],
        data: {title: `${MODULO.GEOSCRIPT.titulo} ${MODULO.GEOSCRIPT.DATOS_CARBON.titulo}`},
        loadChildren: () => import('../datos-carbon/datos-carbon.module').then(m => m.DatosCarbonModule)
      },
      {
        path: INTERNAL_PATHS.GEOSCRIPT_SEUDOPOZOS,
        canActivate: [VerificacionPozoGuardService],
        data: {title: `${MODULO.GEOSCRIPT.titulo} ${MODULO.GEOSCRIPT.SEUDOPOZOS.titulo}`},
        loadChildren: () => import('../impresion-seudopozos/impresion-seudopozos.module').then(m => m.ImpresionSeudopozosModule)
      },
      {
        path: INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_RIPIOS,
        canActivate: [VerificacionPozoGuardService],
        data: {title: `${MODULO.GEOSCRIPT.titulo} ${MODULO.GEOSCRIPT.DESCRIPCION_RIPIOS.titulo}`},
        loadChildren: () => import('../descripcion-ripios/descripcion-ripios.module').then(m => m.DescripcionRipiosModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoscriptRoutingModule { }



