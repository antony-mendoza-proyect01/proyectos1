import {ParametrosContratosRegistroState} from './parametros-contratos-registro.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosContratosRegistro,
  createModalParametrosContratosRegistroFailure,
  createModalParametrosContratosRegistroSuccess,
  createModalTarifaRegistroParametrosContratosRegistro,
  createModalTarifaRegistroParametrosContratosRegistroFailure,
  createModalTarifaRegistroParametrosContratosRegistroSuccess,
  deleteParametrosContratosRegistro,
  deleteParametrosContratosRegistroFailure,
  deleteParametrosContratosRegistroSuccess,
  deleteTarifaRegistroParametrosContratosRegistro,
  deleteTarifaRegistroParametrosContratosRegistroSuccess,
  editModalParametrosContratosRegistro,
  editModalParametrosContratosRegistroFailure,
  editModalParametrosContratosRegistroSuccess,
  editModalTarifaRegistroParametrosContratosRegistro,
  editModalTarifaRegistroParametrosContratosRegistroFailure,
  editModalTarifaRegistroParametrosContratosRegistroSuccess,
  filterParametrosContratosRegistro,
  getAllParametrosContratosRegistro,
  getAllParametrosContratosRegistroFailure,
  getAllParametrosContratosRegistroSuccess,
  getByCodContratoParametrosContratosRegistroFailure,
  getByCodContratoParametrosContratosRegistroRegistro,
  getByCodContratoParametrosContratosRegistroSuccess,
  initParametrosContratosRegistro,
  paginatorParametrosContratosRegistro,
  postModalParametrosContratosRegistroFailure,
  postModalParametrosContratosRegistroSuccess,
  postModalTarifaRegistroParametrosContratosRegistroSuccess,
  putModalParametrosContratosRegistroFailure,
  putModalParametrosContratosRegistroSuccess,
  sortParametrosContratosRegistro,
} from './parametros-contratos-registro.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {ContratosRegistro} from '../../../../data/models/contratos-registro';
import {TarifasRegistro} from '../../../../data/models/tarifas-registro';

