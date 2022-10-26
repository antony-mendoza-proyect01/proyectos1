import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {Observable} from 'rxjs';
import {DescripcionesLitofacies} from '../../../../../data/models/descripciones-litofacies';
import {URL_GEOSCRIPT_DESCRIPCION_NUCLEOS} from '../../../../../core/const/navigation.const';
import {
  getAllParametrosDescripcionesLitofacies
} from '../../../../administracion/parametros-descripciones-litofacies/state/parametros-descripcion-litofacies.actions';
import {
  selectListParametrosDescripcionesLitofaciesFiltro,
  selectLoadingParametrosDescripcionesLitofacies
} from '../../../../administracion/parametros-descripciones-litofacies/state/parametros-descripcion-litofacies.selectors';

@Component({
  selector: 'app-form-descripcion-litoface',
  templateUrl: './form-descripcion-litoface.component.html',
  styleUrls: ['./form-descripcion-litoface.component.scss']
})
export class FormDescripcionLitofaceComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  descripcionesLitofacies$: Observable<DescripcionesLitofacies[]> = new Observable();
  urlDescripcionNucleos = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS;

  constructor(
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getAllParametrosDescripcionesLitofacies());// init
    this.loading$ = this.store.select(selectLoadingParametrosDescripcionesLitofacies);
    this.descripcionesLitofacies$ = this.store.select(selectListParametrosDescripcionesLitofaciesFiltro);// listado de la tabla
  }

}
