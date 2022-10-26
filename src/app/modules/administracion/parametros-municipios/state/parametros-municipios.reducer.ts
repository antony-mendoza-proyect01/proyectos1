import {ParametrosMunicipiosState} from './parametros-municipios.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosMunicipios,
  createModalParametrosMunicipiosFailure,
  createModalParametrosMunicipiosSuccess, deleteParametrosMunicipios, deleteParametrosMunicipiosFailure, deleteParametrosMunicipiosSuccess,
  editModalParametrosMunicipios, editModalParametrosMunicipiosFailure, editModalParametrosMunicipiosSuccess, filterParametrosMunicipios,
  getAllParametrosMunicipios,
  getAllParametrosMunicipiosFailure,
  getAllParametrosMunicipiosSuccess,
  initParametrosMunicipios, paginatorParametrosMunicipios,
  postModalParametrosMunicipiosFailure,
  postModalParametrosMunicipiosSuccess, putModalParametrosMunicipiosFailure, putModalParametrosMunicipiosSuccess, sortParametrosMunicipios
} from './parametros-municipios.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Municipios } from 'src/app/data/models/municipios';

// Estado inicial de las variables
export const initialState: ParametrosMunicipiosState = {
  loading: true,
  action: false,
  error: '',
  municipios: [],
  municipiosFiltro: [],
  edit: new Municipios(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosMunicipiosReducer = createReducer(
  initialState,
  on(initParametrosMunicipios, (state) => {
    return {...state, loading: false, action: true, error: '', municipios:  [], edit: new Municipios()}
  }),
  // get all
  on(getAllParametrosMunicipios, (state) => {
    return {...state, loading: true, action: false, error: '', municipios: [], municipiosFiltro: [], edit: new Municipios()}
  }),
  on(getAllParametrosMunicipiosSuccess, (state, {municipios, municipiosFiltro}) => {
    municipios = _paginator(municipios, 1);
    return {...state, loading: false, action: true, municipios, municipiosFiltro}
  }),
  on(getAllParametrosMunicipiosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosMunicipios, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosMunicipiosSuccess, (state, {edit}) => {
    let municipiosFiltro = [...state.municipiosFiltro];
    municipiosFiltro.unshift(edit);// agreParametrosar al inicio
    let municipios = _paginator(municipiosFiltro, 1);
    return {...state,  municipios, municipiosFiltro, edit: new Municipios(), paginator:  1};
  }),
  on(createModalParametrosMunicipiosFailure, (state, {error}) => {
    return {...state, edit: new Municipios(), error: error}
  }),
  on(postModalParametrosMunicipiosSuccess, (state, {edit}) => {
    let municipiosEdit  = [...state.municipiosFiltro].filter(item => item.codigo !== edit.codigo);
    municipiosEdit.unshift(edit);
    const municipiosFiltro = municipiosEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let municipios = _paginator(municipiosFiltro, 1);
    return {...state, municipios, municipiosFiltro, edit: new Municipios(), paginator:  1};
  }),
  on(postModalParametrosMunicipiosFailure, (state, {edit, error}) => {
    const municipios = state.municipios.filter(item => item.codigo !== edit.codigo);
    return {...state, municipios, edit: new Municipios(), error: error}
  }),

  // edit
  on(editModalParametrosMunicipios, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosMunicipiosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosMunicipiosFailure, (state, {error}) => {
    return {...state, edit: new Municipios(), error: error}
  }),
  on(putModalParametrosMunicipiosSuccess, (state, { edit}) => {
    const municipiosFiltro = [...state.municipiosFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let municipios = _paginator(municipiosFiltro, state.paginator);
    return {...state, municipios, municipiosFiltro, edit: new Municipios()};
  }),
  on(putModalParametrosMunicipiosFailure, (state, {edit, error}) => {
    return {...state, edit: new Municipios(), error: error}
  }),

  // delete
  on(deleteParametrosMunicipios, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosMunicipiosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let municipiosFiltro = state.municipiosFiltro.filter((item: Municipios) => item.codigo !== edit.codigo);
      let municipios = _paginator(municipiosFiltro, state.paginator);
      return {...state, municipios, municipiosFiltro, edit: new Municipios()};
    }
    return {...state, edit: new Municipios()};
  }),
  on(deleteParametrosMunicipiosFailure, (state, {error}) => {
    return {...state, edit: new Municipios(), error: error}
  }),

  // action
  on(sortParametrosMunicipios, (state, {column, direction }) => {
    let municipios = [...state.municipiosFiltro];
    municipios.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    municipios = _paginator(municipios, state.paginator);
    return {...state, column , direction, municipios}
  }),
  on(filterParametrosMunicipios, (state, {filtro}) => {
    let municipiosFiltro = [...state.municipiosFiltro];
    let municipios = [...state.municipiosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.municipio.toLocaleLowerCase().includes(term);
    });
    municipios = _paginator(municipios, 1);
    return {...state, filtro, municipios, municipiosFiltro}
  }),
  on(paginatorParametrosMunicipios, (state, {paginator}) => {
    const municipios = _paginator(state.municipiosFiltro, paginator);
    return {...state, loading: false, action: true, municipios, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
