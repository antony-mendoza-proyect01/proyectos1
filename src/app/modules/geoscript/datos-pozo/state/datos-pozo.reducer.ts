import {createReducer, on} from '@ngrx/store';
import { ResultDatosPozo} from 'src/app/data/models/result-datos-pozo';

import {
  getAllByPozoGraficaDatosPozo, getAllByPozoGraficaDatosPozoFailure, getAllByPozoGraficaDatosPozoSuccess,
  initGraficaDatosPozo, putGraficaDatosPozo, putGraficaDatosPozoFailure, putGraficaDatosPozoSuccess,
} from './datos-pozo.actions';
import {DatosDelPozoState} from "./datos-pozo.state";

// Estado inicial de las variables
export const initialState: DatosDelPozoState = {
  loading: true,
  action: false,
  error: '',
  datosPozo: null,
  edit : new ResultDatosPozo(),

};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const datosPozoReducer = createReducer(
  initialState,
  on(initGraficaDatosPozo, (state) => {
    return {...state, loading: false, action: true, error: '', datosPozo:  null, graficosDatopozoInfo: null, edit: new ResultDatosPozo()}
  }),
  // get all
  on(getAllByPozoGraficaDatosPozo, (state) => {
    return {...state, loading: true, action: false, error: '', datosPozo: null, graficosDatopozoInfo: null, edit: new ResultDatosPozo()}
  }),
  on(getAllByPozoGraficaDatosPozoSuccess, (state, {datosPozo}) => {
    return {...state, loading: false, action: true, datosPozo}
  }),
  on(getAllByPozoGraficaDatosPozoFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
 //editar

  on(putGraficaDatosPozo, (state) => {
    return {...state, loading: true}
  }),

  on(putGraficaDatosPozoSuccess, (state, {datosPozo}) => {
    return {...state, loading: false, datosPozo}
  }),
  on(putGraficaDatosPozoFailure, (state, { error}) => {
    return {...state, loading: false, edit: new ResultDatosPozo(), error: error}
  }),
);
