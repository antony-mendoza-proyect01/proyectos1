import {createReducer, on} from '@ngrx/store';

import {
  createModalParametrosContratoPerforacionAjustesDesviacion,
  createModalParametrosContratoPerforacionAjustesDesviacionFailure,
  createModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  deleteParametrosContratoPerforacionAjustesDesviacion,
  deleteParametrosContratoPerforacionAjustesDesviacionFailure,
  deleteParametrosContratoPerforacionAjustesDesviacionSuccess,
  editModalParametrosContratoPerforacionAjustesDesviacion,
  editModalParametrosContratoPerforacionAjustesDesviacionFailure,
  editModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  filterParametrosContratoPerforacionAjustesDesviacion,
  getAllParametrosContratoPerforacionAjustesDesviacion,
  getAllParametrosContratoPerforacionAjustesDesviacionFailure,
  initParametrosContratoPerforacionAjustesDesviacion,
  paginatorParametrosContratoPerforacionAjustesDesviacion,
  postModalParametrosContratoPerforacionAjustesDesviacionFailure,
  postModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  putModalParametrosContratoPerforacionAjustesDesviacionFailure,
  putModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  sortParametrosContratoPerforacionAjustesDesviacion,
  getAllParametrosContratoPerforacionAjustesDesviacionSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure
} from './parametros-contratos-perforacion-ajustes-desviacion.actions';

import { compare } from 'src/app/shared/directives/sort.directive';
import { PAGESIZE } from 'src/app/shared/services/paginator.service';
import { ParametrosContratoPerforacionAjustesDesviacionState } from './parametros-contratos-perforacion-ajustes-desviacion.state';
import { ContratoPerforacionAjustesDesviacion } from 'src/app/data/models/ajustes-desviacion';

