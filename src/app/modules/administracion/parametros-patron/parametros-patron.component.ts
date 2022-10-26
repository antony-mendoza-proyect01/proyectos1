import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Patron} from '../../../data/models/patron';
import {
  createModalParametrosPatron, deleteParametrosPatron,
  editModalParametrosPatron, filterParametrosPatron,
  getAllParametrosPatron,
  initParametrosPatron
} from './state/parametros-patron.actions';

@Component({
  selector: 'app-patron',
  templateUrl: './parametros-patron.component.html',
  styleUrls: ['./parametros-patron.component.scss']
})
export class ParametrosPatronComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosPatron());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosPatron());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosPatron({edit: new Patron()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Patron) {
    this.store.dispatch(editModalParametrosPatron({edit}));
  }

  onDelete(edit: Patron) {
    this.store.dispatch(deleteParametrosPatron({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosPatron({filtro}));
    this.paginatorService.initial();
  }
}
