import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  createModalParametrosEmpresas,
  deleteParametrosEmpresas,
  editModalParametrosEmpresas, filterParametrosEmpresas,
  getAllParametrosEmpresas,
  initParametrosEmpresas
} from './state/parametros-empresas.actions';
import { Empresas } from 'src/app/data/models/empresas';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {AppState} from '../../../app.state';

@Component({
  selector: 'app-empresas',
  templateUrl: './parametros-empresas.component.html',
  styleUrls: ['./parametros-empresas.component.scss']
})
export class ParametrosEmpresasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosEmpresas());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosEmpresas());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosEmpresas({edit: new Empresas()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Empresas) {
    this.store.dispatch(editModalParametrosEmpresas({edit}));
  }

  onDelete(edit: Empresas) {
    this.store.dispatch(deleteParametrosEmpresas({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosEmpresas({filtro}));
    this.paginatorService.initial();
  }
}
