import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {INTERNAL_PATHS} from '../../core/const/routes.conts';
import {ContainerNavigationComponent} from './components/container-navigation/container-navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MODULO} from '../../core/const/navigation.string.const';
import {VerificacionPozoGuardService} from '../../core/guards/verificacion-pozo-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ContainerNavigationComponent,
      },
      {
        path: INTERNAL_PATHS.GEOSCRIPT,
        canActivate: [VerificacionPozoGuardService],
        component: DashboardComponent,
        data: {title: MODULO.GEOSCRIPT.titulo},
        loadChildren: () => import('../geoscript/geoscript/geoscript.module').then(m => m.GeoscriptModule)
      },
      {
        path: INTERNAL_PATHS.FATPOZOS,
        component: DashboardComponent,
        data: {title: MODULO.FATPOZOS.titulo},
        loadChildren: () => import('../factpozos/fatpozos/fatpozos.module').then(m => m.FatpozosModule)
      },
      {
        path: INTERNAL_PATHS.CALIBRACIONES,
        component: DashboardComponent,
        data: {title: MODULO.CALIBRACIONES.titulo},
        loadChildren: () => import('../calibraciones/calibraciones/calibraciones.module').then(m => m.CalibracionesModule)
      },
      {
        path: INTERNAL_PATHS.ADMIN,
        component: DashboardComponent,
        data: {title: MODULO.ADMIN.titulo},
        loadChildren: () => import('../administracion/administracion/administracion.module').then(m => m.AdministracionModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
