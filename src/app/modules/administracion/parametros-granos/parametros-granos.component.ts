import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Granos} from '../../../data/models/granos';
import {
  createModalParametrosGranos, deleteParametrosGranos,
  editModalParametrosGranos, filterParametrosGranos,
  getAllParametrosGranos,
  initParametrosGranos
} from './state/parametros-granos.actions';

@Component({
  selector: 'app-granos',
  templateUrl: './parametros-granos.component.html',
  styleUrls: ['./parametros-granos.component.scss']
})
export class ParametrosGranosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosGranos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosGranos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosGranos({edit: new Granos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Granos) {
    this.store.dispatch(editModalParametrosGranos({edit}));
  }

  onDelete(edit: Granos) {
    this.store.dispatch(deleteParametrosGranos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosGranos({filtro}));
    this.paginatorService.initial();
  }
}
