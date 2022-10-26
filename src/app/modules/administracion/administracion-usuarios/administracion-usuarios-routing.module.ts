import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministracionUsuariosComponent} from './administracion-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AdministracionUsuariosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionUsuariosRoutingModule { }
