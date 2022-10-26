import {createReducer, on} from '@ngrx/store';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { CalibracionSondaCabezaCableState } from './calibracion-sonda-cabeza-cable.state';
import {
  createModalCalibracionSondaCabezaCable,
  createModalCalibracionSondaCabezaCableFailure,
  createModalCalibracionSondaCabezaCableSuccess,
  deleteCalibracionSondaCabezaCable, deleteCalibracionSondaCabezaCableFailure,
  deleteCalibracionSondaCabezaCableSuccess,
  editModalCalibracionSondaCabezaCable,
  editModalCalibracionSondaCabezaCableFailure,
  editModalCalibracionSondaCabezaCableSuccess, filterCalibracionSondaCabezaCable,
  getAllCalibracionSondaCabezaCable,
  getAllCalibracionSondaCabezaCableFailure,
  getAllCalibracionSondaCabezaCableSuccess,
  initCalibracionSondaCabezaCable, paginatorCalibracionSondaCabezaCable,
  postModalCalibracionSondaCabezaCableFailure,
  postModalCalibracionSondaCabezaCableSuccess,
  putModalCalibracionSondaCabezaCableFailure,
  putModalCalibracionSondaCabezaCableSuccess, sortCalibracionSondaCabezaCable
} from './calibracion-sonda-cabeza-cable.actions';
import {CalibracionSondaCabezaCable} from '../../../../data/models/calibracion-sonda-cabeza-cable';

// Estado inicial de las variables
export const initialState: CalibracionSondaCabezaCableState = {
  loading: true,
  action: false,
  error: '',
  calibracionSondaCabezaCables: [],
  calibracionSondaCabezaCablesFiltro: [],
  edit: new CalibracionSondaCabezaCable(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const calibracionSondaCabezaCableReducer = createReducer(
  initialState,
  on(initCalibracionSondaCabezaCable, (state) => {
    return {...state, loading: false, action: true, error: '', calibracionSondaCabezaCables:  [], calibracionSondaCabezaCablesFiltro:  [], edit: new CalibracionSondaCabezaCable()}
  }),
  // get all
  on(getAllCalibracionSondaCabezaCable, (state) => {
    return {...state, loading: true, action: false, error: '', calibracionSondaCabezaCables: [], calibracionSondaCabezaCablesFiltro: [], edit: new CalibracionSondaCabezaCable()}
  }),
  on(getAllCalibracionSondaCabezaCableSuccess, (state, {calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro}) => {
    calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCables, 1);
    return {...state, loading: false, action: true, calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro}
  }),
  on(getAllCalibracionSondaCabezaCableFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalCalibracionSondaCabezaCable, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalCalibracionSondaCabezaCableSuccess, (state, {edit}) => {
    let calibracionSondaCabezaCablesFiltro = [...state.calibracionSondaCabezaCablesFiltro];
    calibracionSondaCabezaCablesFiltro.unshift(edit);// agrear al inicio
    let calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCablesFiltro, 1);
    return {...state,  calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro, edit: new CalibracionSondaCabezaCable(), paginator:  1};
  }),
  on(createModalCalibracionSondaCabezaCableFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaCabezaCable(), error: error}
  }),
  on(postModalCalibracionSondaCabezaCableSuccess, (state, {edit}) => {
    let calibracionSondaCabezaCablesEdit  = [...state.calibracionSondaCabezaCablesFiltro].filter(item => item.id !== edit.id);
    calibracionSondaCabezaCablesEdit.unshift(edit);
    const calibracionSondaCabezaCablesFiltro = calibracionSondaCabezaCablesEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCablesFiltro, 1);
    return {...state, calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro, edit: new CalibracionSondaCabezaCable(), paginator:  1};
  }),
  on(postModalCalibracionSondaCabezaCableFailure, (state, {edit, error}) => {
    const calibracionSondaCabezaCables = state.calibracionSondaCabezaCables.filter(item => item.id !== edit.id);
    return {...state, calibracionSondaCabezaCables, edit: new CalibracionSondaCabezaCable(), error: error}
  }),

  // edit
  on(editModalCalibracionSondaCabezaCable, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalCalibracionSondaCabezaCableSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalCalibracionSondaCabezaCableFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaCabezaCable(), error: error}
  }),
  on(putModalCalibracionSondaCabezaCableSuccess, (state, { edit}) => {
    const calibracionSondaCabezaCablesFiltro = [...state.calibracionSondaCabezaCablesFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCablesFiltro, state.paginator);
    return {...state, calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro, edit: new CalibracionSondaCabezaCable()};
  }),
  on(putModalCalibracionSondaCabezaCableFailure, (state, {edit, error}) => {
    return {...state, edit: new CalibracionSondaCabezaCable(), error: error}
  }),

  // delete
  on(deleteCalibracionSondaCabezaCable, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteCalibracionSondaCabezaCableSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calibracionSondaCabezaCablesFiltro = state.calibracionSondaCabezaCablesFiltro.filter((item: CalibracionSondaCabezaCable) => item.id !== edit.id);
      let calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCablesFiltro, state.paginator);
      return {...state, calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro, edit: new CalibracionSondaCabezaCable()};
    }
    return {...state, edit: new CalibracionSondaCabezaCable()};
  }),
  on(deleteCalibracionSondaCabezaCableFailure, (state, {error}) => {
    return {...state, edit: new CalibracionSondaCabezaCable(), error: error}
  }),

  // action
  on(sortCalibracionSondaCabezaCable, (state, {column, direction }) => {
    let calibracionSondaCabezaCables = [...state.calibracionSondaCabezaCablesFiltro];
    calibracionSondaCabezaCables.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCables, state.paginator);
    return {...state, column , direction, calibracionSondaCabezaCables}
  }),
  on(filterCalibracionSondaCabezaCable, (state, {filtro}) => {
    let calibracionSondaCabezaCablesFiltro = [...state.calibracionSondaCabezaCablesFiltro];
    let calibracionSondaCabezaCables = [...state.calibracionSondaCabezaCablesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.id).toLocaleLowerCase().includes(term);
    });
    calibracionSondaCabezaCables = _paginator(calibracionSondaCabezaCables, 1);
    return {...state, filtro, calibracionSondaCabezaCables, calibracionSondaCabezaCablesFiltro}
  }),
  on(paginatorCalibracionSondaCabezaCable, (state, {paginator}) => {
    const calibracionSondaCabezaCables = _paginator(state.calibracionSondaCabezaCablesFiltro, paginator);
    return {...state, loading: false, action: true, calibracionSondaCabezaCables, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
