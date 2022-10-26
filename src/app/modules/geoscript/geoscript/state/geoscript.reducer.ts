import {GeoscriptState} from './geoscript.state';
import {createReducer, on} from '@ngrx/store';
import { getByPozo, getByPozoFailure, getByPozoSuccess, initGeoscript,
} from './geoscript.actions';

// Estado inicial de las variables
export const initialState: GeoscriptState = {
  loading: true,
  action: false,
  error: '',
  pozo: '',
  pozoValidado: false,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const geoscriptReducer = createReducer(
  initialState,
  on(initGeoscript, (state) => {
    return {...state, loading: false, action: true, error: '', pozo:  '', pozoValidado: false}
  }),
  // get all
  on(getByPozo, (state, {pozo}) => {
    return {...state, loading: true, action: false, error: '', pozo, pozoValidado: false}
  }),
  on(getByPozoSuccess, (state, {pozoValidado}) => {
    return {...state, loading: false, action: true, pozoValidado}
  }),
  on(getByPozoFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error, pozo: ''}
  }),

);
