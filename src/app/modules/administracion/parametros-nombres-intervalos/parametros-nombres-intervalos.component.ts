import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {
  createModalParametrosNombresIntervalos, deleteParametrosNombresIntervalos,
  editModalParametrosNombresIntervalos, filterParametrosNombresIntervalos,
  getByNombrePaginadoParametrosNombresIntervalos,
  initParametrosNombresIntervalos
} from './state/parametros-nombres-intervalos.actions';
import {NombresIntervalos} from '../../../data/models/nombres-intervalos';
import {
  selectListNombresIntervalosFiltroBusqueda
} from './state/parametros-nombres-intervalos.selectors';

@Component({
  selector: 'app-parametros-nombres-intervalos',
  templateUrl: './parametros-nombres-intervalos.component.html',
  styleUrls: ['./parametros-nombres-intervalos.component.scss']
})
export class ParametrosNombresIntervalosComponent implements OnInit {
  filtro$: string = '';

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosNombresIntervalos());// init
    this.store.select(selectListNombresIntervalosFiltroBusqueda).subscribe(x => {this.filtro$ = x;});
  }

  onCreate() {
    this.store.dispatch(createModalParametrosNombresIntervalos({edit: new NombresIntervalos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: NombresIntervalos) {
    this.store.dispatch(editModalParametrosNombresIntervalos({edit}));
  }

  onDelete(edit: NombresIntervalos) {
    this.store.dispatch(deleteParametrosNombresIntervalos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosNombresIntervalos({filtro}));
  }

  onBuscarNombre() {
    if(this.filtro$ !== '') {
      this.store.dispatch(getByNombrePaginadoParametrosNombresIntervalos({nombre: this.filtro$}));
    }
  }
}
