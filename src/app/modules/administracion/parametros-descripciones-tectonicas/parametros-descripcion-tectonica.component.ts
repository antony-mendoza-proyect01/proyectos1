import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosDescripcionTectonica, deleteParametrosDescripcionTectonica,
  editModalParametrosDescripcionTectonica, filterParametrosDescripcionTectonica,
  getAllParametrosDescripcionTectonica,
  initParametrosDescripcionTectonica
} from './state/parametros-descripcion-tectonica.actions';
import {DescripcionTectonica} from "../../../data/models/descripcion-tectonica";


@Component({
  selector: 'app-descripcion-tectonicas',
  templateUrl: './parametros-descripcion-tectonica.component.html',
  styleUrls: ['./parametros-descripcion-tectonica.component.scss']
})
export class ParametrosDescripcionTectonicaComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosDescripcionTectonica());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosDescripcionTectonica());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosDescripcionTectonica({edit: new DescripcionTectonica()}));
    this.paginatorService.initial();
  }

  onEdit(edit: DescripcionTectonica) {
    this.store.dispatch(editModalParametrosDescripcionTectonica({edit}));
  }

  onDelete(edit: DescripcionTectonica) {
    this.store.dispatch(deleteParametrosDescripcionTectonica({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosDescripcionTectonica({filtro}));
    this.paginatorService.initial();
  }
}
