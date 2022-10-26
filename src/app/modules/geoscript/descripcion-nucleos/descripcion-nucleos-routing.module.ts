import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DescripcionNucleosComponent} from './descripcion-nucleos.component';
import {FormDescripcionLitofaceComponent} from './components/form-descripcion-litoface/form-descripcion-litoface.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {
  FormCaracteristicasTectonicaComponent
} from './components/form-caracteristicas-tectonica/form-caracteristicas-tectonica.component';
import {
  FormCaracteristicasSedimentariasComponent
} from './components/form-caracteristicas-sedimentarias/form-caracteristicas-sedimentarias.component';
import {MODULO} from '../../../core/const/navigation.string.const';


const routes: Routes = [
  {
    path: '',
    component: DescripcionNucleosComponent,
    children: [
      {
        data: {title: MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.COMPONENTS.LITOFACE.titulo},
        path: INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__LITOFACE,
        component: FormDescripcionLitofaceComponent,
      },
      {
        data: {title: MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.COMPONENTS.TECTONICA.titulo},
        path: INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__TECTONICA,
        component: FormCaracteristicasTectonicaComponent,
      },
      {
        data: {title: MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.COMPONENTS.SEDIMENTARIAS.titulo},
        path: INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__SEDIMENTARIAS,
        component: FormCaracteristicasSedimentariasComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescripcionNucleosRoutingModule { }
