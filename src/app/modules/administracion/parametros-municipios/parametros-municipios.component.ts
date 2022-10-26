import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Municipios} from '../../../data/models/municipios';
import {
  createModalParametrosMunicipios, deleteParametrosMunicipios,
  editModalParametrosMunicipios, filterParametrosMunicipios,
  getAllParametrosMunicipios,
  initParametrosMunicipios
} from './state/parametros-municipios.actions';

@Component({
  selector: 'app-municipios',
  templateUrl: './parametros-municipios.component.html',
  styleUrls: ['./parametros-municipios.component.scss']
})
export class ParametrosMunicipiosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosMunicipios());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosMunicipios());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosMunicipios({edit: new Municipios()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Municipios) {
    this.store.dispatch(editModalParametrosMunicipios({edit}));
  }

  onDelete(edit: Municipios) {
    this.store.dispatch(deleteParametrosMunicipios({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosMunicipios({filtro}));
    this.paginatorService.initial();
  }
}
