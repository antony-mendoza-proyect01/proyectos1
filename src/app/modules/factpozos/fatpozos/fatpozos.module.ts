import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FatpozosRoutingModule} from './fatpozos-routing.module';
import {FatpozosComponent} from './fatpozos.component';



@NgModule({
  declarations: [FatpozosComponent],
  imports: [
    CommonModule,
    FatpozosRoutingModule
  ]
})
export class FatpozosModule { }