// Estado inicial de las variables
export const initialState: ParametrosContratoPerforacionAjustesDesviacionState = {
  loading: true,
  action: false,
  error: '',
  contratosAjutesDesviacion: [],
  contratosAjutesDesviacionFiltro: [],
  edit: new ContratoPerforacionAjustesDesviacion(),
  column: '',
  direction:  '',
  paginator:  1,
  codContrato:  '',
  tipoPozo:  '',
  categoriasAjustes:  [],
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosContratoPerforacionAjustesDesviacionReducer = createReducer(
  initialState,
  on(initParametrosContratoPerforacionAjustesDesviacion, (state) => {
    return {...state, loading: false, action: true, error: '', contratosAjutesDesviacion:  [], edit: new ContratoPerforacionAjustesDesviacion()}
  }),
  // get all getByCodContratoTipoPozo
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion, (state, {codContrato, tipoPozo}) => {
    return {...state, loading: true, action: false, error: '',
      codContrato, tipoPozo,
      contratosAjutesDesviacion: [], contratosAjutesDesviacionFiltro: [], edit: new ContratoPerforacionAjustesDesviacion()}
  }),
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess, (state, {contratosAjutesDesviacion, contratosAjutesDesviacionFiltro}) => {
    contratosAjutesDesviacion = _paginator(contratosAjutesDesviacion, 1);
    return {...state, loading: false, action: true, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro}
  }),
  on(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // get all
  on(getAllParametrosContratoPerforacionAjustesDesviacion, (state) => {
    return {...state, loading: true, action: false, error: '', contratosAjutesDesviacion: [], contratosAjutesDesviacionFiltro: [], edit: new ContratoPerforacionAjustesDesviacion()}
  }),
  on(getAllParametrosContratoPerforacionAjustesDesviacionSuccess, (state, {contratosAjutesDesviacion, contratosAjutesDesviacionFiltro}) => {
    contratosAjutesDesviacion = _paginator(contratosAjutesDesviacion, 1);
    return {...state, loading: false, action: true, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro}
  }),
  on(getAllParametrosContratoPerforacionAjustesDesviacionFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosContratoPerforacionAjustesDesviacion, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosContratoPerforacionAjustesDesviacionSuccess, (state, {edit}) => {
    let contratosAjutesDesviacionFiltro = [...state.contratosAjutesDesviacionFiltro];
    contratosAjutesDesviacionFiltro.push(edit);// agreParametrosar al inicio
    let contratosAjutesDesviacion = _paginator(contratosAjutesDesviacionFiltro, 1);
    return {...state,  contratosAjutesDesviacion, contratosAjutesDesviacionFiltro, edit: new ContratoPerforacionAjustesDesviacion(), paginator:  1};
  }),
  on(createModalParametrosContratoPerforacionAjustesDesviacionFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesDesviacion(), error: error}
  }),
  on(postModalParametrosContratoPerforacionAjustesDesviacionSuccess, (state, {edit}) => {
    let _contratosAjutesDesviacionFiltro  = [...state.contratosAjutesDesviacionFiltro].filter(item => item.codigo !== null);

    if(edit) {
      _contratosAjutesDesviacionFiltro.push(edit);
      const contratosAjutesDesviacionFiltro = _contratosAjutesDesviacionFiltro.map((e) => {
        if (e.codigo === edit.codigo) {
          return edit;
        }
        return e;
      });

      let contratosAjutesDesviacion = _paginator(contratosAjutesDesviacionFiltro, 1);
      return {...state, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro, edit: new ContratoPerforacionAjustesDesviacion(), paginator:  1}
    }

    let contratosAjutesDesviacion = _paginator(_contratosAjutesDesviacionFiltro, 1);
    return {...state, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro: contratosAjutesDesviacion, edit: new ContratoPerforacionAjustesDesviacion(), paginator:  1};
  }),
  on(postModalParametrosContratoPerforacionAjustesDesviacionFailure, (state, {edit, error}) => {
    const contratosAjutesDesviacion = state.contratosAjutesDesviacion.filter(item => item.codigo !== edit.codigo);
    return {...state, contratosAjutesDesviacion, edit: new ContratoPerforacionAjustesDesviacion(), error: error}
  }),

  // edit
  on(editModalParametrosContratoPerforacionAjustesDesviacion, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosContratoPerforacionAjustesDesviacionSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosContratoPerforacionAjustesDesviacionFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesDesviacion(), error: error}
  }),
  on(putModalParametrosContratoPerforacionAjustesDesviacionSuccess, (state, { edit}) => {
    const contratosAjutesDesviacionFiltro = [...state.contratosAjutesDesviacionFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosAjutesDesviacion = _paginator(contratosAjutesDesviacionFiltro, state.paginator);
    return {...state, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro, edit: new ContratoPerforacionAjustesDesviacion()};
  }),
  on(putModalParametrosContratoPerforacionAjustesDesviacionFailure, (state, {edit, error}) => {
    return {...state, edit: new ContratoPerforacionAjustesDesviacion(), error: error}
  }),

  // delete
  on(deleteParametrosContratoPerforacionAjustesDesviacion, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosContratoPerforacionAjustesDesviacionSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let contratosAjutesDesviacionFiltro = state.contratosAjutesDesviacionFiltro.filter((item: ContratoPerforacionAjustesDesviacion) => item.codigo !== edit.codigo);
      let contratosAjutesDesviacion = _paginator(contratosAjutesDesviacionFiltro, state.paginator);
      return {...state, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro, edit: new ContratoPerforacionAjustesDesviacion()};
    }
    return {...state, edit: new ContratoPerforacionAjustesDesviacion()};
  }),
  on(deleteParametrosContratoPerforacionAjustesDesviacionFailure, (state, {error}) => {
    return {...state, edit: new ContratoPerforacionAjustesDesviacion(), error: error}
  }),

  // action
  on(sortParametrosContratoPerforacionAjustesDesviacion, (state, {column, direction }) => {
    let contratosAjutesDesviacion = [...state.contratosAjutesDesviacionFiltro];
    contratosAjutesDesviacion.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    contratosAjutesDesviacion = _paginator(contratosAjutesDesviacion, state.paginator);
    return {...state, column , direction, contratosAjutesDesviacion}
  }),
  on(filterParametrosContratoPerforacionAjustesDesviacion, (state, {filtro}) => {
    let contratosAjutesDesviacionFiltro = [...state.contratosAjutesDesviacionFiltro];
    let contratosAjutesDesviacion = [...state.contratosAjutesDesviacionFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.codContrato.toLocaleLowerCase().includes(term) ||
        item.categoriaCodigo.toLocaleLowerCase().includes(term);

    });
    contratosAjutesDesviacion = _paginator(contratosAjutesDesviacion, 1);
    return {...state, filtro, contratosAjutesDesviacion, contratosAjutesDesviacionFiltro}
  }),
  on(paginatorParametrosContratoPerforacionAjustesDesviacion, (state, {paginator}) => {
    const contratosAjutesDesviacion = _paginator(state.contratosAjutesDesviacion, paginator);
    return {...state, loading: false, action: true, contratosAjutesDesviacion, paginator}
  }),

  //get by CategoriaAjuste
  on(getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion, (state) => {
    return {...state, categoriasAjustes: []}
  }),
  on(getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess, (state, {categoriasAjustes}) => {
    console.log(categoriasAjustes);
    return {...state, categoriasAjustes}
  }),
  on(getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure, (state, { error}) => {
    return {...state, categoriasAjustes: [], error}
  }),


);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
