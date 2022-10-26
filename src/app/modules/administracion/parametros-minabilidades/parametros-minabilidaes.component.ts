import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Minabilidades} from '../../../data/models/minabilidades';
import {
  createModalParametrosMinabilidades, deleteParametrosMinabilidades,
  editModalParametrosMinabilidades, filterParametrosMinabilidades,
  getAllParametrosMinabilidades,
  initParametrosMinabilidades
} from './state/parametros-minabilidaes.actions';

@Component({
  selector: 'app-minabilidades',
  templateUrl: './parametros-minabilidaes.component.html',
  styleUrls: ['./parametros-minabilidaes.component.scss']
})
export class ParametrosMinabilidaesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosMinabilidades());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosMinabilidades());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosMinabilidades({edit: new Minabilidades()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Minabilidades) {
    this.store.dispatch(editModalParametrosMinabilidades({edit}));
  }

  onDelete(edit: Minabilidades) {
    this.store.dispatch(deleteParametrosMinabilidades({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosMinabilidades({filtro}));
    this.paginatorService.initial();
  }
}
