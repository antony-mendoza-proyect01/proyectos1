import {createReducer, on} from '@ngrx/store';
import {
  createModalSuperficiePozo,
  createModalSuperficiePozoFailure,
  createModalSuperficiePozoSuccess,
  deleteSuperficiePozo,
  deleteSuperficiePozoFailure,
  deleteSuperficiePozoSuccess,
  editModalSuperficiePozo,
  editModalSuperficiePozoFailure,
  editModalSuperficiePozoSuccess,
  getAllByPozoSuperficiePozoFailure,
  getAllByPozoSuperficiePozoSuccess,
  getAllSuperficiePozo,
  initSuperficiePozo,
  postModalSuperficiePozoFailure,
  postModalSuperficiePozoSuccess,
  putModalSuperficiePozoFailure,
  putModalSuperficiePozoSuccess,
} from './superficie-pozo.actions';

import { SuperficiePozoState } from './superficie-pozo.state';
import { SuperficiePozo } from 'src/app/data/models/superficie-pozo';

// Estado inicial de las variables
export const initialState: SuperficiePozoState = {
  loading: true,
  action: false,
  error: '',
  superficiePozos: [],
  edit: new SuperficiePozo(),
  // nombreSuperficie: [],
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const superficePozoReducer = createReducer(
  initialState,
  on(initSuperficiePozo, (state) => {
    return {...state, loading: false, action: true, error: '', superficiePozos:  [], edit: new SuperficiePozo()}
  }),
  // get all
  on(getAllSuperficiePozo, (state) => {
    return {...state, loading: true, action: false, error: '', superficiePozos: [], edit: new SuperficiePozo()}
  }),
  on(getAllByPozoSuperficiePozoSuccess, (state, {superficiePozos}) => {
    return {...state, loading: false, action: true, superficiePozos}
  }),
  on(getAllByPozoSuperficiePozoFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalSuperficiePozo, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalSuperficiePozoSuccess, (state, {edit}) => {
    let superficiePozos = [...state.superficiePozos];
    superficiePozos.unshift(edit);// agrear al inicio
    return {...state,  superficiePozos,  edit: new SuperficiePozo(), paginator:  1};
  }),
  on(createModalSuperficiePozoFailure, (state, {error}) => {
    return {...state, edit: new SuperficiePozo(), error: error}
  }),
  on(postModalSuperficiePozoSuccess, (state, {edit}) => {
    let superficiePozosEdit  = [...state.superficiePozos].filter(item => item.codSupPozo !== null);
    superficiePozosEdit.unshift(edit.superficiePozo);
    const superficiePozos = superficiePozosEdit.map((e) => {
      if (e.codSupPozo === edit.superficiePozo?.codSupPozo) {
        return edit.superficiePozo;
      }
      return e;
    });
    return {...state, superficiePozos,  edit: new SuperficiePozo()};
  }),
  on(postModalSuperficiePozoFailure, (state, {edit, error}) => {
    const superficiePozos = state.superficiePozos.filter(item => item.codSupPozo !== edit.codSupPozo);
    return {...state, superficiePozos, edit: new SuperficiePozo(), error: error}
  }),

  // edit
  on(editModalSuperficiePozo, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalSuperficiePozoSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalSuperficiePozoFailure, (state, {error}) => {
    return {...state, edit: new SuperficiePozo(), error: error}
  }),
  on(putModalSuperficiePozoSuccess, (state, { edit}) => {
    const superficiePozos = [...state.superficiePozos].map((e) => {
      if (e.codSupPozo === edit.codSupPozo) {
        return edit;
      }
      return e;
    });

    return {...state, superficiePozos,  edit: new SuperficiePozo()};
  }),
  on(putModalSuperficiePozoFailure, (state, {edit, error}) => {
    return {...state, edit: new SuperficiePozo(), error: error}
  }),

  // delete
  on(deleteSuperficiePozo, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteSuperficiePozoSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let superficiePozos = state.superficiePozos.filter((item: SuperficiePozo) => item.codSupPozo !== edit.codSupPozo);
      return {...state, superficiePozos, edit: new SuperficiePozo()};
    }
    return {...state, edit: new SuperficiePozo()};
  }),
  on(deleteSuperficiePozoFailure, (state, {error}) => {
    return {...state, edit: new SuperficiePozo(), error: error}
  }),


);
