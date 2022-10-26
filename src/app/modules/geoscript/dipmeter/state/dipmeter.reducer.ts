import {createReducer, on} from '@ngrx/store';
import {Dipmeter} from '../../../../data/models/dipmeter';
import {
  createModalDipmeter,
  createModalDipmeterFailure,
  createModalDipmeterSuccess,
  deleteDipmeter,
  deleteDipmeterFailure,
  deleteDipmeterSuccess,
  editModalDipmeter,
  editModalDipmeterFailure,
  editModalDipmeterSuccess,
  filterDipmeter,
  getAllByPozoDipmeterFailure,
  getAllByPozoDipmeterSuccess,
  getAllDipmeter,
  initDipmeter,
  paginatorDipmeter,
  postModalDipmeterFailure,
  postModalDipmeterSuccess,
  putModalDipmeterFailure,
  putModalDipmeterSuccess,
  sortDipmeter
} from './dipmeter.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { DipmeterState } from './dipmeter.state';

// Estado inicial de las variables
export const initialState: DipmeterState = {
  loading: true,
  action: false,
  error: '',
  dipmeters: [],
  dipmetersFiltro: [],
  edit: new Dipmeter(),
  column: '',
  direction:  '',
  paginator:  1,
  profundidadExistente: 1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const dipmeterReducer = createReducer(
  initialState,
  on(initDipmeter, (state) => {
    return {...state, loading: false, action: true, error: '', dipmeters:  [], edit: new Dipmeter()}
  }),
  // get all
  on(getAllDipmeter, (state) => {
    return {...state, loading: true, action: false, error: '', dipmeters: [], dipmetersFiltro: [], edit: new Dipmeter()}
  }),
  on(getAllByPozoDipmeterSuccess, (state, {dipmeters, dipmetersFiltro, profundidadExistente}) => {
    dipmeters = _paginator(dipmeters, 1);
    return {...state, loading: false, action: true, dipmeters, dipmetersFiltro, profundidadExistente}
  }),
  on(getAllByPozoDipmeterFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalDipmeter, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalDipmeterSuccess, (state, {edit}) => {
    let dipmetersFiltro = [...state.dipmetersFiltro];
    dipmetersFiltro.unshift(edit);// agrear al inicio
    let dipmeters = _paginator(dipmetersFiltro, 1);
    return {...state,  dipmeters, dipmetersFiltro, edit: new Dipmeter(), paginator:  1};
  }),
  on(createModalDipmeterFailure, (state, {error}) => {
    return {...state, edit: new Dipmeter(), error: error}
  }),
  on(postModalDipmeterSuccess, (state, {edit}) => {
    let dipmetersEdit  = [...state.dipmetersFiltro].filter(item => item.dipmeterPK.profundidad !== edit.dipmeterPK.profundidad);
    dipmetersEdit.unshift(edit);
    const dipmetersFiltro = dipmetersEdit.map((e) => {
      if (e.dipmeterPK.profundidad === edit.dipmeterPK.profundidad) {
        return edit;
      }
      return e;
    });
    let dipmeters = _paginator(dipmetersFiltro, 1);
    return {...state, dipmeters, dipmetersFiltro, edit: new Dipmeter(), paginator:  1};
  }),
  on(postModalDipmeterFailure, (state, {edit, error}) => {
    const dipmeters = state.dipmeters.filter(item => item.dipmeterPK.profundidad !== edit.dipmeterPK.profundidad);
    return {...state, dipmeters, edit: new Dipmeter(), error: error}
  }),

  // edit
  on(editModalDipmeter, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalDipmeterSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalDipmeterFailure, (state, {error}) => {
    return {...state, edit: new Dipmeter(), error: error}
  }),
  on(putModalDipmeterSuccess, (state, { edit}) => {
    const dipmetersFiltro = [...state.dipmetersFiltro].map((e) => {
      if (e.dipmeterPK.profundidad === edit.dipmeterPK.profundidad) {
        return edit;
      }
      return e;
    });
    let dipmeters = _paginator(dipmetersFiltro, state.paginator);
    return {...state, dipmeters, dipmetersFiltro, edit: new Dipmeter()};
  }),
  on(putModalDipmeterFailure, (state, {edit, error}) => {
    return {...state, edit: new Dipmeter(), error: error}
  }),

  // delete
  on(deleteDipmeter, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteDipmeterSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let dipmetersFiltro = state.dipmetersFiltro.filter((item: Dipmeter) => item.dipmeterPK.profundidad !== edit.dipmeterPK.profundidad);
      let dipmeters = _paginator(dipmetersFiltro, state.paginator);
      return {...state, dipmeters, dipmetersFiltro, edit: new Dipmeter()};
    }
    return {...state, edit: new Dipmeter()};
  }),
  on(deleteDipmeterFailure, (state, {error}) => {
    return {...state, edit: new Dipmeter(), error: error}
  }),

  // action
  on(sortDipmeter, (state, {column, direction }) => {
    let dipmeters = [...state.dipmetersFiltro];
    dipmeters.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    dipmeters = _paginator(dipmeters, state.paginator);
    return {...state, column , direction, dipmeters}
  }),
  on(filterDipmeter, (state, {filtro}) => {
    let dipmetersFiltro = [...state.dipmetersFiltro];
    let dipmeters = [...state.dipmetersFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.dipmeterPK.profundidad).toLocaleLowerCase().includes(term);
    });
    dipmeters = _paginator(dipmeters, 1);
    return {...state, filtro, dipmeters, dipmetersFiltro}
  }),
  on(paginatorDipmeter, (state, {paginator}) => {
    const dipmeters = _paginator(state.dipmetersFiltro, paginator);
    return {...state, loading: false, action: true, dipmeters, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
