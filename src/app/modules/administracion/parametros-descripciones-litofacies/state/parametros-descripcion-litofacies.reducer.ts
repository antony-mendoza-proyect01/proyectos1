import {ParametrosDescripcionLitofaciesState} from './parametros-descripcion-litofacies.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosDescripcionesLitofacies,
  createModalParametrosDescripcionesLitofaciesFailure,
  createModalParametrosDescripcionesLitofaciesSuccess, deleteParametrosDescripcionesLitofacies, deleteParametrosDescripcionesLitofaciesFailure, deleteParametrosDescripcionesLitofaciesSuccess,
  editModalParametrosDescripcionesLitofacies,
  editModalParametrosDescripcionesLitofaciesFailure,
  editModalParametrosDescripcionesLitofaciesSuccess, filterParametrosDescripcionesLitofacies,
  getAllParametrosDescripcionesLitofacies,
  getAllParametrosDescripcionesLitofaciesFailure,
  getAllParametrosDescripcionesLitofaciesSuccess,
  initParametrosDescripcionesLitofacies, paginatorParametrosDescripcionesLitofacies,
  postModalParametrosDescripcionesLitofaciesFailure,
  postModalParametrosDescripcionesLitofaciesSuccess,
  putModalParametrosDescripcionesLitofaciesFailure,
  putModalParametrosDescripcionesLitofaciesSuccess, sortParametrosDescripcionesLitofacies,
} from './parametros-descripcion-litofacies.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {DescripcionesLitofacies} from '../../../../data/models/descripciones-litofacies';
// Estado inicial de las variables
export const initialState: ParametrosDescripcionLitofaciesState = {
  loading: true,
  action: false,
  error: '',
  descripcionesLitofacies: [],
  descripcionesLitofaciesFiltro: [],
  edit: new DescripcionesLitofacies(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosDescripcionLitofaciesReducer = createReducer(
  initialState,
  on(initParametrosDescripcionesLitofacies, (state) => {
    return {...state, loading: false, action: true, error: '', descripcionesLitofacies:  [], edit: new DescripcionesLitofacies()}
  }),
  // get all
  on(getAllParametrosDescripcionesLitofacies, (state) => {
    return {...state, loading: true, action: false, error: '', descripcionesLitofacies: [], descripcionesLitofaciesFiltro: [], edit: new DescripcionesLitofacies()}
  }),
  on(getAllParametrosDescripcionesLitofaciesSuccess, (state, {descripcionesLitofacies, descripcionesLitofaciesFiltro}) => {
    descripcionesLitofacies = _paginator(descripcionesLitofacies, 1);
    return {...state, loading: false, action: true, descripcionesLitofacies, descripcionesLitofaciesFiltro}
  }),
  on(getAllParametrosDescripcionesLitofaciesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosDescripcionesLitofacies, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosDescripcionesLitofaciesSuccess, (state, {edit}) => {
    let descripcionesLitofaciesFiltro = [...state.descripcionesLitofaciesFiltro];
    descripcionesLitofaciesFiltro.unshift(edit);// agregar al inicio
    let descripcionesLitofacies = _paginator(descripcionesLitofaciesFiltro, 1);
    return {...state,  descripcionesLitofacies, descripcionesLitofaciesFiltro, edit: new DescripcionesLitofacies(), paginator:  1};
  }),
  on(createModalParametrosDescripcionesLitofaciesFailure, (state, {error}) => {
    return {...state, edit: new DescripcionesLitofacies(), error: error}
  }),
  on(postModalParametrosDescripcionesLitofaciesSuccess, (state, {edit}) => {
    let descripcionesEdit  = [...state.descripcionesLitofaciesFiltro].filter(item => item.id !== edit.id);
    descripcionesEdit.unshift(edit);
    const descripcionesLitofaciesFiltro = descripcionesEdit.map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let descripcionesLitofacies = _paginator(descripcionesLitofaciesFiltro, 1);
    return {...state, descripcionesLitofacies, descripcionesLitofaciesFiltro, edit: new DescripcionesLitofacies(), paginator:  1};
  }),
  on(postModalParametrosDescripcionesLitofaciesFailure, (state, {edit, error}) => {
    const descripcionesLitofacies = state.descripcionesLitofacies.filter(item => item.id !== edit.id);
    return {...state, descripcionesLitofacies, edit: new DescripcionesLitofacies(), error: error}
  }),

  // edit
  on(editModalParametrosDescripcionesLitofacies, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosDescripcionesLitofaciesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosDescripcionesLitofaciesFailure, (state, {error}) => {
    return {...state, edit: new DescripcionesLitofacies(), error: error}
  }),
  on(putModalParametrosDescripcionesLitofaciesSuccess, (state, { edit}) => {
    const descripcionesLitofaciesFiltro = [...state.descripcionesLitofaciesFiltro].map((e) => {
      if (e.id === edit.id) {
        return edit;
      }
      return e;
    });
    let descripcionesLitofacies = _paginator(descripcionesLitofaciesFiltro, state.paginator);
    return {...state, descripcionesLitofacies, descripcionesLitofaciesFiltro, edit: new DescripcionesLitofacies()};
  }),
  on(putModalParametrosDescripcionesLitofaciesFailure, (state, {edit, error}) => {
    return {...state, edit: new DescripcionesLitofacies(), error: error}
  }),

  // delete
  on(deleteParametrosDescripcionesLitofacies, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosDescripcionesLitofaciesSuccess, (state, {edit}) => {
    let descripcionesLitofaciesFiltro = state.descripcionesLitofaciesFiltro.filter((item: DescripcionesLitofacies) => item.id !== edit.id);
    let descripcionesLitofacies = _paginator(descripcionesLitofaciesFiltro, state.paginator);
    return {...state, descripcionesLitofacies, descripcionesLitofaciesFiltro, edit: new DescripcionesLitofacies()};
  }),
  on(deleteParametrosDescripcionesLitofaciesFailure, (state, {error}) => {
    return {...state, edit: new DescripcionesLitofacies(), error: error}
  }),

  // action
  on(sortParametrosDescripcionesLitofacies, (state, {column, direction }) => {
    let descripcionesLitofacies = [...state.descripcionesLitofaciesFiltro];
    descripcionesLitofacies.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    descripcionesLitofacies = _paginator(descripcionesLitofacies, state.paginator);
    return {...state, column , direction, descripcionesLitofacies}
  }),
  on(filterParametrosDescripcionesLitofacies, (state, {filtro}) => {
    let descripcionesLitofaciesFiltro = [...state.descripcionesLitofaciesFiltro];
    let descripcionesLitofacies = [...state.descripcionesLitofaciesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.caracteristicas.toLocaleLowerCase().includes(term)
        || item.grupo.toLocaleLowerCase().includes(term);
    });
    descripcionesLitofacies = _paginator(descripcionesLitofacies, 1);
    return {...state, filtro, descripcionesLitofacies, descripcionesLitofaciesFiltro}
  }),
  on(paginatorParametrosDescripcionesLitofacies, (state, {paginator}) => {
    const descripcionesLitofacies = _paginator(state.descripcionesLitofaciesFiltro, paginator);
    return {...state, loading: false, action: true, descripcionesLitofacies, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
