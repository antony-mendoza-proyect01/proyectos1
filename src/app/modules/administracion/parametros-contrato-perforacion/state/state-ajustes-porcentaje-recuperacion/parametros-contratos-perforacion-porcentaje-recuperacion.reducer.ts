import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosContratoPerforacionAjustesRecuperacion,
  createModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  createModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  deleteParametrosContratoPerforacionAjustesRecuperacion,
  deleteParametrosContratoPerforacionAjustesRecuperacionFailure,
  deleteParametrosContratoPerforacionAjustesRecuperacionSuccess,
  editModalParametrosContratoPerforacionAjustesRecuperacion,
  editModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  editModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  filterParametrosContratoPerforacionAjustesRecuperacion,
  getAllParametrosContratoPerforacionAjustesRecuperacion,
  getAllParametrosContratoPerforacionAjustesRecuperacionFailure,
  initParametrosContratoPerforacionAjustesRecuperacion,
  paginatorParametrosContratoPerforacionAjustesRecuperacion,
  postModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  postModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  putModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  putModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  sortParametrosContratoPerforacionAjustesRecuperacion,
  getAllParametrosContratoPerforacionAjustesRecuperacionSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure
} from './parametros-contratos-perforacion-porcentaje-recuperacion.actions';

import { compare } from 'src/app/shared/directives/sort.directive';
import { PAGESIZE } from 'src/app/shared/services/paginator.service';
import { ParametrosContratoPerforacionAjustesRecuperacionState } from './parametros-contratos-perforacion-porcentaje-recuperacion.state';
import { ContratoPerforacionAjustesRecuperacion } from 'src/app/data/models/ajustes-porcentaje-recuperacion';

