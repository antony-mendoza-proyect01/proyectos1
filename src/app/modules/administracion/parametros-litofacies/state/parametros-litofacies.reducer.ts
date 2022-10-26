import {ParametrosLitofaciesState} from './parametros-litofacies.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosLitofacies,
  createModalParametrosLitofaciesFailure,
  createModalParametrosLitofaciesSuccess, deleteParametrosLitofacies, deleteParametrosLitofaciesFailure, deleteParametrosLitofaciesSuccess,
  editModalParametrosLitofacies, editModalParametrosLitofaciesFailure, editModalParametrosLitofaciesSuccess, filterParametrosLitofacies,
  getAllParametrosLitofacies,
  getAllParametrosLitofaciesFailure,
  getAllParametrosLitofaciesSuccess,
  initParametrosLitofacies, paginatorParametrosLitofacies,
  postModalParametrosLitofaciesFailure,
  postModalParametrosLitofaciesSuccess, putModalParametrosLitofaciesFailure, putModalParametrosLitofaciesSuccess, sortParametrosLitofacies
} from './parametros-litofacies.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Litofacies } from 'src/app/data/models/litofacies';

// Estado inicial de las variables
export const initialState: ParametrosLitofaciesState = {
  loading: true,
  action: false,
  error: '',
  litofacies: [],
  litofaciesFiltro: [],
  edit: new Litofacies(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosLitofaciesReducer = createReducer(
  initialState,
  on(initParametrosLitofacies, (state) => {
    return {...state, loading: false, action: true, error: '', litofacies:  [], edit: new Litofacies()}
  }),
  // get all
  on(getAllParametrosLitofacies, (state) => {
    return {...state, loading: true, action: false, error: '', arelitofaciesas: [], litofaciesFiltro: [], edit: new Litofacies()}
  }),
  on(getAllParametrosLitofaciesSuccess, (state, {litofacies, litofaciesFiltro}) => {
    litofacies = _paginator(litofacies, 1);
    return {...state, loading: false, action: true, litofacies, litofaciesFiltro}
  }),
  on(getAllParametrosLitofaciesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosLitofacies, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosLitofaciesSuccess, (state, {edit}) => {
    let litofaciesFiltro = [...state.litofaciesFiltro];
    litofaciesFiltro.unshift(edit);// agreParametrosar al inicio
    let litofacies = _paginator(litofaciesFiltro, 1);
    return {...state,  litofacies, litofaciesFiltro, edit: new Litofacies(), paginator:  1};
  }),
  on(createModalParametrosLitofaciesFailure, (state, {error}) => {
    return {...state, edit: new Litofacies(), error: error}
  }),
  on(postModalParametrosLitofaciesSuccess, (state, {edit}) => {
    let litofaciesEdit  = [...state.litofaciesFiltro].filter(item => item.codCar !== null);
    litofaciesEdit.unshift(edit);
    const litofaciesFiltro = litofaciesEdit.map((e) => {
      if (e.codCar === edit.codCar) {
        return edit;
      }
      return e;
    });
    let litofacies = _paginator(litofaciesFiltro, 1);
    return {...state, litofacies, litofaciesFiltro, edit: new Litofacies(), paginator:  1};
  }),
  on(postModalParametrosLitofaciesFailure, (state, {edit, error}) => {
    const litofacies = state.litofacies.filter(item => item.codCar !== edit.codCar);
    return {...state, litofacies, edit: new Litofacies(), error: error}
  }),

  // edit
  on(editModalParametrosLitofacies, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosLitofaciesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosLitofaciesFailure, (state, {error}) => {
    return {...state, edit: new Litofacies(), error: error}
  }),
  on(putModalParametrosLitofaciesSuccess, (state, { edit}) => {
    const litofaciesFiltro = [...state.litofaciesFiltro].map((e) => {
      if (e.codCar === edit.codCar) {
        return edit;
      }
      return e;
    });
    let litofacies = _paginator(litofaciesFiltro, state.paginator);
    return {...state, litofacies, litofaciesFiltro, edit: new Litofacies()};
  }),
  on(putModalParametrosLitofaciesFailure, (state, {edit, error}) => {
    return {...state, edit: new Litofacies(), error: error}
  }),

  // delete
  on(deleteParametrosLitofacies, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosLitofaciesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let litofaciesFiltro = state.litofaciesFiltro.filter((item: Litofacies) => item.codCar !== edit.codCar);
      let litofacies = _paginator(litofaciesFiltro, state.paginator);
      return {...state, litofacies, litofaciesFiltro, edit: new Litofacies()};
    }
    return {...state, edit: new Litofacies()};
  }),
  on(deleteParametrosLitofaciesFailure, (state, {error}) => {
    return {...state, edit: new Litofacies(), error: error}
  }),

  // action
  on(sortParametrosLitofacies, (state, {column, direction }) => {
    let litofacies = [...state.litofaciesFiltro];
    litofacies.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    litofacies = _paginator(litofacies, state.paginator);
    return {...state, column , direction, litofacies}
  }),
  on(filterParametrosLitofacies, (state, {filtro}) => {
    let litofaciesFiltro = [...state.litofaciesFiltro];
    let litofacies = [...state.litofaciesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.litofacie.toLocaleLowerCase().includes(term);
    });
    litofacies = _paginator(litofacies, 1);
    return {...state, filtro, litofacies, litofaciesFiltro}
  }),
  on(paginatorParametrosLitofacies, (state, {paginator}) => {
    const litofacies = _paginator(state.litofaciesFiltro, paginator);
    return {...state, loading: false, action: true, litofacies, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
