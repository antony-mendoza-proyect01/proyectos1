import {ParametrosHumedadesState} from './parametros-humedades.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosHumedades,
  createModalParametrosHumedadesFailure,
  createModalParametrosHumedadesSuccess, deleteParametrosHumedades, deleteParametrosHumedadesFailure, deleteParametrosHumedadesSuccess,
  editModalParametrosHumedades, editModalParametrosHumedadesFailure, editModalParametrosHumedadesSuccess, filterParametrosHumedades,
  getAllParametrosHumedades,
  getAllParametrosHumedadesFailure,
  getAllParametrosHumedadesSuccess,
  initParametrosHumedades, paginatorParametrosHumedades,
  postModalParametrosHumedadesFailure,
  postModalParametrosHumedadesSuccess, putModalParametrosHumedadesFailure, putModalParametrosHumedadesSuccess, sortParametrosHumedades
} from './parametros-humedades.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { Humedades } from 'src/app/data/models/humedades';

// Estado inicial de las variables
export const initialState: ParametrosHumedadesState = {
  loading: true,
  action: false,
  error: '',
  humedades: [],
  humedadesFiltro: [],
  edit: new Humedades(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosHumedadesReducer = createReducer(
  initialState,
  on(initParametrosHumedades, (state) => {
    return {...state, loading: false, action: true, error: '', humedades:  [], edit: new Humedades()}
  }),
  // get all
  on(getAllParametrosHumedades, (state) => {
    return {...state, loading: true, action: false, error: '', humedades: [], humedadesFiltro: [], edit: new Humedades()}
  }),
  on(getAllParametrosHumedadesSuccess, (state, {humedades, humedadesFiltro}) => {
    humedades = _paginator(humedades, 1);
    return {...state, loading: false, action: true, humedades, humedadesFiltro}
  }),
  on(getAllParametrosHumedadesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosHumedades, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosHumedadesSuccess, (state, {edit}) => {
    let humedadesFiltro = [...state.humedadesFiltro];
    humedadesFiltro.unshift(edit);// agreParametrosar al inicio
    let humedades = _paginator(humedadesFiltro, 1);
    return {...state,  humedades, humedadesFiltro, edit: new Humedades(), paginator:  1};
  }),
  on(createModalParametrosHumedadesFailure, (state, {error}) => {
    return {...state, edit: new Humedades(), error: error}
  }),
  on(postModalParametrosHumedadesSuccess, (state, {edit}) => {
    let humedadesEdit  = [...state.humedadesFiltro].filter(item => item.codHumedad !== null);
    humedadesEdit.unshift(edit);
    const humedadesFiltro = humedadesEdit.map((e) => {
      if (e.codHumedad === edit.codHumedad) {
        return edit;
      }
      return e;
    });
    let humedades = _paginator(humedadesFiltro, 1);
    return {...state, humedades, humedadesFiltro, edit: new Humedades(), paginator:  1};
  }),
  on(postModalParametrosHumedadesFailure, (state, {edit, error}) => {
    const humedades = state.humedades.filter(item => item.codHumedad !== edit.codHumedad);
    return {...state, humedades, edit: new Humedades(), error: error}
  }),

  // edit
  on(editModalParametrosHumedades, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosHumedadesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosHumedadesFailure, (state, {error}) => {
    return {...state, edit: new Humedades(), error: error}
  }),
  on(putModalParametrosHumedadesSuccess, (state, { edit}) => {
    const humedadesFiltro = [...state.humedadesFiltro].map((e) => {
      if (e.codHumedad === edit.codHumedad) {
        return edit;
      }
      return e;
    });
    let humedades = _paginator(humedadesFiltro, state.paginator);
    return {...state, humedades, humedadesFiltro, edit: new Humedades()};
  }),
  on(putModalParametrosHumedadesFailure, (state, {edit, error}) => {
    return {...state, edit: new Humedades(), error: error}
  }),

  // delete
  on(deleteParametrosHumedades, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosHumedadesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let humedadesFiltro = state.humedadesFiltro.filter((item: Humedades) => item.codHumedad !== edit.codHumedad);
      let humedades = _paginator(humedadesFiltro, state.paginator);
      return {...state, humedades, humedadesFiltro, edit: new Humedades()};
    }
    return {...state, edit: new Humedades()};
  }),
  on(deleteParametrosHumedadesFailure, (state, {error}) => {
    return {...state, edit: new Humedades(), error: error}
  }),

  // action
  on(sortParametrosHumedades, (state, {column, direction }) => {
    let humedades = [...state.humedadesFiltro];
    humedades.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    humedades = _paginator(humedades, state.paginator);
    return {...state, column , direction, humedades}
  }),
  on(filterParametrosHumedades, (state, {filtro}) => {
    let humedadesFiltro = [...state.humedadesFiltro];
    let humedades = [...state.humedadesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.humedad.toLocaleLowerCase().includes(term);
    });
    humedades = _paginator(humedades, 1);
    return {...state, filtro, humedades, humedadesFiltro}
  }),
  on(paginatorParametrosHumedades, (state, {paginator}) => {
    const humedades = _paginator(state.humedadesFiltro, paginator);
    return {...state, loading: false, action: true, humedades, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
