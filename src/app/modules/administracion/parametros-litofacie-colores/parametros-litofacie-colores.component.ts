import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { LitofacieColores } from 'src/app/data/models/litofacie-colores';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosLitofacieColores, deleteParametrosLitofacieColores,
  editModalParametrosLitofacieColores, filterParametrosLitofacieColores,
  getAllParametrosLitofacieColores,
  initParametrosLitofacieColores
} from './state/parametros-litofacie-colores.actions';

@Component({
  selector: 'app-Litofacie-colores',
  templateUrl: './parametros-litofacie-colores.component.html',
  styleUrls: ['./parametros-litofacie-colores.component.scss']
})
export class ParametrosLitofacieColoresComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosLitofacieColores());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosLitofacieColores());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosLitofacieColores({edit: new LitofacieColores()}));
    this.paginatorService.initial();
  }

  onEdit(edit: LitofacieColores) {
    this.store.dispatch(editModalParametrosLitofacieColores({edit}));
  }

  onDelete(edit: LitofacieColores) {
    this.store.dispatch(deleteParametrosLitofacieColores({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosLitofacieColores({filtro}));
    this.paginatorService.initial();
  }
}
