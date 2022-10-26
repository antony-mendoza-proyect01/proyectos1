import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  createModalParametrosFluidos,
  deleteParametrosFluidos,
  editModalParametrosFluidos, filterParametrosFluidos,
  getAllParametrosFluidos,
  initParametrosFluidos
} from './state/parametros-fluidos.actions';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Fluidos} from '../../../data/models/fluidos';
import {AppState} from '../../../app.state';


@Component({
  selector: 'app-fluidos',
  templateUrl: './parametros-fluidos.component.html',
  styleUrls: ['./parametros-fluidos.component.scss']
})
export class ParametrosFluidosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosFluidos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosFluidos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosFluidos({edit: new Fluidos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Fluidos) {
    this.store.dispatch(editModalParametrosFluidos({edit}));
  }

  onDelete(edit: Fluidos) {
    this.store.dispatch(deleteParametrosFluidos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosFluidos({filtro}));
    this.paginatorService.initial();
  }
}
