import {ParametrosColoresState} from './parametros-colores.state';
import {createReducer, on} from '@ngrx/store';
import {Colores} from '../../../../data/models/colores';
import {
  createModalParametrosColores,
  createModalParametrosColoresFailure,
  createModalParametrosColoresSuccess, deleteParametrosColores, deleteParametrosColoresFailure, deleteParametrosColoresSuccess,
  editModalParametrosColores, editModalParametrosColoresFailure, editModalParametrosColoresSuccess, filterParametrosColores,
  getAllParametrosColores,
  getAllParametrosColoresFailure,
  getAllParametrosColoresSuccess,
  initParametrosColores, paginatorParametrosColores,
  postModalParametrosColoresFailure,
  postModalParametrosColoresSuccess, putModalParametrosColoresFailure, putModalParametrosColoresSuccess, sortParametrosColores
} from './parametros-colores.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';

// Estado inicial de las variables
export const initialState: ParametrosColoresState = {
  loading: true,
  action: false,
  error: '',
  colores: [],
  coloresFiltro: [],
  edit: new Colores(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosColoresReducer = createReducer(
  initialState,
  on(initParametrosColores, (state) => {
    return {...state, loading: false, action: true, error: '', colores:  [], edit: new Colores()}
  }),
  // get all
  on(getAllParametrosColores, (state) => {
    return {...state, loading: true, action: false, error: '', colores: [], coloresFiltro: [], edit: new Colores()}
  }),
  on(getAllParametrosColoresSuccess, (state, {colores, coloresFiltro}) => {
    colores = _paginator(colores, 1);
    return {...state, loading: false, action: true, colores, coloresFiltro}
  }),
  on(getAllParametrosColoresFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosColores, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosColoresSuccess, (state, {edit}) => {
    let coloresFiltro = [...state.coloresFiltro];
    coloresFiltro.unshift(edit);// agreParametrosar al inicio
    let colores = _paginator(coloresFiltro, 1);
    return {...state,  colores, coloresFiltro, edit: new Colores(), paginator:  1};
  }),
  on(createModalParametrosColoresFailure, (state, {error}) => {
    return {...state, edit: new Colores(), error: error}
  }),
  on(postModalParametrosColoresSuccess, (state, {edit}) => {
    let coloresEdit  = [...state.coloresFiltro].filter(item => item.codColor !== edit.codColor);
    coloresEdit.unshift(edit);
    const coloresFiltro = coloresEdit.map((e) => {
      if (e.codColor === edit.codColor) {
        return edit;
      }
      return e;
    });
    let colores = _paginator(coloresFiltro, 1);
    return {...state, colores, coloresFiltro, edit: new Colores(), paginator:  1};
  }),
  on(postModalParametrosColoresFailure, (state, {edit, error}) => {
    const colores = state.colores.filter(item => item.codColor !== edit.codColor);
    return {...state, colores, edit: new Colores(), error: error}
  }),

  // edit
  on(editModalParametrosColores, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosColoresSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosColoresFailure, (state, {error}) => {
    return {...state, edit: new Colores(), error: error}
  }),
  on(putModalParametrosColoresSuccess, (state, { edit}) => {
    const coloresFiltro = [...state.coloresFiltro].map((e) => {
      if (e.codColor === edit.codColor) {
        return edit;
      }
      return e;
    });
    let colores = _paginator(coloresFiltro, state.paginator);
    return {...state, colores, coloresFiltro, edit: new Colores()};
  }),
  on(putModalParametrosColoresFailure, (state, {edit, error}) => {
    return {...state, edit: new Colores(), error: error}
  }),

  // delete
  on(deleteParametrosColores, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosColoresSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let coloresFiltro = state.coloresFiltro.filter((item: Colores) => item.codColor !== edit.codColor);
      let colores = _paginator(coloresFiltro, state.paginator);
      return {...state, colores, coloresFiltro, edit: new Colores()};
    }
    return {...state, edit: new Colores()};
  }),
  on(deleteParametrosColoresFailure, (state, {error}) => {
    return {...state, edit: new Colores(), error: error}
  }),

  // action
  on(sortParametrosColores, (state, {column, direction }) => {
    let colores = [...state.coloresFiltro];
    colores.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    colores = _paginator(colores, state.paginator);
    return {...state, column , direction, colores}
  }),
  on(filterParametrosColores, (state, {filtro}) => {
    let coloresFiltro = [...state.coloresFiltro];
    let colores = [...state.coloresFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.color.toLocaleLowerCase().includes(term) ||
        item.codColor.toLocaleLowerCase().includes(term);

    });
    colores = _paginator(colores, 1);
    return {...state, filtro, colores, coloresFiltro}
  }),
  on(paginatorParametrosColores, (state, {paginator}) => {
    const colores = _paginator(state.coloresFiltro, paginator);
    return {...state, loading: false, action: true, colores, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
