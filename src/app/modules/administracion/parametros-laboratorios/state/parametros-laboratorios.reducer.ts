import {ParametrosLaboratoriosState} from './parametros-laboratorios.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosLaboratorios,
  createModalParametrosLaboratoriosFailure,
  createModalParametrosLaboratoriosSuccess, deleteParametrosLaboratorios, deleteParametrosLaboratoriosFailure, deleteParametrosLaboratoriosSuccess,
  editModalParametrosLaboratorios, editModalParametrosLaboratoriosFailure, editModalParametrosLaboratoriosSuccess, filterParametrosLaboratorios,
  getAllParametrosLaboratorios,
  getAllParametrosLaboratoriosFailure,
  getAllParametrosLaboratoriosSuccess,
  initParametrosLaboratorios, paginatorParametrosLaboratorios,
  postModalParametrosLaboratoriosFailure,
  postModalParametrosLaboratoriosSuccess, putModalParametrosLaboratoriosFailure, putModalParametrosLaboratoriosSuccess, sortParametrosLaboratorios
} from './parametros-laboratorios.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Laboratorios } from 'src/app/data/models/laboratorios';

// Estado inicial de las variables
export const initialState: ParametrosLaboratoriosState = {
  loading: true,
  action: false,
  error: '',
  laboratorios: [],
  laboratoriosFiltro: [],
  edit: new Laboratorios(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosLaboratoriosReducer = createReducer(
  initialState,
  on(initParametrosLaboratorios, (state) => {
    return {...state, loading: false, action: true, error: '', laboratorios:  [], edit: new Laboratorios()}
  }),
  // get all
  on(getAllParametrosLaboratorios, (state) => {
    return {...state, loading: true, action: false, error: '', laboratorios: [], laboratoriosFiltro: [], edit: new Laboratorios()}
  }),
  on(getAllParametrosLaboratoriosSuccess, (state, {laboratorios, laboratoriosFiltro}) => {
    laboratorios = _paginator(laboratorios, 1);
    return {...state, loading: false, action: true, laboratorios, laboratoriosFiltro}
  }),
  on(getAllParametrosLaboratoriosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosLaboratorios, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosLaboratoriosSuccess, (state, {edit}) => {
    let laboratoriosFiltro = [...state.laboratoriosFiltro];
    laboratoriosFiltro.unshift(edit);// agreParametrosar al inicio
    let laboratorios = _paginator(laboratoriosFiltro, 1);
    return {...state,  laboratorios, laboratoriosFiltro, edit: new Laboratorios(), paginator:  1};
  }),
  on(createModalParametrosLaboratoriosFailure, (state, {error}) => {
    return {...state, edit: new Laboratorios(), error: error}
  }),
  on(postModalParametrosLaboratoriosSuccess, (state, {edit}) => {
    let laboratoriosEdit  = [...state.laboratoriosFiltro].filter(item => item.codLab !== edit.codLab);
    laboratoriosEdit.unshift(edit);
    const laboratoriosFiltro = laboratoriosEdit.map((e) => {
      if (e.codLab === edit.codLab) {
        return edit;
      }
      return e;
    });
    let laboratorios = _paginator(laboratoriosFiltro, 1);
    return {...state, laboratorios, laboratoriosFiltro, edit: new Laboratorios(), paginator:  1};
  }),
  on(postModalParametrosLaboratoriosFailure, (state, {edit, error}) => {
    const laboratorios = state.laboratorios.filter(item => item.codLab !== edit.codLab);
    return {...state, laboratorios, edit: new Laboratorios(), error: error}
  }),

  // edit
  on(editModalParametrosLaboratorios, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosLaboratoriosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosLaboratoriosFailure, (state, {error}) => {
    return {...state, edit: new Laboratorios(), error: error}
  }),
  on(putModalParametrosLaboratoriosSuccess, (state, { edit}) => {
    const laboratoriosFiltro = [...state.laboratoriosFiltro].map((e) => {
      if (e.codLab === edit.codLab) {
        return edit;
      }
      return e;
    });
    let laboratorios = _paginator(laboratoriosFiltro, state.paginator);
    return {...state, laboratorios, laboratoriosFiltro, edit: new Laboratorios()};
  }),
  on(putModalParametrosLaboratoriosFailure, (state, {edit, error}) => {
    return {...state, edit: new Laboratorios(), error: error}
  }),

  // delete
  on(deleteParametrosLaboratorios, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosLaboratoriosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let laboratoriosFiltro = state.laboratoriosFiltro.filter((item: Laboratorios) => item.codLab !== edit.codLab);
      let laboratorios = _paginator(laboratoriosFiltro, state.paginator);
      return {...state, laboratorios, laboratoriosFiltro, edit: new Laboratorios()};
    }
    return {...state, edit: new Laboratorios()};
  }),
  on(deleteParametrosLaboratoriosFailure, (state, {error}) => {
    return {...state, edit: new Laboratorios(), error: error}
  }),

  // action
  on(sortParametrosLaboratorios, (state, {column, direction }) => {
    let laboratorios = [...state.laboratoriosFiltro];
    laboratorios.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    laboratorios = _paginator(laboratorios, state.paginator);
    return {...state, column , direction, laboratorios}
  }),
  on(filterParametrosLaboratorios, (state, {filtro}) => {
    let laboratoriosFiltro = [...state.laboratoriosFiltro];
    let laboratorios = [...state.laboratoriosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.laboratorio.toLocaleLowerCase().includes(term);
    });
    laboratorios = _paginator(laboratorios, 1);
    return {...state, filtro, laboratorios, laboratoriosFiltro}
  }),
  on(paginatorParametrosLaboratorios, (state, {paginator}) => {
    const laboratorios = _paginator(state.laboratoriosFiltro, paginator);
    return {...state, loading: false, action: true, laboratorios, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
