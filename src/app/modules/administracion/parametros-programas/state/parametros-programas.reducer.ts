import {ParametrosProgramasState} from './parametros-programas.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosProgramas,
  createModalParametrosProgramasFailure,
  createModalParametrosProgramasSuccess, deleteParametrosProgramas, deleteParametrosProgramasFailure, deleteParametrosProgramasSuccess,
  editModalParametrosProgramas, editModalParametrosProgramasFailure, editModalParametrosProgramasSuccess, filterParametrosProgramas,
  getAllParametrosProgramas,
  getAllParametrosProgramasFailure,
  getAllParametrosProgramasSuccess,
  initParametrosProgramas, paginatorParametrosProgramas,
  postModalParametrosProgramasFailure,
  postModalParametrosProgramasSuccess, putModalParametrosProgramasFailure, putModalParametrosProgramasSuccess, sortParametrosProgramas
} from './parametros-programas.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Programas} from "../../../../data/models/programas";

// Estado inicial de las variables
export const initialState: ParametrosProgramasState = {
  loading: true,
  action: false,
  error: '',
  programas: [],
  programasFiltro: [],
  edit: new Programas(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosProgramasReducer = createReducer(
  initialState,
  on(initParametrosProgramas, (state) => {
    return {...state, loading: false, action: true, error: '', programas:  [], edit: new Programas()}
  }),
  // get all
  on(getAllParametrosProgramas, (state) => {
    return {...state, loading: true, action: false, error: '', programas: [], programasFiltro: [], edit: new Programas()}
  }),
  on(getAllParametrosProgramasSuccess, (state, {programas, programasFiltro}) => {
    programas = _paginator(programas, 1);
    return {...state, loading: false, action: true, programas, programasFiltro}
  }),
  on(getAllParametrosProgramasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosProgramas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosProgramasSuccess, (state, {edit}) => {
    let programasFiltro = [...state.programasFiltro];
    programasFiltro.unshift(edit);// agreParametrosar al inicio
    let programas = _paginator(programasFiltro, 1);
    return {...state,  programas, programasFiltro, edit: new Programas(), paginator:  1};
  }),
  on(createModalParametrosProgramasFailure, (state, {error}) => {
    return {...state, edit: new Programas(), error: error}
  }),
  on(postModalParametrosProgramasSuccess, (state, {edit}) => {
    let programasEdit  = [...state.programasFiltro].filter(item => item.codigo !== edit.codigo);
    programasEdit.unshift(edit);
    const programasFiltro = programasEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let programas = _paginator(programasFiltro, 1);
    return {...state, programas, programasFiltro, edit: new Programas(), paginator:  1};
  }),
  on(postModalParametrosProgramasFailure, (state, {edit, error}) => {
    const programas = state.programas.filter(item => item.codigo !== edit.codigo);
    return {...state, programas, edit: new Programas(), error: error}
  }),

  // edit
  on(editModalParametrosProgramas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosProgramasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosProgramasFailure, (state, {error}) => {
    return {...state, edit: new Programas(), error: error}
  }),
  on(putModalParametrosProgramasSuccess, (state, { edit}) => {
    const programasFiltro = [...state.programasFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let programas = _paginator(programasFiltro, state.paginator);
    return {...state, programas, programasFiltro, edit: new Programas()};
  }),
  on(putModalParametrosProgramasFailure, (state, {edit, error}) => {
    return {...state, edit: new Programas(), error: error}
  }),

  // delete
  on(deleteParametrosProgramas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosProgramasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let programasFiltro = state.programasFiltro.filter((item: Programas) => item.codigo !== edit.codigo);
      let programas = _paginator(programasFiltro, state.paginator);
      return {...state, programas, programasFiltro, edit: new Programas()};
    }
    return {...state, edit: new Programas()};
  }),
  on(deleteParametrosProgramasFailure, (state, {error}) => {
    return {...state, edit: new Programas(), error: error}
  }),

  // action
  on(sortParametrosProgramas, (state, {column, direction }) => {
    let programas = [...state.programasFiltro];
    programas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    programas = _paginator(programas, state.paginator);
    return {...state, column , direction, programas}
  }),
  on(filterParametrosProgramas, (state, {filtro}) => {
    let programasFiltro = [...state.programasFiltro];
    let programas = [...state.programasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.programa.toLocaleLowerCase().includes(term);
    });
    programas = _paginator(programas, 1);
    return {...state, filtro, programas, programasFiltro}
  }),
  on(paginatorParametrosProgramas, (state, {paginator}) => {
    const programas = _paginator(state.programasFiltro, paginator);
    return {...state, loading: false, action: true, programas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
