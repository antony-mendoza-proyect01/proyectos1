import {ParametrosGeologosState} from './parametros-geologos.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalParametrosPersonasRoles,
  createModalParametrosPersonasRolesFailure,
  createModalParametrosPersonasRolesSuccess, deleteParametrosPersonasRoles, deleteParametrosPersonasRolesFailure, deleteParametrosPersonasRolesSuccess,
  editModalParametrosPersonasRoles, editModalParametrosPersonasRolesFailure, editModalParametrosPersonasRolesSuccess, filterParametrosPersonasRoles,
  getAllParametrosPersonasRoles,
  getAllParametrosPersonasRolesFailure,
  getAllParametrosPersonasRolesSuccess,
  initParametrosPersonasRoles, paginatorParametrosPersonasRoles,
  postModalParametrosPersonasRolesFailure,
  postModalParametrosPersonasRolesSuccess, putModalParametrosPersonasRolesFailure, putModalParametrosPersonasRolesSuccess, sortParametrosPersonasRoles
} from './parametros-geologos.actions';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
import { PersonasRoles } from 'src/app/data/models/personas-roles';

// Estado inicial de las variables
export const initialState: ParametrosGeologosState = {
  loading: true,
  action: false,
  error: '',
  personasRoles: [],
  personasRolesFiltro: [],
  edit: new PersonasRoles(),
  column: '',
  direction:  '',
  paginator:  1,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const parametrosGeologosReducer = createReducer(
  initialState,
  on(initParametrosPersonasRoles, (state) => {
    return {...state, loading: false, action: true, error: '', personasRoles:  [], edit: new PersonasRoles()}
  }),
  // get all
  on(getAllParametrosPersonasRoles, (state) => {
    return {...state, loading: true, action: false, error: '', personasRoles: [], personasRolesFiltro: [], edit: new PersonasRoles()}
  }),
  on(getAllParametrosPersonasRolesSuccess, (state, {personasRoles, personasRolesFiltro}) => {
    personasRoles = _paginator(personasRoles, 1);
    return {...state, loading: false, action: true, personasRoles, personasRolesFiltro}
  }),
  on(getAllParametrosPersonasRolesFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalParametrosPersonasRoles, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalParametrosPersonasRolesSuccess, (state, {edit}) => {
    let personasRolesFiltro = [...state.personasRolesFiltro];
    personasRolesFiltro.unshift(edit);// agreParametrosar al inicio
    let personasRoles = _paginator(personasRolesFiltro, 1);
    return {...state,  personasRoles, personasRolesFiltro, edit: new PersonasRoles(), paginator:  1};
  }),
  on(createModalParametrosPersonasRolesFailure, (state, {error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),
  on(postModalParametrosPersonasRolesSuccess, (state, {edit}) => {
    let personasRolesEdit  = [...state.personasRolesFiltro].filter(item => item.personaRolPK.personaCodigo !== edit.personaRolPK.personaCodigo);
    personasRolesEdit.unshift(edit);
    const personasRolesFiltro = personasRolesEdit.map((e) => {
      if (e.personaRolPK === edit.personaRolPK) {
        return edit;
      }
      return e;
    });
    let personasRoles = _paginator(personasRolesFiltro, 1);
    return {...state, personasRoles, personasRolesFiltro, edit: new PersonasRoles(), paginator:  1};
  }),
  on(postModalParametrosPersonasRolesFailure, (state, {edit, error}) => {
    const personasRoles = state.personasRoles.filter(item => item.personaRolPK !== edit.personaRolPK);
    return {...state, personasRoles, edit: new PersonasRoles(), error: error}
  }),

  // edit
  on(editModalParametrosPersonasRoles, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalParametrosPersonasRolesSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalParametrosPersonasRolesFailure, (state, {error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),
  on(putModalParametrosPersonasRolesSuccess, (state, { edit, editModal}) => {
    const personasRolesFiltro = [...state.personasRolesFiltro].map((e) => {
      if (e.personaRolPK === editModal.personaRolPK) {
        return edit;
      }
      return e;
    });
    let personasRoles = _paginator(personasRolesFiltro, state.paginator);
    return {...state, personasRoles, personasRolesFiltro, edit: new PersonasRoles()};
  }),
  on(putModalParametrosPersonasRolesFailure, (state, {edit, error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),

  // delete
  on(deleteParametrosPersonasRoles, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteParametrosPersonasRolesSuccess, (state, {edit, apiResponse}) => {
    if(apiResponse.valido) {
      let personasRolesFiltro = state.personasRolesFiltro.filter((item: PersonasRoles) => item.personaRolPK !== edit.personaRolPK);
      let personasRoles = _paginator(personasRolesFiltro, state.paginator);
      return {...state, personasRoles, personasRolesFiltro, edit: new PersonasRoles()};
    }
    return {...state, edit: new PersonasRoles()};
  }),
  on(deleteParametrosPersonasRolesFailure, (state, {error}) => {
    return {...state, edit: new PersonasRoles(), error: error}
  }),

  // action
  on(sortParametrosPersonasRoles, (state, {column, direction }) => {
    let personasRoles = [...state.personasRolesFiltro];
    personasRoles.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    personasRoles = _paginator(personasRoles, state.paginator);
    return {...state, column , direction, personasRoles}
  }),
  on(filterParametrosPersonasRoles, (state, {filtro}) => {
    let personasRolesFiltro = [...state.personasRolesFiltro];
    let personasRoles = [...state.personasRolesFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.personaRolPK.personaCodigo.toLocaleLowerCase().includes(term);
    });
    personasRoles = _paginator(personasRoles, 1);
    return {...state, filtro, personasRoles, personasRolesFiltro}
  }),
  on(paginatorParametrosPersonasRoles, (state, {paginator}) => {
    const personasRoles = _paginator(state.personasRolesFiltro, paginator);
    return {...state, loading: false, action: true, personasRoles, paginator}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((item, i) => ({id: i + 1, ...item}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};
