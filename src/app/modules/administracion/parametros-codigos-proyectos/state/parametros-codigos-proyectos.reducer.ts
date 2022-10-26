import {ParametrosCodigosProyectosState} from './parametros-codigos-proyectos.state';
import {createReducer, on} from '@ngrx/store';
import {CodigosProyectos} from '../../../../data/models/codigos-proyectos';
import {
  createModalParametrosCodigosProyectos,
  createModalParametrosCodigosProyectosFailure,
  createModalParametrosCodigosProyectosSuccess, deleteParametrosCodigosProyectos, deleteParametrosCodigosProyectosFailure, deleteParametrosCodigosProyectosSuccess,
 filterParametrosCodigosProyectos,
  getAllParametrosCodigosProyectos,
  getAllParametrosCodigosProyectosFailure,
  getAllParametrosCodigosProyectosSuccess,
  initParametrosCodigosProyectos, paginatorParametrosCodigosProyectos,
  postModalParametrosCodigosProyectosFailure,
  postModalParametrosCodigosProyectosSuccess, putModalParametrosCodigosProyectosFailure, putModalParametrosCodigosProyectosSuccess, sortParametrosCodigosProyectos
} from './parametros-codigos-proyectos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';

// Estado inicial de las variables
export const initialState: ParametrosCodigosProyectosState = {
  loading: true,
  action: false,
  error: '',
  codigosproyectos: [],
  codigosproyectosFiltro: [],
  edit: new CodigosProyectos(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosCodigosProyectosReducer = createReducer(
  initialState,
  on(initParametrosCodigosProyectos, (state) => {
    return {...state, loading: false, action: true, error: '', codigosproyectos:  [], edit: new CodigosProyectos()}
  }),
  // get all
  on(getAllParametrosCodigosProyectos, (state) => {
    return {...state, loading: true, action: false, error: '', codigosproyectos: [], codigosproyectosFiltro: [], edit: new CodigosProyectos()}
  }),
  on(getAllParametrosCodigosProyectosSuccess, (state, {codigosproyectos, codigosproyectosFiltro}) => {
    codigosproyectos = _paginator(codigosproyectos, 1);
    return {...state, loading: false, action: true, codigosproyectos, codigosproyectosFiltro}
  }),
  on(getAllParametrosCodigosProyectosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosCodigosProyectos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosCodigosProyectosSuccess, (state, {edit}) => {
    let codigosproyectosFiltro = [...state.codigosproyectosFiltro];
    codigosproyectosFiltro.unshift(edit);// agreParametrosar al inicio
    let codigosproyectos = _paginator(codigosproyectosFiltro, 1);
    return {...state,  codigosproyectos, codigosproyectosFiltro, edit: new CodigosProyectos(), paginator:  1};
  }),
  on(createModalParametrosCodigosProyectosFailure, (state, {error}) => {
    return {...state, edit: new CodigosProyectos(), error: error}
  }),
  on(postModalParametrosCodigosProyectosSuccess, (state, {edit}) => {
    let codigosproyectosEdit  = [...state.codigosproyectosFiltro].filter(item => item.codProyecto !== edit.codProyecto);
    codigosproyectosEdit.unshift(edit);
    const codigosproyectosFiltro = codigosproyectosEdit.map((e) => {
      if (e.codProyecto === edit.codProyecto) {
        return edit;
      }
      return e;
    });
    let codigosproyectos = _paginator(codigosproyectosFiltro, 1);
    return {...state, codigosproyectos, codigosproyectosFiltro, edit: new CodigosProyectos(), paginator:  1};
  }),
  on(postModalParametrosCodigosProyectosFailure, (state, {edit, error}) => {
    const codigosproyectos = state.codigosproyectos.filter(item => item.codProyecto !== edit.codProyecto);
    return {...state, codigosproyectos, edit: new CodigosProyectos(), error: error}
  }),


  on(putModalParametrosCodigosProyectosSuccess, (state, { edit}) => {
    const codigosproyectosFiltro = [...state.codigosproyectosFiltro].map((e) => {
      if (e.codProyecto === edit.codProyecto) {
        return edit;
      }
      return e;
    });
    let codigosproyectos = _paginator(codigosproyectosFiltro, state.paginator);
    return {...state, codigosproyectos, codigosproyectosFiltro, edit: new CodigosProyectos()};
  }),
  on(putModalParametrosCodigosProyectosFailure, (state, {edit, error}) => {
    return {...state, edit: new CodigosProyectos(), error: error}
  }),

  // delete
  on(deleteParametrosCodigosProyectos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosCodigosProyectosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let codigosproyectosFiltro = state.codigosproyectosFiltro.filter((item: CodigosProyectos) => item.codProyecto !== edit.codProyecto);
      let codigosproyectos = _paginator(codigosproyectosFiltro, state.paginator);
      return {...state, codigosproyectos, codigosproyectosFiltro, edit: new CodigosProyectos()};
    }
    return {...state, edit: new CodigosProyectos()};
  }),
  on(deleteParametrosCodigosProyectosFailure, (state, {error}) => {
    return {...state, edit: new CodigosProyectos(), error: error}
  }),

  // action
  on(sortParametrosCodigosProyectos, (state, {column, direction }) => {
    let codigosproyectos = [...state.codigosproyectosFiltro];
    codigosproyectos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    codigosproyectos = _paginator(codigosproyectos, state.paginator);
    return {...state, column , direction, codigosproyectos}
  }),
  on(filterParametrosCodigosProyectos, (state, {filtro}) => {
    let codigosproyectosFiltro = [...state.codigosproyectosFiltro];
    let codigosproyectos = [...state.codigosproyectosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codProyecto.toLocaleLowerCase().includes(term);
    });
    codigosproyectos = _paginator(codigosproyectos, 1);
    return {...state, filtro, codigosproyectos, codigosproyectosFiltro}
  }),
  on(paginatorParametrosCodigosProyectos, (state, {paginator}) => {
    const codigosproyectos = _paginator(state.codigosproyectosFiltro, paginator);
    return {...state, loading: false, action: true, codigosproyectos, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
