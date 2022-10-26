import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosMeteorizaciones, deleteParametrosMeteorizaciones,
  editModalParametrosMeteorizaciones, filterParametrosMeteorizaciones,
  getAllParametrosMeteorizaciones,
  initParametrosMeteorizaciones
} from './state/parametros-meteorizaciones.actions';
import {Meteorizaciones} from "../../../data/models/meterorizaciones";

@Component({
  selector: 'app-meteorizaciones',
  templateUrl: './parametros-meteorizaciones.component.html',
  styleUrls: ['./parametros-meteorizaciones.component.scss']
})
export class ParametrosMeteorizacionesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosMeteorizaciones());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosMeteorizaciones());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosMeteorizaciones({edit: new Meteorizaciones()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Meteorizaciones) {
    this.store.dispatch(editModalParametrosMeteorizaciones({edit}));
  }

  onDelete(edit: Meteorizaciones) {
    this.store.dispatch(deleteParametrosMeteorizaciones({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosMeteorizaciones({filtro}));
    this.paginatorService.initial();
  }
}
