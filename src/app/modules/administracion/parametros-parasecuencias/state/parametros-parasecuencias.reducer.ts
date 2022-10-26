import {ParametrosParasecuenciasState} from './parametros-parasecuencias.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosParasecuencias,
  createModalParametrosParasecuenciasFailure,
  createModalParametrosParasecuenciasSuccess, deleteParametrosParasecuencias, deleteParametrosParasecuenciasFailure, deleteParametrosParasecuenciasSuccess,
  getAllParametrosParasecuencias,
  getAllParametrosParasecuenciasFailure,
  getAllParametrosParasecuenciasSuccess,
  initParametrosParasecuencias, paginatorParametrosParasecuencias,
  postModalParametrosParasecuenciasFailure,filterParametrosParasecuencias,
  postModalParametrosParasecuenciasSuccess, putModalParametrosParasecuenciasFailure, putModalParametrosParasecuenciasSuccess, sortParametrosParasecuencias
} from './parametros-parasecuencias.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Parasecuencias} from "../../../../data/models/parasecuencias";

// Estado inicial de las variables
export const initialState: ParametrosParasecuenciasState = {
  loading: true,
  action: false,
  error: '',
  parasecuencias: [],
  parasecuenciasFiltro: [],
  edit: new Parasecuencias(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosParasecuenciasReducer = createReducer(
  initialState,
  on(initParametrosParasecuencias, (state) => {
    return {...state, loading: false, action: true, error: '', parasecuencias:  [], edit: new Parasecuencias()}
  }),
  // get all
  on(getAllParametrosParasecuencias, (state) => {
    return {...state, loading: true, action: false, error: '', parasecuencias: [], parasecuenciasFiltro: [], edit: new Parasecuencias()}
  }),
  on(getAllParametrosParasecuenciasSuccess, (state, {parasecuencias, parasecuenciasFiltro}) => {
    parasecuencias = _paginator(parasecuencias, 1);
    return {...state, loading: false, action: true, parasecuencias, parasecuenciasFiltro}
  }),
  on(getAllParametrosParasecuenciasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosParasecuencias, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosParasecuenciasSuccess, (state, {edit}) => {
    let parasecuenciasFiltro = [...state.parasecuenciasFiltro];
    parasecuenciasFiltro.unshift(edit);// agreParametrosar al inicio
    let parasecuencias = _paginator(parasecuenciasFiltro, 1);
    return {...state,  parasecuencias, parasecuenciasFiltro, edit: new Parasecuencias(), paginator:  1};
  }),
  on(createModalParametrosParasecuenciasFailure, (state, {error}) => {
    return {...state, edit: new Parasecuencias(), error: error}
  }),
  on(postModalParametrosParasecuenciasSuccess, (state, {edit}) => {
    let parasecuenciasEdit  = [...state.parasecuenciasFiltro].filter(item => item.codParasec !== null);
    // parasecuenciasEdit.unshift(edit);
    const parasecuenciasFiltro = parasecuenciasEdit.map((e) => {
      if (e.codParasec === edit.codParasec) {
        return edit;
      }
      return e;
    });
    let parasecuencias = _paginator(parasecuenciasFiltro, 1);
    return {...state, parasecuencias, parasecuenciasFiltro, edit: new Parasecuencias(), paginator:  1};
  }),
  on(postModalParametrosParasecuenciasFailure, (state, {edit, error}) => {
    const parasecuencias = state.parasecuencias.filter(item => item.codParasec !== edit.codParasec);
    return {...state, parasecuencias, edit: new Parasecuencias(), error: error}
  }),


  on(putModalParametrosParasecuenciasSuccess, (state, { edit}) => {
    const parasecuenciasFiltro = [...state.parasecuenciasFiltro].map((e) => {
      if (e.codParasec === edit.codParasec) {
        return edit;
      }
      return e;
    });
    let parasecuencias = _paginator(parasecuenciasFiltro, state.paginator);
    return {...state, parasecuencias, parasecuenciasFiltro, edit: new Parasecuencias()};
  }),
  on(putModalParametrosParasecuenciasFailure, (state, {edit, error}) => {
    return {...state, edit: new Parasecuencias(), error: error}
  }),

  // delete
  on(deleteParametrosParasecuencias, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosParasecuenciasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let parasecuenciasFiltro = state.parasecuenciasFiltro.filter((item: Parasecuencias) => item.codParasec !== edit.codParasec);
      let parasecuencias = _paginator(parasecuenciasFiltro, state.paginator);
      return {...state, parasecuencias, parasecuenciasFiltro, edit: new Parasecuencias()};
    }
    return {...state, edit: new Parasecuencias()};
  }),
  on(deleteParametrosParasecuenciasFailure, (state, {error}) => {
    return {...state, edit: new Parasecuencias(), error: error}
  }),

  // action
  on(sortParametrosParasecuencias, (state, {column, direction }) => {
    let parasecuencias = [...state.parasecuenciasFiltro];
    parasecuencias.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    parasecuencias = _paginator(parasecuencias, state.paginator);
    return {...state, column , direction, parasecuencias}
  }),
  on(filterParametrosParasecuencias, (state, {filtro}) => {
    let parasecuenciasFiltro = [...state.parasecuenciasFiltro];
    let parasecuencias = [...state.parasecuenciasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.codParasec).toLocaleLowerCase().includes(term);
    });
    parasecuencias = _paginator(parasecuencias, 1);
    return {...state, filtro, parasecuencias, parasecuenciasFiltro}
  }),
  on(paginatorParametrosParasecuencias, (state, {paginator}) => {
    const parasecuencias = _paginator(state.parasecuenciasFiltro, paginator);
    return {...state, loading: false, action: true, parasecuencias, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
