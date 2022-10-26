import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {PersonasRoles} from '../../../data/models/personas-roles';
import {
  createModalParametrosPersonasRoles, deleteParametrosPersonasRoles,
  editModalParametrosPersonasRoles, filterParametrosPersonasRoles,
  getAllParametrosPersonasRoles,
  initParametrosPersonasRoles
} from './state/parametros-geologos.actions';

@Component({
  selector: 'app-personas-roles',
  templateUrl: './parametros-geologos.component.html',
  styleUrls: ['./parametros-geologos.component.scss']
})
export class ParametrosGeologosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosPersonasRoles());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosPersonasRoles());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosPersonasRoles({edit: new PersonasRoles()}));
    this.paginatorService.initial();
  }

  onEdit(edit: PersonasRoles) {
    this.store.dispatch(editModalParametrosPersonasRoles({edit}));
  }

  onDelete(edit: PersonasRoles) {
    this.store.dispatch(deleteParametrosPersonasRoles({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosPersonasRoles({filtro}));
    this.paginatorService.initial();
  }
}
