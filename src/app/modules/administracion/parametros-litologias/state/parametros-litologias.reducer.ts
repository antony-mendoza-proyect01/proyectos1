import {ParametrosLitologiasState} from './parametros-litologias.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosLitologias,
  createModalParametrosLitologiasFailure,
  createModalParametrosLitologiasSuccess, deleteParametrosLitologias, deleteParametrosLitologiasFailure, deleteParametrosLitologiasSuccess,
  editModalParametrosLitologias, editModalParametrosLitologiasFailure, editModalParametrosLitologiasSuccess, filterParametrosLitologias,
  getAllParametrosLitologias,
  getAllParametrosLitologiasFailure,
  getAllParametrosLitologiasSuccess,
  initParametrosLitologias, paginatorParametrosLitologias,
  postModalParametrosLitologiasFailure,
  postModalParametrosLitologiasSuccess, putModalParametrosLitologiasFailure, putModalParametrosLitologiasSuccess, sortParametrosLitologias
} from './parametros-litologias.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import {Litologias} from "../../../../data/models/litologias";

// Estado inicial de las variables
export const initialState: ParametrosLitologiasState = {
  loading: true,
  action: false,
  error: '',
  litologias: [],
  litologiasFiltro: [],
  edit: new Litologias(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosLitologiasReducer = createReducer(
  initialState,
  on(initParametrosLitologias, (state) => {
    return {...state, loading: false, action: true, error: '', litologias:  [], edit: new Litologias()}
  }),
  // get all
  on(getAllParametrosLitologias, (state) => {
    return {...state, loading: true, action: false, error: '', litologias: [], litologiasFiltro: [], edit: new Litologias()}
  }),
  on(getAllParametrosLitologiasSuccess, (state, {litologias, litologiasFiltro}) => {
    litologias = _paginator(litologias, 1);
    return {...state, loading: false, action: true, litologias, litologiasFiltro}
  }),
  on(getAllParametrosLitologiasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosLitologias, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosLitologiasSuccess, (state, {edit}) => {
    let litologiasFiltro = [...state.litologiasFiltro];
    litologiasFiltro.unshift(edit);// agreParametrosar al inicio
    let litologias = _paginator(litologiasFiltro, 1);
    return {...state,  litologias, litologiasFiltro, edit: new Litologias(), paginator:  1};
  }),
  on(createModalParametrosLitologiasFailure, (state, {error}) => {
    return {...state, edit: new Litologias(), error: error}
  }),
  on(postModalParametrosLitologiasSuccess, (state, {edit}) => {
    let litologiasEdit  = [...state.litologiasFiltro].filter(item => item.codLitologia !== edit.codLitologia );
    litologiasEdit.unshift(edit);
    const litologiasFiltro = litologiasEdit.map((e) => {
      if (e.codLitologia === edit.codLitologia) {
        return edit;
      }
      return e;
    });
    let litologias = _paginator(litologiasFiltro, 1);
    return {...state, litologias, litologiasFiltro, edit: new Litologias(), paginator:  1};
  }),
  on(postModalParametrosLitologiasFailure, (state, {edit, error}) => {
    const litologias = state.litologias.filter(item => item.codLitologia !== edit.codLitologia);
    return {...state, litologias, edit: new Litologias(), error: error}
  }),

  // edit
  on(editModalParametrosLitologias, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosLitologiasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosLitologiasFailure, (state, {error}) => {
    return {...state, edit: new Litologias(), error: error}
  }),
  on(putModalParametrosLitologiasSuccess, (state, { edit}) => {
    const litologiasFiltro = [...state.litologiasFiltro].map((e) => {
      if (e.codLitologia === edit.codLitologia) {
        return edit;
      }
      return e;
    });
    let litologias = _paginator(litologiasFiltro, state.paginator);
    return {...state, litologias, litologiasFiltro, edit: new Litologias()};
  }),
  on(putModalParametrosLitologiasFailure, (state, {edit, error}) => {
    return {...state, edit: new Litologias(), error: error}
  }),

  // delete
  on(deleteParametrosLitologias, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosLitologiasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let litologiasFiltro = state.litologiasFiltro.filter((item: Litologias) => item.codLitologia !== edit.codLitologia);
      let litologias = _paginator(litologiasFiltro, state.paginator);
      return {...state, litologias, litologiasFiltro, edit: new Litologias()};
    }
    return {...state, edit: new Litologias()};
  }),
  on(deleteParametrosLitologiasFailure, (state, {error}) => {
    return {...state, edit: new Litologias(), error: error}
  }),

  // action
  on(sortParametrosLitologias, (state, {column, direction }) => {
    let litologias = [...state.litologiasFiltro];
    litologias.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    litologias = _paginator(litologias, state.paginator);
    return {...state, column , direction, litologias}
  }),
  on(filterParametrosLitologias, (state, {filtro}) => {
    let litologiasFiltro = [...state.litologiasFiltro];
    let litologias = [...state.litologiasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.litologia.toLocaleLowerCase().includes(term);
    });
    litologias = _paginator(litologias, 1);
    return {...state, filtro, litologias, litologiasFiltro}
  }),
  on(paginatorParametrosLitologias, (state, {paginator}) => {
    const litologias = _paginator(state.litologiasFiltro, paginator);
    return {...state, loading: false, action: true, litologias, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
