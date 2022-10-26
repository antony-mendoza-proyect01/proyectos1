import {ParametrosMinabilidaesState} from './parametros-minabilidaes.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosMinabilidades,
  createModalParametrosMinabilidadesFailure,
  createModalParametrosMinabilidadesSuccess, deleteParametrosMinabilidades, deleteParametrosMinabilidadesFailure, deleteParametrosMinabilidadesSuccess,
  editModalParametrosMinabilidades, editModalParametrosMinabilidadesFailure, editModalParametrosMinabilidadesSuccess, filterParametrosMinabilidades,
  getAllParametrosMinabilidades,
  getAllParametrosMinabilidadesFailure,
  getAllParametrosMinabilidadesSuccess,
  initParametrosMinabilidades, paginatorParametrosMinabilidades,
  postModalParametrosMinabilidadesFailure,
  postModalParametrosMinabilidadesSuccess, putModalParametrosMinabilidadesFailure, putModalParametrosMinabilidadesSuccess, sortParametrosMinabilidades
} from './parametros-minabilidaes.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Minabilidades } from 'src/app/data/models/minabilidades';

// Estado inicial de las variables
export const initialState: ParametrosMinabilidaesState = {
  loading: true,
  action: false,
  error: '',
  minabilidades: [],
  minabilidadesFiltro: [],
  edit: new Minabilidades(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosMinabilidaesReducer = createReducer(
  initialState,
  on(initParametrosMinabilidades, (state) => {
    return {...state, loading: false, action: true, error: '', minabilidades:  [], edit: new Minabilidades()}
  }),
  // get all
  on(getAllParametrosMinabilidades, (state) => {
    return {...state, loading: true, action: false, error: '', minabilidades: [], minabilidadesFiltro: [], edit: new Minabilidades()}
  }),
  on(getAllParametrosMinabilidadesSuccess, (state, {minabilidades, minabilidadesFiltro}) => {
    minabilidades = _paginator(minabilidades, 1);
    return {...state, loading: false, action: true, minabilidades, minabilidadesFiltro}
  }),
  on(getAllParametrosMinabilidadesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosMinabilidades, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosMinabilidadesSuccess, (state, {edit}) => {
    let minabilidadesFiltro = [...state.minabilidadesFiltro];
    minabilidadesFiltro.unshift(edit);// agreParametrosar al inicio
    let minabilidades = _paginator(minabilidadesFiltro, 1);
    return {...state,  minabilidades, minabilidadesFiltro, edit: new Minabilidades(), paginator:  1};
  }),
  on(createModalParametrosMinabilidadesFailure, (state, {error}) => {
    return {...state, edit: new Minabilidades(), error: error}
  }),
  on(postModalParametrosMinabilidadesSuccess, (state, {edit}) => {
    let minabilidadesEdit  = [...state.minabilidadesFiltro].filter(item => item.codMinabilidad !== edit.codMinabilidad);
    minabilidadesEdit.unshift(edit);
    const minabilidadesFiltro = minabilidadesEdit.map((e) => {
      if (e.codMinabilidad === edit.codMinabilidad) {
        return edit;
      }
      return e;
    });
    let minabilidades = _paginator(minabilidadesFiltro, 1);
    return {...state, minabilidades, minabilidadesFiltro, edit: new Minabilidades(), paginator:  1};
  }),
  on(postModalParametrosMinabilidadesFailure, (state, {edit, error}) => {
    const minabilidades = state.minabilidades.filter(item => item.codMinabilidad !== edit.codMinabilidad);
    return {...state, minabilidades, edit: new Minabilidades(), error: error}
  }),

  // edit
  on(editModalParametrosMinabilidades, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosMinabilidadesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosMinabilidadesFailure, (state, {error}) => {
    return {...state, edit: new Minabilidades(), error: error}
  }),
  on(putModalParametrosMinabilidadesSuccess, (state, { edit}) => {
    const minabilidadesFiltro = [...state.minabilidadesFiltro].map((e) => {
      if (e.codMinabilidad === edit.codMinabilidad) {
        return edit;
      }
      return e;
    });
    let minabilidades = _paginator(minabilidadesFiltro, state.paginator);
    return {...state, minabilidades, minabilidadesFiltro, edit: new Minabilidades()};
  }),
  on(putModalParametrosMinabilidadesFailure, (state, {edit, error}) => {
    return {...state, edit: new Minabilidades(), error: error}
  }),

  // delete
  on(deleteParametrosMinabilidades, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosMinabilidadesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let minabilidadesFiltro = state.minabilidadesFiltro.filter((item: Minabilidades) => item.codMinabilidad !== edit.codMinabilidad);
      let minabilidades = _paginator(minabilidadesFiltro, state.paginator);
      return {...state, minabilidades, minabilidadesFiltro, edit: new Minabilidades()};
    }
    return {...state, edit: new Minabilidades()};
  }),
  on(deleteParametrosMinabilidadesFailure, (state, {error}) => {
    return {...state, edit: new Minabilidades(), error: error}
  }),

  // action
  on(sortParametrosMinabilidades, (state, {column, direction }) => {
    let minabilidades = [...state.minabilidadesFiltro];
    minabilidades.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    minabilidades = _paginator(minabilidades, state.paginator);
    return {...state, column , direction, minabilidades}
  }),
  on(filterParametrosMinabilidades, (state, {filtro}) => {
    let minabilidadesFiltro = [...state.minabilidadesFiltro];
    let minabilidades = [...state.minabilidadesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.minabilidad.toLocaleLowerCase().includes(term);
    });
    minabilidades = _paginator(minabilidades, 1);
    return {...state, filtro, minabilidades, minabilidadesFiltro}
  }),
  on(paginatorParametrosMinabilidades, (state, {paginator}) => {
    const minabilidades = _paginator(state.minabilidadesFiltro, paginator);
    return {...state, loading: false, action: true, minabilidades, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
