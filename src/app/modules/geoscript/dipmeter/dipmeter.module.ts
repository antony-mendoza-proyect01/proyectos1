import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DipmeterRoutingModule} from './dipmeter-routing.module';
import {DipmeterComponent} from './dipmeter.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import {SharedModule} from "../../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [DipmeterComponent, ListadoComponent, FormModalComponent],
  imports: [
    CommonModule,
    DipmeterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DipmeterModule { }
