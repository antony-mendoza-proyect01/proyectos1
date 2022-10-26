import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosOrigenDatos, deleteParametrosOrigenDatos,
  editModalParametrosOrigenDatos, filterParametrosOrigenDatos,
  getAllParametrosOrigenDatos,
  initParametrosOrigenDatos
} from './state/parametros-origen-datos.actions';
import {OrigenDatos} from "../../../data/models/origen-datos";

@Component({
  selector: 'app-origen-datos',
  templateUrl: './parametros-origen-datos.component.html',
  styleUrls: ['./parametros-origen-datos.component.scss']
})
export class ParametrosOrigenDatosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosOrigenDatos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosOrigenDatos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosOrigenDatos({edit: new OrigenDatos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: OrigenDatos) {
    this.store.dispatch(editModalParametrosOrigenDatos({edit}));
  }

  onDelete(edit: OrigenDatos) {
    this.store.dispatch(deleteParametrosOrigenDatos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosOrigenDatos({filtro}));
    this.paginatorService.initial();
  }
}
