import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosSupervisores,
  createModalParametrosSupervisoresFailure,
  createModalParametrosSupervisoresSuccess, deleteParametrosSupervisores, deleteParametrosSupervisoresFailure, deleteParametrosSupervisoresSuccess,
  editModalParametrosSupervisores, editModalParametrosSupervisoresFailure, editModalParametrosSupervisoresSuccess, filterParametrosSupervisores,
  getAllParametrosSupervisores,
  getAllParametrosSupervisoresFailure,
  getAllParametrosSupervisoresSuccess,
  initParametrosSupervisores, paginatorParametrosSupervisores,
  postModalParametrosSupervisoresFailure,
  postModalParametrosSupervisoresSuccess, putModalParametrosSupervisoresFailure, putModalParametrosSupervisoresSuccess, sortParametrosSupervisores
} from './parametros-supervisores.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { PersonasRoles } from 'src/app/data/models/personas-roles';
import {ParametrosSupervisoresState} from "./parametros-supervisores.state";

// Estado inicial de las variables
export const initialState: ParametrosSupervisoresState = {
  loading: true,
  action: false,
  error: '',
  supervisores: [],
  supervisoresFiltro: [],
  edit: new PersonasRoles(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosSupervisoresReducer = createReducer(
  initialState,
  on(initParametrosSupervisores, (state) => {
    return {...state, loading: false, action: true, error: '', supervisores:  [], edit: new PersonasRoles()}
  }),
  // get all
  on(getAllParametrosSupervisores, (state) => {
    return {...state, loading: true, action: false, error: '', supervisores: [], supervisoresFiltro: [], edit: new PersonasRoles()}
  }),
  on(getAllParametrosSupervisoresSuccess, (state, {supervisores, supervisoresFiltro}) => {
    supervisores = _paginator(supervisores, 1);
    return {...state, loading: false, action: true, supervisores, supervisoresFiltro}
  }),
  on(getAllParametrosSupervisoresFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosSupervisores, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosSupervisoresSuccess, (state, {edit}) => {
    let supervisoresFiltro = [...state.supervisoresFiltro];
    supervisoresFiltro.unshift(edit);// agreParametrosar al inicio
    let supervisores = _paginator(supervisoresFiltro, 1);
    return {...state,  supervisores, supervisoresFiltro, edit: new PersonasRoles(), paginator:  1};
  }),
  on(createModalParametrosSupervisoresFailure, (state, {error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),
  on(postModalParametrosSupervisoresSuccess, (state, {edit}) => {
    let supervisoresEdit  = [...state.supervisoresFiltro].filter(item => item.personaRolPK.personaCodigo !== edit.personaRolPK.personaCodigo);
    supervisoresEdit.unshift(edit);
    const supervisoresFiltro = supervisoresEdit.map((e) => {
      if (e.personaRolPK === edit.personaRolPK) {
        return edit;
      }
      return e;
    });
    let supervisores = _paginator(supervisoresFiltro, 1);
    return {...state, supervisores, supervisoresFiltro, edit: new PersonasRoles(), paginator:  1};
  }),
  on(postModalParametrosSupervisoresFailure, (state, {edit, error}) => {
    const supervisores = state.supervisores.filter(item => item.personaRolPK !== edit.personaRolPK);
    return {...state, supervisores, edit: new PersonasRoles(), error: error}
  }),

  // edit
  on(editModalParametrosSupervisores, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosSupervisoresSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosSupervisoresFailure, (state, {error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),
  on(putModalParametrosSupervisoresSuccess, (state, { edit, editModal}) => {
    const supervisoresFiltro = [...state.supervisoresFiltro].map((e) => {
      if (e.personaRolPK === editModal.personaRolPK) {
        return edit;
      }
      return e;
    });
    let supervisores = _paginator(supervisoresFiltro, state.paginator);
    return {...state, supervisores, supervisoresFiltro, edit: new PersonasRoles()};
  }),
  on(putModalParametrosSupervisoresFailure, (state, {edit, error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),

  // delete
  on(deleteParametrosSupervisores, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosSupervisoresSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let supervisoresFiltro = state.supervisoresFiltro.filter((item: PersonasRoles) => item.personaRolPK !== edit.personaRolPK);
      let supervisores = _paginator(supervisoresFiltro, state.paginator);
      return {...state, supervisores, supervisoresFiltro, edit: new PersonasRoles()};
    }
    return {...state, edit: new PersonasRoles()};
  }),
  on(deleteParametrosSupervisoresFailure, (state, {error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),

  // action
  on(sortParametrosSupervisores, (state, {column, direction }) => {
    let supervisores = [...state.supervisoresFiltro];
    supervisores.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    supervisores = _paginator(supervisores, state.paginator);
    return {...state, column , direction, supervisores}
  }),
  on(filterParametrosSupervisores, (state, {filtro}) => {
    let supervisoresFiltro = [...state.supervisoresFiltro];
    let supervisores = [...state.supervisoresFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.personaRolPK.personaCodigo.toLocaleLowerCase().includes(term);
    });
    supervisores = _paginator(supervisores, 1);
    return {...state, filtro, supervisores, supervisoresFiltro}
  }),
  on(paginatorParametrosSupervisores, (state, {paginator}) => {
    const supervisores = _paginator(state.supervisoresFiltro, paginator);
    return {...state, loading: false, action: true, supervisores, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
