import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosContratosPerforacionTarifas,
  createModalParametrosContratosPerforacionTarifasFailure,
  createModalParametrosContratosPerforacionTarifasSuccess,
  deleteParametrosContratosPerforacionTarifas,
  deleteParametrosContratosPerforacionTarifasFailure,
  deleteParametrosContratosPerforacionTarifasSuccess,
  editModalParametrosContratosPerforacionTarifas,
  editModalParametrosContratosPerforacionTarifasFailure,
  editModalParametrosContratosPerforacionTarifasSuccess,
  filterParametrosContratosPerforacionTarifas,
  getAllParametrosContratosPerforacionTarifas,
  getAllParametrosContratosPerforacionTarifasFailure,
  initParametrosContratosPerforacionTarifas,
  paginatorParametrosContratosPerforacionTarifas,
  postModalParametrosContratosPerforacionTarifasFailure,
  postModalParametrosContratosPerforacionTarifasSuccess,
  putModalParametrosContratosPerforacionTarifasFailure,
  putModalParametrosContratosPerforacionTarifasSuccess,
  sortParametrosContratosPerforacionTarifas,
  getAllParametrosContratosPerforacionTarifasSuccess,
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas,
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess,
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure
} from './parametros-contratos-perforacion-tarifa.actions';

import { Tarifas } from 'src/app/data/models/tarifas';
import { compare } from 'src/app/shared/directives/sort.directive';
import { PAGESIZE } from 'src/app/shared/services/paginator.service';
import { ParametrosContratoPerforacionTarifaState } from './parametros-contratos-perforacion-tarifa.state';

