import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {
  createModalParametrosContratosRegistro, deleteParametrosContratosRegistro,
  editModalParametrosContratosRegistro, filterParametrosContratosRegistro,
  getAllParametrosContratosRegistro,
  initParametrosContratosRegistro,
} from './state/parametros-contratos-registro.actions';
import {ContratosRegistro} from '../../../data/models/contratos-registro';

@Component({
  selector: 'app-contrato-registro',
  templateUrl: './parametros-contrato-registro.component.html',
  styleUrls: ['./parametros-contrato-registro.component.scss']
})
export class ParametrosContratosRegistroComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosContratosRegistro());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosContratosRegistro());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosContratosRegistro({edit: new ContratosRegistro()}));
    this.paginatorService.initial();
  }

  onEdit(edit: ContratosRegistro) {
    this.store.dispatch(editModalParametrosContratosRegistro({edit}));
  }

  onDelete(edit: ContratosRegistro) {
    this.store.dispatch(deleteParametrosContratosRegistro({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosContratosRegistro({filtro}));
    this.paginatorService.initial();
  }
}
