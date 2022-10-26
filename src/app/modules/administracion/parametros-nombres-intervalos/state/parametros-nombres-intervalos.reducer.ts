import {ParametrosNombresIntervalosState} from './parametros-nombres-intervalos.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosNombresIntervalos,
  createModalParametrosNombresIntervalosFailure,
  createModalParametrosNombresIntervalosSuccess,
  deleteParametrosNombresIntervalos,
  deleteParametrosNombresIntervalosFailure,
  deleteParametrosNombresIntervalosSuccess,
  editModalParametrosNombresIntervalos,
  editModalParametrosNombresIntervalosFailure,
  editModalParametrosNombresIntervalosSuccess,
  filterParametrosNombresIntervalos,
  getAllPaginadoParametrosNombresIntervalos,
  getAllPaginadoParametrosNombresIntervalosFailure,
  getAllPaginadoParametrosNombresIntervalosSuccess,
  getAllParametrosNombresIntervalos,
  getAllParametrosNombresIntervalosFailure,
  getAllParametrosNombresIntervalosSuccess, getByNombrePaginadoParametrosNombresIntervalos,
  initParametrosNombresIntervalos,
  paginatorParametrosNombresIntervalos,
  postModalParametrosNombresIntervalosFailure,
  postModalParametrosNombresIntervalosSuccess,
  putModalParametrosNombresIntervalosFailure,
  putModalParametrosNombresIntervalosSuccess,
  sortParametrosNombresIntervalos
} from './parametros-nombres-intervalos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {NombresIntervalos} from '../../../../data/models/nombres-intervalos';

// Estado inicial de las variables
export const initialState: ParametrosNombresIntervalosState = {
  loading: true,
  action: false,
  error: '',
  nombresIntervalos: [],
  nombresIntervalosFiltro: [],
  edit: new NombresIntervalos(),
  column: '',
  direction:  '',
  paginator:  1,
  page:  0,
  paginatorSize:  1,
  filtro:  '',
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosNombresIntervalosReducer = createReducer(
  initialState,
  on(initParametrosNombresIntervalos, (state) => {
    return {...state, loading: false, action: true, error: '',
      nombresIntervalos:  [], nombresIntervalosFiltro:  [], edit: new NombresIntervalos(),   filtro:  ''}
  }),
  // get all
  on(getAllPaginadoParametrosNombresIntervalos, (state) => {
    return {...state, loading: true, action: false, error: '',
      nombresIntervalos: [], nombresIntervalosFiltro: [], edit: new NombresIntervalos()}
  }),
  on(getAllPaginadoParametrosNombresIntervalosSuccess, (state, {nombresIntervalos, paginatorSize}) => {
    // nombresIntervalos = _paginator(nombresIntervalos, 1);
    return {...state, loading: false, action: true, nombresIntervalos, paginatorSize}
  }),
  on(getAllPaginadoParametrosNombresIntervalosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosNombresIntervalos, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosNombresIntervalosSuccess, (state, {edit}) => {
    let nombresIntervalos = [...state.nombresIntervalos];
    nombresIntervalos.unshift(edit);// agreParametrosar al inicio
    // let nombresIntervalos = _paginator(nombresIntervalosFiltro, 1);
    return {...state,  nombresIntervalos, edit: new NombresIntervalos(), paginator:  1};
  }),
  on(createModalParametrosNombresIntervalosFailure, (state, {error}) => {
    return {...state, edit: new NombresIntervalos(), error: error}
  }),
  on(postModalParametrosNombresIntervalosSuccess, (state, {edit}) => {
    let nombresIntervalosEdit  = [...state.nombresIntervalosFiltro].filter(item => item.nombre !== null);
    nombresIntervalosEdit.unshift(edit);
    const nombresIntervalosFiltro = nombresIntervalosEdit.map((e) => {
      if (e.nombre === edit.nombre) {
        return edit;
      }
      return e;
    });
    // let nombresIntervalos = _paginator(nombresIntervalosFiltro, 1);
    let nombresIntervalos = [...state.nombresIntervalos];
    return {...state, nombresIntervalos, nombresIntervalosFiltro, edit: new NombresIntervalos(), paginator:  1};
  }),
  on(postModalParametrosNombresIntervalosFailure, (state, {edit, error}) => {
    const nombresIntervalos = state.nombresIntervalos.filter(item => item.nombre !== edit.nombre);
    return {...state, nombresIntervalos, edit: new NombresIntervalos(), error: error}
  }),

  // edit
  on(editModalParametrosNombresIntervalos, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosNombresIntervalosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosNombresIntervalosFailure, (state, {error}) => {
    return {...state, edit: new NombresIntervalos(), error: error}
  }),
  on(putModalParametrosNombresIntervalosSuccess, (state, {edit, editModal}) => {
    const nombresIntervalos = [...state.nombresIntervalos].map((e) => {
      if (e.nombre === editModal.nombre) {
        return edit;
      }
      return e;
    });
    return {...state, nombresIntervalos, edit: new NombresIntervalos()};
  }),
  on(putModalParametrosNombresIntervalosFailure, (state, {edit, error}) => {
    return {...state, edit: new NombresIntervalos(), error: error}
  }),

  // delete
  on(deleteParametrosNombresIntervalos, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosNombresIntervalosSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let nombresIntervalosFiltro = state.nombresIntervalosFiltro.filter((item: NombresIntervalos) => item.nombre !== edit.nombre);
      // let nombresIntervalos = _paginator(nombresIntervalosFiltro, state.paginator);
      let nombresIntervalos = [...state.nombresIntervalos];
      return {...state, nombresIntervalos, nombresIntervalosFiltro, edit: new NombresIntervalos()};
    }
    return {...state, edit: new NombresIntervalos()};
  }),
  on(deleteParametrosNombresIntervalosFailure, (state, {error}) => {
    return {...state, edit: new NombresIntervalos(), error: error}
  }),

  // action
  on(sortParametrosNombresIntervalos, (state, {column, direction }) => {
    let nombresIntervalos = [...state.nombresIntervalosFiltro];
    nombresIntervalos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    // nombresIntervalos = _paginator(nombresIntervalos, state.paginator);
    return {...state, column , direction, nombresIntervalos}
  }),
  on(filterParametrosNombresIntervalos, (state, {filtro}) => {
    // let nombresIntervalosFiltro = [...state.nombresIntervalosFiltro];
    // let nombresIntervalos = [...state.nombresIntervalosFiltro].filter(item => {
    //   const term = filtro.toLowerCase();
    //   return item.nombre.toLocaleLowerCase().includes(term);
    // });
    // nombresIntervalos = _paginator(nombresIntervalos, 1);
    return {...state, filtro}
  }),

);

