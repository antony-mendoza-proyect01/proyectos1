import { Component, OnInit } from '@angular/core';
import {URL_GEOSCRIPT_DESCRIPCION_NUCLEOS} from '../../../../../core/const/navigation.const';

import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {Observable} from 'rxjs';
import {Espaciamiento} from '../../../../../data/models/espaciamiento';
import {
  getAllParametrosEspaciamiento
} from '../../../../administracion/parametros-espaciamientos/state/parametros-espaciamiento.actions';
import {
  getAllParametrosDescripcionSedimentaria
} from '../../../../administracion/parametros-descripciones-sedimentarias/state/parametros-descripcion-sedimentaria.actions';
import {
  selectListEspaciamiento,
  selectLoadingEspaciamiento
} from '../../../../administracion/parametros-espaciamientos/state/parametros-espaciamiento.selectors';
import {
  selectListDescipcionSedimentaria,
  selectLoadingDescipcionSedimentaria
} from 'src/app/modules/administracion/parametros-descripciones-sedimentarias/state/parametros-descripcion-sedimentaria.selectors';
import {DescripcionSedimentaria} from "../../../../../data/models/descripcion-sedimentaria";

@Component({
  selector: 'app-form-caracteristicas-sedimentarias',
  templateUrl: './form-caracteristicas-sedimentarias.component.html',
  styleUrls: ['./form-caracteristicas-sedimentarias.component.scss']
})
export class FormCaracteristicasSedimentariasComponent implements OnInit {
  loadingEspaciamiento$: Observable<boolean> = new Observable();
  espaciamientos$: Observable<Espaciamiento[]> = new Observable();
  loadingDescripcionSedimentaria$: Observable<boolean> = new Observable();
  descripcionSedimentarias$: Observable<DescripcionSedimentaria[]> = new Observable();

  urlDescripcionNucleos = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllParametrosEspaciamiento());
    this.store.dispatch(getAllParametrosDescripcionSedimentaria());

    this.loadingEspaciamiento$ = this.store.select(selectLoadingEspaciamiento);
    this.espaciamientos$ = this.store.select(selectListEspaciamiento);
    this.loadingDescripcionSedimentaria$ = this.store.select(selectLoadingDescipcionSedimentaria);
    this.descripcionSedimentarias$ = this.store.select(selectListDescipcionSedimentaria);
  }

}