// Estado inicial de las variables
export const initialState: ParametrosContratosRegistroState = {
  loading: true,
  action: false,
  error: '',
  contratosRegistro: [],
  contratosRegistroFiltro: [],
  edit: new ContratosRegistro(),
  column: '',
  direction:  '',
  paginator:  1,
  editContratosRegistroTarifasRegistro: new ContratosRegistro(),
  tarifasRegistro: [],
  loadingTarifasRegistro: false,
  errorTarifasRegistro: '',
  editTarifasRegistro: new TarifasRegistro()
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosContratosRegistroReducer = createReducer(
  initialState,
  on(initParametrosContratosRegistro, (state) => {
    return {...state, loading: false, action: true, error: '', contratosRegistro:  [], edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro()}
  }),
  // get all
  on(getAllParametrosContratosRegistro, (state) => {
    return {...state, loading: true, action: false, error: '', contratosRegistro: [], contratosRegistroFiltro: [], edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro()}
  }),
  on(getAllParametrosContratosRegistroSuccess, (state, {contratosRegistro, contratosRegistroFiltro}) => {
    contratosRegistro = _paginator(contratosRegistro, 1);
    return {...state, loading: false, action: true, contratosRegistro, contratosRegistroFiltro}
  }),
  on(getAllParametrosContratosRegistroFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosContratosRegistro, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosContratosRegistroSuccess, (state, {edit}) => {
    let contratosRegistroFiltro = [...state.contratosRegistroFiltro];
    contratosRegistroFiltro.unshift(edit);// agreParametrosar al inicio
    let contratosRegistro = _paginator(contratosRegistroFiltro, 1);
    return {...state,  contratosRegistro, contratosRegistroFiltro, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), paginator:  1};
  }),
  on(createModalParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), error: error}
  }),
  on(postModalParametrosContratosRegistroSuccess, (state, {edit}) => {
    const contratosRegistroFiltro = [...state.contratosRegistroFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosRegistro = _paginator(contratosRegistroFiltro, 1);
    return {...state, contratosRegistro, contratosRegistroFiltro, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), paginator:  1};
  }),
  on(postModalParametrosContratosRegistroFailure, (state, {edit, error}) => {
    const contratosRegistro = state.contratosRegistro.filter(item => item.codigo !== edit.codigo);
    return {...state, contratosRegistro, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), error: error}
  }),

  // edit
  on(editModalParametrosContratosRegistro, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosContratosRegistroSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), error: error}
  }),
  on(putModalParametrosContratosRegistroSuccess, (state, { edit}) => {
    const contratosRegistroFiltro = [...state.contratosRegistroFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let contratosRegistro = _paginator(contratosRegistroFiltro, state.paginator);
    return {...state, contratosRegistro, contratosRegistroFiltro, edit: new contratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro()};
  }),
  on(putModalParametrosContratosRegistroFailure, (state, {edit, error}) => {
    return {...state, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), error: error}
  }),

  // delete
  on(deleteParametrosContratosRegistro, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosContratosRegistroSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let contratosRegistroFiltro = state.contratosRegistroFiltro.filter((item: ContratosRegistro) => item.codigo !== edit.codigo);
      let contratosRegistro = _paginator(contratosRegistroFiltro, state.paginator);
      return {...state, contratosRegistro, contratosRegistroFiltro, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro()};
    }
    return {...state, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro()};
  }),
  on(deleteParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, edit: new ContratosRegistro(), editContratosRegistroTarifasRegistro: new ContratosRegistro(), error: error}
  }),

  // action
  on(sortParametrosContratosRegistro, (state, {column, direction }) => {
    let contratosRegistro = [...state.contratosRegistroFiltro];
    contratosRegistro.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    contratosRegistro = _paginator(contratosRegistro, state.paginator);
    return {...state, column , direction, contratosRegistro}
  }),
  on(filterParametrosContratosRegistro, (state, {filtro}) => {
    let contratosRegistroFiltro = [...state.contratosRegistroFiltro];
    let contratosRegistro = [...state.contratosRegistroFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.descripcion.toLocaleLowerCase().includes(term);
    });
    contratosRegistro = _paginator(contratosRegistro, 1);
    return {...state, filtro, contratosRegistro, contratosRegistroFiltro}
  }),
  on(paginatorParametrosContratosRegistro, (state, {paginator}) => {
    const contratosRegistro = _paginator(state.contratosRegistroFiltro, paginator);
    return {...state, loading: false, action: true, contratosRegistro, paginator}
  }),

  on(getByCodContratoParametrosContratosRegistroRegistro, (state, {edit}) => {
    return {...state, editContratosRegistroTarifasRegistro: edit, loadingTarifasRegistro: true, editTarifasRegistro: new TarifasRegistro()}
  }),
  on(getByCodContratoParametrosContratosRegistroSuccess, (state, {tarifasRegistro}) => {
    return {...state, tarifasRegistro, loadingTarifasRegistro: false, editTarifasRegistro: new TarifasRegistro()}
  }),
  on(getByCodContratoParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, errorTarifasRegistro: error, loadingTarifasRegistro: false, editContratosRegistroTarifasRegistro: new ContratosRegistro()}
  }),

  on(createModalTarifaRegistroParametrosContratosRegistro, (state, {edit}) => {
    return {...state, editTarifasRegistro: edit}
  }),
  on(createModalTarifaRegistroParametrosContratosRegistroSuccess, (state, {edit}) => {
    return {...state,  editTarifasRegistro: new TarifasRegistro()};
  }),
  on(createModalTarifaRegistroParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, editTarifasRegistro: new TarifasRegistro(), error: error}
  }),
  on(postModalTarifaRegistroParametrosContratosRegistroSuccess, (state, {edit}) => {
    const tarifasRegistro = [...state.tarifasRegistro];
    if(edit) {
      tarifasRegistro.unshift(edit);
    }
    return {...state,  editTarifasRegistro: new TarifasRegistro(), tarifasRegistro};
  }),


  on(editModalTarifaRegistroParametrosContratosRegistro, (state, {edit}) => {
      return {...state, editTarifasRegistro: edit}
    }),
  on(editModalTarifaRegistroParametrosContratosRegistroSuccess, (state, {edit}) => {
    const tarifasRegistro = [...state.tarifasRegistro].map((e) => {
      if (e.tarifaRegistroPK.sonda === edit.tarifaRegistroPK.sonda) {
        return edit;
      }
      return e;
    });
    return {...state,  editTarifasRegistro: new TarifasRegistro(), tarifasRegistro};
  }),
  on(editModalTarifaRegistroParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, editTarifasRegistro: new TarifasRegistro(), error: error}
  }),

  // delete
  on(deleteTarifaRegistroParametrosContratosRegistro, (state, {edit}) => {
    return {...state, editTarifasRegistro: edit}
  }),
  on(deleteTarifaRegistroParametrosContratosRegistroSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      console.log(state.tarifasRegistro);
      console.log(edit);
      let tarifasRegistro = state.tarifasRegistro.filter((item: TarifasRegistro) =>
        item.tarifaRegistroPK.sonda !== edit.tarifaRegistroPK.sonda);
      return {...state,  tarifasRegistro, editTarifasRegistro: new TarifasRegistro()};
    }
    return {...state, editTarifasRegistro: new TarifasRegistro()};
  }),
  on(deleteParametrosContratosRegistroFailure, (state, {error}) => {
    return {...state, editTarifasRegistro: new TarifasRegistro(), error}
  }),
);


let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
