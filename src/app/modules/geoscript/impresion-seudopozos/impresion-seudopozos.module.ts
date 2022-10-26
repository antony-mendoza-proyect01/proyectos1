import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImpresionSeudopozosComponent} from './impresion-seudopozos.component';
import {ImpresionSeudopozosRoutingModule} from './impresion-seudopozos-routing.module';
import {InfoComponent} from './components/info/info.component';
import {InfoDetailComponent} from './components/info-detail/info-detail.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [
    ImpresionSeudopozosComponent,
    InfoComponent,
    InfoDetailComponent,
  ],
    imports: [
        CommonModule,
        ImpresionSeudopozosRoutingModule,
        SharedModule,
    ]
})
export class ImpresionSeudopozosModule { }
