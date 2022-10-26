import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosContratoPerforacionAjustesRegistro,
  createModalParametrosContratoPerforacionAjustesRegistroFailure,
  createModalParametrosContratoPerforacionAjustesRegistroSuccess,
  deleteParametrosContratoPerforacionAjustesRegistro,
  deleteParametrosContratoPerforacionAjustesRegistroFailure,
  deleteParametrosContratoPerforacionAjustesRegistroSuccess,
  editModalParametrosContratoPerforacionAjustesRegistro,
  editModalParametrosContratoPerforacionAjustesRegistroFailure,
  editModalParametrosContratoPerforacionAjustesRegistroSuccess,
  filterParametrosContratoPerforacionAjustesRegistro,
  getAllParametrosContratoPerforacionAjustesRegistro,
  getAllParametrosContratoPerforacionAjustesRegistroFailure,
  initParametrosContratoPerforacionAjustesRegistro,
  paginatorParametrosContratoPerforacionAjustesRegistro,
  postModalParametrosContratoPerforacionAjustesRegistroFailure,
  postModalParametrosContratoPerforacionAjustesRegistroSuccess,
  putModalParametrosContratoPerforacionAjustesRegistroFailure,
  putModalParametrosContratoPerforacionAjustesRegistroSuccess,
  sortParametrosContratoPerforacionAjustesRegistro,
  getAllParametrosContratoPerforacionAjustesRegistroSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure
} from './parametros-contratos-perforacion-porcentaje-verticalidad.actions';

import { compare } from 'src/app/shared/directives/sort.directive';
import { PAGESIZE } from 'src/app/shared/services/paginator.service';
import {
  ParametrosContratoPerforacionAjustesRegistroState
} from "./parametros-contratos-perforacion-porcentaje-verticalidad.state";
import { ContratoPerforacionAjustesRegistro } from 'src/app/data/models/ajustes-porcentaje-verticalidad';

