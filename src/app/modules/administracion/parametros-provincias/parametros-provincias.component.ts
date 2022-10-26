import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Provincias} from '../../../data/models/provincias';
import {
  createModalParametrosProvincias, deleteParametrosProvincias,
  editModalParametrosProvincias, filterParametrosProvincias,
  getAllParametrosProvincias,
  initParametrosProvincias
} from './state/parametros-provincias.actions';

@Component({
  selector: 'app-provincias',
  templateUrl: './parametros-provincias.component.html',
  styleUrls: ['./parametros-provincias.component.scss']
})
export class ParametrosProvinciasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosProvincias());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosProvincias());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosProvincias({edit: new Provincias()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Provincias) {
    this.store.dispatch(editModalParametrosProvincias({edit}));
  }

  onDelete(edit: Provincias) {
    this.store.dispatch(deleteParametrosProvincias({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosProvincias({filtro}));
    this.paginatorService.initial();
  }
}
