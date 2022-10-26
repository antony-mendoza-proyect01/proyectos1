import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {URL_GEOSCRIPT_DESCRIPCION_NUCLEOS} from '../../../../../core/const/navigation.const';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {TipoTectonicas} from '../../../../../data/models/tipo-tectonica';
import {DescripcionTectonica} from '../../../../../data/models/descripcion-tectonica';
import {
  getAllParametrosTipoTectonicas
} from '../../../../administracion/parametros-tipo-tectonicas/state/parametros-tipo-tectonicas.actions';
import {
  getAllParametrosDescripcionTectonica
} from '../../../../administracion/parametros-descripciones-tectonicas/state/parametros-descripcion-tectonica.actions';
import {
  selectParametrosListTipoTectonicas,
   selectParametrosLoadinTipoTectonicas
} from '../../../../administracion/parametros-tipo-tectonicas/state/parametros-tipo-tectonicas.selectors';
import {
  selectListDescripcionTectonicas,
  selectLoadinDescripcionTectonicas
} from '../../../../administracion/parametros-descripciones-tectonicas/state/parametros-descripcion-tectonica.selectors';

@Component({
  selector: 'app-form-caracteristicas-tectonica',
  templateUrl: './form-caracteristicas-tectonica.component.html',
  styleUrls: ['./form-caracteristicas-tectonica.component.scss']
})
export class FormCaracteristicasTectonicaComponent implements OnInit {
  loadingTipoTectonicas$: Observable<boolean> = new Observable();
  tipoTectonicas$: Observable<TipoTectonicas[]> = new Observable();
  loadingDescripcionTectonicas$: Observable<boolean> = new Observable();
  descripcionTectonicas$: Observable<DescripcionTectonica[]> = new Observable();

  urlDescripcionNucleos = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllParametrosTipoTectonicas());
    this.store.dispatch(getAllParametrosDescripcionTectonica());

    this.loadingTipoTectonicas$ = this.store.select(selectParametrosLoadinTipoTectonicas);
    this.tipoTectonicas$ = this.store.select(selectParametrosListTipoTectonicas);
    this.loadingDescripcionTectonicas$ = this.store.select(selectLoadinDescripcionTectonicas);
    this.descripcionTectonicas$ = this.store.select(selectListDescripcionTectonicas);
  }
}
