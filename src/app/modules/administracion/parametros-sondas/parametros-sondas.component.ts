import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosSondas, deleteParametrosSondas,
  editModalParametrosSondas, filterParametrosSondas,
  getAllParametrosSondas,
  initParametrosSondas
} from './state/parametros-sondas.actions';
import {Sondas} from "../../../data/models/sondas";

@Component({
  selector: 'app-sondas',
  templateUrl: './parametros-sondas.component.html',
  styleUrls: ['./parametros-sondas.component.scss']
})
export class ParametrosSondasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosSondas());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosSondas());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosSondas({edit: new Sondas()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Sondas) {
    this.store.dispatch(editModalParametrosSondas({edit}));
  }

  onDelete(edit: Sondas) {
    this.store.dispatch(deleteParametrosSondas({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosSondas({filtro}));
    this.paginatorService.initial();
  }
}
