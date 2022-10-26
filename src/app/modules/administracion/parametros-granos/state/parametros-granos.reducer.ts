import {ParametrosGranosState} from './parametros-granos.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosGranos,
  createModalParametrosGranosFailure,
  createModalParametrosGranosSuccess, deleteParametrosGranos, deleteParametrosGranosFailure, deleteParametrosGranosSuccess,
  editModalParametrosGranos, editModalParametrosGranosFailure, editModalParametrosGranosSuccess, filterParametrosGranos,
  getAllParametrosGranos,
  getAllParametrosGranosFailure,
  getAllParametrosGranosSuccess,
  initParametrosGranos, paginatorParametrosGranos,
  postModalParametrosGranosFailure,
  postModalParametrosGranosSuccess, putModalParametrosGranosFailure, putModalParametrosGranosSuccess, sortParametrosGranos
} from './parametros-granos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Granos} from "../../../../data/models/granos";

// Estado inicial de las variables
export const initialState: ParametrosGranosState = {
  loading: true,
  action: false,
  error: '',
  granos: [],
  granosFiltro: [],
  edit: new Granos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosGranosReducer = createReducer(
  initialState,
  on(initParametrosGranos, (state) => {
    return {...state, loading: false, action: true, error: '', granos:  [], edit: new Granos()}
  }),
  // get all
  on(getAllParametrosGranos, (state) => {
    return {...state, loading: true, action: false, error: '', granos: [], granosFiltro: [], edit: new Granos()}
  }),
  on(getAllParametrosGranosSuccess, (state, {granos, granosFiltro}) => {
    granos = _paginator(granos, 1);
    return {...state, loading: false, action: true, granos, granosFiltro}
  }),
  on(getAllParametrosGranosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosGranos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosGranosSuccess, (state, {edit}) => {
    let granosFiltro = [...state.granosFiltro];
    granosFiltro.unshift(edit);// agreParametrosar al inicio
    let granos = _paginator(granosFiltro, 1);
    return {...state,  granos, granosFiltro, edit: new Granos(), paginator:  1};
  }),
  on(createModalParametrosGranosFailure, (state, {error}) => {
    return {...state, edit: new Granos(), error: error}
  }),
  on(postModalParametrosGranosSuccess, (state, {edit}) => {
    let granosEdit  = [...state.granosFiltro].filter(item => item.codGrano !== edit.codGrano);
    granosEdit.unshift(edit);
    const granosFiltro = granosEdit.map((e) => {
      if (e.codGrano === edit.codGrano) {
        return edit;
      }
      return e;
    });
    let granos = _paginator(granosFiltro, 1);
    return {...state, granos, granosFiltro, edit: new Granos(), paginator:  1};
  }),
  on(postModalParametrosGranosFailure, (state, {edit, error}) => {
    const granos = state.granos.filter(item => item.codGrano !== edit.codGrano);
    return {...state, granos, edit: new Granos(), error: error}
  }),

  // edit
  on(editModalParametrosGranos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosGranosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosGranosFailure, (state, {error}) => {
    return {...state, edit: new Granos(), error: error}
  }),
  on(putModalParametrosGranosSuccess, (state, { edit}) => {
    const granosFiltro = [...state.granosFiltro].map((e) => {
      if (e.codGrano === edit.codGrano) {
        return edit;
      }
      return e;
    });
    let granos = _paginator(granosFiltro, state.paginator);
    return {...state, granos, granosFiltro, edit: new Granos()};
  }),
  on(putModalParametrosGranosFailure, (state, {edit, error}) => {
    return {...state, edit: new Granos(), error: error}
  }),

  // delete
  on(deleteParametrosGranos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosGranosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let granosFiltro = state.granosFiltro.filter((item: Granos) => item.codGrano !== edit.codGrano);
      let granos = _paginator(granosFiltro, state.paginator);
      return {...state, granos, granosFiltro, edit: new Granos()};
    }
    return {...state, edit: new Granos()};
  }),
  on(deleteParametrosGranosFailure, (state, {error}) => {
    return {...state, edit: new Granos(), error: error}
  }),

  // action
  on(sortParametrosGranos, (state, {column, direction }) => {
    let granos = [...state.granosFiltro];
    granos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    granos = _paginator(granos, state.paginator);
    return {...state, column , direction, granos}
  }),
  on(filterParametrosGranos, (state, {filtro}) => {
    let granosFiltro = [...state.granosFiltro];
    let granos = [...state.granosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.grano.toLocaleLowerCase().includes(term);
    });
    granos = _paginator(granos, 1);
    return {...state, filtro, granos, granosFiltro}
  }),
  on(paginatorParametrosGranos, (state, {paginator}) => {
    const granos = _paginator(state.granosFiltro, paginator);
    return {...state, loading: false, action: true, granos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
