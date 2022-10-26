import {createReducer, on} from '@ngrx/store';
import { CalibracionSondaRuedaContadora } from 'src/app/data/models/calibracion-sonda-rueda-contadora';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { CalibracionSondaRuedaContadoraState } from './calibracion-sonda-rueda-contadora..state';
import {
  createModalCalibracionSondaRuedaContadora,
  createModalCalibracionSondaRuedaContadoraFailure,
  createModalCalibracionSondaRuedaContadoraSuccess,
  deleteCalibracionSondaRuedaContadora, deleteCalibracionSondaRuedaContadoraFailure,
  deleteCalibracionSondaRuedaContadoraSuccess,
  editModalCalibracionSondaRuedaContadora,
  editModalCalibracionSondaRuedaContadoraFailure,
  editModalCalibracionSondaRuedaContadoraSuccess, filterCalibracionSondaRuedaContadora,
  getAllCalibracionSondaRuedaContadora,
  getAllCalibracionSondaRuedaContadoraFailure,
  getAllCalibracionSondaRuedaContadoraSuccess,
  initCalibracionSondaRuedaContadora, paginatorCalibracionSondaRuedaContadora,
  postModalCalibracionSondaRuedaContadoraFailure,
  postModalCalibracionSondaRuedaContadoraSuccess,
  putModalCalibracionSondaRuedaContadoraFailure,
  putModalCalibracionSondaRuedaContadoraSuccess, sortCalibracionSondaRuedaContadora
} from './calibracion-sonda-rueda-contadora.actions';


// Estado inicial de las variables
export const initialState: CalibracionSondaRuedaContadoraState = {
  loading: true,
  action: false,
  error: '',
  calibracionSondaRuedaContadoras: [],
  calibracionSondaRuedaContadorasFiltro: [],
  edit: new CalibracionSondaRuedaContadora(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const calibracionSondaRuedaContadoraReducer = createReducer(
  initialState,
  on(initCalibracionSondaRuedaContadora, (state) => {
    return {...state, loading: false, action: true, error: '', calibracionSondaRuedaContadoras:  [], calibracionSondaRuedaContadorasFiltro:  [], edit: new CalibracionSondaRuedaContadora()}
  }),
  // get all
  on(getAllCalibracionSondaRuedaContadora, (state) => {
    return {...state, loading: true, action: false, error: '', calibracionSondaRuedaContadoras: [], calibracionSondaRuedaContadorasFiltro: [], edit: new CalibracionSondaRuedaContadora()}
  }),
  on(getAllCalibracionSondaRuedaContadoraSuccess, (state, {calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro}) => {
    calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadoras, 1);
    return {...state, loading: false, action: true, calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro}
  }),
  on(getAllCalibracionSondaRuedaContadoraFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalCalibracionSondaRuedaContadora, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalCalibracionSondaRuedaContadoraSuccess, (state, {edit}) => {
    let calibracionSondaRuedaContadorasFiltro = [...state.calibracionSondaRuedaContadorasFiltro];
    calibracionSondaRuedaContadorasFiltro.unshift(edit);// agrear al inicio
    let calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadorasFiltro, 1);
    return {...state,  calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro, edit: new CalibracionSondaRuedaContadora(), paginator:  1};
  }),
  on(createModalCalibracionSondaRuedaContadoraFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaRuedaContadora(), error: error}
  }),
  on(postModalCalibracionSondaRuedaContadoraSuccess, (state, {edit}) => {
    let calibracionSondaRuedaContadorasEdit  = [...state.calibracionSondaRuedaContadorasFiltro].filter(item => item.id !== edit.id);
    calibracionSondaRuedaContadorasEdit.unshift(edit);
    const calibracionSondaRuedaContadorasFiltro = calibracionSondaRuedaContadorasEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadorasFiltro, 1);
    return {...state, calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro, edit: new CalibracionSondaRuedaContadora(), paginator:  1};
  }),
  on(postModalCalibracionSondaRuedaContadoraFailure, (state, {edit, error}) => {
    const calibracionSondaRuedaContadoras = state.calibracionSondaRuedaContadoras.filter(item => item.id !== edit.id);
    return {...state, calibracionSondaRuedaContadoras, edit: new CalibracionSondaRuedaContadora(), error: error}
  }),

  // edit
  on(editModalCalibracionSondaRuedaContadora, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalCalibracionSondaRuedaContadoraSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalCalibracionSondaRuedaContadoraFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaRuedaContadora(), error: error}
  }),
  on(putModalCalibracionSondaRuedaContadoraSuccess, (state, { edit}) => {
    const calibracionSondaRuedaContadorasFiltro = [...state.calibracionSondaRuedaContadorasFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadorasFiltro, state.paginator);
    return {...state, calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro, edit: new CalibracionSondaRuedaContadora()};
  }),
  on(putModalCalibracionSondaRuedaContadoraFailure, (state, {edit, error}) => {
    return {...state, edit: new CalibracionSondaRuedaContadora(), error: error}
  }),

  // delete
  on(deleteCalibracionSondaRuedaContadora, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteCalibracionSondaRuedaContadoraSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calibracionSondaRuedaContadorasFiltro = state.calibracionSondaRuedaContadorasFiltro.filter((item: CalibracionSondaRuedaContadora) => item.id !== edit.id);
      let calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadorasFiltro, state.paginator);
      return {...state, calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro, edit: new CalibracionSondaRuedaContadora()};
    }
    return {...state, edit: new CalibracionSondaRuedaContadora()};
  }),
  on(deleteCalibracionSondaRuedaContadoraFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaRuedaContadora(), error: error}
  }),

  // action
  on(sortCalibracionSondaRuedaContadora, (state, {column, direction }) => {
    let calibracionSondaRuedaContadoras = [...state.calibracionSondaRuedaContadorasFiltro];
    calibracionSondaRuedaContadoras.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadoras, state.paginator);
    return {...state, column , direction, calibracionSondaRuedaContadoras}
  }),
  on(filterCalibracionSondaRuedaContadora, (state, {filtro}) => {
    let calibracionSondaRuedaContadorasFiltro = [...state.calibracionSondaRuedaContadorasFiltro];
    let calibracionSondaRuedaContadoras = [...state.calibracionSondaRuedaContadorasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.id).toLocaleLowerCase().includes(term);
    });
    calibracionSondaRuedaContadoras = _paginator(calibracionSondaRuedaContadoras, 1);
    return {...state, filtro, calibracionSondaRuedaContadoras, calibracionSondaRuedaContadorasFiltro}
  }),
  on(paginatorCalibracionSondaRuedaContadora, (state, {paginator}) => {
    const calibracionSondaRuedaContadoras = _paginator(state.calibracionSondaRuedaContadorasFiltro, paginator);
    return {...state, loading: false, action: true, calibracionSondaRuedaContadoras, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
