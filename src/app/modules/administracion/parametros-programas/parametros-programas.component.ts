import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  createModalParametrosProgramas,
  deleteParametrosProgramas,
  editModalParametrosProgramas, filterParametrosProgramas,
  getAllParametrosProgramas,
  initParametrosProgramas
} from "./state/parametros-programas.actions";
import {PaginatorService} from '../../../shared/services/paginator.service';
import {AppState} from '../../../app.state';
import { Programas } from 'src/app/data/models/programas';

@Component({
  selector: 'app-parametros-programas',
  templateUrl: './parametros-programas.component.html',
  styleUrls: ['./parametros-programas.component.scss'],
})
export class ParametrosProgramasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosProgramas());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosProgramas());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosProgramas({edit: new Programas()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Programas) {
    this.store.dispatch(editModalParametrosProgramas({edit}));
  }

  onDelete(edit: Programas) {
    this.store.dispatch(deleteParametrosProgramas({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosProgramas({filtro}));
    this.paginatorService.initial();
  }
}


