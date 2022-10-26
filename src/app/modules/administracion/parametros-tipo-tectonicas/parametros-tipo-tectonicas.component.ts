import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { TipoTectonicas } from 'src/app/data/models/tipo-tectonica';

import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {
  createModalParametrosTipoTectonicas, deleteParametrosTipoTectonicas,
  editModalParametrosTipoTectonicas, filterParametrosTipoTectonicas,
  getAllParametrosTipoTectonicas,
  initParametrosTipoTectonicas
} from './state/parametros-tipo-tectonicas.actions';

@Component({
  selector: 'app-parametros-TipoTectonicas',
  templateUrl: './parametros-tipo-tectonicas.component.html',
  styleUrls: ['./parametros-tipo-tectonicas.component.scss']
})
export class ParametrosTipoTectonicasComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosTipoTectonicas());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosTipoTectonicas());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosTipoTectonicas({edit: new TipoTectonicas()}));
    this.paginatorService.initial();
  }

  onEdit(edit: TipoTectonicas) {
    this.store.dispatch(editModalParametrosTipoTectonicas({edit}));
  }

  onDelete(edit: TipoTectonicas) {
    this.store.dispatch(deleteParametrosTipoTectonicas({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosTipoTectonicas({filtro}));
    this.paginatorService.initial();
  }
}
