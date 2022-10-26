import {ParametrosContratosPerforacionState} from './parametros-contratos-perforacion.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosContratosPerforacion,
  createModalParametrosContratosPerforacionFailure,
  createModalParametrosContratosPerforacionSuccess,
  deleteParametrosContratosPerforacion,
  deleteParametrosContratosPerforacionFailure,
  deleteParametrosContratosPerforacionSuccess, detailParametrosContratosPerforacion,
  editModalParametrosContratosPerforacion,
  editModalParametrosContratosPerforacionFailure,
  editModalParametrosContratosPerforacionSuccess,
  filterParametrosContratosPerforacion,
  getAllParametrosContratosPerforacion,
  getAllParametrosContratosPerforacionFailure,
  getAllParametrosContratosPerforacionSuccess,
  initParametrosContratosPerforacion,
  paginatorParametrosContratosPerforacion,
  postModalParametrosContratosPerforacionFailure,
  postModalParametrosContratosPerforacionSuccess,
  putModalParametrosContratosPerforacionFailure,
  putModalParametrosContratosPerforacionSuccess,
  sortParametrosContratosPerforacion,
} from './parametros-contratos-perforacion.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Contratos} from '../../../../data/models/contratos';

// Estado inicial de las variables
export const initialState: ParametrosContratosPerforacionState = {
  loading: true,
  action: false,
  error: '',
  contratosPerforacion: [],
  contratosPerforacionFiltro: [],
  edit: new Contratos(),
  column: '',
  direction:  '',
  paginator:  1,
  detailContratosPerforacion: new Contratos(),
  loadingDetail: false,
  errorDetail: '',
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosContratosPerforacionReducer = createReducer(
  initialState,
  on(initParametrosContratosPerforacion, (state) => {
    return {...state, loading: false, action: true, error: '', contratosPerforacion:  [], edit: new Contratos()}
  }),
  // get all
  on(getAllParametrosContratosPerforacion, (state) => {
    return {...state, loading: true, action: false, error: '', contratosPerforacion: [], contratosPerforacionFiltro: [], edit: new Contratos()}
  }),
  on(getAllParametrosContratosPerforacionSuccess, (state, {contratosPerforacion, contratosPerforacionFiltro}) => {
    contratosPerforacion = _paginator(contratosPerforacion, 1);
    return {...state, loading: false, action: true, contratosPerforacion, contratosPerforacionFiltro}
  }),
  on(getAllParametrosContratosPerforacionFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosContratosPerforacion, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosContratosPerforacionSuccess, (state, {edit}) => {
    let contratosPerforacionFiltro = [...state.contratosPerforacionFiltro];
    contratosPerforacionFiltro.unshift(edit);// agreParametrosar al inicio
    let contratosPerforacion = _paginator(contratosPerforacionFiltro, 1);
    return {...state,  contratosPerforacion, contratosPerforacionFiltro, edit: new Contratos(), paginator:  1};
  }),
  on(createModalParametrosContratosPerforacionFailure, (state, {error}) => {
    return {...state, edit: new Contratos(), error: error}
  }),
  on(postModalParametrosContratosPerforacionSuccess, (state, {edit}) => {
    const contratosPerforacionFiltro = [...state.contratosPerforacionFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosPerforacion = _paginator(contratosPerforacionFiltro, 1);
    return {...state, contratosPerforacion, contratosPerforacionFiltro, edit: new Contratos(), paginator:  1};
  }),
  on(postModalParametrosContratosPerforacionFailure, (state, {edit, error}) => {
    const contratosPerforacion = state.contratosPerforacion.filter(item => item.codigo !== edit.codigo);
    return {...state, contratosPerforacion, edit: new Contratos(), error: error}
  }),

  // edit
  on(editModalParametrosContratosPerforacion, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosContratosPerforacionSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosContratosPerforacionFailure, (state, {error}) => {
    return {...state, edit: new Contratos(), error: error}
  }),
  on(putModalParametrosContratosPerforacionSuccess, (state, { edit}) => {
    const contratosPerforacionFiltro = [...state.contratosPerforacionFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosPerforacion = _paginator(contratosPerforacionFiltro, state.paginator);
    return {...state, contratosPerforacion, contratosPerforacionFiltro, edit: new Contratos()};
  }),
  on(putModalParametrosContratosPerforacionFailure, (state, {edit, error}) => {
    return {...state, edit: new Contratos(), error: error}
  }),

  // delete
  on(deleteParametrosContratosPerforacion, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosContratosPerforacionSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let contratosPerforacionFiltro = state.contratosPerforacionFiltro.filter((item: Contratos) => item.codigo !== edit.codigo);
      let contratosPerforacion = _paginator(contratosPerforacionFiltro, state.paginator);
      return {...state, contratosPerforacion, contratosPerforacionFiltro, edit: new Contratos()};
    }
    return {...state, edit: new Contratos()};
  }),
  on(deleteParametrosContratosPerforacionFailure, (state, {error}) => {
    return {...state, edit: new Contratos(), error: error}
  }),

  // action
  on(sortParametrosContratosPerforacion, (state, {column, direction }) => {
    let contratosPerforacion = [...state.contratosPerforacionFiltro];
    contratosPerforacion.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    contratosPerforacion = _paginator(contratosPerforacion, state.paginator);
    return {...state, column , direction, contratosPerforacion}
  }),
  on(filterParametrosContratosPerforacion, (state, {filtro}) => {
    let contratosPerforacionFiltro = [...state.contratosPerforacionFiltro];
    let contratosPerforacion = [...state.contratosPerforacionFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.descripcion.toLocaleLowerCase().includes(term);
    });
    contratosPerforacion = _paginator(contratosPerforacion, 1);
    return {...state, filtro, contratosPerforacion, contratosPerforacionFiltro}
  }),
  on(paginatorParametrosContratosPerforacion, (state, {paginator}) => {
    const contratosPerforacion = _paginator(state.contratosPerforacionFiltro, paginator);
    return {...state, loading: false, action: true, contratosPerforacion, paginator}
  }),
  on(detailParametrosContratosPerforacion, (state, {edit}) => {
    return {...state, detailContratosPerforacion: edit}
  }),


);


let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
