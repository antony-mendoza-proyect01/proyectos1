import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdministracionUsuariosRoutingModule} from './administracion-usuarios-routing.module';
import {AdministracionUsuariosComponent} from './administracion-usuarios.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ListadoComponent} from './components/listado/listado.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [
    AdministracionUsuariosComponent,
    FormModalComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    AdministracionUsuariosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdministracionUsuariosModule { }
