import {ParametrosVisibilidadesState} from './parametros-visibilidades.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosVisibilidades,
  createModalParametrosVisibilidadesFailure,
  createModalParametrosVisibilidadesSuccess, deleteParametrosVisibilidades, deleteParametrosVisibilidadesFailure, deleteParametrosVisibilidadesSuccess,
  editModalParametrosVisibilidades, editModalParametrosVisibilidadesFailure, editModalParametrosVisibilidadesSuccess, filterParametrosVisibilidades,
  getAllParametrosVisibilidades,
  getAllParametrosVisibilidadesFailure,
  getAllParametrosVisibilidadesSuccess,
  initParametrosVisibilidades, paginatorParametrosVisibilidades,
  postModalParametrosVisibilidadesFailure,
  postModalParametrosVisibilidadesSuccess, putModalParametrosVisibilidadesFailure, putModalParametrosVisibilidadesSuccess, sortParametrosVisibilidades
} from './parametros-visibilidades.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Visibilidades } from 'src/app/data/models/visibilidades';

// Estado inicial de las variables
export const initialState: ParametrosVisibilidadesState = {
  loading: true,
  action: false,
  error: '',
  visibilidades: [],
  visibilidadesFiltro: [],
  edit: new Visibilidades(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosVisibilidadesReducer = createReducer(
  initialState,
  on(initParametrosVisibilidades, (state) => {
    return {...state, loading: false, action: true, error: '', visibilidades:  [], edit: new Visibilidades()}
  }),
  // get all
  on(getAllParametrosVisibilidades, (state) => {
    return {...state, loading: true, action: false, error: '', visibilidades: [], visibilidadesFiltro: [], edit: new Visibilidades()}
  }),
  on(getAllParametrosVisibilidadesSuccess, (state, {visibilidades, visibilidadesFiltro}) => {
    visibilidades = _paginator(visibilidades, 1);
    return {...state, loading: false, action: true, visibilidades, visibilidadesFiltro}
  }),
  on(getAllParametrosVisibilidadesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosVisibilidades, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosVisibilidadesSuccess, (state, {edit}) => {
    let visibilidadesFiltro = [...state.visibilidadesFiltro];
    visibilidadesFiltro.unshift(edit);// agreParametrosar al inicio
    let visibilidades = _paginator(visibilidadesFiltro, 1);
    return {...state,  visibilidades, visibilidadesFiltro, edit: new Visibilidades(), paginator:  1};
  }),
  on(createModalParametrosVisibilidadesFailure, (state, {error}) => {
    return {...state, edit: new Visibilidades(), error: error}
  }),
  on(postModalParametrosVisibilidadesSuccess, (state, {edit}) => {
    let visibilidadesEdit  = [...state.visibilidadesFiltro].filter(item => item.codVisibilidad !== edit.codVisibilidad);
    visibilidadesEdit.unshift(edit);
    const visibilidadesFiltro = visibilidadesEdit.map((e) => {
      if (e.codVisibilidad === edit.codVisibilidad) {
        return edit;
      }
      return e;
    });
    let visibilidades = _paginator(visibilidadesFiltro, 1);
    return {...state, visibilidades, visibilidadesFiltro, edit: new Visibilidades(), paginator:  1};
  }),
  on(postModalParametrosVisibilidadesFailure, (state, {edit, error}) => {
    const visibilidades = state.visibilidades.filter(item => item.codVisibilidad !== edit.codVisibilidad);
    return {...state, visibilidades, edit: new Visibilidades(), error: error}
  }),

  // edit
  on(editModalParametrosVisibilidades, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosVisibilidadesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosVisibilidadesFailure, (state, {error}) => {
    return {...state, edit: new Visibilidades(), error: error}
  }),
  on(putModalParametrosVisibilidadesSuccess, (state, { edit}) => {
    const visibilidadesFiltro = [...state.visibilidadesFiltro].map((e) => {
      if (e.codVisibilidad === edit.codVisibilidad) {
        return edit;
      }
      return e;
    });
    let visibilidades = _paginator(visibilidadesFiltro, state.paginator);
    return {...state, visibilidades, visibilidadesFiltro, edit: new Visibilidades()};
  }),
  on(putModalParametrosVisibilidadesFailure, (state, {edit, error}) => {
    return {...state, edit: new Visibilidades(), error: error}
  }),

  // delete
  on(deleteParametrosVisibilidades, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosVisibilidadesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let visibilidadesFiltro = state.visibilidadesFiltro.filter((item: Visibilidades) => item.codVisibilidad !== edit.codVisibilidad);
      let visibilidades = _paginator(visibilidadesFiltro, state.paginator);
      return {...state, visibilidades, visibilidadesFiltro, edit: new Visibilidades()};
    }
    return {...state, edit: new Visibilidades()};
  }),
  on(deleteParametrosVisibilidadesFailure, (state, {error}) => {
    return {...state, edit: new Visibilidades(), error: error}
  }),

  // action
  on(sortParametrosVisibilidades, (state, {column, direction }) => {
    let visibilidades = [...state.visibilidadesFiltro];
    visibilidades.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    visibilidades = _paginator(visibilidades, state.paginator);
    return {...state, column , direction, visibilidades}
  }),
  on(filterParametrosVisibilidades, (state, {filtro}) => {
    let visibilidadesFiltro = [...state.visibilidadesFiltro];
    let visibilidades = [...state.visibilidadesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.visibilidad.toLocaleLowerCase().includes(term);

    });
    visibilidades = _paginator(visibilidades, 1);
    return {...state, filtro, visibilidades, visibilidadesFiltro}
  }),
  on(paginatorParametrosVisibilidades, (state, {paginator}) => {
    const visibilidades = _paginator(state.visibilidadesFiltro, paginator);
    return {...state, loading: false, action: true, visibilidades, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
