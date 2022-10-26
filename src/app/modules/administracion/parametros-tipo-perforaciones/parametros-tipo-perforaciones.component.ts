import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { TipoPerforaciones } from 'src/app/data/models/tipo-perforaciones';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

import {
  createModalParametrosTipoPerforaciones, deleteParametrosTipoPerforaciones,
  editModalParametrosTipoPerforaciones, filterParametrosTipoPerforaciones,
  getAllParametrosTipoPerforaciones,
  initParametrosTipoPerforaciones
} from './state/parametros-tipo-perforaciones.actions';

@Component({
  selector: 'app-tipo-perforaciones',
  templateUrl: './parametros-tipo-perforaciones.component.html',
  styleUrls: ['./parametros-tipo-perforaciones.component.scss']
})
export class ParametrosTipoPerforacionesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosTipoPerforaciones());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosTipoPerforaciones());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosTipoPerforaciones({edit: new TipoPerforaciones()}));
    this.paginatorService.initial();
  }

  onEdit(edit: TipoPerforaciones) {
    this.store.dispatch(editModalParametrosTipoPerforaciones({edit}));
  }

  onDelete(edit: TipoPerforaciones) {
    this.store.dispatch(deleteParametrosTipoPerforaciones({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosTipoPerforaciones({filtro}));
    this.paginatorService.initial();
  }
}
