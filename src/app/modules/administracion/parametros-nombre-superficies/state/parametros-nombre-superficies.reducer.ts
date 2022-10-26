import {ParametrosNombreSuperficiesState} from './parametros-nombre-superficies.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosNombreSuperficies,
  createModalParametrosNombreSuperficiesFailure,
  createModalParametrosNombreSuperficiesSuccess, deleteParametrosNombreSuperficies, deleteParametrosNombreSuperficiesFailure, deleteParametrosNombreSuperficiesSuccess,
  editModalParametrosNombreSuperficies, editModalParametrosNombreSuperficiesFailure, editModalParametrosNombreSuperficiesSuccess, filterParametrosNombreSuperficies,
  getAllParametrosNombreSuperficies,
  getAllParametrosNombreSuperficiesFailure,
  getAllParametrosNombreSuperficiesSuccess,
  initParametrosNombreSuperficies, paginatorParametrosNombreSuperficies,
  postModalParametrosNombreSuperficiesFailure,
  postModalParametrosNombreSuperficiesSuccess, putModalParametrosNombreSuperficiesFailure, putModalParametrosNombreSuperficiesSuccess, sortParametrosNombreSuperficies
} from './parametros-nombre-superficies.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {NombreSuperficies} from "../../../../data/models/nombre-superficies";

// Estado inicial de las variables
export const initialState: ParametrosNombreSuperficiesState = {
  loading: true,
  action: false,
  error: '',
  nombres: [],
  nombresFiltro: [],
  edit: new NombreSuperficies(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosNombreSuperficiesReducer = createReducer(
  initialState,
  on(initParametrosNombreSuperficies, (state) => {
    return {...state, loading: false, action: true, error: '', nombres:  [], edit: new NombreSuperficies()}
  }),
  // get all
  on(getAllParametrosNombreSuperficies, (state) => {
    return {...state, loading: true, action: false, error: '', nombres: [], nombresFiltro: [], edit: new NombreSuperficies()}
  }),
  on(getAllParametrosNombreSuperficiesSuccess, (state, {nombres, nombresFiltro}) => {
    nombres = _paginator(nombres, 1);
    return {...state, loading: false, action: true, nombres, nombresFiltro}
  }),
  on(getAllParametrosNombreSuperficiesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosNombreSuperficies, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosNombreSuperficiesSuccess, (state, {edit}) => {
    let nombresFiltro = [...state.nombresFiltro];
    nombresFiltro.unshift(edit);// agreParametrosar al inicio
    let nombres = _paginator(nombresFiltro, 1);
    return {...state,  nombres, nombresFiltro, edit: new NombreSuperficies(), paginator:  1};
  }),
  on(createModalParametrosNombreSuperficiesFailure, (state, {error}) => {
    return {...state, edit: new NombreSuperficies(), error: error}
  }),
  on(postModalParametrosNombreSuperficiesSuccess, (state, {edit}) => {
    let nombresEdit  = [...state.nombresFiltro].filter(item => item.codigo !== edit.codigo);
    nombresEdit.unshift(edit);
    const nombresFiltro = nombresEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let nombres = _paginator(nombresFiltro, 1);
    return {...state, nombres, nombresFiltro, edit: new NombreSuperficies(), paginator:  1};
  }),
  on(postModalParametrosNombreSuperficiesFailure, (state, {edit, error}) => {
    const nombres = state.nombres.filter(item => item.codigo !== edit.codigo);
    return {...state, nombres, edit: new NombreSuperficies(), error: error}
  }),

  // edit
  on(editModalParametrosNombreSuperficies, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosNombreSuperficiesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosNombreSuperficiesFailure, (state, {error}) => {
    return {...state, edit: new NombreSuperficies(), error: error}
  }),
  on(putModalParametrosNombreSuperficiesSuccess, (state, { edit}) => {
    const nombresFiltro = [...state.nombresFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let nombres = _paginator(nombresFiltro, state.paginator);
    return {...state, nombres, nombresFiltro, edit: new NombreSuperficies()};
  }),
  on(putModalParametrosNombreSuperficiesFailure, (state, {edit, error}) => {
    return {...state, edit: new NombreSuperficies(), error: error}
  }),

  // delete
  on(deleteParametrosNombreSuperficies, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosNombreSuperficiesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let nombresFiltro = state.nombresFiltro.filter((item: NombreSuperficies) => item.codigo !== edit.codigo);
      let nombres = _paginator(nombresFiltro, state.paginator);
      return {...state, nombres, nombresFiltro, edit: new NombreSuperficies()};
    }
    return {...state, edit: new NombreSuperficies()};
  }),
  on(deleteParametrosNombreSuperficiesFailure, (state, {error}) => {
    return {...state, edit: new NombreSuperficies(), error: error}
  }),

  // action
  on(sortParametrosNombreSuperficies, (state, {column, direction }) => {
    let nombres = [...state.nombresFiltro];
    nombres.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    nombres = _paginator(nombres, state.paginator);
    return {...state, column , direction, nombres}
  }),
  on(filterParametrosNombreSuperficies, (state, {filtro}) => {
    let nombresFiltro = [...state.nombresFiltro];
    let nombres = [...state.nombresFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.nombre.toLocaleLowerCase().includes(term);
    });
    nombres = _paginator(nombres, 1);
    return {...state, filtro, nombres, nombresFiltro}
  }),
  on(paginatorParametrosNombreSuperficies, (state, {paginator}) => {
    const nombres = _paginator(state.nombresFiltro, paginator);
    return {...state, loading: false, action: true, nombres, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
