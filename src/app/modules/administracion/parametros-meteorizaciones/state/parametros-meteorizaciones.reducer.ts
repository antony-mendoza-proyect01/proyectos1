import {ParametrosMeteorizacionesState} from './parametros-meteorizaciones.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosMeteorizaciones,
  createModalParametrosMeteorizacionesFailure,
  createModalParametrosMeteorizacionesSuccess, deleteParametrosMeteorizaciones, deleteParametrosMeteorizacionesFailure, deleteParametrosMeteorizacionesSuccess,
  editModalParametrosMeteorizaciones, editModalParametrosMeteorizacionesFailure, editModalParametrosMeteorizacionesSuccess, filterParametrosMeteorizaciones,
  getAllParametrosMeteorizaciones,
  getAllParametrosMeteorizacionesFailure,
  getAllParametrosMeteorizacionesSuccess,
  initParametrosMeteorizaciones, paginatorParametrosMeteorizaciones,
  postModalParametrosMeteorizacionesFailure,
  postModalParametrosMeteorizacionesSuccess, putModalParametrosMeteorizacionesFailure, putModalParametrosMeteorizacionesSuccess, sortParametrosMeteorizaciones
} from './parametros-meteorizaciones.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Meteorizaciones} from "../../../../data/models/meterorizaciones";

// Estado inicial de las variables
export const initialState: ParametrosMeteorizacionesState = {
  loading: true,
  action: false,
  error: '',
  meteorizaciones: [],
  meteorizacionesFiltro: [],
  edit: new Meteorizaciones(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosMeteorizacionesReducer = createReducer(
  initialState,
  on(initParametrosMeteorizaciones, (state) => {
    return {...state, loading: false, action: true, error: '', meteorizaciones:  [], edit: new Meteorizaciones()}
  }),
  // get all
  on(getAllParametrosMeteorizaciones, (state) => {
    return {...state, loading: true, action: false, error: '', meteorizaciones: [], meteorizacionesFiltro: [], edit: new Meteorizaciones()}
  }),
  on(getAllParametrosMeteorizacionesSuccess, (state, {meteorizaciones, meteorizacionesFiltro}) => {
    meteorizaciones = _paginator(meteorizaciones, 1);
    return {...state, loading: false, action: true, meteorizaciones, meteorizacionesFiltro}
  }),
  on(getAllParametrosMeteorizacionesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosMeteorizaciones, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosMeteorizacionesSuccess, (state, {edit}) => {
    let meteorizacionesFiltro = [...state.meteorizacionesFiltro];
    meteorizacionesFiltro.unshift(edit);// agreParametrosar al inicio
    let meteorizaciones = _paginator(meteorizacionesFiltro, 1);
    return {...state,  meteorizaciones, meteorizacionesFiltro, edit: new Meteorizaciones(), paginator:  1};
  }),
  on(createModalParametrosMeteorizacionesFailure, (state, {error}) => {
    return {...state, edit: new Meteorizaciones(), error: error}
  }),
  on(postModalParametrosMeteorizacionesSuccess, (state, {edit}) => {
    let meteorizacionesEdit  = [...state.meteorizacionesFiltro].filter(item => item.codMeteorizacion !== edit.codMeteorizacion);
    meteorizacionesEdit.unshift(edit);
    const meteorizacionesFiltro = meteorizacionesEdit.map((e) => {
      if (e.codMeteorizacion === edit.codMeteorizacion) {
        return edit;
      }
      return e;
    });
    let meteorizaciones = _paginator(meteorizacionesFiltro, 1);
    return {...state, meteorizaciones, meteorizacionesFiltro, edit: new Meteorizaciones(), paginator:  1};
  }),
  on(postModalParametrosMeteorizacionesFailure, (state, {edit, error}) => {
    const meteorizaciones = state.meteorizaciones.filter(item => item.codMeteorizacion !== edit.codMeteorizacion);
    return {...state, meteorizaciones, edit: new Meteorizaciones(), error: error}
  }),

  // edit
  on(editModalParametrosMeteorizaciones, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosMeteorizacionesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosMeteorizacionesFailure, (state, {error}) => {
    return {...state, edit: new Meteorizaciones(), error: error}
  }),
  on(putModalParametrosMeteorizacionesSuccess, (state, { edit}) => {
    const meteorizacionesFiltro = [...state.meteorizacionesFiltro].map((e) => {
      if (e.codMeteorizacion === edit.codMeteorizacion) {
        return edit;
      }
      return e;
    });
    let meteorizaciones = _paginator(meteorizacionesFiltro, state.paginator);
    return {...state, meteorizaciones, meteorizacionesFiltro, edit: new Meteorizaciones()};
  }),
  on(putModalParametrosMeteorizacionesFailure, (state, {edit, error}) => {
    return {...state, edit: new Meteorizaciones(), error: error}
  }),

  // delete
  on(deleteParametrosMeteorizaciones, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosMeteorizacionesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let meteorizacionesFiltro = state.meteorizacionesFiltro.filter((item: Meteorizaciones) => item.codMeteorizacion !== edit.codMeteorizacion);
      let meteorizaciones = _paginator(meteorizacionesFiltro, state.paginator);
      return {...state, meteorizaciones, meteorizacionesFiltro, edit: new Meteorizaciones()};
    }
    return {...state, edit: new Meteorizaciones()};
  }),
  on(deleteParametrosMeteorizacionesFailure, (state, {error}) => {
    return {...state, edit: new Meteorizaciones(), error: error}
  }),

  // action
  on(sortParametrosMeteorizaciones, (state, {column, direction }) => {
    let meteorizaciones = [...state.meteorizacionesFiltro];
    meteorizaciones.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    meteorizaciones = _paginator(meteorizaciones, state.paginator);
    return {...state, column , direction, meteorizaciones}
  }),
  on(filterParametrosMeteorizaciones, (state, {filtro}) => {
    let meteorizacionesFiltro = [...state.meteorizacionesFiltro];
    let meteorizaciones = [...state.meteorizacionesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.meteorizacion.toLocaleLowerCase().includes(term);
    });
    meteorizaciones = _paginator(meteorizaciones, 1);
    return {...state, filtro, meteorizaciones, meteorizacionesFiltro}
  }),
  on(paginatorParametrosMeteorizaciones, (state, {paginator}) => {
    const meteorizaciones = _paginator(state.meteorizacionesFiltro, paginator);
    return {...state, loading: false, action: true, meteorizaciones, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
