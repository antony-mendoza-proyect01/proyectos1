import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoscriptComponent} from './geoscript.component';
import {GeoscriptRoutingModule} from './geoscript-routing.module';



@NgModule({
  declarations: [GeoscriptComponent],
  imports: [
    CommonModule,
    GeoscriptRoutingModule
  ]
})
export class GeoscriptModule { }
