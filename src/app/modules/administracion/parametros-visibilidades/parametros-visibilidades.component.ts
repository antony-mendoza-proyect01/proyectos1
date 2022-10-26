import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Visibilidades} from '../../../data/models/visibilidades';
import {
  createModalParametrosVisibilidades, deleteParametrosVisibilidades,
  editModalParametrosVisibilidades, filterParametrosVisibilidades,
  getAllParametrosVisibilidades,
  initParametrosVisibilidades
} from './state/parametros-visibilidades.actions';

@Component({
  selector: 'app-visibilidades',
  templateUrl: './parametros-visibilidades.component.html',
  styleUrls: ['./parametros-visibilidades.component.scss']
})
export class ParametrosVisibilidadesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosVisibilidades());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosVisibilidades());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosVisibilidades({edit: new Visibilidades()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Visibilidades) {
    this.store.dispatch(editModalParametrosVisibilidades({edit}));
  }

  onDelete(edit: Visibilidades) {
    this.store.dispatch(deleteParametrosVisibilidades({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosVisibilidades({filtro}));
    this.paginatorService.initial();
  }
}
