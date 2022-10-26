import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DescripcionRipiosComponent} from './descripcion-ripios.component';
import {DescripcionRipiosRoutingModule} from './descripcion-ripios-routing.module';
import {InfoComponent} from './components/info/info.component';
import {InfoDetailComponent} from './components/info-detail/info-detail.component';



@NgModule({
  declarations: [
    DescripcionRipiosComponent,
    InfoComponent,
    InfoDetailComponent,
  ],
  imports: [
    CommonModule,
    DescripcionRipiosRoutingModule
  ]
})
export class DescripcionRipiosModule { }
