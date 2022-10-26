import {createReducer, on} from '@ngrx/store';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { CalibracionDensidadState } from './calibracion-densidad.state';
import {
  createModalCalibracionDensidad,
  createModalCalibracionDensidadFailure,
  createModalCalibracionDensidadSuccess,
  deleteCalibracionDensidad, deleteCalibracionDensidadFailure,
  deleteCalibracionDensidadSuccess,
  editModalCalibracionDensidad,
  editModalCalibracionDensidadFailure,
  editModalCalibracionDensidadSuccess, filterCalibracionDensidad,
  getAllCalibracionDensidad,
  getAllCalibracionDensidadFailure,
  getAllCalibracionDensidadSuccess,
  initCalibracionDensidad, paginatorCalibracionDensidad,
  postModalCalibracionDensidadFailure,
  postModalCalibracionDensidadSuccess,
  putModalCalibracionDensidadFailure,
  putModalCalibracionDensidadSuccess, sortCalibracionDensidad
} from './calibracion-densidad.actions';
import { CalibracionDensidad } from 'src/app/data/models/calibracion-densidad';

// Estado inicial de las variables
export const initialState: CalibracionDensidadState = {
  loading: true,
  action: false,
  error: '',
  calibracionDensidades: [],
  calibracionDensidadesFiltro: [],
  edit: new CalibracionDensidad(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const calibracionDensidadReducer = createReducer(
  initialState,
  on(initCalibracionDensidad, (state) => {
    return {...state, loading: false, action: true, error: '', calibracionDensidades:  [], calibracionDensidadesFiltro:  [], edit: new CalibracionDensidad()}
  }),
  // get all
  on(getAllCalibracionDensidad, (state) => {
    return {...state, loading: true, action: false, error: '', calibracionDensidades: [], calibracionDensidadesFiltro: [], edit: new CalibracionDensidad()}
  }),
  on(getAllCalibracionDensidadSuccess, (state, {calibracionDensidades, calibracionDensidadesFiltro}) => {
    calibracionDensidades = _paginator(calibracionDensidades, 1);
    return {...state, loading: false, action: true, calibracionDensidades,calibracionDensidadesFiltro}
  }),
  on(getAllCalibracionDensidadFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalCalibracionDensidad, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalCalibracionDensidadSuccess, (state, {edit}) => {
    let calibracionDensidadesFiltro = [...state.calibracionDensidadesFiltro];
    calibracionDensidadesFiltro.unshift(edit);// agrear al inicio
    let calibracionDensidades = _paginator(calibracionDensidadesFiltro, 1);
    return {...state,  calibracionDensidades, calibracionDensidadesFiltro, edit: new CalibracionDensidad(), paginator:  1};
  }),
  on(createModalCalibracionDensidadFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDensidad(), error: error}
  }),
  on(postModalCalibracionDensidadSuccess, (state, {edit}) => {
    let calibracionDensidadesEdit  = [...state.calibracionDensidadesFiltro].filter(item => item.id !== edit.id);
    calibracionDensidadesEdit.unshift(edit);
    const calibracionDensidadesFiltro = calibracionDensidadesEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionDensidades = _paginator(calibracionDensidadesFiltro, 1);
    return {...state, calibracionDensidades, calibracionDensidadesFiltro, edit: new CalibracionDensidad(), paginator:  1};
  }),
  on(postModalCalibracionDensidadFailure, (state, {edit, error}) => {
    const calibracionDensidades = state.calibracionDensidades.filter(item => item.id !== edit.id);
    return {...state, calibracionDensidades, edit: new CalibracionDensidad(), error: error}
  }),

  // edit
  on(editModalCalibracionDensidad, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalCalibracionDensidadSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalCalibracionDensidadFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDensidad(), error: error}
  }),
  on(putModalCalibracionDensidadSuccess, (state, { edit}) => {
    const calibracionDensidadesFiltro = [...state.calibracionDensidadesFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionDensidades = _paginator(calibracionDensidadesFiltro, state.paginator);
    return {...state, calibracionDensidades, calibracionDensidadesFiltro, edit: new CalibracionDensidad()};
  }),
  on(putModalCalibracionDensidadFailure, (state, {edit, error}) => {
    return {...state, edit: new CalibracionDensidad(), error: error}
  }),

  // delete
  on(deleteCalibracionDensidad, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteCalibracionDensidadSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calibracionDensidadesFiltro = state.calibracionDensidadesFiltro.filter((item: CalibracionDensidad) => item.id !== edit.id);
      let calibracionDensidades = _paginator(calibracionDensidadesFiltro, state.paginator);
      return {...state, calibracionDensidades, calibracionDensidadesFiltro, edit: new CalibracionDensidad()};
    }
    return {...state, edit: new CalibracionDensidad()};
  }),
  on(deleteCalibracionDensidadFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDensidad(), error: error}
  }),

  // action
  on(sortCalibracionDensidad, (state, {column, direction }) => {
    let calibracionDensidades = [...state.calibracionDensidadesFiltro];
    calibracionDensidades.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calibracionDensidades = _paginator(calibracionDensidades, state.paginator);
    return {...state, column , direction, calibracionDensidades}
  }),
  on(filterCalibracionDensidad, (state, {filtro}) => {
    let calibracionDensidadesFiltro = [...state.calibracionDensidadesFiltro];
    let calibracionDensidades = [...state.calibracionDensidadesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.id).toLocaleLowerCase().includes(term);
    });
    calibracionDensidades = _paginator(calibracionDensidades, 1);
    return {...state, filtro, calibracionDensidades, calibracionDensidadesFiltro}
  }),
  on(paginatorCalibracionDensidad, (state, {paginator}) => {
    const calibracionDensidades = _paginator(state.calibracionDensidadesFiltro, paginator);
    return {...state, loading: false, action: true, calibracionDensidades, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
