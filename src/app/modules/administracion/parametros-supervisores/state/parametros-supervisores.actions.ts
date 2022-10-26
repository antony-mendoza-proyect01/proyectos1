import {createAction, props} from '@ngrx/store';
import { PersonasRoles } from 'src/app/data/models/personas-roles';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosSupervisoresActionsNames {
  Init = '[ParametrosSupervisores] Init',
  GetAllParametrosSupervisores = '[ParametrosSupervisores] [Api] Get all',
  GetAllParametrosSupervisoresSuccess = '[ParametrosSupervisores] [Api] Get all Success',
  GetAllParametrosSupervisoresFailure = '[ParametrosSupervisores] [Api] Get all Failure',

  CreateModalParametrosSupervisores = '[ParametrosSupervisores] [Action] create modal',
  CreateModalParametrosSupervisoresSuccess = '[ParametrosSupervisores] [Action] create modal Success',
  CreateModalParametrosSupervisoresFailure = '[ParametrosSupervisores] [Action] create modal Failure',
  PostModalParametrosSupervisoresSuccess = '[ParametrosSupervisores] [Action] [Api] create Success',
  PostModalParametrosSupervisoresFailure = '[ParametrosSupervisores] [Action] [Api] create Failure',

  EditModalParametrosSupervisores = '[ParametrosSupervisores] [Action] Edit modal',
  EditModalParametrosSupervisoresSuccess = '[ParametrosSupervisores] [Action] Edit modal Success',
  EditModalParametrosSupervisoresFailure = '[ParametrosSupervisores] [Action] Edit modal Failure',
  PutModalParametrosSupervisoresSuccess = '[ParametrosSupervisores] [Action] [Api] Put Success',
  PutModalParametrosSupervisoresFailure = '[ParametrosSupervisores] [Action] [Api] Put Failure',

  DeleteParametrosSupervisores = '[ParametrosSupervisores] [Action] Delete',
  DeleteParametrosSupervisoresSuccess = '[ParametrosSupervisores] [Action] [Api] Delete Success',
  DeleteParametrosSupervisoresFailure = '[ParametrosSupervisores] [Action] [Api] Delete Failure',

  SortParametrosSupervisores = '[ParametrosSupervisores] [Action] Sort',
  FilterParametrosSupervisores = '[ParametrosSupervisores] [Action] Filter',
  PaginatorParametrosSupervisores = '[ParametrosSupervisores] [Action] Paginator',
}

export const initParametrosSupervisores = createAction( ParametrosSupervisoresActionsNames.Init);

export const getAllParametrosSupervisores = createAction(ParametrosSupervisoresActionsNames.GetAllParametrosSupervisores);

export const getAllParametrosSupervisoresSuccess = createAction(
  ParametrosSupervisoresActionsNames.GetAllParametrosSupervisoresSuccess,
  props<{ supervisores: PersonasRoles[] , supervisoresFiltro: PersonasRoles[] }>()
);

export const getAllParametrosSupervisoresFailure = createAction(
  ParametrosSupervisoresActionsNames.GetAllParametrosSupervisoresFailure,
  props<{  error: string   }>()
);

export const createModalParametrosSupervisores = createAction(
  ParametrosSupervisoresActionsNames.CreateModalParametrosSupervisores,
  props<{  edit: PersonasRoles }>()
);

export const createModalParametrosSupervisoresSuccess = createAction(
  ParametrosSupervisoresActionsNames.CreateModalParametrosSupervisoresSuccess,
  props<{ edit: PersonasRoles}>()
);

export const createModalParametrosSupervisoresFailure = createAction(
  ParametrosSupervisoresActionsNames.CreateModalParametrosSupervisoresFailure,
  props<{  edit: PersonasRoles, error: string }>()
);

export const postModalParametrosSupervisoresSuccess = createAction(
  ParametrosSupervisoresActionsNames.PostModalParametrosSupervisoresSuccess,
  props<{ edit: PersonasRoles, apiResponse: ApiResponse}>()
);

export const postModalParametrosSupervisoresFailure = createAction(
  ParametrosSupervisoresActionsNames.PostModalParametrosSupervisoresFailure,
  props<{  edit: PersonasRoles, error: string }>()
);

export const editModalParametrosSupervisores = createAction(
  ParametrosSupervisoresActionsNames.EditModalParametrosSupervisores,
  props<{ edit: PersonasRoles}>()
);

export const editModalParametrosSupervisoresSuccess = createAction(
  ParametrosSupervisoresActionsNames.EditModalParametrosSupervisoresSuccess,
  props<{ edit: PersonasRoles, editModal: PersonasRoles }>()
);

export const editModalParametrosSupervisoresFailure = createAction(
  ParametrosSupervisoresActionsNames.EditModalParametrosSupervisoresFailure,
  props<{ error: string }>()
);

export const putModalParametrosSupervisoresSuccess= createAction(
  ParametrosSupervisoresActionsNames.PutModalParametrosSupervisoresSuccess,
  props<{ edit: PersonasRoles, editModal: PersonasRoles, apiResponse: ApiResponse}>()
);

export const putModalParametrosSupervisoresFailure = createAction(
  ParametrosSupervisoresActionsNames.PutModalParametrosSupervisoresFailure,
  props<{  edit: PersonasRoles, error: string }>()
);

export const deleteParametrosSupervisores = createAction(
  ParametrosSupervisoresActionsNames.DeleteParametrosSupervisores,
  props<{ edit: PersonasRoles}>()
);

export const deleteParametrosSupervisoresSuccess = createAction(
  ParametrosSupervisoresActionsNames.DeleteParametrosSupervisoresSuccess,
  props<{ edit: PersonasRoles, apiResponse: ApiResponse}>()
);

export const deleteParametrosSupervisoresFailure = createAction(
  ParametrosSupervisoresActionsNames.DeleteParametrosSupervisoresFailure,
  props<{ error: string }>()
);

export const sortParametrosSupervisores = createAction(
  ParametrosSupervisoresActionsNames.SortParametrosSupervisores,
  props<{ column: any, direction: any}>()
);

export const filterParametrosSupervisores = createAction(
  ParametrosSupervisoresActionsNames.FilterParametrosSupervisores,
  props<{ filtro: string}>()
);

export const paginatorParametrosSupervisores = createAction(
  ParametrosSupervisoresActionsNames.PaginatorParametrosSupervisores,
  props<{ paginator: number}>()
);

