import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Laboratorios} from '../../../data/models/laboratorios';
import {
  createModalParametrosLaboratorios, deleteParametrosLaboratorios,
  editModalParametrosLaboratorios, filterParametrosLaboratorios,
  getAllParametrosLaboratorios,
  initParametrosLaboratorios
} from './state/parametros-laboratorios.actions';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './parametros-laboratorios.component.html',
  styleUrls: ['./parametros-laboratorios.component.scss']
})
export class ParametrosLaboratoriosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosLaboratorios());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosLaboratorios());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosLaboratorios({edit: new Laboratorios()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Laboratorios) {
    this.store.dispatch(editModalParametrosLaboratorios({edit}));
  }

  onDelete(edit: Laboratorios) {
    this.store.dispatch(deleteParametrosLaboratorios({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosLaboratorios({filtro}));
    this.paginatorService.initial();
  }
}
