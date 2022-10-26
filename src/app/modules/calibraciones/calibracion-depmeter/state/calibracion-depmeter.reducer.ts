import {createReducer, on} from '@ngrx/store';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { CalibracionDepmeterState } from './calibracion-depmeter.state';
import {
  createModalCalibracionDipmeter,
  createModalCalibracionDipmeterFailure,
  createModalCalibracionDipmeterSuccess,
  deleteCalibracionDipmeter, deleteCalibracionDipmeterFailure,
  deleteCalibracionDipmeterSuccess,
  editModalCalibracionDipmeter,
  editModalCalibracionDipmeterFailure,
  editModalCalibracionDipmeterSuccess, filterCalibracionDipmeter,
  getAllCalibracionDipmeter,
  getAllCalibracionDipmeterFailure,
  getAllCalibracionDipmeterSuccess,
  initCalibracionDipmeter, paginatorCalibracionDipmeter,
  postModalCalibracionDipmeterFailure,
  postModalCalibracionDipmeterSuccess,
  putModalCalibracionDipmeterFailure,
  putModalCalibracionDipmeterSuccess, sortCalibracionDipmeter
} from './calibracion-depmeter.actions';
import {CalibracionDipmeter} from "../../../../data/models/calibraciom-dipmeter";


// Estado inicial de las variables
export const initialState: CalibracionDepmeterState = {
  loading: true,
  action: false,
  error: '',
  calibracionDipmeter: [],
  calibracionDipmeterFiltro: [],
  edit: new CalibracionDipmeter(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const calibracionDepmeterReducer = createReducer(
  initialState,
  on(initCalibracionDipmeter, (state) => {
    return {...state, loading: false, action: true, error: '', calibracionDipmeter:  [], calibracionDipmeterFiltro:  [], edit: new CalibracionDipmeter()}
  }),
  // get all
  on(getAllCalibracionDipmeter, (state) => {
    return {...state, loading: true, action: false, error: '', calibracionDipmeter: [], calibracionDipmeterFiltro: [], edit: new CalibracionDipmeter()}
  }),
  on(getAllCalibracionDipmeterSuccess, (state, {calibracionDipmeter, calibracionDipmeterFiltro}) => {
    calibracionDipmeter = _paginator(calibracionDipmeter, 1);
    return {...state, loading: false, action: true, calibracionDipmeter, calibracionDipmeterFiltro}
  }),
  on(getAllCalibracionDipmeterFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalCalibracionDipmeter, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalCalibracionDipmeterSuccess, (state, {edit}) => {
    let calibracionDipmeterFiltro = [...state.calibracionDipmeterFiltro];
    calibracionDipmeterFiltro.unshift(edit);// agrear al inicio
    let calibracionDipmeter = _paginator(calibracionDipmeterFiltro, 1);
    return {...state,  calibracionDipmeter, calibracionDipmeterFiltro, edit: new CalibracionDipmeter(), paginator:  1};
  }),
  on(createModalCalibracionDipmeterFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDipmeter(), error: error}
  }),
  on(postModalCalibracionDipmeterSuccess, (state, {edit}) => {
    let calibracionDipmeterEdit  = [...state.calibracionDipmeterFiltro].filter(item => item.id !== edit.id);
    calibracionDipmeterEdit.unshift(edit);
    const calibracionDipmeterFiltro = calibracionDipmeterEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionDipmeter = _paginator(calibracionDipmeterFiltro, 1);
    return {...state, calibracionDipmeter, calibracionDipmeterFiltro, edit: new CalibracionDipmeter(), paginator:  1};
  }),
  on(postModalCalibracionDipmeterFailure, (state, {edit, error}) => {
    const calibracionDipmeter = state.calibracionDipmeter.filter(item => item.id !== edit.id);
    return {...state, calibracionDipmeter, edit: new CalibracionDipmeter(), error: error}
  }),

  // edit
  on(editModalCalibracionDipmeter, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalCalibracionDipmeterSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalCalibracionDipmeterFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDipmeter(), error: error}
  }),
  on(putModalCalibracionDipmeterSuccess, (state, { edit}) => {
    const calibracionDipmeterFiltro = [...state.calibracionDipmeterFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionDipmeter = _paginator(calibracionDipmeterFiltro, state.paginator);
    return {...state, calibracionDipmeter, calibracionDipmeterFiltro, edit: new CalibracionDipmeter()};
  }),
  on(putModalCalibracionDipmeterFailure, (state, {edit, error}) => {
    return {...state, edit: new CalibracionDipmeter(), error: error}
  }),

  // delete
  on(deleteCalibracionDipmeter, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteCalibracionDipmeterSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calibracionDipmeterFiltro = state.calibracionDipmeterFiltro.filter((item: CalibracionDipmeter) => item.id !== edit.id);
      let calibracionDipmeter = _paginator(calibracionDipmeterFiltro, state.paginator);
      return {...state, calibracionDipmeter, calibracionDipmeterFiltro, edit: new CalibracionDipmeter()};
    }
    return {...state, edit: new CalibracionDipmeter()};
  }),
  on(deleteCalibracionDipmeterFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDipmeter(), error: error}
  }),

  // action
  on(sortCalibracionDipmeter, (state, {column, direction }) => {
    let calibracionDipmeter = [...state.calibracionDipmeterFiltro];
    calibracionDipmeter.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calibracionDipmeter = _paginator(calibracionDipmeter, state.paginator);
    return {...state, column , direction, calibracionDipmeter}
  }),
  on(filterCalibracionDipmeter, (state, {filtro}) => {
    let calibracionDipmeterFiltro = [...state.calibracionDipmeterFiltro];
    let calibracionDipmeter = [...state.calibracionDipmeterFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.id).toLocaleLowerCase().includes(term);
    });
    calibracionDipmeter = _paginator(calibracionDipmeter, 1);
    return {...state, filtro, calibracionDipmeter, calibracionDipmeterFiltro}
  }),
  on(paginatorCalibracionDipmeter, (state, {paginator}) => {
    const calibracionDipmeter = _paginator(state.calibracionDipmeterFiltro, paginator);
    return {...state, loading: false, action: true, calibracionDipmeter, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
