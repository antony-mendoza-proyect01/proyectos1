import {ParametrosTipoPozosState} from './parametros-tipo-pozos.state';
import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosTipopozos,
  createModalParametrosTipopozosFailure,
  createModalParametrosTipopozosSuccess,
  deleteParametrosTipopozos,
  deleteParametrosTipopozosFailure,
  deleteParametrosTipopozosSuccess,
  editModalParametrosTipopozos,
  editModalParametrosTipopozosFailure,
  editModalParametrosTipopozosSuccess,
  filterParametrosTipopozos,
  getAllParametrosTipopozos,
  getAllParametrosTipopozosFailure,
  getAllParametrosTipopozosSuccess,
  initParametrosTipopozos,
  paginatorParametrosTipopozos,
  postModalParametrosTipopozosFailure,
  postModalParametrosTipopozosSuccess,
  putModalParametrosTipopozosFailure,
  putModalParametrosTipopozosSuccess,
  selectedParametrosTipopozos,
  sortParametrosTipopozos
} from './parametros-tipo-pozos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { TipoPozos } from 'src/app/data/models/tipo-pozos';

// Estado inicial de las variables
export const initialState: ParametrosTipoPozosState = {
  loading: true,
  action: false,
  error: '',
  tipopozos: [],
  tipopozosFiltro: [],
  edit: new TipoPozos(),
  column: '',
  direction:  '',
  paginator:  1,
  tipopozosSelected: new TipoPozos(),
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosTipoPozosReducer = createReducer(
  initialState,
  on(initParametrosTipopozos, (state) => {
    return {...state, loading: false, action: true, error: '', tipopozos:  [], edit: new TipoPozos()}
  }),
  // get all
  on(getAllParametrosTipopozos, (state) => {
    return {...state, loading: true, action: false, error: '', tipopozos: [], tipopozosFiltro: [],
      edit: new TipoPozos(), tipopozosSelected: new TipoPozos()}
  }),
  on(getAllParametrosTipopozosSuccess, (state, {tipopozos, tipopozosFiltro}) => {
    tipopozos = _paginator(tipopozos, 1);
    return {...state, loading: false, action: true, tipopozos, tipopozosFiltro}
  }),
  on(getAllParametrosTipopozosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosTipopozos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosTipopozosSuccess, (state, {edit}) => {
    let tipopozosFiltro = [...state.tipopozosFiltro];
    tipopozosFiltro.unshift(edit);// agreParametrosar al inicio
    let tipopozos = _paginator(tipopozosFiltro, 1);
    return {...state,  tipopozos, tipopozosFiltro, edit: new TipoPozos(), paginator:  1};
  }),
  on(createModalParametrosTipopozosFailure, (state, {error}) => {
    return {...state, edit: new TipoPozos(), error: error}
  }),
  on(postModalParametrosTipopozosSuccess, (state, {edit}) => {
    let tipopozosEdit  = [...state.tipopozosFiltro].filter(item => item.codigo !== edit.codigo);
    tipopozosEdit.unshift(edit);
    const tipopozosFiltro = tipopozosEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let tipopozos = _paginator(tipopozosFiltro, 1);
    return {...state, tipopozos, tipopozosFiltro, edit: new TipoPozos(), paginator:  1};
  }),
  on(postModalParametrosTipopozosFailure, (state, {edit, error}) => {
    const tipopozos = state.tipopozos.filter(item => item.codigo !== edit.codigo);
    return {...state, tipopozos, edit: new TipoPozos(), error: error}
  }),

  // edit
  on(editModalParametrosTipopozos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosTipopozosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosTipopozosFailure, (state, {error}) => {
    return {...state, edit: new TipoPozos(), error: error}
  }),
  on(putModalParametrosTipopozosSuccess, (state, { edit}) => {
    const tipopozosFiltro = [...state.tipopozosFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let tipopozos = _paginator(tipopozosFiltro, state.paginator);
    return {...state, tipopozos, tipopozosFiltro, edit: new TipoPozos()};
  }),
  on(putModalParametrosTipopozosFailure, (state, {edit, error}) => {
    return {...state, edit: new TipoPozos(), error: error}
  }),

  // delete
  on(deleteParametrosTipopozos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosTipopozosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let tipopozosFiltro = state.tipopozosFiltro.filter((item: TipoPozos) => item.codigo !== edit.codigo);
      let tipopozos = _paginator(tipopozosFiltro, state.paginator);
      return {...state, tipopozos, tipopozosFiltro, edit: new TipoPozos()};
    }
    return {...state, edit: new TipoPozos()};
  }),
  on(deleteParametrosTipopozosFailure, (state, {error}) => {
    return {...state, edit: new TipoPozos(), error: error}
  }),

  // action
  on(sortParametrosTipopozos, (state, {column, direction }) => {
    let tipopozos = [...state.tipopozosFiltro];
    tipopozos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    tipopozos = _paginator(tipopozos, state.paginator);
    return {...state, column , direction, tipopozos}
  }),
  on(filterParametrosTipopozos, (state, {filtro}) => {
    let tipopozosFiltro = [...state.tipopozosFiltro];
    let tipopozos = [...state.tipopozosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.tipoPozo.toLocaleLowerCase().includes(term) ||
        item.codigo.toLocaleLowerCase().includes(term);
    });
    tipopozos = _paginator(tipopozos, 1);
    return {...state, filtro, tipopozos, tipopozosFiltro}
  }),
  on(paginatorParametrosTipopozos, (state, {paginator}) => {
    const tipopozos = _paginator(state.tipopozosFiltro, paginator);
    return {...state, loading: false, action: true, tipopozos, paginator}
  }),
  on(selectedParametrosTipopozos, (state, {tipopozosSelected}) => {
    return {...state, tipopozosSelected}
  }),

);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
