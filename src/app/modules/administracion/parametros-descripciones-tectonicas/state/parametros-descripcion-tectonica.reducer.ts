import {ParametrosDescripcionTectonicaState} from './parametros-descripcion-tectonica.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosDescripcionTectonica,
  createModalParametrosDescripcionTectonicaFailure,
  createModalParametrosDescripcionTectonicaSuccess, deleteParametrosDescripcionTectonica, deleteParametrosDescripcionTectonicaFailure, deleteParametrosDescripcionTectonicaSuccess,
  editModalParametrosDescripcionTectonica,
  editModalParametrosDescripcionTectonicaFailure,
  editModalParametrosDescripcionTectonicaSuccess, filterParametrosDescripcionTectonica,
  getAllParametrosDescripcionTectonica,
  getAllParametrosDescripcionTectonicaFailure,
  getAllParametrosDescripcionTectonicaSuccess,
  initParametrosDescripcionTectonica, paginatorParametrosDescripcionTectonica,
  postModalParametrosDescripcionTectonicaFailure,
  postModalParametrosDescripcionTectonicaSuccess,
  putModalParametrosDescripcionTectonicaFailure,
  putModalParametrosDescripcionTectonicaSuccess, sortParametrosDescripcionTectonica,
} from './parametros-descripcion-tectonica.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {DescripcionTectonica} from '../../../../data/models/descripcion-tectonica';
// Estado inicial de las variables
export const initialState: ParametrosDescripcionTectonicaState = {
  loading: true,
  action: false,
  error: '',
  descripcionTectonicas: [],
  descripcionTectonicasFiltro: [],
  edit: new DescripcionTectonica(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosDescripcionTectonicaReducer = createReducer(
  initialState,
  on(initParametrosDescripcionTectonica, (state) => {
    return {...state, loading: false, action: true, error: '', descripcionTectonicas:  [], edit: new DescripcionTectonica()}
  }),
  // get all
  on(getAllParametrosDescripcionTectonica, (state) => {
    return {...state, loading: true, action: false, error: '', descripcionTectonicas: [], descripcionTectonicasFiltro: [], edit: new DescripcionTectonica()}
  }),
  on(getAllParametrosDescripcionTectonicaSuccess, (state, {descripcionTectonicas, descripcionTectonicasFiltro}) => {
    descripcionTectonicas = _paginator(descripcionTectonicas, 1);
    return {...state, loading: false, action: true, descripcionTectonicas, descripcionTectonicasFiltro}
  }),
  on(getAllParametrosDescripcionTectonicaFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosDescripcionTectonica, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosDescripcionTectonicaSuccess, (state, {edit}) => {
    let descripcionTectonicasFiltro = [...state.descripcionTectonicasFiltro];
    descripcionTectonicasFiltro.unshift(edit);// agregar al inicio
    let descripcionTectonicas = _paginator(descripcionTectonicasFiltro, 1);
    return {...state,  descripcionTectonicas, descripcionTectonicasFiltro, edit: new DescripcionTectonica(), paginator:  1};
  }),
  on(createModalParametrosDescripcionTectonicaFailure, (state, {error}) => {
    return {...state, edit: new DescripcionTectonica(), error: error}
  }),
  on(postModalParametrosDescripcionTectonicaSuccess, (state, {edit}) => {
    let descripcionesEdit  = [...state.descripcionTectonicasFiltro].filter(item => item.codDesTec !== edit.codDesTec);
    descripcionesEdit.unshift(edit);
    const descripcionTectonicasFiltro = descripcionesEdit.map((e) => {
      if (e.codDesTec === edit.codDesTec) {
        return edit;
      }
      return e;
    });
    let descripcionTectonicas = _paginator(descripcionTectonicasFiltro, 1);
    return {...state, descripcionTectonicas, descripcionTectonicasFiltro, edit: new DescripcionTectonica(), paginator:  1};
  }),
  on(postModalParametrosDescripcionTectonicaFailure, (state, {edit, error}) => {
    const descripcionTectonicas = state.descripcionTectonicas.filter(item => item.codDesTec !== edit.codDesTec);
    return {...state, descripcionTectonicas, edit: new DescripcionTectonica(), error: error}
  }),

  // edit
  on(editModalParametrosDescripcionTectonica, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosDescripcionTectonicaSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosDescripcionTectonicaFailure, (state, {error}) => {
    return {...state, edit: new DescripcionTectonica(), error: error}
  }),
  on(putModalParametrosDescripcionTectonicaSuccess, (state, { edit}) => {
    const descripcionTectonicasFiltro = [...state.descripcionTectonicasFiltro].map((e) => {
      if (e.codDesTec === edit.codDesTec) {
        return edit;
      }
      return e;
    });
    let descripcionTectonicas = _paginator(descripcionTectonicasFiltro, state.paginator);
    return {...state, descripcionTectonicas, descripcionTectonicasFiltro, edit: new DescripcionTectonica()};
  }),
  on(putModalParametrosDescripcionTectonicaFailure, (state, {edit, error}) => {
    return {...state, edit: new DescripcionTectonica(), error: error}
  }),

  // delete
  on(deleteParametrosDescripcionTectonica, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosDescripcionTectonicaSuccess, (state, {edit}) => {
    let descripcionTectonicasFiltro = state.descripcionTectonicasFiltro.filter((item: DescripcionTectonica) => item.codDesTec !== edit.codDesTec);
    let descripcionTectonicas = _paginator(descripcionTectonicasFiltro, state.paginator);
    return {...state, descripcionTectonicas, descripcionTectonicasFiltro, edit: new DescripcionTectonica()};
  }),
  on(deleteParametrosDescripcionTectonicaFailure, (state, {error}) => {
    return {...state, edit: new DescripcionTectonica(), error: error}
  }),

  // action
  on(sortParametrosDescripcionTectonica, (state, {column, direction }) => {
    let descripcionTectonicas = [...state.descripcionTectonicasFiltro];
    descripcionTectonicas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    descripcionTectonicas = _paginator(descripcionTectonicas, state.paginator);
    return {...state, column , direction, descripcionTectonicas}
  }),
  on(filterParametrosDescripcionTectonica, (state, {filtro}) => {
    let descripcionTectonicasFiltro = [...state.descripcionTectonicasFiltro];
    let descripcionTectonicas = [...state.descripcionTectonicasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codDesTec.toLocaleLowerCase().includes(term);
    });
    descripcionTectonicas = _paginator(descripcionTectonicas, 1);
    return {...state, filtro, descripcionTectonicas, descripcionTectonicasFiltro}
  }),
  on(paginatorParametrosDescripcionTectonica, (state, {paginator}) => {
    const descripcionTectonicas = _paginator(state.descripcionTectonicasFiltro, paginator);
    return {...state, loading: false, action: true, descripcionTectonicas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
