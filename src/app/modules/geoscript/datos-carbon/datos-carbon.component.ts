import {
  Component,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  getAllByPozoDatosCarbon,
  getAllByPozoValidacionTipoPozoDatosCarbon,
  initDatosCarbon
} from './state/datos-carbon.actions';
import {AppState} from '../../../app.state';
import {
  URL_GEOSCRIPT_DATOS_CARBON, URL_GEOSCRIPT_DATOS_CARBON__COMPONENTS__SUPERFICIE_POZO,
} from '../../../core/const/navigation.const';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {selectProfundidadRegistroDatosCarbon} from './state/datos-carbon.selectors';
import {Observable} from 'rxjs';
import {
  deleteSuperficiePozo,
  editModalSuperficiePozo,
} from "./state/state-superficie-pozo/superficie-pozo.actions";
import {SuperficiePozo} from "../../../data/models/superficie-pozo";
import {TIPOPOZO_DESCRIPCION_NUCLEOS} from '../../../core/const/verificacion.const';


@Component({
  selector: 'app-datos.carbon',
  templateUrl: './datos-carbon.component.html',
  styleUrls: ['./datos-carbon.component.scss']
})
export class DatosCarbonComponent implements OnInit {
  pozo: string = '';
  profundidadRegistro$: Observable<number> = new Observable();

  urlDatoscarbon = URL_GEOSCRIPT_DATOS_CARBON;
  urlSuperficiePozo = URL_GEOSCRIPT_DATOS_CARBON__COMPONENTS__SUPERFICIE_POZO;

  TIPOPOZO_DESCRIPCION_NUCLEOS = TIPOPOZO_DESCRIPCION_NUCLEOS;
  TIPOPOZO = '';

  constructor(private store: Store<AppState>) { }

  async ngOnInit() {
    this.TIPOPOZO = localStorage.getItem(LOCAL_STORAGE.tipoPozo);
    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(initDatosCarbon());// init
    this.onLoadData();
    this.profundidadRegistro$ = this.store.select(selectProfundidadRegistroDatosCarbon);
  }

  onLoadData() {// mandar a llamar la data
    this.store.dispatch(getAllByPozoValidacionTipoPozoDatosCarbon({codPozo: this.pozo}));
  }
  onEdit(edit: SuperficiePozo) {
    this.store.dispatch(editModalSuperficiePozo({edit, codPozo: this.pozo}));
  }

  onDelete(edit: SuperficiePozo) {
    this.store.dispatch(deleteSuperficiePozo({edit}));
  }


}
