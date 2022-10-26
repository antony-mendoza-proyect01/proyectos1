import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/data/models/user';

export enum AdministracionUsuariosActionsNames {
  Init = '[AdministracionUsuarios] Init',
  GetAllAdministracionUsuarios = '[AdministracionUsuarios] [Api] Get all',
  GetAllAdministracionUsuariosSuccess = '[AdministracionUsuarios] [Api] Get all Success',
  GetAllAdministracionUsuariosFailure = '[AdministracionUsuarios] [Api] Get all Failure',

  CreateModalAdministracionUsuarios = '[AdministracionUsuarios] [Action] create modal',
  CreateModalAdministracionUsuariosSuccess = '[AdministracionUsuarios] [Action] create modal Success',
  CreateModalAdministracionUsuariosFailure = '[AdministracionUsuarios] [Action] create modal Failure',
  PostModalAdministracionUsuariosSuccess = '[AdministracionUsuarios] [Action] [Api] create Success',
  PostModalAdministracionUsuariosFailure = '[AdministracionUsuarios] [Action] [Api] create Failure',

  EditModalAdministracionUsuarios = '[AdministracionUsuarios] [Action] Edit modal',
  EditModalAdministracionUsuariosSuccess = '[AdministracionUsuarios] [Action] Edit modal Success',
  EditModalAdministracionUsuariosFailure = '[AdministracionUsuarios] [Action] Edit modal Failure',
  PutModalAdministracionUsuariosSuccess = '[AdministracionUsuarios] [Action] [Api] Put Success',
  PutModalAdministracionUsuariosFailure = '[AdministracionUsuarios] [Action] [Api] Put Failure',

  DeleteAdministracionUsuarios = '[AdministracionUsuarios] [Action] Delete',
  DeleteAdministracionUsuariosSuccess = '[AdministracionUsuarios] [Action] [Api] Delete Success',
  DeleteAdministracionUsuariosFailure = '[AdministracionUsuarios] [Action] [Api] Delete Failure',

  SortAdministracionUsuarios = '[AdministracionUsuarios] [Action] Sort',
  FilterAdministracionUsuarios = '[AdministracionUsuarios] [Action] Filter',
  PaginatorAdministracionUsuarios = '[AdministracionUsuarios] [Action] Paginator',
}

export const initAdministracionUsuarios = createAction( AdministracionUsuariosActionsNames.Init);

export const getAllAdministracionUsuarios = createAction(AdministracionUsuariosActionsNames.GetAllAdministracionUsuarios);

export const getAllAdministracionUsuariosSuccess = createAction(
  AdministracionUsuariosActionsNames.GetAllAdministracionUsuariosSuccess,
  props<{ usuarios: User[] , usuariosFiltro: User[] }>()
);

export const getAllAdministracionUsuariosFailure = createAction(
  AdministracionUsuariosActionsNames.GetAllAdministracionUsuariosFailure,
  props<{  error: string   }>()
);

export const createModalAdministracionUsuarios = createAction(
  AdministracionUsuariosActionsNames.CreateModalAdministracionUsuarios,
  props<{  edit: User }>()
);

export const createModalAdministracionUsuariosSuccess = createAction(
  AdministracionUsuariosActionsNames.CreateModalAdministracionUsuariosSuccess,
  props<{ edit: User}>()
);

export const createModalAdministracionUsuariosFailure = createAction(
  AdministracionUsuariosActionsNames.CreateModalAdministracionUsuariosFailure,
  props<{  edit: User, error: string }>()
);

export const postModalAdministracionUsuariosSuccess= createAction(
  AdministracionUsuariosActionsNames.PostModalAdministracionUsuariosSuccess,
  props<{ edit: User}>()
);

export const postModalAdministracionUsuariosFailure = createAction(
  AdministracionUsuariosActionsNames.PostModalAdministracionUsuariosFailure,
  props<{  edit: User, error: string }>()
);

export const editModalAdministracionUsuarios = createAction(
  AdministracionUsuariosActionsNames.EditModalAdministracionUsuarios,
  props<{ edit: User }>()
);

export const editModalAdministracionUsuariosSuccess = createAction(
  AdministracionUsuariosActionsNames.EditModalAdministracionUsuariosSuccess,
  props<{ edit: User}>()
);

export const editModalAdministracionUsuariosFailure = createAction(
  AdministracionUsuariosActionsNames.EditModalAdministracionUsuariosFailure,
  props<{ error: string }>()
);

export const putModalAdministracionUsuariosSuccess= createAction(
  AdministracionUsuariosActionsNames.PutModalAdministracionUsuariosSuccess,
  props<{ edit: User}>()
);

export const putModalAdministracionUsuariosFailure = createAction(
  AdministracionUsuariosActionsNames.PutModalAdministracionUsuariosFailure,
  props<{  edit: User, error: string }>()
);

export const deleteAdministracionUsuarios = createAction(
  AdministracionUsuariosActionsNames.DeleteAdministracionUsuarios,
  props<{ edit: User}>()
);

export const deleteAdministracionUsuariosSuccess = createAction(
  AdministracionUsuariosActionsNames.DeleteAdministracionUsuariosSuccess,
  props<{ edit: User}>()
);

export const deleteAdministracionUsuariosFailure = createAction(
  AdministracionUsuariosActionsNames.DeleteAdministracionUsuariosFailure,
  props<{ error: string }>()
);

export const sortAdministracionUsuarios = createAction(
  AdministracionUsuariosActionsNames.SortAdministracionUsuarios,
  props<{ column: any, direction: any}>()
);

export const filterAdministracionUsuarios = createAction(
  AdministracionUsuariosActionsNames.FilterAdministracionUsuarios,
  props<{ filtro: string}>()
);

export const paginatorAdministracionUsuarios = createAction(
  AdministracionUsuariosActionsNames.PaginatorAdministracionUsuarios,
  props<{ paginator: number}>()
);

