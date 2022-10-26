import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Durezas} from '../../../data/models/durezas';
import {
  createModalParametrosDurezas, deleteParametrosDurezas,
  editModalParametrosDurezas, filterParametrosDurezas,
  getAllParametrosDurezas,
  initParametrosDurezas
} from './state/parametros-durezas.actions';

@Component({
  selector: 'app-durezas',
  templateUrl: './parametros-durezas.component.html',
  styleUrls: ['./parametros-durezas.component.scss']
})
export class ParametrosDurezasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosDurezas());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosDurezas());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosDurezas({edit: new Durezas()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Durezas) {
    this.store.dispatch(editModalParametrosDurezas({edit}));
  }

  onDelete(edit: Durezas) {
    this.store.dispatch(deleteParametrosDurezas({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosDurezas({filtro}));
    this.paginatorService.initial();
  }
}
