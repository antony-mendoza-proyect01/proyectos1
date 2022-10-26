import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  createModalParametrosCaudales,
  deleteParametrosCaudales,
  editModalParametrosCaudales, filterParametrosCaudales,
  getAllParametrosCaudales,
  initParametrosCaudales
} from "./state/parametros-caudales.actions";
import {PaginatorService} from '../../../shared/services/paginator.service';
import {AppState} from '../../../app.state';
import {Caudales} from '../../../data/models/caudales';
@Component({
  selector: 'app-parametros-caudales',
  templateUrl: './parametros-caudales.component.html',
  styleUrls: ['./parametros-caudales.component.scss'],
})
export class ParametrosCaudalesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosCaudales());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosCaudales());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosCaudales({edit: new Caudales()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Caudales) {
    this.store.dispatch(editModalParametrosCaudales({edit}));
  }

  onDelete(edit: Caudales) {
    this.store.dispatch(deleteParametrosCaudales({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosCaudales({filtro}));
    this.paginatorService.initial();
  }
}


