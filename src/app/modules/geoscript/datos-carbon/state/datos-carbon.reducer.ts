import {DatosCarbonState} from './datos-carbon.state';
import {createReducer, on} from '@ngrx/store';
import {ReglaLength} from '../../../../data/models/descripcion-nucleos';
import {
  datosCarbonEditDatosCarbon,
  getAllByPozoDatosCarbon, getAllByPozoDatosCarbonFailure,
  getAllByPozoDatosCarbonSuccess,
  initDatosCarbon, pasarDatosCarbon
} from './datos-carbon.actions';
import {ID_CARBON, ID_LONGUITUD, scrollIntoView} from '../../../../shared/services/emit.service';
import {
  deleteSuperficiePozoSuccess,
  postModalSuperficiePozoSuccess, putModalSuperficiePozoSuccess
} from './state-superficie-pozo/superficie-pozo.actions';
import {Superficies} from '../../../../data/models/superficie';
import {SuperficiePozo} from '../../../../data/models/superficie-pozo';

const inclusiveRange = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start+1)/step)).keys()), x => start+ x*step);
}
// estado inicial de las variables
export const initialState: DatosCarbonState = {
  loading: true,
  error: '',
  grafica: null,
  datosCarbonEdit: null,
  reglaLength: [],
  nucleos: [],
  ripios: [],
  intervalos: [],
  superficies: [],
  profundidadRegistro: 0,
};
// inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const datosCarbonReducer = createReducer(
  initialState,
  // get all
  on(initDatosCarbon, (state: DatosCarbonState) => {
    return {...state, loading: false, error: '', grafica: null,  datosCarbonEdit: null, reglaLength: []}
  }),
  on(getAllByPozoDatosCarbon, (state: DatosCarbonState) => {
    return {...state, loading: true, error: '', grafica:  null}
  }),
  on(getAllByPozoDatosCarbonSuccess, (state: DatosCarbonState, {grafica}) => {
    // logica de la creacion de la regla del pozo
    // se traen las ultimas posiciones para tener el final del pozo, con los dos intervalos que se pitan

    // inclusiveRange: partidura del finalDelPozo en 5
    const tamanoRegla = inclusiveRange(0, grafica.profundidadRegistro,ID_LONGUITUD);
    const reglaLength: ReglaLength[] = [];

    // objeto nuevo, para agregar las posiciones, para poderlo mover
    let iteracionNucleos = 0;
    let nucleos = [];
    if(grafica.nucleos) {
      grafica.nucleos.forEach( element => {
        iteracionNucleos += 1;
        let copia = {...element, posicion: iteracionNucleos};
        nucleos.push(copia);
      });
    }

    let iteracionRipios = 0;
    let ripios = [];
    if(grafica.ripios) {
      grafica.ripios.forEach( element => {
        iteracionRipios += 1;
        let copia = {...element, posicion: iteracionRipios};
        ripios.push(copia);
      });
    }

    let iteracionIntervalos = 0;
    let intervalos = [];
    grafica.intervalos.forEach( element => {
      iteracionIntervalos += 1;
      let copia = {...element, posicion: iteracionIntervalos};
      intervalos.push(copia);
    });

    // codigo para la creacion de la regla
    reglaLength.push({altura: 0 })
    tamanoRegla.forEach(altura => {
      reglaLength.push({altura: altura + ID_LONGUITUD });
    });

    // seleccion del nucleos selected
    let datosCarbonEdit = null;
    if(grafica.intervalos.length) {
      datosCarbonEdit = intervalos[0];
    }


    return {...state, loading: false, nucleos, intervalos, ripios,
      superficies: grafica.superficies, reglaLength, datosCarbonEdit,
      profundidadRegistro: grafica.profundidadRegistro}
  }),
  on(getAllByPozoDatosCarbonFailure, (state: DatosCarbonState, { error}) => {
    return {...state, loading: false, error}
  }),
  on(pasarDatosCarbon, (state: DatosCarbonState, {posicion}) => {
    let datosCarbonEdit = state.datosCarbonEdit;
    const intervalosPosicion = state.intervalos.find(e => e.posicion === posicion);

    if(intervalosPosicion){
      datosCarbonEdit = intervalosPosicion;
    }

    scrollIntoView(ID_CARBON + datosCarbonEdit.nombre);

    return {...state, datosCarbonEdit}
  }),
  on(datosCarbonEditDatosCarbon, (state: DatosCarbonState, {datosCarbonEdit}) => {
    return {...state, datosCarbonEdit}
  }),
  on(postModalSuperficiePozoSuccess, (state: DatosCarbonState, {edit}) => {
    let superficies = [...state.superficies];
    superficies.push(
      new Superficies(edit.superficiePozo.nombreSuperficie, edit.superficiePozo.profundidad,
        edit.superficiePozoRgb.r, edit.superficiePozoRgb.g, edit.superficiePozoRgb.b, edit.superficiePozo.codSupPozo));

    return {...state, superficies}
  }),
  on(putModalSuperficiePozoSuccess, (state, { edit}) => {
    const superficiePozos = [...state.superficies].map((e) => {
      if (e.codSupPozo === edit.codSupPozo) {
        return edit;
      }
      return e;
    });

    return {...state, superficiePozos,  edit: new SuperficiePozo()};
  }),
  on(deleteSuperficiePozoSuccess, (state: DatosCarbonState, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let superficiePozos = state.superficies
        .filter((item: Superficies) => item.codSupPozo !== edit.codSupPozo);
      return {...state, superficiePozos, edit: new SuperficiePozo()};
    }
    return {...state, edit: new SuperficiePozo()};
  }),


);



