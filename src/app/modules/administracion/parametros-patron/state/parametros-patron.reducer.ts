import {ParametrosPatronState} from './parametros-patron.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosPatron,
  createModalParametrosPatronFailure,
  createModalParametrosPatronSuccess, deleteParametrosPatron, deleteParametrosPatronFailure, deleteParametrosPatronSuccess,
  editModalParametrosPatron, editModalParametrosPatronFailure, editModalParametrosPatronSuccess, filterParametrosPatron,
  getAllParametrosPatron,
  getAllParametrosPatronFailure,
  getAllParametrosPatronSuccess,
  initParametrosPatron, paginatorParametrosPatron,
  postModalParametrosPatronFailure,
  postModalParametrosPatronSuccess, putModalParametrosPatronFailure, putModalParametrosPatronSuccess, sortParametrosPatron
} from './parametros-patron.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Patron } from 'src/app/data/models/patron';

// Estado inicial de las variables
export const initialState: ParametrosPatronState = {
  loading: true,
  action: false,
  error: '',
  patrones: [],
  patronesFiltro: [],
  edit: new Patron(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosPatronReducer = createReducer(
  initialState,
  on(initParametrosPatron, (state) => {
    return {...state, loading: false, action: true, error: '', patrones:  [], edit: new Patron()}
  }),
  // get all
  on(getAllParametrosPatron, (state) => {
    return {...state, loading: true, action: false, error: '', patrones: [], patronesFiltro: [], edit: new Patron()}
  }),
  on(getAllParametrosPatronSuccess, (state, {patrones, patronesFiltro}) => {
    patrones = _paginator(patrones, 1);
    return {...state, loading: false, action: true, patrones, patronesFiltro}
  }),
  on(getAllParametrosPatronFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosPatron, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosPatronSuccess, (state, {edit}) => {
    let patronesFiltro = [...state.patronesFiltro];
    patronesFiltro.unshift(edit);// agreParametrosar al inicio
    let patrones = _paginator(patronesFiltro, 1);
    return {...state,  patrones, patronesFiltro, edit: new Patron(), paginator:  1};
  }),
  on(createModalParametrosPatronFailure, (state, {error}) => {
    return {...state, edit: new Patron(), error: error}
  }),
  on(postModalParametrosPatronSuccess, (state, {edit}) => {
    let patronesEdit  = [...state.patronesFiltro].filter(item => item.codigo !== null);
    // parasecuenciasEdit.unshift(edit);
    const patronesFiltro = patronesEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let patrones = _paginator(patronesFiltro, 1);
    return {...state, patrones, patronesFiltro, edit: new Patron(), paginator:  1};
  }),
  on(postModalParametrosPatronFailure, (state, {edit, error}) => {
    const patrones = state.patrones.filter(item => item.codigo !== edit.codigo);
    return {...state, patrones, edit: new Patron(), error: error}
  }),

  // edit
  on(editModalParametrosPatron, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosPatronSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosPatronFailure, (state, {error}) => {
    return {...state, edit: new Patron(), error: error}
  }),
  on(putModalParametrosPatronSuccess, (state, { edit}) => {
    const patronesFiltro = [...state.patronesFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let patrones = _paginator(patronesFiltro, state.paginator);
    return {...state, patrones, patronesFiltro, edit: new Patron()};
  }),
  on(putModalParametrosPatronFailure, (state, {edit, error}) => {
    return {...state, edit: new Patron(), error: error}
  }),

  // delete
  on(deleteParametrosPatron, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosPatronSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let patronesFiltro = state.patronesFiltro.filter((item: Patron) => item.codigo !== edit.codigo);
      let patrones = _paginator(patronesFiltro, state.paginator);
      return {...state, patrones, patronesFiltro, edit: new Patron()};
    }
    return {...state, edit: new Patron()};
  }),
  on(deleteParametrosPatronFailure, (state, {error}) => {
    return {...state, edit: new Patron(), error: error}
  }),

  // action
  on(sortParametrosPatron, (state, {column, direction }) => {
    let patrones = [...state.patronesFiltro];
    patrones.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    patrones = _paginator(patrones, state.paginator);
    return {...state, column , direction, patrones}
  }),
  on(filterParametrosPatron, (state, {filtro}) => {
    let patronesFiltro = [...state.patronesFiltro];
    let patrones = [...state.patronesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.patron.toLocaleLowerCase().includes(term);
    });
    patrones = _paginator(patrones, 1);
    return {...state, filtro, patrones, patronesFiltro}
  }),
  on(paginatorParametrosPatron, (state, {paginator}) => {
    const patrones = _paginator(state.patronesFiltro, paginator);
    return {...state, loading: false, action: true, patrones, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
