import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Espaciamiento} from '../../../data/models/espaciamiento';
import {
  createModalParametrosEspaciamiento, deleteParametrosEspaciamiento,
  editModalParametrosEspaciamiento, filterParametrosEspaciamiento,
  getAllParametrosEspaciamiento,
  initParametrosEspaciamiento
} from './state/parametros-espaciamiento.actions';

@Component({
  selector: 'app-espaciamiento',
  templateUrl: './parametros-espaciamiento.component.html',
  styleUrls: ['./parametros-espaciamiento.component.scss']
})
export class ParametrosEspaciamientoComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosEspaciamiento());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosEspaciamiento());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosEspaciamiento({edit: new Espaciamiento()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Espaciamiento) {
    this.store.dispatch(editModalParametrosEspaciamiento({edit}));
  }

  onDelete(edit: Espaciamiento) {
    this.store.dispatch(deleteParametrosEspaciamiento({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosEspaciamiento({filtro}));
    this.paginatorService.initial();
  }
}
