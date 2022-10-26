import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {
  createModalParametrosNombreSuperficies, deleteParametrosNombreSuperficies,
  editModalParametrosNombreSuperficies, filterParametrosNombreSuperficies,
  getAllParametrosNombreSuperficies,
  initParametrosNombreSuperficies
} from './state/parametros-nombre-superficies.actions';
import {NombreSuperficies} from "../../../data/models/nombre-superficies";

@Component({
  selector: 'app-nombre-superficies',
  templateUrl: './parametros-nombre-superficies.component.html',
  styleUrls: ['./parametros-nombre-superficies.component.scss']
})
export class ParametrosNombreSuperficiesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosNombreSuperficies());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosNombreSuperficies());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosNombreSuperficies({edit: new NombreSuperficies()}));
    this.paginatorService.initial();
  }

  onEdit(edit: NombreSuperficies) {
    this.store.dispatch(editModalParametrosNombreSuperficies({edit}));
  }

  onDelete(edit: NombreSuperficies) {
    this.store.dispatch(deleteParametrosNombreSuperficies({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosNombreSuperficies({filtro}));
    this.paginatorService.initial();
  }
}
