import {ParametrosDurezasState} from './parametros-durezas.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosDurezas,
  createModalParametrosDurezasFailure,
  createModalParametrosDurezasSuccess, deleteParametrosDurezas, deleteParametrosDurezasFailure, deleteParametrosDurezasSuccess,
  editModalParametrosDurezas, editModalParametrosDurezasFailure, editModalParametrosDurezasSuccess, filterParametrosDurezas,
  getAllParametrosDurezas,
  getAllParametrosDurezasFailure,
  getAllParametrosDurezasSuccess,
  initParametrosDurezas, paginatorParametrosDurezas,
  postModalParametrosDurezasFailure,
  postModalParametrosDurezasSuccess, putModalParametrosDurezasFailure, putModalParametrosDurezasSuccess, sortParametrosDurezas
} from './parametros-durezas.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Durezas } from 'src/app/data/models/durezas';

// Estado inicial de las variables
export const initialState: ParametrosDurezasState = {
  loading: true,
  action: false,
  error: '',
  durezas: [],
  durezasFiltro: [],
  edit: new Durezas(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosDurezasReducer = createReducer(
  initialState,
  on(initParametrosDurezas, (state) => {
    return {...state, loading: false, action: true, error: '', durezas:  [], edit: new Durezas()}
  }),
  // get all
  on(getAllParametrosDurezas, (state) => {
    return {...state, loading: true, action: false, error: '', durezas: [], durezasFiltro: [], edit: new Durezas()}
  }),
  on(getAllParametrosDurezasSuccess, (state, {durezas, durezasFiltro}) => {
    durezas = _paginator(durezas, 1);
    return {...state, loading: false, action: true, durezas, durezasFiltro}
  }),
  on(getAllParametrosDurezasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosDurezas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosDurezasSuccess, (state, {edit}) => {
    let durezasFiltro = [...state.durezasFiltro];
    durezasFiltro.unshift(edit);// agreParametrosar al inicio
    let durezas = _paginator(durezasFiltro, 1);
    return {...state,  durezas, durezasFiltro, edit: new Durezas(), paginator:  1};
  }),
  on(createModalParametrosDurezasFailure, (state, {error}) => {
    return {...state, edit: new Durezas(), error: error}
  }),
  on(postModalParametrosDurezasSuccess, (state, {edit}) => {
    let durezasEdit  = [...state.durezasFiltro].filter(item => item.codDureza !== null);
    durezasEdit.unshift(edit);
    const durezasFiltro = durezasEdit.map((e) => {
      if (e.codDureza === edit.codDureza) {
        return edit;
      }
      return e;
    });
    let durezas = _paginator(durezasFiltro, 1);
    return {...state, durezas, durezasFiltro, edit: new Durezas(), paginator:  1};
  }),
  on(postModalParametrosDurezasFailure, (state, {edit, error}) => {
    const durezas = state.durezas.filter(item => item.codDureza !== edit.codDureza);
    return {...state, durezas, edit: new Durezas(), error: error}
  }),

  // edit
  on(editModalParametrosDurezas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosDurezasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosDurezasFailure, (state, {error}) => {
    return {...state, edit: new Durezas(), error: error}
  }),
  on(putModalParametrosDurezasSuccess, (state, { edit}) => {
    const durezasFiltro = [...state.durezasFiltro].map((e) => {
      if (e.codDureza === edit.codDureza) {
        return edit;
      }
      return e;
    });
    let durezas = _paginator(durezasFiltro, state.paginator);
    return {...state, durezas, durezasFiltro, edit: new Durezas()};
  }),
  on(putModalParametrosDurezasFailure, (state, {edit, error}) => {
    return {...state, edit: new Durezas(), error: error}
  }),

  // delete
  on(deleteParametrosDurezas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosDurezasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let durezasFiltro = state.durezasFiltro.filter((item: Durezas) => item.codDureza !== edit.codDureza);
      let durezas = _paginator(durezasFiltro, state.paginator);
      return {...state, durezas, durezasFiltro, edit: new Durezas()};
    }
    return {...state, edit: new Durezas()};
  }),
  on(deleteParametrosDurezasFailure, (state, {error}) => {
    return {...state, edit: new Durezas(), error: error}
  }),

  // action
  on(sortParametrosDurezas, (state, {column, direction }) => {
    let durezas = [...state.durezasFiltro];
    durezas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    durezas = _paginator(durezas, state.paginator);
    return {...state, column , direction, durezas}
  }),
  on(filterParametrosDurezas, (state, {filtro}) => {
    let durezasFiltro = [...state.durezasFiltro];
    let durezas = [...state.durezasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.dureza.toLocaleLowerCase().includes(term);
    });
    durezas = _paginator(durezas, 1);
    return {...state, filtro, durezas, durezasFiltro}
  }),
  on(paginatorParametrosDurezas, (state, {paginator}) => {
    const durezas = _paginator(state.durezasFiltro, paginator);
    return {...state, loading: false, action: true, durezas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
