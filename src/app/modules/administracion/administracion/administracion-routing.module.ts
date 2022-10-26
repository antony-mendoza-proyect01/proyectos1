import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministracionComponent} from './administracion.component';
import {MODULO} from '../../../core/const/navigation.string.const';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';


const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent,
    children: [
      {
        path: INTERNAL_PATHS.ADMIN_USUARIO,
        data: {title: MODULO.ADMIN.USUARIO.titulo},
        loadChildren: () => import('../administracion-usuarios/administracion-usuarios.module').then(m => m.AdministracionUsuariosModule)
      },
      {
        path: INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION,
        data: {title: MODULO.ADMIN.PARAMETROS_FACTURACION.titulo},
        loadChildren: () => import('../parametros/parametros.module').then(m => m.ParametrosModule)
      },
      {
        path: INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION,
        data: {title: MODULO.ADMIN.PARAMETROS_DESCRIPCION.titulo},
        loadChildren: () => import('../parametros/parametros.module').then(m => m.ParametrosModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }



