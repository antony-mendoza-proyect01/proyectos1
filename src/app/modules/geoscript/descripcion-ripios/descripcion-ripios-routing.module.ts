import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DescripcionRipiosComponent} from './descripcion-ripios.component';

const routes: Routes = [
  {
    path: '',
    component: DescripcionRipiosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescripcionRipiosRoutingModule { }
