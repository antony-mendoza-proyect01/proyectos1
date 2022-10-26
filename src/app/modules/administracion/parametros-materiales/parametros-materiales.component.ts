import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  createModalParametrosMateriales,
  deleteParametrosMateriales,
  editModalParametrosMateriales, filterParametrosMateriales,
  getAllParametrosMateriales,
  initParametrosMateriales
} from './state/parametros-materiales.actions';
import { Materiales } from 'src/app/data/models/materiales';
import {PaginatorService} from '../../../shared/services/paginator.service';
import {AppState} from '../../../app.state';

@Component({
  selector: 'app-materiales',
  templateUrl: './parametros-materiales.component.html',
  styleUrls: ['./parametros-materiales.component.scss']
})
export class ParametrosMaterialesComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosMateriales());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosMateriales());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosMateriales({edit: new Materiales()}));
    this.paginatorService.initial();
  }

  onEdit(edit: Materiales) {
    this.store.dispatch(editModalParametrosMateriales({edit}));
  }

  onDelete(edit: Materiales) {
    this.store.dispatch(deleteParametrosMateriales({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosMateriales({filtro}));
    this.paginatorService.initial();
  }
}
