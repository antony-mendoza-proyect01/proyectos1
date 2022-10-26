import {ParametrosCaudalesState} from './parametros-caudales.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosCaudales,
  createModalParametrosCaudalesFailure,
  createModalParametrosCaudalesSuccess, deleteParametrosCaudales, deleteParametrosCaudalesFailure, deleteParametrosCaudalesSuccess,
  editModalParametrosCaudales, editModalParametrosCaudalesFailure, editModalParametrosCaudalesSuccess, filterParametrosCaudales,
  getAllParametrosCaudales,
  getAllParametrosCaudalesFailure,
  getAllParametrosCaudalesSuccess,
  initParametrosCaudales, paginatorParametrosCaudales,
  postModalParametrosCaudalesFailure,
  postModalParametrosCaudalesSuccess, putModalParametrosCaudalesFailure, putModalParametrosCaudalesSuccess, sortParametrosCaudales
} from './parametros-caudales.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Caudales } from 'src/app/data/models/caudales';

// Estado inicial de las variables
export const initialState: ParametrosCaudalesState = {
  loading: true,
  action: false,
  error: '',
  caudales: [],
  caudalesFiltro: [],
  edit: new Caudales(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosCaudalesReducer = createReducer(
  initialState,
  on(initParametrosCaudales, (state) => {
    return {...state, loading: false, action: true, error: '', caudales:  [], edit: new Caudales()}
  }),
  // get all
  on(getAllParametrosCaudales, (state) => {
    return {...state, loading: true, action: false, error: '', caudales: [], caudalesFiltro: [], edit: new Caudales()}
  }),
  on(getAllParametrosCaudalesSuccess, (state, {caudales, caudalesFiltro}) => {
    caudales = _paginator(caudales, 1);
    return {...state, loading: false, action: true, caudales, caudalesFiltro}
  }),
  on(getAllParametrosCaudalesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosCaudales, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosCaudalesSuccess, (state, {edit}) => {
    let caudalesFiltro = [...state.caudalesFiltro];
    caudalesFiltro.unshift(edit);// agreParametrosar al inicio
    let caudales = _paginator(caudalesFiltro, 1);
    return {...state,  caudales, caudalesFiltro, edit: new Caudales(), paginator:  1};
  }),
  on(createModalParametrosCaudalesFailure, (state, {error}) => {
    return {...state, edit: new Caudales(), error: error}
  }),
  on(postModalParametrosCaudalesSuccess, (state, {edit}) => {
    let caudalesEdit  = [...state.caudalesFiltro].filter(item => item.codigo !== edit.codigo);
    caudalesEdit.unshift(edit);
    const caudalesFiltro = caudalesEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let caudales = _paginator(caudalesFiltro, 1);
    return {...state, caudales, caudalesFiltro, edit: new Caudales(), paginator:  1};
  }),
  on(postModalParametrosCaudalesFailure, (state, {edit, error}) => {
    const caudales = state.caudales.filter(item => item.codigo !== edit.codigo);
    return {...state, caudales, edit: new Caudales(), error: error}
  }),

  // edit
  on(editModalParametrosCaudales, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosCaudalesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosCaudalesFailure, (state, {error}) => {
    return {...state, edit: new Caudales(), error: error}
  }),
  on(putModalParametrosCaudalesSuccess, (state, { edit}) => {
    const caudalesFiltro = [...state.caudalesFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let caudales = _paginator(caudalesFiltro, state.paginator);
    return {...state, caudales, caudalesFiltro, edit: new Caudales()};
  }),
  on(putModalParametrosCaudalesFailure, (state, {edit, error}) => {
    return {...state, edit: new Caudales(), error: error}
  }),

  // delete
  on(deleteParametrosCaudales, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosCaudalesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let caudalesFiltro = state.caudalesFiltro.filter((item: Caudales) => item.codigo !== edit.codigo);
      let caudales = _paginator(caudalesFiltro, state.paginator);
      return {...state, caudales, caudalesFiltro, edit: new Caudales()};
    }
    return {...state, edit: new Caudales()};
  }),
  on(deleteParametrosCaudalesFailure, (state, {error}) => {
    return {...state, edit: new Caudales(), error: error}
  }),

  // action
  on(sortParametrosCaudales, (state, {column, direction }) => {
    let caudales = [...state.caudalesFiltro];
    caudales.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    caudales = _paginator(caudales, state.paginator);
    return {...state, column , direction, caudales}
  }),
  on(filterParametrosCaudales, (state, {filtro}) => {
    let caudalesFiltro = [...state.caudalesFiltro];
    let caudales = [...state.caudalesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.caudal.toLocaleLowerCase().includes(term) ||
        item.codigo.toLocaleLowerCase().includes(term);
    });
    caudales = _paginator(caudales, 1);
    return {...state, filtro, caudales, caudalesFiltro}
  }),
  on(paginatorParametrosCaudales, (state, {paginator}) => {
    const caudales = _paginator(state.caudalesFiltro, paginator);
    return {...state, loading: false, action: true, caudales, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
