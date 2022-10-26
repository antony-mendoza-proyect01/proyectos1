import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { PersonasRoles } from 'src/app/data/models/personas-roles';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {
  createModalParametrosSupervisores, deleteParametrosSupervisores,
  editModalParametrosSupervisores, filterParametrosSupervisores,
  getAllParametrosSupervisores,
  initParametrosSupervisores
} from './state/parametros-supervisores.actions';

@Component({
  selector: 'app-supervisores',
  templateUrl: './parametros-supervisores.component.html',
  styleUrls: ['./parametros-supervisores.component.scss']
})
export class ParametrosSupervisoresComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosSupervisores());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosSupervisores());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosSupervisores({edit: new PersonasRoles()}));
    this.paginatorService.initial();
  }

  onEdit(edit: PersonasRoles) {
    this.store.dispatch(editModalParametrosSupervisores({edit}));
  }

  onDelete(edit: PersonasRoles) {
    this.store.dispatch(deleteParametrosSupervisores({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosSupervisores({filtro}));
    this.paginatorService.initial();
  }
}
