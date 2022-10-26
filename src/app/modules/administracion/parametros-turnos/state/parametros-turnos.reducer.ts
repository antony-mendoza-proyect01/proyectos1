import {ParametrosTurnosState} from './parametros-turnos.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosTurnos,
  createModalParametrosTurnosFailure,
  createModalParametrosTurnosSuccess, deleteParametrosTurnos, deleteParametrosTurnosFailure, deleteParametrosTurnosSuccess,
  editModalParametrosTurnos, editModalParametrosTurnosFailure, editModalParametrosTurnosSuccess, filterParametrosTurnos,
  getAllParametrosTurnos,
  getAllParametrosTurnosFailure,
  getAllParametrosTurnosSuccess,
  initParametrosTurnos, paginatorParametrosTurnos,
  postModalParametrosTurnosFailure,
  postModalParametrosTurnosSuccess, putModalParametrosTurnosFailure, putModalParametrosTurnosSuccess, sortParametrosTurnos
} from './parametros-turnos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Turnos } from 'src/app/data/models/turnos';

// Estado inicial de las variables
export const initialState: ParametrosTurnosState = {
  loading: true,
  action: false,
  error: '',
  turnos: [],
  turnosFiltro: [],
  edit: new Turnos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosTurnosReducer = createReducer(
  initialState,
  on(initParametrosTurnos, (state) => {
    return {...state, loading: false, action: true, error: '', turnos:  [], edit: new Turnos()}
  }),
  // get all
  on(getAllParametrosTurnos, (state) => {
    return {...state, loading: true, action: false, error: '', turnos: [], turnosFiltro: [], edit: new Turnos()}
  }),
  on(getAllParametrosTurnosSuccess, (state, {turnos, turnosFiltro}) => {
    turnos = _paginator(turnos, 1);
    return {...state, loading: false, action: true, turnos, turnosFiltro}
  }),
  on(getAllParametrosTurnosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosTurnos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosTurnosSuccess, (state, {edit}) => {
    let turnosFiltro = [...state.turnosFiltro];
    turnosFiltro.unshift(edit);// agreParametrosar al inicio
    let turnos = _paginator(turnosFiltro, 1);
    return {...state,  turnos, turnosFiltro, edit: new Turnos(), paginator:  1};
  }),
  on(createModalParametrosTurnosFailure, (state, {error}) => {
    return {...state, edit: new Turnos(), error: error}
  }),
  on(postModalParametrosTurnosSuccess, (state, {edit}) => {
    let turnosEdit  = [...state.turnosFiltro].filter(item => item.codigo !== edit.codigo);
    turnosEdit.unshift(edit);
    const turnosFiltro = turnosEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let turnos = _paginator(turnosFiltro, 1);
    return {...state, turnos, turnosFiltro, edit: new Turnos(), paginator:  1};
  }),
  on(postModalParametrosTurnosFailure, (state, {edit, error}) => {
    const turnos = state.turnos.filter(item => item.codigo !== edit.codigo);
    return {...state, turnos, edit: new Turnos(), error: error}
  }),

  // edit
  on(editModalParametrosTurnos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosTurnosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosTurnosFailure, (state, {error}) => {
    return {...state, edit: new Turnos(), error: error}
  }),
  on(putModalParametrosTurnosSuccess, (state, { edit}) => {
    const turnosFiltro = [...state.turnosFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let turnos = _paginator(turnosFiltro, state.paginator);
    return {...state, turnos, turnosFiltro, edit: new Turnos()};
  }),
  on(putModalParametrosTurnosFailure, (state, {edit, error}) => {
    return {...state, edit: new Turnos(), error: error}
  }),

  // delete
  on(deleteParametrosTurnos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosTurnosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let turnosFiltro = state.turnosFiltro.filter((item: Turnos) => item.codigo !== edit.codigo);
      let turnos = _paginator(turnosFiltro, state.paginator);
      return {...state, turnos, turnosFiltro, edit: new Turnos()};
    }
    return {...state, edit: new Turnos()};
  }),
  on(deleteParametrosTurnosFailure, (state, {error}) => {
    return {...state, edit: new Turnos(), error: error}
  }),

  // action
  on(sortParametrosTurnos, (state, {column, direction }) => {
    let turnos = [...state.turnosFiltro];
    turnos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    turnos = _paginator(turnos, state.paginator);
    return {...state, column , direction, turnos}
  }),
  on(filterParametrosTurnos, (state, {filtro}) => {
    let turnosFiltro = [...state.turnosFiltro];
    let turnos = [...state.turnosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codigo.toLocaleLowerCase().includes(term) ||
      item.turno.toLocaleLowerCase().includes(term)
    });
    turnos = _paginator(turnos, 1);
    return {...state, filtro, turnos, turnosFiltro}
  }),
  on(paginatorParametrosTurnos, (state, {paginator}) => {
    const turnos = _paginator(state.turnosFiltro, paginator);
    return {...state, loading: false, action: true, turnos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
