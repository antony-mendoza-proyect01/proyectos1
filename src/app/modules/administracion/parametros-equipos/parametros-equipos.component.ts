import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  createModalParametrosEquipos,
  deleteParametrosEquipos,
  editModalParametrosEquipos, filterParametrosEquipos,
  getAllParametrosEquipos,
  initParametrosEquipos
} from './state/parametros-equipos.actions';
import { Equipos } from 'src/app/data/models/equipos';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {AppState} from '../../../app.state';

@Component({
  selector: 'app-equipos',
  templateUrl: './parametros-equipos.component.html',
  styleUrls: ['./parametros-equipos.component.scss']
})
export class ParametrosEquiposComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosEquipos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosEquipos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosEquipos({edit: new Equipos()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Equipos) {
    this.store.dispatch(editModalParametrosEquipos({edit}));
  }

  onDelete(edit: Equipos) {
    this.store.dispatch(deleteParametrosEquipos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosEquipos({filtro}));
    this.paginatorService.initial();
  }
}
