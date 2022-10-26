import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosTipopozos, deleteParametrosTipopozos,
  editModalParametrosTipopozos, filterParametrosTipopozos,
  getAllParametrosTipopozos,
  initParametrosTipopozos
} from './state/parametros-tipo-pozos.actions';
import {TipoPozos} from "../../../data/models/tipo-pozos";

@Component({
  selector: 'app-tipo-pozos',
  templateUrl: './parametros-tipo-pozos.component.html',
  styleUrls: ['./parametros-tipo-pozos.component.scss']
})
export class ParametrosTipoPozosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosTipopozos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosTipopozos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosTipopozos({edit: new TipoPozos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: TipoPozos) {
    this.store.dispatch(editModalParametrosTipopozos({edit}));
  }

  onDelete(edit: TipoPozos) {
    this.store.dispatch(deleteParametrosTipopozos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosTipopozos({filtro}));
    this.paginatorService.initial();
  }
}
