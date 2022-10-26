import {ParametrosTipoTectonicasState} from './parametros-tipo-tectonicas.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosTipoTectonicas,
  createModalParametrosTipoTectonicasFailure,
  createModalParametrosTipoTectonicasSuccess, deleteParametrosTipoTectonicas, deleteParametrosTipoTectonicasFailure, deleteParametrosTipoTectonicasSuccess,
  editModalParametrosTipoTectonicas, editModalParametrosTipoTectonicasFailure, editModalParametrosTipoTectonicasSuccess, filterParametrosTipoTectonicas,
  getAllParametrosTipoTectonicas,
  getAllParametrosTipoTectonicasFailure,
  getAllParametrosTipoTectonicasSuccess,
  initParametrosTipoTectonicas, paginatorParametrosTipoTectonicas,
  postModalParametrosTipoTectonicasFailure,
  postModalParametrosTipoTectonicasSuccess, putModalParametrosTipoTectonicasFailure, putModalParametrosTipoTectonicasSuccess, sortParametrosTipoTectonicas
} from './parametros-tipo-tectonicas.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {getAllParametrosTipopozosSuccess} from "../../parametros-tipo-pozos/state/parametros-tipo-pozos.actions";
import { TipoTectonicas } from 'src/app/data/models/tipo-tectonica';

// Estado inicial de las variables
export const initialState: ParametrosTipoTectonicasState = {
  loading: true,
  action: false,
  error: '',
  tipoTectonicas: [],
  tipoTectonicasFiltro: [],
  edit: new TipoTectonicas(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosTipoTectonicasReducer = createReducer(
  initialState,
  on(initParametrosTipoTectonicas, (state) => {
    return {...state, loading: false, action: true, error: '', tipoTectonicas:  [], edit: new TipoTectonicas()}
  }),
  // get all
  on(getAllParametrosTipoTectonicas, (state) => {
    return {...state, loading: true, action: false, error: '', tipoTectonicas: [], tipoTectonicasFiltro: [], edit: new TipoTectonicas()}
  }),
  on(getAllParametrosTipoTectonicasSuccess, (state, {tipoTectonicas, tipoTectonicasFiltro}) => {
    tipoTectonicas = _paginator(tipoTectonicas, 1);
    return {...state, loading: false, action: true, tipoTectonicas, tipoTectonicasFiltro}
  }),
  on(getAllParametrosTipoTectonicasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosTipoTectonicas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosTipoTectonicasSuccess, (state, {edit}) => {
    let tipoTectonicasFiltro = [...state.tipoTectonicasFiltro];
    tipoTectonicasFiltro.unshift(edit);// agreParametrosar al inicio
    let tipoTectonicas = _paginator(tipoTectonicasFiltro, 1);
    return {...state,  tipoTectonicas, tipoTectonicasFiltro, edit: new TipoTectonicas(), paginator:  1};
  }),
  on(createModalParametrosTipoTectonicasFailure, (state, {error}) => {
    return {...state, edit: new TipoTectonicas(), error: error}
  }),
  on(postModalParametrosTipoTectonicasSuccess, (state, {edit}) => {
    let tipoTectonicasEdit  = [...state.tipoTectonicasFiltro].filter(item => item.codTecTipo !== edit.codTecTipo);
    tipoTectonicasEdit.unshift(edit);
    const tipoTectonicasFiltro = tipoTectonicasEdit.map((e) => {
      if (e.codTecTipo === edit.codTecTipo) {
        return edit;
      }
      return e;
    });
    let tipoTectonicas = _paginator(tipoTectonicasFiltro, 1);
    return {...state, tipoTectonicas, tipoTectonicasFiltro, edit: new TipoTectonicas(), paginator:  1};
  }),
  on(postModalParametrosTipoTectonicasFailure, (state, {edit, error}) => {
    const tipoTectonicas = state.tipoTectonicas.filter(item => item.codTecTipo !== edit.codTecTipo);
    return {...state, tipoTectonicas, edit: new TipoTectonicas(), error: error}
  }),

  // edit
  on(editModalParametrosTipoTectonicas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosTipoTectonicasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosTipoTectonicasFailure, (state, {error}) => {
    return {...state, edit: new TipoTectonicas(), error: error}
  }),
  on(putModalParametrosTipoTectonicasSuccess, (state, { edit}) => {
    const tipoTectonicasFiltro = [...state.tipoTectonicasFiltro].map((e) => {
      if (e.codTecTipo === edit.codTecTipo) {
        return edit;
      }
      return e;
    });
    let tipoTectonicas = _paginator(tipoTectonicasFiltro, state.paginator);
    return {...state, tipoTectonicas, tipoTectonicasFiltro, edit: new TipoTectonicas()};
  }),
  on(putModalParametrosTipoTectonicasFailure, (state, {edit, error}) => {
    return {...state, edit: new TipoTectonicas(), error: error}
  }),

  // delete
  on(deleteParametrosTipoTectonicas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosTipoTectonicasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let tipoTectonicasFiltro = state.tipoTectonicasFiltro.filter((item: TipoTectonicas) => item.codTecTipo !== edit.codTecTipo);
      let tipoTectonicas = _paginator(tipoTectonicasFiltro, state.paginator);
      return {...state, tipoTectonicas, tipoTectonicasFiltro, edit: new TipoTectonicas()};
    }
    return {...state, edit: new TipoTectonicas()};
  }),
  on(deleteParametrosTipoTectonicasFailure, (state, {error}) => {
    return {...state, edit: new TipoTectonicas(), error: error}
  }),

  // action
  on(sortParametrosTipoTectonicas, (state, {column, direction }) => {
    let TipoTectonicas = [...state.tipoTectonicasFiltro];
    TipoTectonicas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    TipoTectonicas = _paginator(TipoTectonicas, state.paginator);
    return {...state, column , direction, TipoTectonicas}
  }),
  on(filterParametrosTipoTectonicas, (state, {filtro}) => {
    let TipoTectonicasFiltro = [...state.tipoTectonicasFiltro];
    let TipoTectonicas = [...state.tipoTectonicasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.tipo.toLocaleLowerCase().includes(term) ||
        item.codTecTipo.toLocaleLowerCase().includes(term);
    });
    TipoTectonicas = _paginator(TipoTectonicas, 1);
    return {...state, filtro, TipoTectonicas, TipoTectonicasFiltro}
  }),
  on(paginatorParametrosTipoTectonicas, (state, {paginator}) => {
    const TipoTectonicas = _paginator(state.tipoTectonicasFiltro, paginator);
    return {...state, loading: false, action: true, TipoTectonicas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
