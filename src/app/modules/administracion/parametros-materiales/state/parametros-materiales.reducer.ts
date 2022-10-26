import {ParametrosMaterialesState} from './parametros-materiales.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosMateriales,
  createModalParametrosMaterialesFailure,
  createModalParametrosMaterialesSuccess, deleteParametrosMateriales, deleteParametrosMaterialesFailure, deleteParametrosMaterialesSuccess,
  editModalParametrosMateriales, editModalParametrosMaterialesFailure, editModalParametrosMaterialesSuccess, filterParametrosMateriales,
  getAllParametrosMateriales,
  getAllParametrosMaterialesFailure,
  getAllParametrosMaterialesSuccess,
  initParametrosMateriales, paginatorParametrosMateriales,
  postModalParametrosMaterialesFailure,
  postModalParametrosMaterialesSuccess, putModalParametrosMaterialesFailure, putModalParametrosMaterialesSuccess, sortParametrosMateriales
} from './parametros-materiales.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Materiales} from "../../../../data/models/materiales";

// Estado inicial de las variables
export const initialState: ParametrosMaterialesState = {
  loading: true,
  action: false,
  error: '',
  materiales: [],
  materialesFiltro: [],
  edit: new Materiales(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosMaterialesReducer = createReducer(
  initialState,
  on(initParametrosMateriales, (state) => {
    return {...state, loading: false, action: true, error: '', materiales:  [], edit: new Materiales()}
  }),
  // get all
  on(getAllParametrosMateriales, (state) => {
    return {...state, loading: true, action: false, error: '', materiales: [], materialesFiltro: [], edit: new Materiales()}
  }),
  on(getAllParametrosMaterialesSuccess, (state, {materiales, materialesFiltro}) => {
    materiales = _paginator(materiales, 1);
    return {...state, loading: false, action: true, materiales, materialesFiltro}
  }),
  on(getAllParametrosMaterialesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosMateriales, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosMaterialesSuccess, (state, {edit}) => {
    let materialesFiltro = [...state.materialesFiltro];
    materialesFiltro.unshift(edit);// agreParametrosar al inicio
    let materiales = _paginator(materialesFiltro, 1);
    return {...state,  materiales, materialesFiltro, edit: new Materiales(), paginator:  1};
  }),
  on(createModalParametrosMaterialesFailure, (state, {error}) => {
    return {...state, edit: new Materiales(), error: error}
  }),
  on(postModalParametrosMaterialesSuccess, (state, {edit}) => {
    let materialesEdit  = [...state.materialesFiltro].filter(item => item.codigo !== edit.codigo);
    materialesEdit.unshift(edit);
    const materialesFiltro = materialesEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let materiales = _paginator(materialesFiltro, 1);
    return {...state, materiales, materialesFiltro, edit: new Materiales(), paginator:  1};
  }),
  on(postModalParametrosMaterialesFailure, (state, {edit, error}) => {
    const materiales = state.materiales.filter(item => item.codigo !== edit.codigo);
    return {...state, materiales, edit: new Materiales(), error: error}
  }),

  // edit
  on(editModalParametrosMateriales, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosMaterialesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosMaterialesFailure, (state, {error}) => {
    return {...state, edit: new Materiales(), error: error}
  }),
  on(putModalParametrosMaterialesSuccess, (state, { edit}) => {
    const materialesFiltro = [...state.materialesFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let materiales = _paginator(materialesFiltro, state.paginator);
    return {...state, materiales, materialesFiltro, edit: new Materiales()};
  }),
  on(putModalParametrosMaterialesFailure, (state, {edit, error}) => {
    return {...state, edit: new Materiales(), error: error}
  }),

  // delete
  on(deleteParametrosMateriales, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosMaterialesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let materialesFiltro = state.materialesFiltro.filter((item: Materiales) => item.codigo !== edit.codigo);
      let materiales = _paginator(materialesFiltro, state.paginator);
      return {...state, materiales, materialesFiltro, edit: new Materiales()};
    }
    return {...state, edit: new Materiales()};
  }),
  on(deleteParametrosMaterialesFailure, (state, {error}) => {
    return {...state, edit: new Materiales(), error: error}
  }),

  // action
  on(sortParametrosMateriales, (state, {column, direction }) => {
    let materiales = [...state.materialesFiltro];
    materiales.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    materiales = _paginator(materiales, state.paginator);
    return {...state, column , direction, materiales}
  }),
  on(filterParametrosMateriales, (state, {filtro}) => {
    let materialesFiltro = [...state.materialesFiltro];
    let materiales = [...state.materialesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.material.toLocaleLowerCase().includes(term);
    });
    materiales = _paginator(materiales, 1);
    return {...state, filtro, materiales, materialesFiltro}
  }),
  on(paginatorParametrosMateriales, (state, {paginator}) => {
    const materiales = _paginator(state.materialesFiltro, paginator);
    return {...state, loading: false, action: true, materiales, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
