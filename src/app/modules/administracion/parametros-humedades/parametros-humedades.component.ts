import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Humedades} from '../../../data/models/humedades';
import {
  createModalParametrosHumedades, deleteParametrosHumedades,
  editModalParametrosHumedades, filterParametrosHumedades,
  getAllParametrosHumedades,
  initParametrosHumedades
} from './state/parametros-humedades.actions';

@Component({
  selector: 'app-humedades',
  templateUrl: './parametros-humedades.component.html',
  styleUrls: ['./parametros-humedades.component.scss']
})
export class ParametrosHumedadesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosHumedades());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosHumedades());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosHumedades({edit: new Humedades()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Humedades) {
    this.store.dispatch(editModalParametrosHumedades({edit}));
  }

  onDelete(edit: Humedades) {
    this.store.dispatch(deleteParametrosHumedades({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosHumedades({filtro}));
    this.paginatorService.initial();
  }
}