// Estado inicial de las variables
export const initialState: ParametrosContratoPerforacionAjustesRegistroState = {
  loading: true,
  action: false,
  error: '',
  contratosRegistro: [],
  contratosRegistroFiltro: [],
  edit: new ContratoPerforacionAjustesRegistro(),
  column: '',
  direction:  '',
  paginator:  1,
  codContrato:  '',
  tipoPozo:  '',
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosContratoPerforacionAjustesRegistroReducer = createReducer(
  initialState,
  on(initParametrosContratoPerforacionAjustesRegistro, (state) => {
    return {...state, loading: false, action: true, error: '', contratosRegistro:  [], edit: new ContratoPerforacionAjustesRegistro()}
  }),
  // get all getByCodContratoTipoPozo
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro, (state, {codContrato, tipoPozo}) => {
    return {...state, loading: true, action: false, error: '',
      codContrato, tipoPozo,
      contratosRegistro: [], contratosRegistroFiltro: [], edit: new ContratoPerforacionAjustesRegistro()}
  }),
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess, (state, {contratosRegistro, contratosRegistroFiltro}) => {
    contratosRegistro = _paginator(contratosRegistro, 1);
    return {...state, loading: false, action: true, contratosRegistro, contratosRegistroFiltro}
  }),
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // get all
  on(getAllParametrosContratoPerforacionAjustesRegistro, (state) => {
    return {...state, loading: true, action: false, error: '', contratosRegistro: [], contratosRegistroFiltro: [], edit: new ContratoPerforacionAjustesRegistro()}
  }),
  on(getAllParametrosContratoPerforacionAjustesRegistroSuccess, (state, {contratosRegistro, contratosRegistroFiltro}) => {
    contratosRegistro = _paginator(contratosRegistro, 1);
    return {...state, loading: false, action: true, contratosRegistro, contratosRegistroFiltro}
  }),
  on(getAllParametrosContratoPerforacionAjustesRegistroFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosContratoPerforacionAjustesRegistro, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosContratoPerforacionAjustesRegistroSuccess, (state, {edit}) => {
    let contratosRegistroFiltro = [...state.contratosRegistroFiltro];
    contratosRegistroFiltro.push(edit);// agreParametrosar al inicio
    let contratosRegistro = _paginator(contratosRegistroFiltro, 1);
    return {...state,  contratosRegistro, contratosRegistroFiltro, edit: new ContratoPerforacionAjustesRegistro(), paginator:  1};
  }),
  on(createModalParametrosContratoPerforacionAjustesRegistroFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRegistro(), error: error}
  }),
  on(postModalParametrosContratoPerforacionAjustesRegistroSuccess, (state, {edit}) => {
    let _contratosRegistroFiltro  = [...state.contratosRegistroFiltro].filter(item => item.codigo !== null);

    if(edit) {
      _contratosRegistroFiltro.push(edit);
      const contratosRegistroFiltro = _contratosRegistroFiltro.map((e) => {
        if (e.codigo === edit.codigo) {
          return edit;
        }
        return e;
      });

      let contratosRegistro = _paginator(contratosRegistroFiltro, 1);
      return {...state, contratosRegistro, contratosRegistroFiltro, edit: new ContratoPerforacionAjustesRegistro(), paginator:  1}
    }

    let contratosRegistro = _paginator(_contratosRegistroFiltro, 1);
    return {...state, contratosRegistro, contratosRegistroFiltro: contratosRegistro, edit: new ContratoPerforacionAjustesRegistro(), paginator:  1};
  }),
  on(postModalParametrosContratoPerforacionAjustesRegistroFailure, (state, {edit, error}) => {
    const contratosRegistro = state.contratosRegistro.filter(item => item.codigo !== edit.codigo);
    return {...state, contratosRegistro, edit: new ContratoPerforacionAjustesRegistro(), error: error}
  }),

  // edit
  on(editModalParametrosContratoPerforacionAjustesRegistro, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosContratoPerforacionAjustesRegistroSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosContratoPerforacionAjustesRegistroFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRegistro(), error: error}
  }),
  on(putModalParametrosContratoPerforacionAjustesRegistroSuccess, (state, { edit}) => {
    const contratosRegistroFiltro = [...state.contratosRegistroFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosRegistro = _paginator(contratosRegistroFiltro, state.paginator);
    return {...state, contratosRegistro, contratosRegistroFiltro, edit: new ContratoPerforacionAjustesRegistro()};
  }),
  on(putModalParametrosContratoPerforacionAjustesRegistroFailure, (state, {edit, error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRegistro(), error: error}
  }),

  // delete
  on(deleteParametrosContratoPerforacionAjustesRegistro, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosContratoPerforacionAjustesRegistroSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let contratosRegistroFiltro = state.contratosRegistroFiltro.filter((item: ContratoPerforacionAjustesRegistro) => item.codigo !== edit.codigo);
      let contratosRegistro = _paginator(contratosRegistroFiltro, state.paginator);
      return {...state, contratosRegistro, contratosRegistroFiltro, edit: new ContratoPerforacionAjustesRegistro()};
    }
    return {...state, edit: new ContratoPerforacionAjustesRegistro()};
  }),
  on(deleteParametrosContratoPerforacionAjustesRegistroFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRegistro(), error: error}
  }),

  // action
  on(sortParametrosContratoPerforacionAjustesRegistro, (state, {column, direction }) => {
    let contratosRegistro = [...state.contratosRegistroFiltro];
    contratosRegistro.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    contratosRegistro = _paginator(contratosRegistro, state.paginator);
    return {...state, column , direction, contratosRegistro}
  }),
  on(filterParametrosContratoPerforacionAjustesRegistro, (state, {filtro}) => {
    let contratosRegistroFiltro = [...state.contratosRegistroFiltro];
    let contratosRegistro = [...state.contratosRegistroFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codContrato.toLocaleLowerCase().includes(term);
    });
    contratosRegistro = _paginator(contratosRegistro, 1);
    return {...state, filtro, contratosRegistro, contratosRegistroFiltro}
  }),
  on(paginatorParametrosContratoPerforacionAjustesRegistro, (state, {paginator}) => {
    const contratosRegistro = _paginator(state.contratosRegistro, paginator);
    return {...state, loading: false, action: true, contratosRegistro, paginator}
  }),




);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
