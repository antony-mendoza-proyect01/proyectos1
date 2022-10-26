import {ParametrosTonosState} from './parametros-tonos.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosTonos,
  createModalParametrosTonosFailure,
  createModalParametrosTonosSuccess, deleteParametrosTonos, deleteParametrosTonosFailure, deleteParametrosTonosSuccess,
  editModalParametrosTonos, editModalParametrosTonosFailure, editModalParametrosTonosSuccess, filterParametrosTonos,
  getAllParametrosTonos,
  getAllParametrosTonosFailure,
  getAllParametrosTonosSuccess,
  initParametrosTonos, paginatorParametrosTonos,
  postModalParametrosTonosFailure,
  postModalParametrosTonosSuccess, putModalParametrosTonosFailure, putModalParametrosTonosSuccess, sortParametrosTonos
} from './parametros-tonos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Tonos } from 'src/app/data/models/tono';

// Estado inicial de las variables
export const initialState: ParametrosTonosState = {
  loading: true,
  action: false,
  error: '',
  tonos: [],
  tonosFiltro: [],
  edit: new Tonos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosTonosReducer = createReducer(
  initialState,
  on(initParametrosTonos, (state) => {
    return {...state, loading: false, action: true, error: '', Tonos:  [], edit: new Tonos()}
  }),
  // get all
  on(getAllParametrosTonos, (state) => {
    return {...state, loading: true, action: false, error: '', tonos: [], tonosFiltro: [], edit: new Tonos()}
  }),
  on(getAllParametrosTonosSuccess, (state, {tonos, tonosFiltro}) => {
    tonos = _paginator(tonos, 1);
    return {...state, loading: false, action: true, tonos, tonosFiltro}
  }),
  on(getAllParametrosTonosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosTonos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosTonosSuccess, (state, {edit}) => {
    let tonosFiltro = [...state.tonosFiltro];
    tonosFiltro.unshift(edit);// agreParametrosar al inicio
    let tonos = _paginator(tonosFiltro, 1);
    return {...state,  tonos, tonosFiltro, edit: new Tonos(), paginator:  1};
  }),
  on(createModalParametrosTonosFailure, (state, {error}) => {
    return {...state, edit: new Tonos(), error: error}
  }),
  on(postModalParametrosTonosSuccess, (state, {edit}) => {
    let tonosEdit  = [...state.tonosFiltro].filter(item => item.codTono !== edit.codTono);
    tonosEdit.unshift(edit);
    const tonosFiltro = tonosEdit.map((e) => {
      if (e.codTono === edit.codTono) {
        return edit;
      }
      return e;
    });
    let tonos = _paginator(tonosFiltro, 1);
    return {...state, tonos, tonosFiltro, edit: new Tonos(), paginator:  1};
  }),
  on(postModalParametrosTonosFailure, (state, {edit, error}) => {
    const tonos = state.tonos.filter(item => item.codTono !== edit.codTono);
    return {...state, tonos, edit: new Tonos(), error: error}
  }),

  // edit
  on(editModalParametrosTonos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosTonosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosTonosFailure, (state, {error}) => {
    return {...state, edit: new Tonos(), error: error}
  }),
  on(putModalParametrosTonosSuccess, (state, { edit}) => {
    const tonosFiltro = [...state.tonosFiltro].map((e) => {
      if (e.codTono === edit.codTono) {
        return edit;
      }
      return e;
    });
    let tonos = _paginator(tonosFiltro, state.paginator);
    return {...state, tonos, tonosFiltro, edit: new Tonos()};
  }),
  on(putModalParametrosTonosFailure, (state, {edit, error}) => {
    return {...state, edit: new Tonos(), error: error}
  }),

  // delete
  on(deleteParametrosTonos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosTonosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let tonosFiltro = state.tonosFiltro.filter((item: Tonos) => item.codTono !== edit.codTono);
      let tonos = _paginator(tonosFiltro, state.paginator);
      return {...state, tonos, tonosFiltro, edit: new Tonos()};
    }
    return {...state, edit: new Tonos()};
  }),
  on(deleteParametrosTonosFailure, (state, {error}) => {
    return {...state, edit: new Tonos(), error: error}
  }),

  // action
  on(sortParametrosTonos, (state, {column, direction }) => {
    let tonos = [...state.tonosFiltro];
    tonos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    tonos = _paginator(tonos, state.paginator);
    return {...state, column , direction, tonos}
  }),
  on(filterParametrosTonos, (state, {filtro}) => {
    let tonosFiltro = [...state.tonosFiltro];
    let tonos = [...state.tonosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codTono.toLocaleLowerCase().includes(term) ||
        item.tono.toLocaleLowerCase().includes(term);
    });
    tonos = _paginator(tonos, 1);
    return {...state, filtro, tonos, tonosFiltro}
  }),
  on(paginatorParametrosTonos, (state, {paginator}) => {
    const tonos = _paginator(state.tonosFiltro, paginator);
    return {...state, loading: false, action: true, tonos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
