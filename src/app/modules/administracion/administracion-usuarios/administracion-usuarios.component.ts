import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  createModalAdministracionUsuarios,
  deleteAdministracionUsuarios,
  editModalAdministracionUsuarios, filterAdministracionUsuarios,
  getAllAdministracionUsuarios,
  initAdministracionUsuarios
} from './state/administracion-usuarios.actions';
import {User} from '../../../data/models/user';
import {AppState} from '../../../app.state';
import {PaginatorService} from '../../../shared/services/paginator.service';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.scss']
})
export class AdministracionUsuariosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initAdministracionUsuarios());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllAdministracionUsuarios());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalAdministracionUsuarios({edit: new User()}));
    this.paginatorService.initial();
  }

  onEdit(edit: User) {
    this.store.dispatch(editModalAdministracionUsuarios({edit}));
  }

  onDelete(edit: User) {
    this.store.dispatch(deleteAdministracionUsuarios({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterAdministracionUsuarios({filtro}));
    this.paginatorService.initial();
  }
}
