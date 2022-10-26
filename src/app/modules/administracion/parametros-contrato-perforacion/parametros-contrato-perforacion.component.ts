import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosContratosPerforacion,
  deleteParametrosContratosPerforacion,
  editModalParametrosContratosPerforacion, filterParametrosContratosPerforacion,
  getAllParametrosContratosPerforacion,
  initParametrosContratosPerforacion
} from './state/parametros-contratos-perforacion.actions';
import {Contratos} from '../../../data/models/contratos';

@Component({
  selector: 'app-parametros-contrato-perforacion',
  templateUrl: './parametros-contrato-perforacion.component.html',
  styleUrls: ['./parametros-contrato-perforacion.component.scss']
})
export class ParametrosContratosPerforacionComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosContratosPerforacion());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosContratosPerforacion());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosContratosPerforacion({edit: new Contratos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Contratos) {
    this.store.dispatch(editModalParametrosContratosPerforacion({edit}));
  }

  onDelete(edit: Contratos) {
    this.store.dispatch(deleteParametrosContratosPerforacion({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosContratosPerforacion({filtro}));
    this.paginatorService.initial();
  }
}
