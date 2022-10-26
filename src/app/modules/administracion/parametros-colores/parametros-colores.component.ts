import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Colores} from '../../../data/models/colores';
import {
  createModalParametrosColores, deleteParametrosColores,
  editModalParametrosColores, filterParametrosColores,
  getAllParametrosColores,
  initParametrosColores
} from './state/parametros-colores.actions';

@Component({
  selector: 'app-colores',
  templateUrl: './parametros-colores.component.html',
  styleUrls: ['./parametros-colores.component.scss']
})
export class ParametrosColoresComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosColores());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosColores());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosColores({edit: new Colores()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Colores) {
    this.store.dispatch(editModalParametrosColores({edit}));
  }

  onDelete(edit: Colores) {
    this.store.dispatch(deleteParametrosColores({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosColores({filtro}));
    this.paginatorService.initial();
  }
}
