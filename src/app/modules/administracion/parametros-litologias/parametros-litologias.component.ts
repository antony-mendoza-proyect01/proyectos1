import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Litologias} from '../../../data/models/litologias';
import {
  createModalParametrosLitologias, deleteParametrosLitologias,
  editModalParametrosLitologias, filterParametrosLitologias,
  getAllParametrosLitologias,
  initParametrosLitologias
} from './state/parametros-litologias.actions';

@Component({
  selector: 'app-litologias',
  templateUrl: './parametros-litologias.component.html',
  styleUrls: ['./parametros-litologias.component.scss']
})
export class ParametrosLitologiasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosLitologias());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosLitologias());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosLitologias({edit: new Litologias()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Litologias) {
    this.store.dispatch(editModalParametrosLitologias({edit}));
  }

  onDelete(edit: Litologias) {
    this.store.dispatch(deleteParametrosLitologias({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosLitologias({filtro}));
    this.paginatorService.initial();
  }
}
