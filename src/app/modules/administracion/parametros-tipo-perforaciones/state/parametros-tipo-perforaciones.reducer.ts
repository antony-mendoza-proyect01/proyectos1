import {ParametrosTipoPerforacionesState} from './parametros-tipo-perforaciones.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosTipoPerforaciones,
  createModalParametrosTipoPerforacionesFailure,
  createModalParametrosTipoPerforacionesSuccess, deleteParametrosTipoPerforaciones, deleteParametrosTipoPerforacionesFailure, deleteParametrosTipoPerforacionesSuccess,
  editModalParametrosTipoPerforaciones, editModalParametrosTipoPerforacionesFailure, editModalParametrosTipoPerforacionesSuccess, filterParametrosTipoPerforaciones,
  getAllParametrosTipoPerforaciones,
  getAllParametrosTipoPerforacionesFailure,
  getAllParametrosTipoPerforacionesSuccess,
  initParametrosTipoPerforaciones, paginatorParametrosTipoPerforaciones,
  postModalParametrosTipoPerforacionesFailure,
  postModalParametrosTipoPerforacionesSuccess, putModalParametrosTipoPerforacionesFailure, putModalParametrosTipoPerforacionesSuccess, sortParametrosTipoPerforaciones
} from './parametros-tipo-perforaciones.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { TipoPerforaciones } from 'src/app/data/models/tipo-perforaciones';

// Estado inicial de las variables
export const initialState: ParametrosTipoPerforacionesState = {
  loading: true,
  action: false,
  error: '',
  perforaciones: [],
  perforacionesFiltro: [],
  edit: new TipoPerforaciones(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosTipoPerforacionesReducer = createReducer(
  initialState,
  on(initParametrosTipoPerforaciones, (state) => {
    return {...state, loading: false, action: true, error: '', perforaciones:  [], edit: new TipoPerforaciones()}
  }),
  // get all
  on(getAllParametrosTipoPerforaciones, (state) => {
    return {...state, loading: true, action: false, error: '', perforaciones: [], perforacionesFiltro: [], edit: new TipoPerforaciones()}
  }),
  on(getAllParametrosTipoPerforacionesSuccess, (state, {perforaciones, perforacionesFiltro}) => {
    perforaciones = _paginator(perforaciones, 1);
    return {...state, loading: false, action: true, perforaciones, perforacionesFiltro}
  }),
  on(getAllParametrosTipoPerforacionesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosTipoPerforaciones, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosTipoPerforacionesSuccess, (state, {edit}) => {
    let perforacionesFiltro = [...state.perforacionesFiltro];
    perforacionesFiltro.unshift(edit);// agreParametrosar al inicio
    let perforaciones = _paginator(perforacionesFiltro, 1);
    return {...state,  perforaciones, perforacionesFiltro, edit: new TipoPerforaciones(), paginator:  1};
  }),
  on(createModalParametrosTipoPerforacionesFailure, (state, {error}) => {
    return {...state, edit: new TipoPerforaciones(), error: error}
  }),
  on(postModalParametrosTipoPerforacionesSuccess, (state, {edit}) => {
    let perforacionesEdit  = [...state.perforacionesFiltro].filter(item => item.codTipoPerforacion !== edit.codTipoPerforacion);
    perforacionesEdit.unshift(edit);
    const perforacionesFiltro = perforacionesEdit.map((e) => {
      if (e.codTipoPerforacion === edit.codTipoPerforacion) {
        return edit;
      }
      return e;
    });
    let perforaciones = _paginator(perforacionesFiltro, 1);
    return {...state, perforaciones, perforacionesFiltro, edit: new TipoPerforaciones(), paginator:  1};
  }),
  on(postModalParametrosTipoPerforacionesFailure, (state, {edit, error}) => {
    const perforaciones = state.perforaciones.filter(item => item.codTipoPerforacion !== edit.codTipoPerforacion);
    return {...state, perforaciones, edit: new TipoPerforaciones(), error: error}
  }),

  // edit
  on(editModalParametrosTipoPerforaciones, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosTipoPerforacionesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosTipoPerforacionesFailure, (state, {error}) => {
    return {...state, edit: new TipoPerforaciones(), error: error}
  }),
  on(putModalParametrosTipoPerforacionesSuccess, (state, { edit}) => {
    const perforacionesFiltro = [...state.perforacionesFiltro].map((e) => {
      if (e.codTipoPerforacion === edit.codTipoPerforacion) {
        return edit;
      }
      return e;
    });
    let perforaciones = _paginator(perforacionesFiltro, state.paginator);
    return {...state, perforaciones, perforacionesFiltro, edit: new TipoPerforaciones()};
  }),
  on(putModalParametrosTipoPerforacionesFailure, (state, {edit, error}) => {
    return {...state, edit: new TipoPerforaciones(), error: error}
  }),

  // delete
  on(deleteParametrosTipoPerforaciones, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosTipoPerforacionesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let perforacionesFiltro = state.perforacionesFiltro.filter((item: TipoPerforaciones) => item.codTipoPerforacion !== edit.codTipoPerforacion);
      let perforaciones = _paginator(perforacionesFiltro, state.paginator);
      return {...state, perforaciones, perforacionesFiltro, edit: new TipoPerforaciones()};
    }
    return {...state, edit: new TipoPerforaciones()};
  }),
  on(deleteParametrosTipoPerforacionesFailure, (state, {error}) => {
    return {...state, edit: new TipoPerforaciones(), error: error}
  }),

  // action
  on(sortParametrosTipoPerforaciones, (state, {column, direction }) => {
    let perforaciones = [...state.perforacionesFiltro];
    perforaciones.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    perforaciones = _paginator(perforaciones, state.paginator);
    return {...state, column , direction, perforaciones}
  }),
  on(filterParametrosTipoPerforaciones, (state, {filtro}) => {
    let perforacionesFiltro = [...state.perforacionesFiltro];
    let perforaciones = [...state.perforacionesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.perforacion.toLocaleLowerCase().includes(term) ||
        item.codTipoPerforacion.toLocaleLowerCase().includes(term);
    });
    perforaciones = _paginator(perforaciones, 1);
    return {...state, filtro, perforaciones, perforacionesFiltro}
  }),
  on(paginatorParametrosTipoPerforaciones, (state, {paginator}) => {
    const perforaciones = _paginator(state.perforacionesFiltro, paginator);
    return {...state, loading: false, action: true, perforaciones, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
