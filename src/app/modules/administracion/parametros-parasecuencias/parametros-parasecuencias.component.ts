import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {Parasecuencias} from '../../../data/models/parasecuencias';
import {
  createModalParametrosParasecuencias, deleteParametrosParasecuencias,filterParametrosParasecuencias,
  getAllParametrosParasecuencias,
  initParametrosParasecuencias
} from './state/parametros-parasecuencias.actions';

@Component({
  selector: 'app-parasecuencias',
  templateUrl: './parametros-parasecuencias.component.html',
  styleUrls: ['./parametros-parasecuencias.component.scss']
})
export class ParametrosParasecuenciasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosParasecuencias());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosParasecuencias());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosParasecuencias({edit: new Parasecuencias()}));
    this.paginatorService.initial();
  }

  onDelete(edit: Parasecuencias) {
    this.store.dispatch(deleteParametrosParasecuencias({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosParasecuencias({filtro}));
    this.paginatorService.initial();
  }
}