// Estado inicial de las variables
export const initialState: ParametrosContratoPerforacionAjustesRecuperacionState = {
  loading: true,
  action: false,
  error: '',
  contratosRecuperacion: [],
  contratosRecuperacionFiltro: [],
  edit: new ContratoPerforacionAjustesRecuperacion(),
  column: '',
  direction:  '',
  paginator:  1,
  codContrato:  '',
  tipoPozo:  '',
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosContratoPerforacionAjustesRecuperacionReducer = createReducer(
  initialState,
  on(initParametrosContratoPerforacionAjustesRecuperacion, (state) => {
    return {...state, loading: false, action: true, error: '', contratosRecuperacion:  [], edit: new ContratoPerforacionAjustesRecuperacion()}
  }),
  // get all getByCodContratoTipoPozo
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion, (state, {codContrato, tipoPozo}) => {
    return {...state, loading: true, action: false, error: '',
      codContrato, tipoPozo,
      contratosRecuperacion: [], contratosRecuperacionFiltro: [], edit: new ContratoPerforacionAjustesRecuperacion()}
  }),
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, {contratosRecuperacion, contratosRecuperacionFiltro}) => {
    contratosRecuperacion = _paginator(contratosRecuperacion, 1);
    return {...state, loading: false, action: true, contratosRecuperacion, contratosRecuperacionFiltro}
  }),
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // get all
  on(getAllParametrosContratoPerforacionAjustesRecuperacion, (state) => {
    return {...state, loading: true, action: false, error: '', contratosRecuperacion: [], contratosRecuperacionFiltro: [], edit: new ContratoPerforacionAjustesRecuperacion()}
  }),
  on(getAllParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, {contratosRecuperacion, contratosRecuperacionFiltro}) => {
    contratosRecuperacion = _paginator(contratosRecuperacion, 1);
    return {...state, loading: false, action: true, contratosRecuperacion, contratosRecuperacionFiltro}
  }),
  on(getAllParametrosContratoPerforacionAjustesRecuperacionFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosContratoPerforacionAjustesRecuperacion, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, {edit}) => {
    let contratosRecuperacionFiltro = [...state.contratosRecuperacionFiltro];
    contratosRecuperacionFiltro.push(edit);// agreParametrosar al inicio
    let contratosRecuperacion = _paginator(contratosRecuperacionFiltro, 1);
    return {...state,  contratosRecuperacion, contratosRecuperacionFiltro, edit: new ContratoPerforacionAjustesRecuperacion(), paginator:  1};
  }),
  on(createModalParametrosContratoPerforacionAjustesRecuperacionFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRecuperacion(), error: error}
  }),
  on(postModalParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, {edit}) => {
    let _contratosRecuperacionFiltro  = [...state.contratosRecuperacionFiltro].filter(item => item.codigo !== null);

    if(edit) {
      _contratosRecuperacionFiltro.push(edit);
      const contratosRecuperacionFiltro = _contratosRecuperacionFiltro.map((e) => {
        if (e.codigo === edit.codigo) {
          return edit;
        }
        return e;
      });

      let contratosRecuperacion = _paginator(contratosRecuperacionFiltro, 1);
      return {...state, contratosRecuperacion, contratosRecuperacionFiltro, edit: new ContratoPerforacionAjustesRecuperacion(), paginator:  1}
    }

    let contratosRecuperacion = _paginator(_contratosRecuperacionFiltro, 1);
    return {...state, contratosRecuperacion, contratosRecuperacionFiltro: contratosRecuperacion, edit: new ContratoPerforacionAjustesRecuperacion(), paginator:  1};
  }),
  on(postModalParametrosContratoPerforacionAjustesRecuperacionFailure, (state, {edit, error}) => {
    const contratosRecuperacion = state.contratosRecuperacion.filter(item => item.codigo !== edit.codigo);
    return {...state, contratosRecuperacion, edit: new ContratoPerforacionAjustesRecuperacion(), error: error}
  }),

  // edit
  on(editModalParametrosContratoPerforacionAjustesRecuperacion, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosContratoPerforacionAjustesRecuperacionFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRecuperacion(), error: error}
  }),
  on(putModalParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, { edit}) => {
    const contratosRecuperacionFiltro = [...state.contratosRecuperacionFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosRecuperacion = _paginator(contratosRecuperacionFiltro, state.paginator);
    return {...state, contratosRecuperacion, contratosRecuperacionFiltro, edit: new ContratoPerforacionAjustesRecuperacion()};
  }),
  on(putModalParametrosContratoPerforacionAjustesRecuperacionFailure, (state, {edit, error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRecuperacion(), error: error}
  }),

  // delete
  on(deleteParametrosContratoPerforacionAjustesRecuperacion, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosContratoPerforacionAjustesRecuperacionSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let contratosRecuperacionFiltro = state.contratosRecuperacionFiltro.filter((item: ContratoPerforacionAjustesRecuperacion) => item.codigo !== edit.codigo);
      let contratosRecuperacion = _paginator(contratosRecuperacionFiltro, state.paginator);
      return {...state, contratosRecuperacion, contratosRecuperacionFiltro, edit: new ContratoPerforacionAjustesRecuperacion()};
    }
    return {...state, edit: new ContratoPerforacionAjustesRecuperacion()};
  }),
  on(deleteParametrosContratoPerforacionAjustesRecuperacionFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesRecuperacion(), error: error}
  }),

  // action
  on(sortParametrosContratoPerforacionAjustesRecuperacion, (state, {column, direction }) => {
    let contratosRecuperacion = [...state.contratosRecuperacionFiltro];
    contratosRecuperacion.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    contratosRecuperacion = _paginator(contratosRecuperacion, state.paginator);
    return {...state, column , direction, contratosRecuperacion}
  }),
  on(filterParametrosContratoPerforacionAjustesRecuperacion, (state, {filtro}) => {
    let contratosRecuperacionFiltro = [...state.contratosRecuperacionFiltro];
    let contratosRecuperacion = [...state.contratosRecuperacionFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codContrato.toLocaleLowerCase().includes(term);
    });
    contratosRecuperacion = _paginator(contratosRecuperacion, 1);
    return {...state, filtro, contratosRecuperacion, contratosRecuperacionFiltro}
  }),
  on(paginatorParametrosContratoPerforacionAjustesRecuperacion, (state, {paginator}) => {
    const contratosRecuperacion = _paginator(state.contratosRecuperacion, paginator);
    return {...state, loading: false, action: true, contratosRecuperacion, paginator}
  }),




);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
