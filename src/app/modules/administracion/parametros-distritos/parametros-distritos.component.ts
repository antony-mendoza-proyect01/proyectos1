import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Distritos} from '../../../data/models/distritos';
import {
  createModalParametrosDistritos, deleteParametrosDistritos,
  editModalParametrosDistritos, filterParametrosDistritos,
  getAllParametrosDistritos,
  initParametrosDistritos
} from './state/parametros-distritos.actions';

@Component({
  selector: 'app-distritos',
  templateUrl: './parametros-distritos.component.html',
  styleUrls: ['./parametros-distritos.component.scss']
})
export class ParametrosDistritosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosDistritos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosDistritos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosDistritos({edit: new Distritos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Distritos) {
    this.store.dispatch(editModalParametrosDistritos({edit}));
  }

  onDelete(edit: Distritos) {
    this.store.dispatch(deleteParametrosDistritos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosDistritos({filtro}));
    this.paginatorService.initial();
  }
}
