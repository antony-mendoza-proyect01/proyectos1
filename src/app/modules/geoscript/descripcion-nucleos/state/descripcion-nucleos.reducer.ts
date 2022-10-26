import {DescripcionNucleosState} from './descripcion-nucleos.state';
import {createReducer, on} from '@ngrx/store';
import {ReglaLength} from '../../../../data/models/descripcion-nucleos';
import {
  descripcionNucleosEditDescripcionNucleos,
  getAllByPozoDescripcionNucleos, getAllByPozoDescripcionNucleosFailure,
  getAllByPozoDescripcionNucleosSuccess,
  initDescripcionNucleos, pasarDescripcionNucleos
} from './descripcion-nucleos.actions';
import {ID_CARBON, ID_LONGUITUD, ID_NUCLEOS, scrollIntoView} from '../../../../shared/services/emit.service';

const inclusiveRange = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start+1)/step)).keys()), x => start+ x*step);
}

// estado inicial de las variables
export const initialState: DescripcionNucleosState = {
  loading: true,
  error: '',
  grafica: null,
  descripcionNucleosEdit: null,
  reglaLength: [],
  nucleos: [],
  intervalos: [],
  superficies: [],
  finalDelPozo: 0,
  profundidadRegistro: 0,
};
// inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const descripcionNucleosReducer = createReducer(
  initialState,
  // get all
  on(initDescripcionNucleos, (state: DescripcionNucleosState) => {
    return {...state, loading: false, error: '', grafica: null,  descripcionNucleosEdit: null, reglaLength: []}
  }),
  on(getAllByPozoDescripcionNucleos, (state: DescripcionNucleosState) => {
    return {...state, loading: true, error: '', grafica:  null}
  }),
  on(getAllByPozoDescripcionNucleosSuccess, (state: DescripcionNucleosState, {grafica}) => {
    // logica de la creacion de la regla del pozo
    // se traen las ultimas posiciones para tener el final del pozo, con los dos intervalos que se pitan
    let finalNucleos = 0;
    if(grafica.nucleos.length) {
      finalNucleos = grafica.nucleos[grafica.nucleos.length - 1].hasta;
    }
    let finalIntervalos = 0;
    if(grafica.intervalos.length) {
      finalIntervalos = grafica.intervalos[grafica.intervalos.length - 1].hasta;
    }
    // final del pozo
    const finalDelPozo = finalNucleos > finalIntervalos ? finalNucleos : finalIntervalos;

    // inclusiveRange: partidura del finalDelPozo en 5
    const tamanoRegla = inclusiveRange(0, finalDelPozo,ID_LONGUITUD);
    const reglaLength: ReglaLength[] = [];

    // objeto nuevo, para agregar las posiciones, para poderlo mover
    let iteracionNucleos = 0;
    let nucleos = [];
    grafica.nucleos.forEach( element => {
      iteracionNucleos += 1;
      let copia = {...element, posicion: iteracionNucleos};
      nucleos.push(copia);
    });
    let iteracionIntervalos = 0;
    let intervalos = [];
    grafica.intervalos.forEach( element => {
      iteracionIntervalos += 1;
      let copia = {...element, posicion: iteracionIntervalos};
      intervalos.push(copia);
    });

    // codigo para la creacion de la regla
    let i = 0;
    reglaLength.push({altura: 0 })
    tamanoRegla.forEach(altura => {
      reglaLength.push({altura: altura + ID_LONGUITUD});
    });

    // seleccion del nucleos selected
    let descripcionNucleosEdit = null;
    if(grafica.nucleos.length) {
      descripcionNucleosEdit = nucleos[0];
    }

    return {...state, loading: false, nucleos, intervalos,
      superficies: grafica.superficies,reglaLength, descripcionNucleosEdit, finalDelPozo,
      profundidadRegistro: grafica.profundidadRegistro}
  }),
  on(getAllByPozoDescripcionNucleosFailure, (state: DescripcionNucleosState, { error}) => {
    return {...state, loading: false, error}
  }),
  on(pasarDescripcionNucleos, (state: DescripcionNucleosState, {posicion}) => {
    let descripcionNucleosEdit = state.descripcionNucleosEdit;
    const nucleoPosicion = state.nucleos.find(e => e.posicion === posicion);

    if(nucleoPosicion){
      descripcionNucleosEdit = nucleoPosicion;
    }

    scrollIntoView(String(ID_NUCLEOS + descripcionNucleosEdit.codnucleo));

    return {...state, descripcionNucleosEdit}
  }),
  on(descripcionNucleosEditDescripcionNucleos, (state: DescripcionNucleosState, {descripcionNucleosEdit}) => {
    return {...state, descripcionNucleosEdit}
  }),

);
