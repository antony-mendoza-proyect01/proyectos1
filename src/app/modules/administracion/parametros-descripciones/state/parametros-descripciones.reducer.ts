import {ParametrosDescripcionesState} from './parametros-descripciones.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosDescripciones,
  createModalParametrosDescripcionesFailure,
  createModalParametrosDescripcionesSuccess, deleteParametrosDescripciones, deleteParametrosDescripcionesFailure, deleteParametrosDescripcionesSuccess,
  editModalParametrosDescripciones, editModalParametrosDescripcionesFailure, editModalParametrosDescripcionesSuccess, filterParametrosDescripciones,
  getAllParametrosDescripciones,
  getAllParametrosDescripcionesFailure,
  getAllParametrosDescripcionesSuccess,
  initParametrosDescripciones, paginatorParametrosDescripciones,
  postModalParametrosDescripcionesFailure,
  postModalParametrosDescripcionesSuccess, putModalParametrosDescripcionesFailure, putModalParametrosDescripcionesSuccess, sortParametrosDescripciones
} from './parametros-descripciones.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Descripciones } from 'src/app/data/models/descripciones';

// Estado inicial de las variables
export const initialState: ParametrosDescripcionesState = {
  loading: true,
  action: false,
  error: '',
  descripciones: [],
  descripcionesFiltro: [],
  edit: new Descripciones(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosDescripcionesReducer = createReducer(
  initialState,
  on(initParametrosDescripciones, (state) => {
    return {...state, loading: false, action: true, error: '', descripciones:  [], edit: new Descripciones()}
  }),
  // get all
  on(getAllParametrosDescripciones, (state) => {
    return {...state, loading: true, action: false, error: '', descripciones: [], descripcionesFiltro: [], edit: new Descripciones()}
  }),
  on(getAllParametrosDescripcionesSuccess, (state, {descripciones, descripcionesFiltro}) => {
    descripciones = _paginator(descripciones, 1);
    return {...state, loading: false, action: true, descripciones, descripcionesFiltro}
  }),
  on(getAllParametrosDescripcionesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosDescripciones, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosDescripcionesSuccess, (state, {edit}) => {
    let descripcionesFiltro = [...state.descripcionesFiltro];
    descripcionesFiltro.unshift(edit);// agreParametrosar al inicio
    let descripciones = _paginator(descripcionesFiltro, 1);
    return {...state,  descripciones, descripcionesFiltro, edit: new Descripciones(), paginator:  1};
  }),
  on(createModalParametrosDescripcionesFailure, (state, {error}) => {
    return {...state, edit: new Descripciones(), error: error}
  }),
  on(postModalParametrosDescripcionesSuccess, (state, {edit}) => {
    let descripcionesEdit  = [...state.descripcionesFiltro].filter(item => item.codigo !== edit.codigo);
    descripcionesEdit.unshift(edit);
    const descripcionesFiltro = descripcionesEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let descripciones = _paginator(descripcionesFiltro, 1);
    return {...state, descripciones, descripcionesFiltro, edit: new Descripciones(), paginator:  1};
  }),
  on(postModalParametrosDescripcionesFailure, (state, {edit, error}) => {
    const descripciones = state.descripciones.filter(item => item.codigo !== edit.codigo);
    return {...state, descripciones, edit: new Descripciones(), error: error}
  }),

  // edit
  on(editModalParametrosDescripciones, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosDescripcionesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosDescripcionesFailure, (state, {error}) => {
    return {...state, edit: new Descripciones(), error: error}
  }),
  on(putModalParametrosDescripcionesSuccess, (state, { edit}) => {
    const descripcionesFiltro = [...state.descripcionesFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let descripciones = _paginator(descripcionesFiltro, state.paginator);
    return {...state, descripciones, descripcionesFiltro, edit: new Descripciones()};
  }),
  on(putModalParametrosDescripcionesFailure, (state, {edit, error}) => {
    return {...state, edit: new Descripciones(), error: error}
  }),

  // delete
  on(deleteParametrosDescripciones, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosDescripcionesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let descripcionesFiltro = state.descripcionesFiltro.filter((item: Descripciones) => item.codigo !== edit.codigo);
      let descripciones = _paginator(descripcionesFiltro, state.paginator);
      return {...state, descripciones, descripcionesFiltro, edit: new Descripciones()};
    }
    return {...state, edit: new Descripciones()};
  }),
  on(deleteParametrosDescripcionesFailure, (state, {error}) => {
    return {...state, edit: new Descripciones(), error: error}
  }),

  // action
  on(sortParametrosDescripciones, (state, {column, direction }) => {
    let descripciones = [...state.descripcionesFiltro];
    descripciones.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    descripciones = _paginator(descripciones, state.paginator);
    return {...state, column , direction, descripciones}
  }),
  on(filterParametrosDescripciones, (state, {filtro}) => {
    let descripcionesFiltro = [...state.descripcionesFiltro];
    let descripciones = [...state.descripcionesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.descripcion.toLocaleLowerCase().includes(term) ||
        item.codigo.toLocaleLowerCase().includes(term);
    });
    descripciones = _paginator(descripciones, 1);
    return {...state, filtro, descripciones, descripcionesFiltro}
  }),
  on(paginatorParametrosDescripciones, (state, {paginator}) => {
    const descripciones = _paginator(state.descripcionesFiltro, paginator);
    return {...state, loading: false, action: true, descripciones, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
