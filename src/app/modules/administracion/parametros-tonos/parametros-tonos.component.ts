import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Tonos } from 'src/app/data/models/tono';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosTonos, deleteParametrosTonos,
  editModalParametrosTonos, filterParametrosTonos,
  getAllParametrosTonos,
  initParametrosTonos
} from './state/parametros-tonos.actions';

@Component({
  selector: 'app-tonos',
  templateUrl: './parametros-tonos.component.html',
  styleUrls: ['./parametros-tonos.component.scss']
})
export class ParametrosTonosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosTonos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosTonos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosTonos({edit: new Tonos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Tonos) {
    this.store.dispatch(editModalParametrosTonos({edit}));
  }

  onDelete(edit: Tonos) {
    this.store.dispatch(deleteParametrosTonos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosTonos({filtro}));
    this.paginatorService.initial();
  }
}
