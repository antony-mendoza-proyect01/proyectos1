import { Component, OnInit } from '@angular/core';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {
  getAllParametrosTipoPerforaciones
} from "../../administracion/parametros-tipo-perforaciones/state/parametros-tipo-perforaciones.actions";
import { getAllParametrosDistritos } from '../../administracion/parametros-distritos/state/parametros-distritos.actions';
import {
  getAllParametrosLaboratorios
} from "../../administracion/parametros-laboratorios/state/parametros-laboratorios.actions";
import { getAllParametrosCodigosProyectos } from '../../administracion/parametros-codigos-proyectos/state/parametros-codigos-proyectos.actions';
import { getAllParametrosProvincias } from '../../administracion/parametros-provincias/state/parametros-provincias.actions';
import {
  getAllByPozoGraficaDatosPozo,
  initGraficaDatosPozo, putGraficaDatosPozo,
} from './state/datos-pozo.actions';
import { ResultDatosPozo} from '../../../data/models/result-datos-pozo';
import {selectListDatosPozoDatosPozo, selectLoadingGraficaDatosPozo} from './state/datos-pozo.selectors';
import {DatosPozoForm} from './components/form/form.component';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-datos-pozo',
  templateUrl: './datos-pozo.component.html',
  styleUrls: ['./datos-pozo.component.scss']
})
export class DatosPozoComponent implements OnInit {
  pozo: string = '';
  datopozoInfo$: ResultDatosPozo = null;
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) { }

  async ngOnInit() {
    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(initGraficaDatosPozo());// init
    this.store.dispatch(getAllParametrosTipoPerforaciones());
    this.store.dispatch(getAllParametrosDistritos());
    this.store.dispatch(getAllParametrosProvincias());
    this.store.dispatch(getAllParametrosCodigosProyectos());
    this.store.dispatch(getAllParametrosLaboratorios());
    this.onLoadData();
    this.store.select(selectListDatosPozoDatosPozo).subscribe(x => {this.datopozoInfo$ = x;});
    this.loading$ = this.store.select(selectLoadingGraficaDatosPozo);

  }
  onLoadData() {// mandar a llamar la data
    this.store.dispatch(getAllByPozoGraficaDatosPozo({codPozo: this.pozo}));
  }

  onEdit(edit: DatosPozoForm) {
    this.store.dispatch(putGraficaDatosPozo({edit, codPozo: this.pozo}));
  }

}
