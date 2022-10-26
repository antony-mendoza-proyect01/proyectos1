import {ParametrosEspaciamientoState} from './parametros-espaciamiento.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosEspaciamiento,
  createModalParametrosEspaciamientoFailure,
  createModalParametrosEspaciamientoSuccess, deleteParametrosEspaciamiento, deleteParametrosEspaciamientoFailure, deleteParametrosEspaciamientoSuccess,
  editModalParametrosEspaciamiento, editModalParametrosEspaciamientoFailure, editModalParametrosEspaciamientoSuccess, filterParametrosEspaciamiento,
  getAllParametrosEspaciamiento,
  getAllParametrosEspaciamientoFailure,
  getAllParametrosEspaciamientoSuccess,
  initParametrosEspaciamiento, paginatorParametrosEspaciamiento,
  postModalParametrosEspaciamientoFailure,
  postModalParametrosEspaciamientoSuccess, putModalParametrosEspaciamientoFailure, putModalParametrosEspaciamientoSuccess, sortParametrosEspaciamiento
} from './parametros-espaciamiento.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Espaciamiento } from 'src/app/data/models/espaciamiento';

// Estado inicial de las variables
export const initialState: ParametrosEspaciamientoState = {
  loading: true,
  action: false,
  error: '',
  espaciamientos: [],
  espaciamientosFiltro: [],
  edit: new Espaciamiento(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosEspaciamientoReducer = createReducer(
  initialState,
  on(initParametrosEspaciamiento, (state) => {
    return {...state, loading: false, action: true, error: '', espaciamientos:  [], edit: new Espaciamiento()}
  }),
  // get all
  on(getAllParametrosEspaciamiento, (state) => {
    return {...state, loading: true, action: false, error: '', espaciamientos: [], espaciamientosFiltro: [], edit: new Espaciamiento()}
  }),
  on(getAllParametrosEspaciamientoSuccess, (state, {espaciamientos, espaciamientosFiltro}) => {
    espaciamientos = _paginator(espaciamientos, 1);
    return {...state, loading: false, action: true, espaciamientos, espaciamientosFiltro}
  }),
  on(getAllParametrosEspaciamientoFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosEspaciamiento, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosEspaciamientoSuccess, (state, {edit}) => {
    let espaciamientosFiltro = [...state.espaciamientosFiltro];
    espaciamientosFiltro.unshift(edit);// agreParametrosar al inicio
    let espaciamientos = _paginator(espaciamientosFiltro, 1);
    return {...state,  espaciamientos, espaciamientosFiltro, edit: new Espaciamiento(), paginator:  1};
  }),
  on(createModalParametrosEspaciamientoFailure, (state, {error}) => {
    return {...state, edit: new Espaciamiento(), error: error}
  }),
  on(postModalParametrosEspaciamientoSuccess, (state, {edit}) => {
    let espaciamientosEdit  = [...state.espaciamientosFiltro].filter(item => item.codEspaciamiento !== null);
    espaciamientosEdit.unshift(edit);
    const espaciamientosFiltro = espaciamientosEdit.map((e) => {
      if (e.codEspaciamiento === edit.codEspaciamiento) {
        return edit;
      }
      return e;
    });
    let espaciamientos = _paginator(espaciamientosFiltro, 1);
    return {...state, espaciamientos, espaciamientosFiltro, edit: new Espaciamiento(), paginator:  1};
  }),
  on(postModalParametrosEspaciamientoFailure, (state, {edit, error}) => {
    const espaciamientos = state.espaciamientos.filter(item => item.codEspaciamiento !== edit.codEspaciamiento);
    return {...state, espaciamientos, edit: new Espaciamiento(), error: error}
  }),

  // edit
  on(editModalParametrosEspaciamiento, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosEspaciamientoSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosEspaciamientoFailure, (state, {error}) => {
    return {...state, edit: new Espaciamiento(), error: error}
  }),
  on(putModalParametrosEspaciamientoSuccess, (state, { edit}) => {
    const espaciamientosFiltro = [...state.espaciamientosFiltro].map((e) => {
      if (e.codEspaciamiento === edit.codEspaciamiento) {
        return edit;
      }
      return e;
    });
    let espaciamientos = _paginator(espaciamientosFiltro, state.paginator);
    return {...state, espaciamientos, espaciamientosFiltro, edit: new Espaciamiento()};
  }),
  on(putModalParametrosEspaciamientoFailure, (state, {edit, error}) => {
    return {...state, edit: new Espaciamiento(), error: error}
  }),

  // delete
  on(deleteParametrosEspaciamiento, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosEspaciamientoSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let espaciamientosFiltro = state.espaciamientosFiltro.filter((item: Espaciamiento) => item.codEspaciamiento !== edit.codEspaciamiento);
      let espaciamientos = _paginator(espaciamientosFiltro, state.paginator);
      return {...state, espaciamientos, espaciamientosFiltro, edit: new Espaciamiento()};
    }
    return {...state, edit: new Espaciamiento()};
  }),
  on(deleteParametrosEspaciamientoFailure, (state, {error}) => {
    return {...state, edit: new Espaciamiento(), error: error}
  }),

  // action
  on(sortParametrosEspaciamiento, (state, {column, direction }) => {
    let espaciamientos = [...state.espaciamientosFiltro];
    espaciamientos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    espaciamientos = _paginator(espaciamientos, state.paginator);
    return {...state, column , direction, espaciamientos}
  }),
  on(filterParametrosEspaciamiento, (state, {filtro}) => {
    let espaciamientosFiltro = [...state.espaciamientosFiltro];
    let espaciamientos = [...state.espaciamientosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.espaciamiento.toLocaleLowerCase().includes(term);
    });
    espaciamientos = _paginator(espaciamientos, 1);
    return {...state, filtro, espaciamientos, espaciamientosFiltro}
  }),
  on(paginatorParametrosEspaciamiento, (state, {paginator}) => {
    const espaciamientos = _paginator(state.espaciamientosFiltro, paginator);
    return {...state, loading: false, action: true, espaciamientos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
