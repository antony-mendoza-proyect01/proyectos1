import {createReducer, on} from '@ngrx/store';
import {compare} from '../../../../shared/directives/sort.directive';
import { CalibracionDatosPozoRegistradoState } from './calibracion-datos-pozo-registrado.state';
import {
  createModalCalibracionDatosPozoRegistrado,
  createModalCalibracionDatosPozoRegistradoFailure,
  createModalCalibracionDatosPozoRegistradoSuccess,
  deleteCalibracionDatosPozoRegistrado, deleteCalibracionDatosPozoRegistradoFailure,
  deleteCalibracionDatosPozoRegistradoSuccess,
  editModalCalibracionDatosPozoRegistrado,
  editModalCalibracionDatosPozoRegistradoFailure,
  editModalCalibracionDatosPozoRegistradoSuccess, filterCalibracionDatosPozoRegistrado,
  getAllCalibracionDatosPozoRegistrado,
  getAllCalibracionDatosPozoRegistradoFailure,
  getAllCalibracionDatosPozoRegistradoSuccess,
  initCalibracionDatosPozoRegistrado, paginatorCalibracionDatosPozoRegistrado,
  postModalCalibracionDatosPozoRegistradoFailure,
  postModalCalibracionDatosPozoRegistradoSuccess,
  putModalCalibracionDatosPozoRegistradoFailure,
  putModalCalibracionDatosPozoRegistradoSuccess, sortCalibracionDatosPozoRegistrado
} from './calibracion-datos-pozo-registrado.actions';
import { CalibracionDatosPozoRegistrado } from 'src/app/data/models/calibracion-datos-pozo-registrado';
import { PAGESIZE } from 'src/app/shared/services/paginator.service';


// Estado inicial de las variables
export const initialState: CalibracionDatosPozoRegistradoState = {
  loading: true,
  action: false,
  error: '',
  calibracionDatosPozoRegistrado: [],
  calibracionDatosPozoRegistradoFiltro: [],
  edit: new CalibracionDatosPozoRegistrado(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const calibracionDatosPozoRegistradoReducer = createReducer(
  initialState,
  on(initCalibracionDatosPozoRegistrado, (state) => {
    return {...state, loading: false, action: true, error: '', calibracionDatosPozoRegistrado:  [],calibracionDatosPozoRegistradoFiltro:  [], edit: new CalibracionDatosPozoRegistrado()}
  }),
  // get all
  on(getAllCalibracionDatosPozoRegistrado, (state) => {
    return {...state, loading: true, action: false, error: '', calibracionDatosPozoRegistrado: [], calibracionDatosPozoRegistradoFiltro: [], edit: new CalibracionDatosPozoRegistrado()}
  }),
  on(getAllCalibracionDatosPozoRegistradoSuccess, (state, {calibracionDatosPozoRegistrado,calibracionDatosPozoRegistradoFiltro}) => {
    calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistrado, 1);
    return {...state, loading: false, action: true, calibracionDatosPozoRegistrado, calibracionDatosPozoRegistradoFiltro}
  }),
  on(getAllCalibracionDatosPozoRegistradoFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalCalibracionDatosPozoRegistrado, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalCalibracionDatosPozoRegistradoSuccess, (state, {edit}) => {
    let calibracionDatosPozoRegistradoFiltro = [...state.calibracionDatosPozoRegistradoFiltro];
    calibracionDatosPozoRegistradoFiltro.unshift(edit);// agrear al inicio
    let calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistradoFiltro, 1);
    return {...state,  calibracionDatosPozoRegistrado, calibracionDatosPozoRegistradoFiltro, edit: new CalibracionDatosPozoRegistrado(), paginator:  1};
  }),
  on(createModalCalibracionDatosPozoRegistradoFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDatosPozoRegistrado(), error: error}
  }),
  on(postModalCalibracionDatosPozoRegistradoSuccess, (state, {edit}) => {
    let calibracionDatosPozoRegistradoEdit  = [...state.calibracionDatosPozoRegistradoFiltro].filter(item => item.id !== edit.id);
    calibracionDatosPozoRegistradoEdit.unshift(edit);
    const calibracionDatosPozoRegistradoFiltro = calibracionDatosPozoRegistradoEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistradoFiltro, 1);
    return {...state, calibracionDatosPozoRegistrado, calibracionDatosPozoRegistradoFiltro, edit: new CalibracionDatosPozoRegistrado(), paginator:  1};
  }),
  on(postModalCalibracionDatosPozoRegistradoFailure, (state, {edit, error}) => {
    const calibracionDatosPozoRegistrado = state.calibracionDatosPozoRegistrado.filter(item => item.id !== edit.id);
    return {...state, calibracionDatosPozoRegistrado, edit: new CalibracionDatosPozoRegistrado(), error: error}
  }),

  // edit
  on(editModalCalibracionDatosPozoRegistrado, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalCalibracionDatosPozoRegistradoSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalCalibracionDatosPozoRegistradoFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDatosPozoRegistrado(), error: error}
  }),
  on(putModalCalibracionDatosPozoRegistradoSuccess, (state, { edit}) => {
    const calibracionDatosPozoRegistradoFiltro = [...state.calibracionDatosPozoRegistradoFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistradoFiltro, state.paginator);
    return {...state, calibracionDatosPozoRegistrado, calibracionDatosPozoRegistradoFiltro, edit: new CalibracionDatosPozoRegistrado()};
  }),
  on(putModalCalibracionDatosPozoRegistradoFailure, (state, {edit, error}) => {
    return {...state, edit: new CalibracionDatosPozoRegistrado(), error: error}
  }),

  // delete
  on(deleteCalibracionDatosPozoRegistrado, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteCalibracionDatosPozoRegistradoSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let calibracionDatosPozoRegistradoFiltro = state.calibracionDatosPozoRegistradoFiltro.filter((item: CalibracionDatosPozoRegistrado) => item.id !== edit.id);
      let calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistradoFiltro, state.paginator);
      return {...state, calibracionDatosPozoRegistrado, calibracionDatosPozoRegistradoFiltro, edit: new CalibracionDatosPozoRegistrado()};
    }
    return {...state, edit: new CalibracionDatosPozoRegistrado()};
  }),
  on(deleteCalibracionDatosPozoRegistradoFailure, (state, {error}) => {
    return {...state, edit: new CalibracionDatosPozoRegistrado(), error: error}
  }),

  // action
  on(sortCalibracionDatosPozoRegistrado, (state, {column, direction }) => {
    let calibracionDatosPozoRegistrado = [...state.calibracionDatosPozoRegistradoFiltro];
    calibracionDatosPozoRegistrado.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistrado, state.paginator);
    return {...state, column , direction, calibracionDatosPozoRegistrado}
  }),
  on(filterCalibracionDatosPozoRegistrado, (state, {filtro}) => {
    let calibracionDatosPozoRegistradoFiltro = [...state.calibracionDatosPozoRegistradoFiltro];
    let calibracionDatosPozoRegistrado = [...state.calibracionDatosPozoRegistradoFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return String(item.id).toLocaleLowerCase().includes(term);
    });
    calibracionDatosPozoRegistrado = _paginator(calibracionDatosPozoRegistrado, 1);
    return {...state, filtro, calibracionDatosPozoRegistrado, calibracionDatosPozoRegistradoFiltro}
  }),
  on(paginatorCalibracionDatosPozoRegistrado, (state, {paginator}) => {
    const calibracionDatosPozoRegistrado = _paginator(state.calibracionDatosPozoRegistradoFiltro, paginator);
    return {...state, loading: false, action: true, calibracionDatosPozoRegistrado, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
