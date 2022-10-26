import {ParametrosDescripcionSedimentariaState} from './parametros-descripcion-sedimentaria.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosDescripcionSedimentaria,
  createModalParametrosDescripcionSedimentariaFailure,
  createModalParametrosDescripcionSedimentariaSuccess, deleteParametrosDescripcionSedimentaria, deleteParametrosDescripcionSedimentariaFailure, deleteParametrosDescripcionSedimentariaSuccess,
  editModalParametrosDescripcionSedimentaria, editModalParametrosDescripcionSedimentariaFailure, editModalParametrosDescripcionSedimentariaSuccess, filterParametrosDescripcionSedimentaria,
  getAllParametrosDescripcionSedimentaria,
  getAllParametrosDescripcionSedimentariaFailure,
  getAllParametrosDescripcionSedimentariaSuccess,
  initParametrosDescripcionSedimentaria, paginatorParametrosDescripcionSedimentaria,
  postModalParametrosDescripcionSedimentariaFailure,
  postModalParametrosDescripcionSedimentariaSuccess, putModalParametrosDescripcionSedimentariaFailure, putModalParametrosDescripcionSedimentariaSuccess, sortParametrosDescripcionSedimentaria
} from './parametros-descripcion-sedimentaria.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { DescripcionSedimentaria } from 'src/app/data/models/descripcion-sedimentaria';

// Estado inicial de las variables
export const initialState: ParametrosDescripcionSedimentariaState = {
  loading: true,
  action: false,
  error: '',
  descripcionSedimentarias: [],
  descripcionSedimentariasFiltro: [],
  edit: new DescripcionSedimentaria(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosDescripcionSedimentariaReducer = createReducer(
  initialState,
  on(initParametrosDescripcionSedimentaria, (state) => {
    return {...state, loading: false, action: true, error: '', descripcionSedimentarias:  [], edit: new DescripcionSedimentaria()}
  }),
  // get all
  on(getAllParametrosDescripcionSedimentaria, (state) => {
    return {...state, loading: true, action: false, error: '', descripcionSedimentarias: [], descripcionSedimentariasFiltro: [], edit: new DescripcionSedimentaria()}
  }),
  on(getAllParametrosDescripcionSedimentariaSuccess, (state, {descripcionSedimentarias, descripcionSedimentariasFiltro}) => {
    descripcionSedimentarias = _paginator(descripcionSedimentarias, 1);
    return {...state, loading: false, action: true, descripcionSedimentarias, descripcionSedimentariasFiltro}
  }),
  on(getAllParametrosDescripcionSedimentariaFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosDescripcionSedimentaria, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosDescripcionSedimentariaSuccess, (state, {edit}) => {
    let descripcionSedimentariasFiltro = [...state.descripcionSedimentariasFiltro];
    descripcionSedimentariasFiltro.unshift(edit);// agreParametrosar al inicio
    let descripcionSedimentarias = _paginator(descripcionSedimentariasFiltro, 1);
    return {...state,  descripcionSedimentarias, descripcionSedimentariasFiltro, edit: new DescripcionSedimentaria(), paginator:  1};
  }),
  on(createModalParametrosDescripcionSedimentariaFailure, (state, {error}) => {
    return {...state, edit: new DescripcionSedimentaria(), error: error}
  }),
  on(postModalParametrosDescripcionSedimentariaSuccess, (state, {edit}) => {
    let descripcionSedimentariasEdit  = [...state.descripcionSedimentariasFiltro].filter(item => item.codDesSed !== null);
    descripcionSedimentariasEdit.unshift(edit);
    const descripcionSedimentariasFiltro = descripcionSedimentariasEdit.map((e) => {
      if (e.codDesSed === edit.codDesSed) {
        return edit;
      }
      return e;
    });
    let descripcionSedimentarias = _paginator(descripcionSedimentariasFiltro, 1);
    return {...state, descripcionSedimentarias, descripcionSedimentariasFiltro, edit: new DescripcionSedimentaria(), paginator:  1};
  }),
  on(postModalParametrosDescripcionSedimentariaFailure, (state, {edit, error}) => {
    const descripcionSedimentarias = state.descripcionSedimentarias.filter(item => item.codDesSed !== edit.codDesSed);
    return {...state, descripcionSedimentarias, edit: new DescripcionSedimentaria(), error: error}
  }),

  // edit
  on(editModalParametrosDescripcionSedimentaria, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosDescripcionSedimentariaSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosDescripcionSedimentariaFailure, (state, {error}) => {
    return {...state, edit: new DescripcionSedimentaria(), error: error}
  }),
  on(putModalParametrosDescripcionSedimentariaSuccess, (state, { edit}) => {
    const descripcionSedimentariasFiltro = [...state.descripcionSedimentariasFiltro].map((e) => {
      if (e.codDesSed === edit.codDesSed) {
        return edit;
      }
      return e;
    });
    let descripcionSedimentarias = _paginator(descripcionSedimentariasFiltro, state.paginator);
    return {...state, descripcionSedimentarias, descripcionSedimentariasFiltro, edit: new DescripcionSedimentaria()};
  }),
  on(putModalParametrosDescripcionSedimentariaFailure, (state, {edit, error}) => {
    return {...state, edit: new DescripcionSedimentaria(), error: error}
  }),

  // delete
  on(deleteParametrosDescripcionSedimentaria, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosDescripcionSedimentariaSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let descripcionSedimentariasFiltro = state.descripcionSedimentariasFiltro.filter((item: DescripcionSedimentaria) => item.codDesSed !== edit.codDesSed);
      let descripcionSedimentarias = _paginator(descripcionSedimentariasFiltro, state.paginator);
      return {...state, descripcionSedimentarias, descripcionSedimentariasFiltro, edit: new DescripcionSedimentaria()};
    }
    return {...state, edit: new DescripcionSedimentaria()};
  }),
  on(deleteParametrosDescripcionSedimentariaFailure, (state, {error}) => {
    return {...state, edit: new DescripcionSedimentaria(), error: error}
  }),

  // action
  on(sortParametrosDescripcionSedimentaria, (state, {column, direction }) => {
    let descripcionSedimentarias = [...state.descripcionSedimentariasFiltro];
    descripcionSedimentarias.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    descripcionSedimentarias = _paginator(descripcionSedimentarias, state.paginator);
    return {...state, column , direction, descripcionSedimentarias}
  }),
  on(filterParametrosDescripcionSedimentaria, (state, {filtro}) => {
    let descripcionSedimentariasFiltro = [...state.descripcionSedimentariasFiltro];
    let descripcionSedimentarias = [...state.descripcionSedimentariasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.descripcion.toLocaleLowerCase().includes(term);
    });
    descripcionSedimentarias = _paginator(descripcionSedimentarias, 1);
    return {...state, filtro, descripcionSedimentarias, descripcionSedimentariasFiltro}
  }),
  on(paginatorParametrosDescripcionSedimentaria, (state, {paginator}) => {
    const descripcionSedimentarias = _paginator(state.descripcionSedimentariasFiltro, paginator);
    return {...state, loading: false, action: true, descripcionSedimentarias, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
