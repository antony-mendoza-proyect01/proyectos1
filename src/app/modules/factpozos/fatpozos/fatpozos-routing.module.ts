import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FatpozosComponent} from './fatpozos.component';

const routes: Routes = [
  {
    path: '',
    component: FatpozosComponent,
    children: [

    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatpozosRoutingModule { }
