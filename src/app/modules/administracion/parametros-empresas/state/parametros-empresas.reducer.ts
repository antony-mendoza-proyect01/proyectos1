import {ParametrosEmpresasState} from './parametros-empresas.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosEmpresas,
  createModalParametrosEmpresasFailure,
  createModalParametrosEmpresasSuccess, deleteParametrosEmpresas, deleteParametrosEmpresasFailure, deleteParametrosEmpresasSuccess,
  editModalParametrosEmpresas, editModalParametrosEmpresasFailure, editModalParametrosEmpresasSuccess, filterParametrosEmpresas,
  getAllParametrosEmpresas,
  getAllParametrosEmpresasFailure,
  getAllParametrosEmpresasSuccess,
  initParametrosEmpresas, paginatorParametrosEmpresas,
  postModalParametrosEmpresasFailure,
  postModalParametrosEmpresasSuccess, putModalParametrosEmpresasFailure, putModalParametrosEmpresasSuccess, sortParametrosEmpresas
} from './parametros-empresas.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Empresas } from 'src/app/data/models/empresas';

// Estado inicial de las variables
export const initialState: ParametrosEmpresasState = {
  loading: true,
  action: false,
  error: '',
  empresas: [],
  empresasFiltro: [],
  edit: new Empresas(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosEmpresasReducer = createReducer(
  initialState,
  on(initParametrosEmpresas, (state) => {
    return {...state, loading: false, action: true, error: '', empresas:  [], edit: new Empresas()}
  }),
  // get all
  on(getAllParametrosEmpresas, (state) => {
    return {...state, loading: true, action: false, error: '', empresas: [], empresasFiltro: [], edit: new Empresas()}
  }),
  on(getAllParametrosEmpresasSuccess, (state, {empresas, empresasFiltro}) => {
    empresas = _paginator(empresas, 1);
    return {...state, loading: false, action: true, empresas, empresasFiltro}
  }),
  on(getAllParametrosEmpresasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosEmpresas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosEmpresasSuccess, (state, {edit}) => {
    let empresasFiltro = [...state.empresasFiltro];
    empresasFiltro.unshift(edit);// agreParametrosar al inicio
    let empresas = _paginator(empresasFiltro, 1);
    return {...state,  empresas, empresasFiltro, edit: new Empresas(), paginator:  1};
  }),
  on(createModalParametrosEmpresasFailure, (state, {error}) => {
    return {...state, edit: new Empresas(), error: error}
  }),
  on(postModalParametrosEmpresasSuccess, (state, {edit}) => {
    let empresasEdit  = [...state.empresasFiltro].filter(item => item.codigo !== null);
    empresasEdit.unshift(edit);
    const empresasFiltro = empresasEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let empresas = _paginator(empresasFiltro, 1);
    return {...state, empresas, empresasFiltro, edit: new Empresas(), paginator:  1};
  }),
  on(postModalParametrosEmpresasFailure, (state, {edit, error}) => {
    const empresas = state.empresas.filter(item => item.codigo !== edit.codigo);
    return {...state, empresas, edit: new Empresas(), error: error}
  }),

  // edit
  on(editModalParametrosEmpresas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosEmpresasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosEmpresasFailure, (state, {error}) => {
    return {...state, edit: new Empresas(), error: error}
  }),
  on(putModalParametrosEmpresasSuccess, (state, { edit}) => {
    const empresasFiltro = [...state.empresasFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let empresas = _paginator(empresasFiltro, state.paginator);
    return {...state, empresas, empresasFiltro, edit: new Empresas()};
  }),
  on(putModalParametrosEmpresasFailure, (state, {edit, error}) => {
    return {...state, edit: new Empresas(), error: error}
  }),

  // delete
  on(deleteParametrosEmpresas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosEmpresasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let empresasFiltro = state.empresasFiltro.filter((item: Empresas) => item.codigo !== edit.codigo);
      let empresas = _paginator(empresasFiltro, state.paginator);
      return {...state, empresas, empresasFiltro, edit: new Empresas()};
    }
    return {...state, edit: new Empresas()};
  }),
  on(deleteParametrosEmpresasFailure, (state, {error}) => {
    return {...state, edit: new Empresas(), error: error}
  }),

  // action
  on(sortParametrosEmpresas, (state, {column, direction }) => {
    let empresas = [...state.empresasFiltro];
    empresas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    empresas = _paginator(empresas, state.paginator);
    return {...state, column , direction, empresas}
  }),
  on(filterParametrosEmpresas, (state, {filtro}) => {
    let empresasFiltro = [...state.empresasFiltro];
    let empresas = [...state.empresasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.nombre.toLocaleLowerCase().includes(term);
    });
    empresas = _paginator(empresas, 1);
    return {...state, filtro, empresas, empresasFiltro}
  }),
  on(paginatorParametrosEmpresas, (state, {paginator}) => {
    const empresas = _paginator(state.empresasFiltro, paginator);
    return {...state, loading: false, action: true, empresas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
