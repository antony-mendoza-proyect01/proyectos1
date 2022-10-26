import {ParametrosFluidosState} from './parametros-fluidos.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosFluidos,
  createModalParametrosFluidosFailure,
  createModalParametrosFluidosSuccess, deleteParametrosFluidos, deleteParametrosFluidosFailure, deleteParametrosFluidosSuccess,
  editModalParametrosFluidos, editModalParametrosFluidosFailure, editModalParametrosFluidosSuccess, filterParametrosFluidos,
  getAllParametrosFluidos,
  getAllParametrosFluidosFailure,
  getAllParametrosFluidosSuccess,
  initParametrosFluidos, paginatorParametrosFluidos,
  postModalParametrosFluidosFailure,
  postModalParametrosFluidosSuccess, putModalParametrosFluidosFailure, putModalParametrosFluidosSuccess, sortParametrosFluidos
} from './parametros-fluidos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Fluidos} from "../../../../data/models/fluidos";

// Estado inicial de las variables
export const initialState: ParametrosFluidosState = {
  loading: true,
  action: false,
  error: '',
  fluidos: [],
  fluidosFiltro: [],
  edit: new Fluidos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosFluidosReducer = createReducer(
  initialState,
  on(initParametrosFluidos, (state) => {
    return {...state, loading: false, action: true, error: '', fluidos:  [], edit: new Fluidos()}
  }),
  // get all
  on(getAllParametrosFluidos, (state) => {
    return {...state, loading: true, action: false, error: '', fluidos: [], fluidosFiltro: [], edit: new Fluidos()}
  }),
  on(getAllParametrosFluidosSuccess, (state, {fluidos, fluidosFiltro}) => {
    fluidos = _paginator(fluidos, 1);
    return {...state, loading: false, action: true, fluidos, fluidosFiltro}
  }),
  on(getAllParametrosFluidosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosFluidos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosFluidosSuccess, (state, {edit}) => {
    let fluidosFiltro = [...state.fluidosFiltro];
    fluidosFiltro.unshift(edit);// agreParametrosar al inicio
    let fluidos = _paginator(fluidosFiltro, 1);
    return {...state,  fluidos, fluidosFiltro, edit: new Fluidos(), paginator:  1};
  }),
  on(createModalParametrosFluidosFailure, (state, {error}) => {
    return {...state, edit: new Fluidos(), error: error}
  }),
  on(postModalParametrosFluidosSuccess, (state, {edit}) => {
    let fluidosEdit  = [...state.fluidosFiltro].filter(item => item.codigo !== edit.codigo);
    fluidosEdit.unshift(edit);
    const fluidosFiltro = fluidosEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let fluidos = _paginator(fluidosFiltro, 1);
    return {...state, fluidos, fluidosFiltro, edit: new Fluidos(), paginator:  1};
  }),
  on(postModalParametrosFluidosFailure, (state, {edit, error}) => {
    const fluidos = state.fluidos.filter(item => item.codigo !== edit.codigo);
    return {...state, fluidos, edit: new Fluidos(), error: error}
  }),

  // edit
  on(editModalParametrosFluidos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosFluidosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosFluidosFailure, (state, {error}) => {
    return {...state, edit: new Fluidos(), error: error}
  }),
  on(putModalParametrosFluidosSuccess, (state, { edit}) => {
    const fluidosFiltro = [...state.fluidosFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let fluidos = _paginator(fluidosFiltro, state.paginator);
    return {...state, fluidos, fluidosFiltro, edit: new Fluidos()};
  }),
  on(putModalParametrosFluidosFailure, (state, {edit, error}) => {
    return {...state, edit: new Fluidos(), error: error}
  }),

  // delete
  on(deleteParametrosFluidos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosFluidosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let fluidosFiltro = state.fluidosFiltro.filter((item: Fluidos) => item.codigo !== edit.codigo);
      let fluidos = _paginator(fluidosFiltro, state.paginator);
      return {...state, fluidos, fluidosFiltro, edit: new Fluidos()};
    }
    return {...state, edit: new Fluidos()};
  }),
  on(deleteParametrosFluidosFailure, (state, {error}) => {
    return {...state, edit: new Fluidos(), error: error}
  }),

  // action
  on(sortParametrosFluidos, (state, {column, direction }) => {
    let fluidos = [...state.fluidosFiltro];
    fluidos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    fluidos = _paginator(fluidos, state.paginator);
    return {...state, column , direction, fluidos}
  }),
  on(filterParametrosFluidos, (state, {filtro}) => {
    let fluidosFiltro = [...state.fluidosFiltro];
    let fluidos = [...state.fluidosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.fluido.toLocaleLowerCase().includes(term);
    });
    fluidos = _paginator(fluidos, 1);
    return {...state, filtro, fluidos, fluidosFiltro}
  }),
  on(paginatorParametrosFluidos, (state, {paginator}) => {
    const fluidos = _paginator(state.fluidosFiltro, paginator);
    return {...state, loading: false, action: true, fluidos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
