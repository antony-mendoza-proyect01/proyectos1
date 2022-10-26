import {DescripcionRipiosState} from './descripcion-ripios.state';
import {createReducer, on} from '@ngrx/store';

import {ID_LONGUITUD, ID_RIPIOS, scrollIntoView} from '../../../../shared/services/emit.service';
import {
  descripcionRipiosEditDescripcionRipios,
  getAllByPozoDescripcionRipios, getAllByPozoDescripcionRipiosFailure,
  getAllByPozoDescripcionRipiosSuccess,
  initDescripcionRipios, pasarDescripcionRipios
} from './descripcion-ripios.actions';
import {ReglaLength} from '../../../../data/models/descripcion-nucleos';


const inclusiveRange = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start+1)/step)).keys()), x => start+ x*step);
}

// estado inicial de las variables
export const initialState: DescripcionRipiosState = {
  loading: true,
  error: '',
  grafica: null,
  descripcionRipiosEdit: null,
  reglaLength: [],
  superficies: [],
  ripios: [],
  profundidadRegistro: 0,
};
// inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const descripcionRipiosReducer = createReducer(
  initialState,
  // get all
  on(initDescripcionRipios, (state: DescripcionRipiosState) => {
    return {...state, loading: false, error: '', grafica: null,  descripcionRipiosEdit: null, reglaLength: []}
  }),
  on(getAllByPozoDescripcionRipios, (state: DescripcionRipiosState) => {
    return {...state, loading: true, error: '', grafica:  null}
  }),
  on(getAllByPozoDescripcionRipiosSuccess, (state: DescripcionRipiosState, {grafica}) => {
    // logica de la creacion de la regla del pozo
    // se traen las ultimas posiciones para tener el final del pozo, con los dos intervalos que se pitan


    // inclusiveRange: partidura del finalDelPozo en 5
    const tamanoRegla = inclusiveRange(0, grafica.profundidadRegistro, ID_LONGUITUD);
    const reglaLength: ReglaLength[] = [];

    // objeto nuevo, para agregar las posiciones, para poderlo mover
    let iteracionRipios = 0;
    let ripios = [];
    grafica.ripios.forEach( element => {
      iteracionRipios += 1;
      let copia = {...element, posicion: iteracionRipios};
      ripios.push(copia);
    });

    // codigo para la creacion de la regla
    let i = 0;
    reglaLength.push({altura: 0 })
    tamanoRegla.forEach(altura => {
      reglaLength.push({altura: altura + ID_LONGUITUD});
    });

    // seleccion del ripios selected
    let descripcionRipiosEdit = null;
    if(grafica.ripios.length) {
      descripcionRipiosEdit = ripios[0];
    }

    return {...state, loading: false, ripios,
      superficies: grafica.superficies,reglaLength, descripcionRipiosEdit,
      profundidadRegistro: grafica.profundidadRegistro}
  }),
  on(getAllByPozoDescripcionRipiosFailure, (state: DescripcionRipiosState, { error}) => {
    return {...state, loading: false, error}
  }),
  on(pasarDescripcionRipios, (state: DescripcionRipiosState, {posicion}) => {
    let descripcionRipiosEdit = state.descripcionRipiosEdit;
    const nucleoPosicion = state.ripios.find(e => e.posicion === posicion);

    if(nucleoPosicion){
      descripcionRipiosEdit = nucleoPosicion;
    }

    scrollIntoView(String(ID_RIPIOS + descripcionRipiosEdit.codripio));

    return {...state, descripcionRipiosEdit}
  }),
  on(descripcionRipiosEditDescripcionRipios, (state: DescripcionRipiosState, {descripcionRipiosEdit}) => {
    return {...state, descripcionRipiosEdit}
  }),

);
