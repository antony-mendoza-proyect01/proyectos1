import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImpresionSeudopozosComponent} from './impresion-seudopozos.component';

const routes: Routes = [
  {
    path: '',
    component: ImpresionSeudopozosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpresionSeudopozosRoutingModule { }



