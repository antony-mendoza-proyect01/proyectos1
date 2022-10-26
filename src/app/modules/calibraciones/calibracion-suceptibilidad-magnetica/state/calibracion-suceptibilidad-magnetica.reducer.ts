import {createReducer, on} from '@ngrx/store';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { CalibracionSuceptibilidadMagneticaState } from './calibracion-suceptibilidad-magnetica.state';
import {
  createModalCalibracionSondaSusceptibilidadMagnetica,
  createModalCalibracionSondaSusceptibilidadMagneticaFailure,
  createModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  deleteCalibracionSondaSusceptibilidadMagnetica, deleteCalibracionSondaSusceptibilidadMagneticaFailure,
  deleteCalibracionSondaSusceptibilidadMagneticaSuccess,
  editModalCalibracionSondaSusceptibilidadMagnetica,
  editModalCalibracionSondaSusceptibilidadMagneticaFailure,
  editModalCalibracionSondaSusceptibilidadMagneticaSuccess, filterCalibracionSondaSusceptibilidadMagnetica,
  getAllCalibracionSondaSusceptibilidadMagnetica,
  getAllCalibracionSondaSusceptibilidadMagneticaFailure,
  getAllCalibracionSondaSusceptibilidadMagneticaSuccess,
  initCalibracionSondaSusceptibilidadMagnetica, paginatorCalibracionSondaSusceptibilidadMagnetica,
  postModalCalibracionSondaSusceptibilidadMagneticaFailure,
  postModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  putModalCalibracionSondaSusceptibilidadMagneticaFailure,
  putModalCalibracionSondaSusceptibilidadMagneticaSuccess, sortCalibracionSondaSusceptibilidadMagnetica
} from './calibracion-suceptibilidad-magnetica.actions';
import { CalibracionSondaSusceptibilidadMagnetica } from 'src/app/data/models/calibracion-sonda-susceptibilidad-magnetica';
;

// Estado inicial de las variables
export const initialState: CalibracionSuceptibilidadMagneticaState = {
  loading: true,
  action: false,
  error: '',
  calibracionSondaSusceptibilidadMagneticas: [],
  calibracionSondaSusceptibilidadMagneticasFiltro: [],
  edit: new CalibracionSondaSusceptibilidadMagnetica(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const calibracionSuceptibilidadMagneticaReducer = createReducer(
  initialState,
  on(initCalibracionSondaSusceptibilidadMagnetica, (state) => {
    return {...state, loading: false, action: true, error: '', calibracionSondaSusceptibilidadMagneticas:  [], calibracionSondaSusceptibilidadMagneticasFiltro:  [], edit: new CalibracionSondaSusceptibilidadMagnetica()}
  }),
  // get all
  on(getAllCalibracionSondaSusceptibilidadMagnetica, (state) => {
    return {...state, loading: true, action: false, error: '', calibracionSondaSusceptibilidadMagneticas: [], calibracionSondaSusceptibilidadMagneticasFiltro: [], edit: new CalibracionSondaSusceptibilidadMagnetica()}
  }),
  on(getAllCalibracionSondaSusceptibilidadMagneticaSuccess, (state, {calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro}) => {
    calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticas, 1);
    return {...state, loading: false, action: true, calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro}
  }),
  on(getAllCalibracionSondaSusceptibilidadMagneticaFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalCalibracionSondaSusceptibilidadMagnetica, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalCalibracionSondaSusceptibilidadMagneticaSuccess, (state, {edit}) => {
    let calibracionSondaSusceptibilidadMagneticasFiltro = [...state.calibracionSondaSusceptibilidadMagneticasFiltro];
    calibracionSondaSusceptibilidadMagneticasFiltro.unshift(edit);// agrear al inicio
    let calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticasFiltro, 1);
    return {...state,  calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro, edit: new CalibracionSondaSusceptibilidadMagnetica(), paginator:  1};
  }),
  on(createModalCalibracionSondaSusceptibilidadMagneticaFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaSusceptibilidadMagnetica(), error: error}
  }),
  on(postModalCalibracionSondaSusceptibilidadMagneticaSuccess, (state, {edit}) => {
    let calibracionSondaSusceptibilidadMagneticasEdit  = [...state.calibracionSondaSusceptibilidadMagneticasFiltro].filter(item => item.id !== edit.id);
    calibracionSondaSusceptibilidadMagneticasEdit.unshift(edit);
    const calibracionSondaSusceptibilidadMagneticasFiltro = calibracionSondaSusceptibilidadMagneticasEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticasFiltro, 1);
    return {...state, calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro, edit: new CalibracionSondaSusceptibilidadMagnetica(), paginator:  1};
  }),
  on(postModalCalibracionSondaSusceptibilidadMagneticaFailure, (state, {edit, error}) => {
    const calibracionSondaSusceptibilidadMagneticas = state.calibracionSondaSusceptibilidadMagneticas.filter(item => item.id !== edit.id);
    return {...state, calibracionSondaSusceptibilidadMagneticas, edit: new CalibracionSondaSusceptibilidadMagnetica(), error: error}
  }),

  // edit
  on(editModalCalibracionSondaSusceptibilidadMagnetica, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalCalibracionSondaSusceptibilidadMagneticaSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalCalibracionSondaSusceptibilidadMagneticaFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaSusceptibilidadMagnetica(), error: error}
  }),
  on(putModalCalibracionSondaSusceptibilidadMagneticaSuccess, (state, { edit}) => {
    const calibracionSondaSusceptibilidadMagneticasFiltro = [...state.calibracionSondaSusceptibilidadMagneticasFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticasFiltro, state.paginator);
    return {...state, calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro, edit: new CalibracionSondaSusceptibilidadMagnetica()};
  }),
  on(putModalCalibracionSondaSusceptibilidadMagneticaFailure, (state, {edit, error}) => {
    return {...state, edit: new CalibracionSondaSusceptibilidadMagnetica(), error: error}
  }),

  // delete
  on(deleteCalibracionSondaSusceptibilidadMagnetica, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteCalibracionSondaSusceptibilidadMagneticaSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calibracionSondaSusceptibilidadMagneticasFiltro = state.calibracionSondaSusceptibilidadMagneticasFiltro.filter((item: CalibracionSondaSusceptibilidadMagnetica) => item.id !== edit.id);
      let calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticasFiltro, state.paginator);
      return {...state, calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro, edit: new CalibracionSondaSusceptibilidadMagnetica()};
    }
    return {...state, edit: new CalibracionSondaSusceptibilidadMagnetica()};
  }),
  on(deleteCalibracionSondaSusceptibilidadMagneticaFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaSusceptibilidadMagnetica(), error: error}
  }),

  // action
  on(sortCalibracionSondaSusceptibilidadMagnetica, (state, {column, direction }) => {
    let calibracionSondaSusceptibilidadMagneticas = [...state.calibracionSondaSusceptibilidadMagneticasFiltro];
    calibracionSondaSusceptibilidadMagneticas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticas, state.paginator);
    return {...state, column , direction, calibracionSondaSusceptibilidadMagneticas}
  }),
  on(filterCalibracionSondaSusceptibilidadMagnetica, (state, {filtro}) => {
    let calibracionSondaSusceptibilidadMagneticasFiltro = [...state.calibracionSondaSusceptibilidadMagneticasFiltro];
    let calibracionSondaSusceptibilidadMagneticas = [...state.calibracionSondaSusceptibilidadMagneticasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.id).toLocaleLowerCase().includes(term);
    });
    calibracionSondaSusceptibilidadMagneticas = _paginator(calibracionSondaSusceptibilidadMagneticas, 1);
    return {...state, filtro, calibracionSondaSusceptibilidadMagneticas, calibracionSondaSusceptibilidadMagneticasFiltro}
  }),
  on(paginatorCalibracionSondaSusceptibilidadMagnetica, (state, {paginator}) => {
    const calibracionSondaSusceptibilidadMagneticas = _paginator(state.calibracionSondaSusceptibilidadMagneticasFiltro, paginator);
    return {...state, loading: false, action: true, calibracionSondaSusceptibilidadMagneticas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
