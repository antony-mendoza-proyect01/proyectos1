import {ParametrosCalificadoresState} from './parametros-calificadores.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosCalificadores,
  createModalParametrosCalificadoresFailure,
  createModalParametrosCalificadoresSuccess, deleteParametrosCalificadores, deleteParametrosCalificadoresFailure, deleteParametrosCalificadoresSuccess,
  editModalParametrosCalificadores, editModalParametrosCalificadoresFailure, editModalParametrosCalificadoresSuccess, filterParametrosCalificadores,
  getAllParametrosCalificadores,
  getAllParametrosCalificadoresFailure,
  getAllParametrosCalificadoresSuccess,
  initParametrosCalificadores, paginatorParametrosCalificadores,
  postModalParametrosCalificadoresFailure,
  postModalParametrosCalificadoresSuccess, putModalParametrosCalificadoresFailure, putModalParametrosCalificadoresSuccess, sortParametrosCalificadores
} from './parametros-calificadores.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Calificadores} from "../../../../data/models/calificadores";

// Estado inicial de las variables
export const initialState: ParametrosCalificadoresState = {
  loading: true,
  action: false,
  error: '',
  calificadores: [],
  calificadoresFiltro: [],
  edit: new Calificadores(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosCalificadoresReducer = createReducer(
  initialState,
  on(initParametrosCalificadores, (state) => {
    return {...state, loading: false, action: true, error: '', calificadores:  [], edit: new Calificadores()}
  }),
  // get all
  on(getAllParametrosCalificadores, (state) => {
    return {...state, loading: true, action: false, error: '', calificadores: [], calificadoresFiltro: [], edit: new Calificadores()}
  }),
  on(getAllParametrosCalificadoresSuccess, (state, {calificadores, calificadoresFiltro}) => {
    calificadores = _paginator(calificadores, 1);
    return {...state, loading: false, action: true, calificadores, calificadoresFiltro}
  }),
  on(getAllParametrosCalificadoresFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosCalificadores, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosCalificadoresSuccess, (state, {edit}) => {
    let calificadoresFiltro = [...state.calificadoresFiltro];
    calificadoresFiltro.unshift(edit);// agreParametrosar al inicio
    let calificadores = _paginator(calificadoresFiltro, 1);
    return {...state,  calificadores, calificadoresFiltro, edit: new Calificadores(), paginator:  1};
  }),
  on(createModalParametrosCalificadoresFailure, (state, {error}) => {
    return {...state, edit: new Calificadores(), error: error}
  }),
  on(postModalParametrosCalificadoresSuccess, (state, {edit}) => {
    let calificadoresEdit  = [...state.calificadoresFiltro].filter(item => item.codCalificador !== edit.codCalificador);
    calificadoresEdit.unshift(edit);
    const calificadoresFiltro = calificadoresEdit.map((e) => {
      if (e.codCalificador === edit.codCalificador) {
        return edit;
      }
      return e;
    });
    let calificadores = _paginator(calificadoresFiltro, 1);
    return {...state, calificadores, calificadoresFiltro, edit: new Calificadores(), paginator:  1};
  }),
  on(postModalParametrosCalificadoresFailure, (state, {edit, error}) => {
    const calificadores = state.calificadores.filter(item => item.codCalificador !== edit.codCalificador);
    return {...state, calificadores, edit: new Calificadores(), error: error}
  }),

  // edit
  on(editModalParametrosCalificadores, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosCalificadoresSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosCalificadoresFailure, (state, {error}) => {
    return {...state, edit: new Calificadores(), error: error}
  }),
  on(putModalParametrosCalificadoresSuccess, (state, { edit}) => {
    const calificadoresFiltro = [...state.calificadoresFiltro].map((e) => {
      if (e.codCalificador === edit.codCalificador) {
        return edit;
      }
      return e;
    });
    let calificadores = _paginator(calificadoresFiltro, state.paginator);
    return {...state, calificadores, calificadoresFiltro, edit: new Calificadores()};
  }),
  on(putModalParametrosCalificadoresFailure, (state, {edit, error}) => {
    return {...state, edit: new Calificadores(), error: error}
  }),

  // delete
  on(deleteParametrosCalificadores, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosCalificadoresSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calificadoresFiltro = state.calificadoresFiltro.filter((item: Calificadores) => item.codCalificador !== edit.codCalificador);
      let calificadores = _paginator(calificadoresFiltro, state.paginator);
      return {...state, calificadores, calificadoresFiltro, edit: new Calificadores()};
    }
    return {...state, edit: new Calificadores()};
  }),
  on(deleteParametrosCalificadoresFailure, (state, {error}) => {
    return {...state, edit: new Calificadores(), error: error}
  }),

  // action
  on(sortParametrosCalificadores, (state, {column, direction }) => {
    let calificadores = [...state.calificadoresFiltro];
    calificadores.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calificadores = _paginator(calificadores, state.paginator);
    return {...state, column , direction, calificadores}
  }),
  on(filterParametrosCalificadores, (state, {filtro}) => {
    let calificadoresFiltro = [...state.calificadoresFiltro];
    let calificadores = [...state.calificadoresFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.calificador.toLocaleLowerCase().includes(term) ||
        item.codCalificador.toLocaleLowerCase().includes(term);
    });
    calificadores = _paginator(calificadores, 1);
    return {...state, filtro, calificadores, calificadoresFiltro}
  }),
  on(paginatorParametrosCalificadores, (state, {paginator}) => {
    const calificadores = _paginator(state.calificadoresFiltro, paginator);
    return {...state, loading: false, action: true, calificadores, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
