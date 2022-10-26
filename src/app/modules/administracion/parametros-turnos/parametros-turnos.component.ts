import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Turnos} from '../../../data/models/turnos';
import {
  createModalParametrosTurnos, deleteParametrosTurnos,
  editModalParametrosTurnos, filterParametrosTurnos,
  getAllParametrosTurnos,
  initParametrosTurnos
} from './state/parametros-turnos.actions';

@Component({
  selector: 'app-turnos',
  templateUrl: './parametros-turnos.component.html',
  styleUrls: ['./parametros-turnos.component.scss']
})
export class ParametrosTurnosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosTurnos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosTurnos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosTurnos({edit: new Turnos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Turnos) {
    this.store.dispatch(editModalParametrosTurnos({edit}));
  }

  onDelete(edit: Turnos) {
    this.store.dispatch(deleteParametrosTurnos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosTurnos({filtro}));
    this.paginatorService.initial();
  }
}
