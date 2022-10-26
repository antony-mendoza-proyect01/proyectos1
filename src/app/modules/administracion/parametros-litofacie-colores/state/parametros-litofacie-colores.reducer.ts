import {ParametrosLitofacieColoresState} from './parametros-litofacie-colores.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosLitofacieColores,
  createModalParametrosLitofacieColoresFailure,
  createModalParametrosLitofacieColoresSuccess, deleteParametrosLitofacieColores, deleteParametrosLitofacieColoresFailure, deleteParametrosLitofacieColoresSuccess,
  editModalParametrosLitofacieColores, editModalParametrosLitofacieColoresFailure, editModalParametrosLitofacieColoresSuccess, filterParametrosLitofacieColores,
  getAllParametrosLitofacieColores,
  getAllParametrosLitofacieColoresFailure,
  getAllParametrosLitofacieColoresSuccess,
  initParametrosLitofacieColores, paginatorParametrosLitofacieColores,
  postModalParametrosLitofacieColoresFailure,
  postModalParametrosLitofacieColoresSuccess, putModalParametrosLitofacieColoresFailure, putModalParametrosLitofacieColoresSuccess, sortParametrosLitofacieColores
} from './parametros-litofacie-colores.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { LitofacieColores } from 'src/app/data/models/litofacie-colores';

// Estado inicial de las variables
export const initialState: ParametrosLitofacieColoresState = {
  loading: true,
  action: false,
  error: '',
  litofacies: [],
  litofaciesFiltro: [],
  edit: new LitofacieColores(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosLitofacieColoresReducer = createReducer(
  initialState,
  on(initParametrosLitofacieColores, (state) => {
    return {...state, loading: false, action: true, error: '', litofacies:  [], edit: new LitofacieColores()}
  }),
  // get all
  on(getAllParametrosLitofacieColores, (state) => {
    return {...state, loading: true, action: false, error: '', litofacies: [], litofaciesFiltro: [], edit: new LitofacieColores()}
  }),
  on(getAllParametrosLitofacieColoresSuccess, (state, {litofacies, litofaciesFiltro}) => {
    litofacies = _paginator(litofacies, 1);
    return {...state, loading: false, action: true, litofacies, litofaciesFiltro}
  }),
  on(getAllParametrosLitofacieColoresFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosLitofacieColores, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosLitofacieColoresSuccess, (state, {edit}) => {
    let litofaciesFiltro = [...state.litofaciesFiltro];
    litofaciesFiltro.unshift(edit);// agreParametrosar al inicio
    let litofacies = _paginator(litofaciesFiltro, 1);
    return {...state,  litofacies, litofaciesFiltro, edit: new LitofacieColores(), paginator:  1};
  }),
  on(createModalParametrosLitofacieColoresFailure, (state, {error}) => {
    return {...state, edit: new LitofacieColores(), error: error}
  }),
  on(postModalParametrosLitofacieColoresSuccess, (state, {edit}) => {
    let litofaciesEdit  = [...state.litofaciesFiltro].filter(item => item.litofacie !== null);
    litofaciesEdit.unshift(edit);
    const litofaciesFiltro = litofaciesEdit.map((e) => {
      if (e.litofacie === edit.litofacie) {
        return edit;
      }
      return e;
    });
    let litofacie = _paginator(litofaciesFiltro, 1);
    return {...state, litofacie, litofaciesFiltro, edit: new LitofacieColores(), paginator:  1};
  }),
  on(postModalParametrosLitofacieColoresFailure, (state, {edit, error}) => {
    const litofacies = state.litofacies.filter(item => item.litofacie !== edit.litofacie);
    return {...state, litofacies, edit: new LitofacieColores(), error: error}
  }),

  // edit
  on(editModalParametrosLitofacieColores, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosLitofacieColoresSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosLitofacieColoresFailure, (state, {error}) => {
    return {...state, edit: new LitofacieColores(), error: error}
  }),
  on(putModalParametrosLitofacieColoresSuccess, (state, { edit}) => {
    const litofaciesFiltro = [...state.litofaciesFiltro].map((e) => {
      if (e.litofacie === edit.litofacie) {
        return edit;
      }
      return e;
    });
    let litofacies = _paginator(litofaciesFiltro, state.paginator);
    return {...state, litofacies, litofaciesFiltro, edit: new LitofacieColores()};
  }),
  on(putModalParametrosLitofacieColoresFailure, (state, {edit, error}) => {
    return {...state, edit: new LitofacieColores(), error: error}
  }),

  // delete
  on(deleteParametrosLitofacieColores, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosLitofacieColoresSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let litofaciesFiltro = state.litofaciesFiltro.filter((item: LitofacieColores) => item.litofacie !== edit.litofacie);
      let litofacies = _paginator(litofaciesFiltro, state.paginator);
      return {...state, litofacies, litofaciesFiltro, edit: new LitofacieColores()};
    }
    return {...state, edit: new LitofacieColores()};
  }),
  on(deleteParametrosLitofacieColoresFailure, (state, {error}) => {
    return {...state, edit: new LitofacieColores(), error: error}
  }),

  // action
  on(sortParametrosLitofacieColores, (state, {column, direction }) => {
    let litofacies = [...state.litofaciesFiltro];
    litofacies.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    litofacies = _paginator(litofacies, state.paginator);
    return {...state, column , direction, litofacies}
  }),
  on(filterParametrosLitofacieColores, (state, {filtro}) => {
    let litofaciesFiltro = [...state.litofaciesFiltro];
    let litofacies = [...state.litofaciesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.litofacie.toLocaleLowerCase().includes(term);
    });
    litofacies = _paginator(litofacies, 1);
    return {...state, filtro, litofacies, litofaciesFiltro}
  }),
  on(paginatorParametrosLitofacieColores, (state, {paginator}) => {
    const litofacies = _paginator(state.litofaciesFiltro, paginator);
    return {...state, loading: false, action: true, litofacies, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
