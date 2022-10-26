import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  createModalParametrosCodigosProyectos,
  deleteParametrosCodigosProyectos,
 filterParametrosCodigosProyectos,
  getAllParametrosCodigosProyectos,
  initParametrosCodigosProyectos
} from "./state/parametros-codigos-proyectos.actions";
import {PaginatorService} from '../../../shared/services/paginator.service';
import {AppState} from '../../../app.state';
import {CodigosProyectos} from '../../../data/models/codigos-proyectos';
@Component({
  selector: 'app-parametros-codigos-proyectos',
  templateUrl: './parametros-codigos-proyectos.component.html',
  styleUrls: ['./parametros-codigos-proyectos.component.scss'],
})
export class ParametrosCodigosProyectosComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }

  async ngOnInit() {
    this.store.dispatch(initParametrosCodigosProyectos());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllParametrosCodigosProyectos());// mandar a llamar la data
  }

  onCreate() {
    this.store.dispatch(createModalParametrosCodigosProyectos({edit: new CodigosProyectos()}));
    this.paginatorService.initial();
  }

  onDelete(edit: CodigosProyectos) {
    this.store.dispatch(deleteParametrosCodigosProyectos({edit}));
  }

  onFilter(filtro: string) {
    this.store.dispatch(filterParametrosCodigosProyectos({filtro}));
    this.paginatorService.initial();
  }
}


