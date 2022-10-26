import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Areas} from '../../../data/models/areas';
import {
  createModalParametrosAreas, deleteParametrosAreas,
  editModalParametrosAreas, filterParametrosAreas,
  getAllParametrosAreas,
  initParametrosAreas
} from './state/parametros-areas.actions';

@Component({
  selector: 'app-parametros-areas',
  templateUrl: './parametros-areas.component.html',
  styleUrls: ['./parametros-areas.component.scss']
})
export class ParametrosAreasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosAreas());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosAreas());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosAreas({edit: new Areas()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Areas) {
    this.store.dispatch(editModalParametrosAreas({edit}));
  }

  onDelete(edit: Areas) {
    this.store.dispatch(deleteParametrosAreas({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosAreas({filtro}));
    this.paginatorService.initial();
  }
}
