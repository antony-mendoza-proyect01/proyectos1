import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Litofacies} from '../../../data/models/litofacies';
import {
  createModalParametrosLitofacies, deleteParametrosLitofacies,
  editModalParametrosLitofacies, filterParametrosLitofacies,
  getAllParametrosLitofacies,
  initParametrosLitofacies
} from './state/parametros-litofacies.actions';

@Component({
  selector: 'app-litofacies',
  templateUrl: './parametros-litofacies.component.html',
  styleUrls: ['./parametros-litofacies.component.scss']
})
export class ParametrosLitofaciesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosLitofacies());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosLitofacies());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosLitofacies({edit: new Litofacies()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Litofacies) {
    this.store.dispatch(editModalParametrosLitofacies({edit}));
  }

  onDelete(edit: Litofacies) {
    this.store.dispatch(deleteParametrosLitofacies({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosLitofacies({filtro}));
    this.paginatorService.initial();
  }
}
