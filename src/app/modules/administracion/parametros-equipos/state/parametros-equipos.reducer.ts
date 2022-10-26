import {ParametrosEquiposState} from './parametros-equipos.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosEquipos,
  createModalParametrosEquiposFailure,
  createModalParametrosEquiposSuccess, deleteParametrosEquipos, deleteParametrosEquiposFailure, deleteParametrosEquiposSuccess,
  editModalParametrosEquipos, editModalParametrosEquiposFailure, editModalParametrosEquiposSuccess, filterParametrosEquipos,
  getAllParametrosEquipos,
  getAllParametrosEquiposFailure,
  getAllParametrosEquiposSuccess,
  initParametrosEquipos, paginatorParametrosEquipos,
  postModalParametrosEquiposFailure,
  postModalParametrosEquiposSuccess, putModalParametrosEquiposFailure, putModalParametrosEquiposSuccess, sortParametrosEquipos
} from './parametros-equipos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Equipos} from "../../../../data/models/equipos";

// Estado inicial de las variables
export const initialState: ParametrosEquiposState = {
  loading: true,
  action: false,
  error: '',
  equipos: [],
  equiposFiltro: [],
  edit: new Equipos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosEquiposReducer = createReducer(
  initialState,
  on(initParametrosEquipos, (state) => {
    return {...state, loading: false, action: true, error: '', equipos:  [], edit: new Equipos()}
  }),
  // get all
  on(getAllParametrosEquipos, (state) => {
    return {...state, loading: true, action: false, error: '', equipos: [], equiposFiltro: [], edit: new Equipos()}
  }),
  on(getAllParametrosEquiposSuccess, (state, {equipos, equiposFiltro}) => {
    equipos = _paginator(equipos, 1);
    return {...state, loading: false, action: true, equipos, equiposFiltro}
  }),
  on(getAllParametrosEquiposFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosEquipos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosEquiposSuccess, (state, {edit}) => {
    let equiposFiltro = [...state.equiposFiltro];
    equiposFiltro.unshift(edit);// agreParametrosar al inicio
    let equipos = _paginator(equiposFiltro, 1);
    return {...state,  equipos, equiposFiltro, edit: new Equipos(), paginator:  1};
  }),
  on(createModalParametrosEquiposFailure, (state, {error}) => {
    return {...state, edit: new Equipos(), error: error}
  }),
  on(postModalParametrosEquiposSuccess, (state, {edit}) => {
    let equiposEdit  = [...state.equiposFiltro].filter(item => item.codigo !== edit.codigo);
    equiposEdit.unshift(edit);
    const equiposFiltro = equiposEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let equipos = _paginator(equiposFiltro, 1);
    return {...state, equipos, equiposFiltro, edit: new Equipos(), paginator:  1};
  }),
  on(postModalParametrosEquiposFailure, (state, {edit, error}) => {
    const equipos = state.equipos.filter(item => item.codigo !== edit.codigo);
    return {...state, equipos, edit: new Equipos(), error: error}
  }),

  // edit
  on(editModalParametrosEquipos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosEquiposSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosEquiposFailure, (state, {error}) => {
    return {...state, edit: new Equipos(), error: error}
  }),
  on(putModalParametrosEquiposSuccess, (state, { edit}) => {
    const equiposFiltro = [...state.equiposFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let equipos = _paginator(equiposFiltro, state.paginator);
    return {...state, equipos, equiposFiltro, edit: new Equipos()};
  }),
  on(putModalParametrosEquiposFailure, (state, {edit, error}) => {
    return {...state, edit: new Equipos(), error: error}
  }),

  // delete
  on(deleteParametrosEquipos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosEquiposSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let equiposFiltro = state.equiposFiltro.filter((item: Equipos) => item.codigo !== edit.codigo);
      let equipos = _paginator(equiposFiltro, state.paginator);
      return {...state, equipos, equiposFiltro, edit: new Equipos()};
    }
    return {...state, edit: new Equipos()};
  }),
  on(deleteParametrosEquiposFailure, (state, {error}) => {
    return {...state, edit: new Equipos(), error: error}
  }),

  // action
  on(sortParametrosEquipos, (state, {column, direction }) => {
    let equipos = [...state.equiposFiltro];
    equipos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    equipos = _paginator(equipos, state.paginator);
    return {...state, column , direction, equipos}
  }),
  on(filterParametrosEquipos, (state, {filtro}) => {
    let equiposFiltro = [...state.equiposFiltro];
    let equipos = [...state.equiposFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.equipo.toLocaleLowerCase().includes(term);
    });
    equipos = _paginator(equipos, 1);
    return {...state, filtro, equipos, equiposFiltro}
  }),
  on(paginatorParametrosEquipos, (state, {paginator}) => {
    const equipos = _paginator(state.equiposFiltro, paginator);
    return {...state, loading: false, action: true, equipos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
