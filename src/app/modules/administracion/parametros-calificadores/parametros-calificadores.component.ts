import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosCalificadores, deleteParametrosCalificadores,
  editModalParametrosCalificadores, filterParametrosCalificadores,
  getAllParametrosCalificadores,
  initParametrosCalificadores
} from './state/parametros-calificadores.actions';
import {Calificadores} from "../../../data/models/calificadores";

@Component({
  selector: 'app-parametro-calificadores',
  templateUrl: './parametros-calificadores.component.html',
  styleUrls: ['./parametros-calificadores.component.scss']
})
export class ParametrosCalificadoresComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosCalificadores());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosCalificadores());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosCalificadores({edit: new Calificadores()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Calificadores) {
    this.store.dispatch(editModalParametrosCalificadores({edit}));
  }

  onDelete(edit: Calificadores) {
    this.store.dispatch(deleteParametrosCalificadores({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosCalificadores({filtro}));
    this.paginatorService.initial();
  }
}
