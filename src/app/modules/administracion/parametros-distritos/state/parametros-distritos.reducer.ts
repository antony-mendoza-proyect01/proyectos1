import {ParametrosDistritosState} from './parametros-distritos.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosDistritos,
  createModalParametrosDistritosFailure,
  createModalParametrosDistritosSuccess, deleteParametrosDistritos, deleteParametrosDistritosFailure, deleteParametrosDistritosSuccess,
  editModalParametrosDistritos, editModalParametrosDistritosFailure, editModalParametrosDistritosSuccess, filterParametrosDistritos,
  getAllParametrosDistritos,
  getAllParametrosDistritosFailure,
  getAllParametrosDistritosSuccess,
  initParametrosDistritos, paginatorParametrosDistritos,
  postModalParametrosDistritosFailure,
  postModalParametrosDistritosSuccess, putModalParametrosDistritosFailure, putModalParametrosDistritosSuccess, sortParametrosDistritos
} from './parametros-distritos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Distritos } from 'src/app/data/models/distritos';

// Estado inicial de las variables
export const initialState: ParametrosDistritosState = {
  loading: true,
  action: false,
  error: '',
  distritos: [],
  distritosFiltro: [],
  edit: new Distritos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosDistritosReducer = createReducer(
  initialState,
  on(initParametrosDistritos, (state) => {
    return {...state, loading: false, action: true, error: '', distritos:  [], edit: new Distritos()}
  }),
  // get all
  on(getAllParametrosDistritos, (state) => {
    return {...state, loading: true, action: false, error: '', distritos: [], distritosFiltro: [], edit: new Distritos()}
  }),
  on(getAllParametrosDistritosSuccess, (state, {distritos, distritosFiltro}) => {
    distritos = _paginator(distritos, 1);
    return {...state, loading: false, action: true, distritos, distritosFiltro}
  }),
  on(getAllParametrosDistritosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosDistritos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosDistritosSuccess, (state, {edit}) => {
    let distritosFiltro = [...state.distritosFiltro];
    distritosFiltro.unshift(edit);// agreParametrosar al inicio
    let distritos = _paginator(distritosFiltro, 1);
    return {...state,  distritos, distritosFiltro, edit: new Distritos(), paginator:  1};
  }),
  on(createModalParametrosDistritosFailure, (state, {error}) => {
    return {...state, edit: new Distritos(), error: error}
  }),
  on(postModalParametrosDistritosSuccess, (state, {edit}) => {
    let distritosEdit  = [...state.distritosFiltro].filter(item => item.codDto !== edit.codDto);
    distritosEdit.unshift(edit);
    const distritosFiltro = distritosEdit.map((e) => {
      if (e.codDto === edit.codDto) {
        return edit;
      }
      return e;
    });
    let distritos = _paginator(distritosFiltro, 1);
    return {...state, distritos, distritosFiltro, edit: new Distritos(), paginator:  1};
  }),
  on(postModalParametrosDistritosFailure, (state, {edit, error}) => {
    const distritos = state.distritos.filter(item => item.codDto !== edit.codDto);
    return {...state, distritos, edit: new Distritos(), error: error}
  }),

  // edit
  on(editModalParametrosDistritos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosDistritosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosDistritosFailure, (state, {error}) => {
    return {...state, edit: new Distritos(), error: error}
  }),
  on(putModalParametrosDistritosSuccess, (state, { edit}) => {
    const distritosFiltro = [...state.distritosFiltro].map((e) => {
      if (e.codDto === edit.codDto) {
        return edit;
      }
      return e;
    });
    let distritos = _paginator(distritosFiltro, state.paginator);
    return {...state, distritos, distritosFiltro, edit: new Distritos()};
  }),
  on(putModalParametrosDistritosFailure, (state, {edit, error}) => {
    return {...state, edit: new Distritos(), error: error}
  }),

  // delete
  on(deleteParametrosDistritos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosDistritosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let distritosFiltro = state.distritosFiltro.filter((item: Distritos) => item.codDto !== edit.codDto);
      let distritos = _paginator(distritosFiltro, state.paginator);
      return {...state, distritos, distritosFiltro, edit: new Distritos()};
    }
    return {...state, edit: new Distritos()};
  }),
  on(deleteParametrosDistritosFailure, (state, {error}) => {
    return {...state, edit: new Distritos(), error: error}
  }),

  // action
  on(sortParametrosDistritos, (state, {column, direction }) => {
    let distritos = [...state.distritosFiltro];
    distritos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    distritos = _paginator(distritos, state.paginator);
    return {...state, column , direction, distritos}
  }),
  on(filterParametrosDistritos, (state, {filtro}) => {
    let distritosFiltro = [...state.distritosFiltro];
    let distritos = [...state.distritosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.distrito.toLocaleLowerCase().includes(term);
    });
    distritos = _paginator(distritos, 1);
    return {...state, filtro, distritos, distritosFiltro}
  }),
  on(paginatorParametrosDistritos, (state, {paginator}) => {
    const distritos = _paginator(state.distritosFiltro, paginator);
    return {...state, loading: false, action: true, distritos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