// Estado inicial de las variables
export const initialState: ParametrosContratoPerforacionTarifaState = {
  loading: true,
  action: false,
  error: '',
  contratosPerforacionTarifa: [],
  contratosPerforacionTarifaFiltro: [],
  edit: new Tarifas(),
  column: '',
  direction:  '',
  paginator:  1,
  codContrato:  '',
  tipoPozo:  '',
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosContratosRegistroTarifaReducer = createReducer(
  initialState,
  on(initParametrosContratosPerforacionTarifas, (state) => {
    return {...state, loading: false, action: true, error: '', contratosPerforacionTarifa:  [], edit: new Tarifas()}
  }),
  // get all getByCodContratoTipoPozo
  on(getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas, (state, {codContrato, tipoPozo}) => {
    return {...state, loading: true, action: false, error: '',
      codContrato, tipoPozo,
      contratosPerforacionTarifa: [], contratosPerforacionTarifaFiltro: [], edit: new Tarifas()}
  }),
  on(getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess, (state, {contratosPerforacionTarifa, contratosPerforacionTarifaFiltro}) => {
    contratosPerforacionTarifa = _paginator(contratosPerforacionTarifa, 1);
    return {...state, loading: false, action: true, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro}
  }),
  on(getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // get all
  on(getAllParametrosContratosPerforacionTarifas, (state) => {
    return {...state, loading: true, action: false, error: '', contratosPerforacionTarifa: [], contratosPerforacionTarifaFiltro: [], edit: new Tarifas()}
  }),
  on(getAllParametrosContratosPerforacionTarifasSuccess, (state, {contratosPerforacionTarifa, contratosPerforacionTarifaFiltro}) => {
    contratosPerforacionTarifa = _paginator(contratosPerforacionTarifa, 1);
    return {...state, loading: false, action: true, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro}
  }),
  on(getAllParametrosContratosPerforacionTarifasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosContratosPerforacionTarifas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosContratosPerforacionTarifasSuccess, (state, {edit}) => {
    let contratosPerforacionTarifaFiltro = [...state.contratosPerforacionTarifaFiltro];
    contratosPerforacionTarifaFiltro.push(edit);// agreParametrosar al inicio
    let contratosPerforacionTarifa = _paginator(contratosPerforacionTarifaFiltro, 1);
    return {...state,  contratosPerforacionTarifa, contratosPerforacionTarifaFiltro, edit: new Tarifas(), paginator:  1};
  }),
  on(createModalParametrosContratosPerforacionTarifasFailure, (state, {error}) => {
    return {...state, edit: new Tarifas(), error: error}
  }),
  on(postModalParametrosContratosPerforacionTarifasSuccess, (state, {edit}) => {
    let _contratosPerforacionTarifaFiltro  = [...state.contratosPerforacionTarifaFiltro].filter(item => item.codigoTarifa !== null);

    if(edit) {
      _contratosPerforacionTarifaFiltro.push(edit);
      const contratosPerforacionTarifaFiltro = _contratosPerforacionTarifaFiltro.map((e) => {
        if (e.codigoTarifa === edit.codigoTarifa) {
          return edit;
        }
        return e;
      });

      let contratosPerforacionTarifa = _paginator(contratosPerforacionTarifaFiltro, 1);
      return {...state, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro, edit: new Tarifas(), paginator:  1}
    }

    let contratosPerforacionTarifa = _paginator(_contratosPerforacionTarifaFiltro, 1);
    return {...state, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro: contratosPerforacionTarifa, edit: new Tarifas(), paginator:  1};
  }),
  on(postModalParametrosContratosPerforacionTarifasFailure, (state, {edit, error}) => {
    const contratosPerforacionTarifa = state.contratosPerforacionTarifa.filter(item => item.codigoTarifa !== edit.codigoTarifa);
    return {...state, contratosPerforacionTarifa, edit: new Tarifas(), error: error}
  }),

  // edit
  on(editModalParametrosContratosPerforacionTarifas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosContratosPerforacionTarifasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosContratosPerforacionTarifasFailure, (state, {error}) => {
    return {...state, edit: new Tarifas(), error: error}
  }),
  on(putModalParametrosContratosPerforacionTarifasSuccess, (state, { edit}) => {
    const contratosPerforacionTarifaFiltro = [...state.contratosPerforacionTarifaFiltro].map((e) => {
      if (e.codigoTarifa === edit.codigoTarifa) {
        return edit;
      }
      return e;
    });
    let contratosPerforacionTarifa = _paginator(contratosPerforacionTarifaFiltro, state.paginator);
    return {...state, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro, edit: new Tarifas()};
  }),
  on(putModalParametrosContratosPerforacionTarifasFailure, (state, {edit, error}) => {
    return {...state, edit: new Tarifas(), error: error}
  }),

  // delete
  on(deleteParametrosContratosPerforacionTarifas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosContratosPerforacionTarifasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let contratosPerforacionTarifaFiltro = state.contratosPerforacionTarifaFiltro.filter((item: Tarifas) => item.codigoTarifa !== edit.codigoTarifa);
      let contratosPerforacionTarifa = _paginator(contratosPerforacionTarifaFiltro, state.paginator);
      return {...state, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro, edit: new Tarifas()};
    }
    return {...state, edit: new Tarifas()};
  }),
  on(deleteParametrosContratosPerforacionTarifasFailure, (state, {error}) => {
    return {...state, edit: new Tarifas(), error: error}
  }),

  // action
  on(sortParametrosContratosPerforacionTarifas, (state, {column, direction }) => {
    let contratosPerforacionTarifa = [...state.contratosPerforacionTarifaFiltro];
    contratosPerforacionTarifa.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    contratosPerforacionTarifa = _paginator(contratosPerforacionTarifa, state.paginator);
    return {...state, column , direction, contratosPerforacionTarifa}
  }),
  on(filterParametrosContratosPerforacionTarifas, (state, {filtro}) => {
    let contratosPerforacionTarifaFiltro = [...state.contratosPerforacionTarifaFiltro];
    let contratosPerforacionTarifa = [...state.contratosPerforacionTarifaFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codContrato.toLocaleLowerCase().includes(term);
    });
    contratosPerforacionTarifa = _paginator(contratosPerforacionTarifa, 1);
    return {...state, filtro, contratosPerforacionTarifa, contratosPerforacionTarifaFiltro}
  }),
  on(paginatorParametrosContratosPerforacionTarifas, (state, {paginator}) => {
    const contratosPerforacionTarifa = _paginator(state.contratosPerforacionTarifa, paginator);
    return {...state, loading: false, action: true, contratosPerforacionTarifa, paginator}
  }),




);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
