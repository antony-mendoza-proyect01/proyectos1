import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  createModalParametrosDescripciones,
  deleteParametrosDescripciones,
  editModalParametrosDescripciones, filterParametrosDescripciones,
  getAllParametrosDescripciones,
  initParametrosDescripciones
} from './state/parametros-descripciones.actions';

import { Descripciones } from 'src/app/data/models/descripciones';
import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

@Component({
  selector: 'app-parametros-descripciones',
  templateUrl: './parametros-descripciones.component.html',
  styleUrls: ['./parametros-descripciones.component.scss']
})
export class ParametrosDescripcionesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosDescripciones());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosDescripciones());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosDescripciones({edit: new Descripciones()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Descripciones) {
    this.store.dispatch(editModalParametrosDescripciones({edit}));
  }

  onDelete(edit: Descripciones) {
    this.store.dispatch(deleteParametrosDescripciones({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosDescripciones({filtro}));
    this.paginatorService.initial();
  }
}
