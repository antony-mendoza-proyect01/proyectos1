import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MODULO } from './core/const/navigation.string.const';
import {INTERNAL_PATHS} from './core/const/routes.conts';
const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_PATHS.LOGIN,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.LOGIN,
    data: {title: MODULO.LOGIN.titulo},
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: INTERNAL_PATHS.RAIZ,
    data: {title: MODULO.RAIZ.titulo},
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: INTERNAL_PATHS.LOGIN
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
