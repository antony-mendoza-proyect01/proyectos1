import {ParametrosSondasState} from './parametros-sondas.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosSondas,
  createModalParametrosSondasFailure,
  createModalParametrosSondasSuccess, deleteParametrosSondas, deleteParametrosSondasFailure, deleteParametrosSondasSuccess,
  editModalParametrosSondas, editModalParametrosSondasFailure, editModalParametrosSondasSuccess, filterParametrosSondas,
  getAllParametrosSondas,
  getAllParametrosSondasFailure,
  getAllParametrosSondasSuccess,
  initParametrosSondas, paginatorParametrosSondas,
  postModalParametrosSondasFailure,
  postModalParametrosSondasSuccess, putModalParametrosSondasFailure, putModalParametrosSondasSuccess, sortParametrosSondas
} from './parametros-sondas.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Sondas } from 'src/app/data/models/sondas';

// Estado inicial de las variables
export const initialState: ParametrosSondasState = {
  loading: true,
  action: false,
  error: '',
  sondas: [],
  sondasFiltro: [],
  edit: new Sondas(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosSondasReducer = createReducer(
  initialState,
  on(initParametrosSondas, (state) => {
    return {...state, loading: false, action: true, error: '', sondas:  [], edit: new Sondas()}
  }),
  // get all
  on(getAllParametrosSondas, (state) => {
    return {...state, loading: true, action: false, error: '', sondas: [], sondasFiltro: [], edit: new Sondas()}
  }),
  on(getAllParametrosSondasSuccess, (state, {sondas, sondasFiltro}) => {
    sondas = _paginator(sondas, 1);
    return {...state, loading: false, action: true, sondas, sondasFiltro}
  }),
  on(getAllParametrosSondasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosSondas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosSondasSuccess, (state, {edit}) => {
    let sondasFiltro = [...state.sondasFiltro];
    sondasFiltro.unshift(edit);// agreParametrosar al inicio
    let sondas = _paginator(sondasFiltro, 1);
    return {...state,  sondas, sondasFiltro, edit: new Sondas(), paginator:  1};
  }),
  on(createModalParametrosSondasFailure, (state, {error}) => {
    return {...state, edit: new Sondas(), error: error}
  }),
  on(postModalParametrosSondasSuccess, (state, {edit}) => {
    let sondasEdit  = [...state.sondasFiltro].filter(item => item.id !== edit.id);
    sondasEdit.unshift(edit);
    const sondasFiltro = sondasEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let sondas = _paginator(sondasFiltro, 1);
    return {...state, sondas, sondasFiltro, edit: new Sondas(), paginator:  1};
  }),
  on(postModalParametrosSondasFailure, (state, {edit, error}) => {
    const sondas = state.sondas.filter(item => item.id !== edit.id);
    return {...state, sondas, edit: new Sondas(), error: error}
  }),

  // edit
  on(editModalParametrosSondas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosSondasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosSondasFailure, (state, {error}) => {
    return {...state, edit: new Sondas(), error: error}
  }),
  on(putModalParametrosSondasSuccess, (state, { edit}) => {
    const sondasFiltro = [...state.sondasFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let sondas = _paginator(sondasFiltro, state.paginator);
    return {...state, sondas, sondasFiltro, edit: new Sondas()};
  }),
  on(putModalParametrosSondasFailure, (state, {edit, error}) => {
    return {...state, edit: new Sondas(), error: error}
  }),

  // delete
  on(deleteParametrosSondas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosSondasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let sondasFiltro = state.sondasFiltro.filter((item: Sondas) => item.id !== edit.id);
      let sondas = _paginator(sondasFiltro, state.paginator);
      return {...state, sondas, sondasFiltro, edit: new Sondas()};
    }
    return {...state, edit: new Sondas()};
  }),
  on(deleteParametrosSondasFailure, (state, {error}) => {
    return {...state, edit: new Sondas(), error: error}
  }),

  // action
  on(sortParametrosSondas, (state, {column, direction }) => {
    let sondas = [...state.sondasFiltro];
    sondas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    sondas = _paginator(sondas, state.paginator);
    return {...state, column , direction, sondas}
  }),
  on(filterParametrosSondas, (state, {filtro}) => {
    let sondasFiltro = [...state.sondasFiltro];
    let sondas = [...state.sondasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.id.toLocaleLowerCase().includes(term);
    });
    sondas = _paginator(sondas, 1);
    return {...state, filtro, sondas, sondasFiltro}
  }),
  on(paginatorParametrosSondas, (state, {paginator}) => {
    const sondas = _paginator(state.sondasFiltro, paginator);
    return {...state, loading: false, action: true, sondas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
