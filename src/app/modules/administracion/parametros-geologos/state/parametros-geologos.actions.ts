import {createAction, props} from '@ngrx/store';
import { PersonasRoles } from 'src/app/data/models/personas-roles';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosPersonasRolesActionsNames {
  Init = '[ParametrosPersonasRoles] Init',
  GetAllParametrosPersonasRoles = '[ParametrosPersonasRoles] [Api] Get all',
  GetAllParametrosPersonasRolesSuccess = '[ParametrosPersonasRoles] [Api] Get all Success',
  GetAllParametrosPersonasRolesFailure = '[ParametrosPersonasRoles] [Api] Get all Failure',

  CreateModalParametrosPersonasRoles = '[ParametrosPersonasRoles] [Action] create modal',
  CreateModalParametrosPersonasRolesSuccess = '[ParametrosPersonasRoles] [Action] create modal Success',
  CreateModalParametrosPersonasRolesFailure = '[ParametrosPersonasRoles] [Action] create modal Failure',
  PostModalParametrosPersonasRolesSuccess = '[ParametrosPersonasRoles] [Action] [Api] create Success',
  PostModalParametrosPersonasRolesFailure = '[ParametrosPersonasRoles] [Action] [Api] create Failure',

  EditModalParametrosPersonasRoles = '[ParametrosPersonasRoles] [Action] Edit modal',
  EditModalParametrosPersonasRolesSuccess = '[ParametrosPersonasRoles] [Action] Edit modal Success',
  EditModalParametrosPersonasRolesFailure = '[ParametrosPersonasRoles] [Action] Edit modal Failure',
  PutModalParametrosPersonasRolesSuccess = '[ParametrosPersonasRoles] [Action] [Api] Put Success',
  PutModalParametrosPersonasRolesFailure = '[ParametrosPersonasRoles] [Action] [Api] Put Failure',

  DeleteParametrosPersonasRoles = '[ParametrosPersonasRoles] [Action] Delete',
  DeleteParametrosPersonasRolesSuccess = '[ParametrosPersonasRoles] [Action] [Api] Delete Success',
  DeleteParametrosPersonasRolesFailure = '[ParametrosPersonasRoles] [Action] [Api] Delete Failure',

  SortParametrosPersonasRoles = '[ParametrosPersonasRoles] [Action] Sort',
  FilterParametrosPersonasRoles = '[ParametrosPersonasRoles] [Action] Filter',
  PaginatorParametrosPersonasRoles = '[ParametrosPersonasRoles] [Action] Paginator',
}

export const initParametrosPersonasRoles = createAction( ParametrosPersonasRolesActionsNames.Init);

export const getAllParametrosPersonasRoles = createAction(ParametrosPersonasRolesActionsNames.GetAllParametrosPersonasRoles);

export const getAllParametrosPersonasRolesSuccess = createAction(
  ParametrosPersonasRolesActionsNames.GetAllParametrosPersonasRolesSuccess,
  props<{ personasRoles: PersonasRoles[] , personasRolesFiltro: PersonasRoles[] }>()
);

export const getAllParametrosPersonasRolesFailure = createAction(
  ParametrosPersonasRolesActionsNames.GetAllParametrosPersonasRolesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosPersonasRoles = createAction(
  ParametrosPersonasRolesActionsNames.CreateModalParametrosPersonasRoles,
  props<{  edit: PersonasRoles }>()
);

export const createModalParametrosPersonasRolesSuccess = createAction(
  ParametrosPersonasRolesActionsNames.CreateModalParametrosPersonasRolesSuccess,
  props<{ edit: PersonasRoles}>()
);

export const createModalParametrosPersonasRolesFailure = createAction(
  ParametrosPersonasRolesActionsNames.CreateModalParametrosPersonasRolesFailure,
  props<{  edit: PersonasRoles, error: string }>()
);

export const postModalParametrosPersonasRolesSuccess = createAction(
  ParametrosPersonasRolesActionsNames.PostModalParametrosPersonasRolesSuccess,
  props<{ edit: PersonasRoles, apiResponse: ApiResponse}>()
);

export const postModalParametrosPersonasRolesFailure = createAction(
  ParametrosPersonasRolesActionsNames.PostModalParametrosPersonasRolesFailure,
  props<{  edit: PersonasRoles, error: string }>()
);

export const editModalParametrosPersonasRoles = createAction(
  ParametrosPersonasRolesActionsNames.EditModalParametrosPersonasRoles,
  props<{ edit: PersonasRoles }>()
);

export const editModalParametrosPersonasRolesSuccess = createAction(
  ParametrosPersonasRolesActionsNames.EditModalParametrosPersonasRolesSuccess,
  props<{ edit: PersonasRoles, editModal: PersonasRoles}>()
);

export const editModalParametrosPersonasRolesFailure = createAction(
  ParametrosPersonasRolesActionsNames.EditModalParametrosPersonasRolesFailure,
  props<{ error: string }>()
);

export const putModalParametrosPersonasRolesSuccess= createAction(
  ParametrosPersonasRolesActionsNames.PutModalParametrosPersonasRolesSuccess,
  props<{ edit: PersonasRoles, editModal: PersonasRoles, apiResponse: ApiResponse}>()
);

export const putModalParametrosPersonasRolesFailure = createAction(
  ParametrosPersonasRolesActionsNames.PutModalParametrosPersonasRolesFailure,
  props<{  edit: PersonasRoles, error: string }>()
);

export const deleteParametrosPersonasRoles = createAction(
  ParametrosPersonasRolesActionsNames.DeleteParametrosPersonasRoles,
  props<{ edit: PersonasRoles}>()
);

export const deleteParametrosPersonasRolesSuccess = createAction(
  ParametrosPersonasRolesActionsNames.DeleteParametrosPersonasRolesSuccess,
  props<{ edit: PersonasRoles, apiResponse: ApiResponse}>()
);

export const deleteParametrosPersonasRolesFailure = createAction(
  ParametrosPersonasRolesActionsNames.DeleteParametrosPersonasRolesFailure,
  props<{ error: string }>()
);

export const sortParametrosPersonasRoles = createAction(
  ParametrosPersonasRolesActionsNames.SortParametrosPersonasRoles,
  props<{ column: any, direction: any}>()
);

export const filterParametrosPersonasRoles = createAction(
  ParametrosPersonasRolesActionsNames.FilterParametrosPersonasRoles,
  props<{ filtro: string}>()
);

export const paginatorParametrosPersonasRoles = createAction(
  ParametrosPersonasRolesActionsNames.PaginatorParametrosPersonasRoles,
  props<{ paginator: number}>()
);

