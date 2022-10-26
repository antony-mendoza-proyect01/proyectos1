import {ParametrosAreasState} from './parametros-areas.state';
import {createReducer, on} from '@ngrx/store';
import {Areas} from '../../../../data/models/areas';
import {
  createModalParametrosAreas,
  createModalParametrosAreasFailure,
  createModalParametrosAreasSuccess, deleteParametrosAreas, deleteParametrosAreasFailure, deleteParametrosAreasSuccess,
  editModalParametrosAreas, editModalParametrosAreasFailure, editModalParametrosAreasSuccess, filterParametrosAreas,
  getAllParametrosAreas,
  getAllParametrosAreasFailure,
  getAllParametrosAreasSuccess,
  initParametrosAreas, paginatorParametrosAreas,
  postModalParametrosAreasFailure,
  postModalParametrosAreasSuccess, putModalParametrosAreasFailure, putModalParametrosAreasSuccess, sortParametrosAreas
} from './parametros-areas.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';

// Estado inicial de las variables
export const initialState: ParametrosAreasState = {
  loading: true,
  action: false,
  error: '',
  areas: [],
  areasFiltro: [],
  edit: new Areas(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosAreasReducer = createReducer(
  initialState,
  on(initParametrosAreas, (state) => {
    return {...state, loading: false, action: true, error: '', areas:  [], edit: new Areas()}
  }),
  // get all
  on(getAllParametrosAreas, (state) => {
    return {...state, loading: true, action: false, error: '', areas: [], areasFiltro: [], edit: new Areas()}
  }),
  on(getAllParametrosAreasSuccess, (state, {areas, areasFiltro}) => {
    areas = _paginator(areas, 1);
    return {...state, loading: false, action: true, areas, areasFiltro}
  }),
  on(getAllParametrosAreasFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosAreas, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosAreasSuccess, (state, {edit}) => {
    let areasFiltro = [...state.areasFiltro];
    areasFiltro.unshift(edit);// agreParametrosar al inicio
    let areas = _paginator(areasFiltro, 1);
    return {...state,  areas, areasFiltro, edit: new Areas(), paginator:  1};
  }),
  on(createModalParametrosAreasFailure, (state, {error}) => {
    return {...state, edit: new Areas(), error: error}
  }),
  on(postModalParametrosAreasSuccess, (state, {edit}) => {
    let areasEdit  = [...state.areasFiltro].filter(item => item.codigo !== null);
    areasEdit.unshift(edit);
    const areasFiltro = areasEdit.map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let areas = _paginator(areasFiltro, 1);
    return {...state, areas, areasFiltro, edit: new Areas(), paginator:  1};
  }),
  on(postModalParametrosAreasFailure, (state, {edit, error}) => {
    const areas = state.areas.filter(item => item.codigo !== edit.codigo);
    return {...state, areas, edit: new Areas(), error: error}
  }),

  // edit
  on(editModalParametrosAreas, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosAreasSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosAreasFailure, (state, {error}) => {
    return {...state, edit: new Areas(), error: error}
  }),
  on(putModalParametrosAreasSuccess, (state, { edit}) => {
    const areasFiltro = [...state.areasFiltro].map((e) => {
      if (e.codigo === edit.codigo) {
        return edit;
      }
      return e;
    });
    let areas = _paginator(areasFiltro, state.paginator);
    return {...state, areas, areasFiltro, edit: new Areas()};
  }),
  on(putModalParametrosAreasFailure, (state, {edit, error}) => {
    return {...state, edit: new Areas(), error: error}
  }),

  // delete
  on(deleteParametrosAreas, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosAreasSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let areasFiltro = state.areasFiltro.filter((item: Areas) => item.codigo !== edit.codigo);
      let areas = _paginator(areasFiltro, state.paginator);
      return {...state, areas, areasFiltro, edit: new Areas()};
    }
    return {...state, edit: new Areas()};
  }),
  on(deleteParametrosAreasFailure, (state, {error}) => {
    return {...state, edit: new Areas(), error: error}
  }),

  // action
  on(sortParametrosAreas, (state, {column, direction }) => {
    let areas = [...state.areasFiltro];
    areas.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    areas = _paginator(areas, state.paginator);
    return {...state, column , direction, areas}
  }),
  on(filterParametrosAreas, (state, {filtro}) => {
    let areasFiltro = [...state.areasFiltro];
    let areas = [...state.areasFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.area.toLocaleLowerCase().includes(term);
    });
    areas = _paginator(areas, 1);
    return {...state, filtro, areas, areasFiltro}
  }),
  on(paginatorParametrosAreas, (state, {paginator}) => {
    const areas = _paginator(state.areasFiltro, paginator);
    return {...state, loading: false, action: true, areas, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
