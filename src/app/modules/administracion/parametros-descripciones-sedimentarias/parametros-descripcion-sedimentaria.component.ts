import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { DescripcionSedimentaria } from 'src/app/data/models/descripcion-sedimentaria';
import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {
  createModalParametrosDescripcionSedimentaria, deleteParametrosDescripcionSedimentaria,
  editModalParametrosDescripcionSedimentaria, filterParametrosDescripcionSedimentaria,
  getAllParametrosDescripcionSedimentaria,
  initParametrosDescripcionSedimentaria
} from './state/parametros-descripcion-sedimentaria.actions';

@Component({
  selector: 'app-descripcion-sedimentaria',
  templateUrl: './parametros-descripcion-sedimentaria.component.html',
  styleUrls: ['./parametros-descripcion-sedimentaria.component.scss']
})
export class ParametrosDescripcionSedimentariaComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosDescripcionSedimentaria());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosDescripcionSedimentaria());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosDescripcionSedimentaria({edit: new DescripcionSedimentaria()}));
    this.paginatorService.initial();
  }

  onEdit(edit: DescripcionSedimentaria) {
    this.store.dispatch(editModalParametrosDescripcionSedimentaria({edit}));
  }

  onDelete(edit: DescripcionSedimentaria) {
    this.store.dispatch(deleteParametrosDescripcionSedimentaria({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosDescripcionSedimentaria({filtro}));
    this.paginatorService.initial();
  }
}
