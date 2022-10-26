import {ParametrosProvinciasState} from './parametros-provincias.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosProvincias,
  createModalParametrosProvinciasFailure,
  createModalParametrosProvinciasSuccess, deleteParametrosProvincias, deleteParametrosProvinciasFailure, deleteParametrosProvinciasSuccess,
  editModalParametrosProvincias, editModalParametrosProvinciasFailure, editModalParametrosProvinciasSuccess, filterParametrosProvincias,
  getAllParametrosProvincias,
  getAllParametrosProvinciasFailure,
  getAllParametrosProvinciasSuccess,
  initParametrosProvincias, paginatorParametrosProvincias,
  postModalParametrosProvinciasFailure,
  postModalParametrosProvinciasSuccess, putModalParametrosProvinciasFailure, putModalParametrosProvinciasSuccess, sortParametrosProvincias
} from './parametros-provincias.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Provincias } from 'src/app/data/models/provincias';

// Estado inicial de las variables
export const initialState: ParametrosProvinciasState = {
  loading: true,
  action: false,
  error: '',
  provincias: [],
  provinciasFiltro: [],
  edit: new Provincias(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosProvinciasReducer = createReducer(
  initialState,
  on(initParametrosProvincias, (state) => {
    return {...state, loading: false, action: true, error: '', provincias:  [], edit: new Provincias()}
  }),
  // get all
  on(getAllParametrosProvincias, (state) => {
    return {...state, loading: true, action: false, error: '', provincias: [], provinciasFiltro: [], edit: new Provincias()}
  }),
  on(getAllParametrosProvinciasSuccess, (state, {provincias, provinciasFiltro}) => {
    provincias = _paginator(provincias, 1);
    return {...state, loading: false, action: true, provincias, provinciasFiltro}
  }),
  on(getAllParametrosProvinciasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosProvincias, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosProvinciasSuccess, (state, {edit}) => {
    let provinciasFiltro = [...state.provinciasFiltro];
    provinciasFiltro.unshift(edit);// agreParametrosar al inicio
    let provincias = _paginator(provinciasFiltro, 1);
    return {...state,  provincias, provinciasFiltro, edit: new Provincias(), paginator:  1};
  }),
  on(createModalParametrosProvinciasFailure, (state, {error}) => {
    return {...state, edit: new Provincias(), error: error}
  }),
  on(postModalParametrosProvinciasSuccess, (state, {edit}) => {
    let provinciasEdit  = [...state.provinciasFiltro].filter(item => item.codProv !== edit.codProv);
    provinciasEdit.unshift(edit);
    const provinciasFiltro = provinciasEdit.map((e) => {
      if (e.codProv === edit.codProv) {
        return edit;
      }
      return e;
    });
    let provincias = _paginator(provinciasFiltro, 1);
    return {...state, provincias, provinciasFiltro, edit: new Provincias(), paginator:  1};
  }),
  on(postModalParametrosProvinciasFailure, (state, {edit, error}) => {
    const provincias = state.provincias.filter(item => item.codProv !== edit.codProv);
    return {...state, provincias, edit: new Provincias(), error: error}
  }),

  // edit
  on(editModalParametrosProvincias, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosProvinciasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosProvinciasFailure, (state, {error}) => {
    return {...state, edit: new Provincias(), error: error}
  }),
  on(putModalParametrosProvinciasSuccess, (state, { edit}) => {
    const provinciasFiltro = [...state.provinciasFiltro].map((e) => {
      if (e.codProv === edit.codProv) {
        return edit;
      }
      return e;
    });
    let provincias = _paginator(provinciasFiltro, state.paginator);
    return {...state, provincias, provinciasFiltro, edit: new Provincias()};
  }),
  on(putModalParametrosProvinciasFailure, (state, {edit, error}) => {
    return {...state, edit: new Provincias(), error: error}
  }),

  // delete
  on(deleteParametrosProvincias, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosProvinciasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let provinciasFiltro = state.provinciasFiltro.filter((item: Provincias) => item.codProv !== edit.codProv);
      let provincias = _paginator(provinciasFiltro, state.paginator);
      return {...state, provincias, provinciasFiltro, edit: new Provincias()};
    }
    return {...state, edit: new Provincias()};
  }),
  on(deleteParametrosProvinciasFailure, (state, {error}) => {
    return {...state, edit: new Provincias(), error: error}
  }),

  // action
  on(sortParametrosProvincias, (state, {column, direction }) => {
    let provincias = [...state.provinciasFiltro];
    provincias.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    provincias = _paginator(provincias, state.paginator);
    return {...state, column , direction, provincias}
  }),
  on(filterParametrosProvincias, (state, {filtro}) => {
    let provinciasFiltro = [...state.provinciasFiltro];
    let provincias = [...state.provinciasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.provincia.toLocaleLowerCase().includes(term);
    });
    provincias = _paginator(provincias, 1);
    return {...state, filtro, provincias, provinciasFiltro}
  }),
  on(paginatorParametrosProvincias, (state, {paginator}) => {
    const provincias = _paginator(state.provinciasFiltro, paginator);
    return {...state, loading: false, action: true, provincias, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
