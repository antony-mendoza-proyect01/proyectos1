import {AdministracionUsuariosState} from './administracion-usuarios.state';
import {createReducer, on} from '@ngrx/store';
import {
  createModalAdministracionUsuarios,
  createModalAdministracionUsuariosFailure,
  createModalAdministracionUsuariosSuccess, deleteAdministracionUsuarios, deleteAdministracionUsuariosFailure, deleteAdministracionUsuariosSuccess,
  editModalAdministracionUsuarios, editModalAdministracionUsuariosFailure,
  editModalAdministracionUsuariosSuccess, filterAdministracionUsuarios,
  getAllAdministracionUsuarios,
  getAllAdministracionUsuariosFailure,
  getAllAdministracionUsuariosSuccess,
  initAdministracionUsuarios, paginatorAdministracionUsuarios,
  postModalAdministracionUsuariosFailure,
  postModalAdministracionUsuariosSuccess, putModalAdministracionUsuariosFailure, putModalAdministracionUsuariosSuccess, sortAdministracionUsuarios
} from './administracion-usuarios.actions';
import {User} from '../../../../data/models/user';
import {compare} from '../../../../shared/directives/sort.directive';
import {PAGESIZE} from '../../../../shared/services/paginator.service';
// estado inicial de las variables
export const initialState: AdministracionUsuariosState = {
  loading: true,
  action: false,
  error: '',
  usuarios: [],
  usuariosFiltro: [],
  edit: new User(),
  column: '',
  direction:  '',
  paginator:  1,
};
// inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const administracionUsuariosReducer = createReducer(
  initialState,
  on(initAdministracionUsuarios, (state) => {
    return {...state, loading: false, action: true, error: '', usuarios:  [], edit: new User()}
  }),
  // get all
  on(getAllAdministracionUsuarios, (state) => {
    return {...state, loading: true, action: false, error: '', usuarios: [], usuariosFiltro: [], edit: new User()}
  }),
  on(getAllAdministracionUsuariosSuccess, (state, {usuarios, usuariosFiltro}) => {
    usuarios = _paginator(usuarios, 1);
    return {...state, loading: false, action: true, usuarios, usuariosFiltro}
  }),
  on(getAllAdministracionUsuariosFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error}
  }),
  // create
  on(createModalAdministracionUsuarios, (state, {edit}) => {
    return {...state,  edit}
  }),
  on(createModalAdministracionUsuariosSuccess, (state, {edit}) => {
    let usuariosFiltro = [...state.usuariosFiltro];
    usuariosFiltro.unshift(edit);// agregar al inicio
    let usuarios = _paginator(usuariosFiltro, 1);
    return {...state,  usuarios, usuariosFiltro, edit: new User(), paginator:  1};
  }),
  on(createModalAdministracionUsuariosFailure, (state, {error}) => {
    return {...state, edit: new User(), error: error}
  }),
  on(postModalAdministracionUsuariosSuccess, (state, {edit}) => {
    let usuariosFiltro = _mapEdit(state, edit);
    let usuarios = _paginator(usuariosFiltro, 1);
    return {...state, usuarios, usuariosFiltro, edit: new User(), paginator:  1};
  }),
  on(postModalAdministracionUsuariosFailure, (state, {edit, error}) => {
    const usuarios = state.usuarios.filter(item => item.username !== edit.username);
    return {...state, usuarios, edit: new User(), error: error}
  }),

  // edit
  on(editModalAdministracionUsuarios, (state, {edit}) => {
    return {...state, edit}
  }),
  on(editModalAdministracionUsuariosSuccess, (state, { edit}) => {
    return {...state,  edit};
  }),
  on(editModalAdministracionUsuariosFailure, (state, {error}) => {
    return {...state, edit: new User(), error: error}
  }),
  on(putModalAdministracionUsuariosSuccess, (state, { edit}) => {
    let usuarios = _mapEdit(state, edit);
    return {...state, usuarios, usuariosFiltro: usuarios, edit: new User()};
  }),
  on(putModalAdministracionUsuariosFailure, (state, {edit, error}) => {
    return {...state, edit: new User(), error: error}
  }),

  // delete
  on(deleteAdministracionUsuarios, (state, {edit}) => {
    return {...state, edit: edit}
  }),
  on(deleteAdministracionUsuariosSuccess, (state, {edit}) => {
    const usuarios = state.usuarios.filter((item: User) => item.username !== edit.username);
    return {...state, usuarios, usuariosFiltro: usuarios, edit: new User()};
  }),
  on(deleteAdministracionUsuariosFailure, (state, {error}) => {
    return {...state, edit: new User(), error: error}
  }),

  // action
  on(sortAdministracionUsuarios, (state, {column, direction }) => {
    let usuarios = [...state.usuariosFiltro];
    usuarios.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    usuarios = _paginator(usuarios, state.paginator);
    return {...state, column , direction, usuarios}
  }),
  on(filterAdministracionUsuarios, (state, {filtro}) => {
    let usuariosFiltro = [...state.usuariosFiltro];
    let usuarios = [...state.usuariosFiltro].filter((item: User) => {
      const term = filtro.toLowerCase();
      return item.username.toLocaleLowerCase().includes(term) ||
        item.nombres.toLocaleLowerCase().includes(term) ||
        item.apellidos.toLocaleLowerCase().includes(term);
    });
    usuarios = _paginator(usuarios, 1);
    return {...state, filtro, usuarios, usuariosFiltro}
  }),
  on(paginatorAdministracionUsuarios, (state, {paginator}) => {
    const usuarios = _paginator(state.usuariosFiltro, paginator);
    return {...state, loading: false, action: true, usuarios}
  }),
);

let _paginator = function (listado, paginator) {
  return listado.map((e, i) => ({id: i + 1, ...e}))
    .slice((paginator - 1) * PAGESIZE, (paginator - 1) * PAGESIZE + PAGESIZE);
};

let _mapEdit = function (state, edit) {
  let usuariosFiltro = [...state.usuariosFiltro];
  usuariosFiltro.map(((item: User) => {
    if (item.username === edit.username) {
      return edit;
    }
    return item;
  }));

  return usuariosFiltro;
}
