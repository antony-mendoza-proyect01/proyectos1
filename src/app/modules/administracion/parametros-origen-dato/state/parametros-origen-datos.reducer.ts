import {ParametrosOrigenDatosState} from './parametros-origen-datos.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosOrigenDatos,
  createModalParametrosOrigenDatosFailure,
  createModalParametrosOrigenDatosSuccess, deleteParametrosOrigenDatos, deleteParametrosOrigenDatosFailure, deleteParametrosOrigenDatosSuccess,
  editModalParametrosOrigenDatos, editModalParametrosOrigenDatosFailure, editModalParametrosOrigenDatosSuccess, filterParametrosOrigenDatos,
  getAllParametrosOrigenDatos,
  getAllParametrosOrigenDatosFailure,
  getAllParametrosOrigenDatosSuccess,
  initParametrosOrigenDatos, paginatorParametrosOrigenDatos,
  postModalParametrosOrigenDatosFailure,
  postModalParametrosOrigenDatosSuccess, putModalParametrosOrigenDatosFailure, putModalParametrosOrigenDatosSuccess, sortParametrosOrigenDatos
} from './parametros-origen-datos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { OrigenDatos } from 'src/app/data/models/origen-datos';

// Estado inicial de las variables
export const initialState: ParametrosOrigenDatosState = {
  loading: true,
  action: false,
  error: '',
  origendatos: [],
  origendatosFiltro: [],
  edit: new OrigenDatos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosOrigenDatosReducer = createReducer(
  initialState,
  on(initParametrosOrigenDatos, (state) => {
    return {...state, loading: false, action: true, error: '', origendatos:  [], edit: new OrigenDatos()}
  }),
  // get all
  on(getAllParametrosOrigenDatos, (state) => {
    return {...state, loading: true, action: false, error: '', origendatos: [], origendatosFiltro: [], edit: new OrigenDatos()}
  }),
  on(getAllParametrosOrigenDatosSuccess, (state, {origendatos, origendatosFiltro}) => {
    origendatos = _paginator(origendatos, 1);
    return {...state, loading: false, action: true, origendatos, origendatosFiltro}
  }),
  on(getAllParametrosOrigenDatosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosOrigenDatos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosOrigenDatosSuccess, (state, {edit}) => {
    let origendatosFiltro = [...state.origendatosFiltro];
    origendatosFiltro.unshift(edit);// agreParametrosar al inicio
    let origendatos = _paginator(origendatosFiltro, 1);
    return {...state,  origendatos, origendatosFiltro, edit: new OrigenDatos(), paginator:  1};
  }),
  on(createModalParametrosOrigenDatosFailure, (state, {error}) => {
    return {...state, edit: new OrigenDatos(), error: error}
  }),
  on(postModalParametrosOrigenDatosSuccess, (state, {edit}) => {
    let origendatosEdit  = [...state.origendatosFiltro].filter(item => item.codOrigen !== edit.codOrigen);
    origendatosEdit.unshift(edit);
    const origendatosFiltro = origendatosEdit.map((e) => {
      if (e.codOrigen === edit.codOrigen) {
        return edit;
      }
      return e;
    });
    let origendatos = _paginator(origendatosFiltro, 1);
    return {...state, origendatos, origendatosFiltro, edit: new OrigenDatos(), paginator:  1};
  }),
  on(postModalParametrosOrigenDatosFailure, (state, {edit, error}) => {
    const origendatos = state.origendatos.filter(item => item.codOrigen !== edit.codOrigen);
    return {...state, origendatos, edit: new OrigenDatos(), error: error}
  }),

  // edit
  on(editModalParametrosOrigenDatos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosOrigenDatosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosOrigenDatosFailure, (state, {error}) => {
    return {...state, edit: new OrigenDatos(), error: error}
  }),
  on(putModalParametrosOrigenDatosSuccess, (state, { edit}) => {
    const origendatosFiltro = [...state.origendatosFiltro].map((e) => {
      if (e.codOrigen === edit.codOrigen) {
        return edit;
      }
      return e;
    });
    let origendatos = _paginator(origendatosFiltro, state.paginator);
    return {...state, origendatos, origendatosFiltro, edit: new OrigenDatos()};
  }),
  on(putModalParametrosOrigenDatosFailure, (state, {edit, error}) => {
    return {...state, edit: new OrigenDatos(), error: error}
  }),

  // delete
  on(deleteParametrosOrigenDatos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosOrigenDatosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let origendatosFiltro = state.origendatosFiltro.filter((item: OrigenDatos) => item.codOrigen !== edit.codOrigen);
      let origendatos = _paginator(origendatosFiltro, state.paginator);
      return {...state, origendatos, origendatosFiltro, edit: new OrigenDatos()};
    }
    return {...state, edit: new OrigenDatos()};
  }),
  on(deleteParametrosOrigenDatosFailure, (state, {error}) => {
    return {...state, edit: new OrigenDatos(), error: error}
  }),

  // action
  on(sortParametrosOrigenDatos, (state, {column, direction }) => {
    let origendatos = [...state.origendatosFiltro];
    origendatos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    origendatos = _paginator(origendatos, state.paginator);
    return {...state, column , direction, origendatos}
  }),
  on(filterParametrosOrigenDatos, (state, {filtro}) => {
    let origendatosFiltro = [...state.origendatosFiltro];
    let origendatos = [...state.origendatosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codOrigen.toLocaleLowerCase().includes(term);
    });
    origendatos = _paginator(origendatos, 1);
    return {...state, filtro, origendatos, origendatosFiltro}
  }),
  on(paginatorParametrosOrigenDatos, (state, {paginator}) => {
    const origendatos = _paginator(state.origendatosFiltro, paginator);
    return {...state, loading: false, action: true, origendatos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
