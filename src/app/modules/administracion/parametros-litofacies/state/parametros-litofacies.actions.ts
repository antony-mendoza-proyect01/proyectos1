import {createAction, props} from '@ngrx/store';
import {Litofacies} from '../../../../data/models/litofacies';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosLitofaciesActionsNames {
  Init = '[ParametrosLitofacies] Init',
  GetAllParametrosLitofacies = '[ParametrosLitofacies] [Api] Get all',
  GetAllParametrosLitofaciesSuccess = '[ParametrosLitofacies] [Api] Get all Success',
  GetAllParametrosLitofaciesFailure = '[ParametrosLitofacies] [Api] Get all Failure',

  CreateModalParametrosLitofacies = '[ParametrosLitofacies] [Action] create modal',
  CreateModalParametrosLitofaciesSuccess = '[ParametrosLitofacies] [Action] create modal Success',
  CreateModalParametrosLitofaciesFailure = '[ParametrosLitofacies] [Action] create modal Failure',
  PostModalParametrosLitofaciesSuccess = '[ParametrosLitofacies] [Action] [Api] create Success',
  PostModalParametrosLitofaciesFailure = '[ParametrosLitofacies] [Action] [Api] create Failure',

  EditModalParametrosLitofacies = '[ParametrosLitofacies] [Action] Edit modal',
  EditModalParametrosLitofaciesSuccess = '[ParametrosLitofacies] [Action] Edit modal Success',
  EditModalParametrosLitofaciesFailure = '[ParametrosLitofacies] [Action] Edit modal Failure',
  PutModalParametrosLitofaciesSuccess = '[ParametrosLitofacies] [Action] [Api] Put Success',
  PutModalParametrosLitofaciesFailure = '[ParametrosLitofacies] [Action] [Api] Put Failure',

  DeleteParametrosLitofacies = '[ParametrosLitofacies] [Action] Delete',
  DeleteParametrosLitofaciesSuccess = '[ParametrosLitofacies] [Action] [Api] Delete Success',
  DeleteParametrosLitofaciesFailure = '[ParametrosLitofacies] [Action] [Api] Delete Failure',

  SortParametrosLitofacies = '[ParametrosLitofacies] [Action] Sort',
  FilterParametrosLitofacies = '[ParametrosLitofacies] [Action] Filter',
  PaginatorParametrosLitofacies = '[ParametrosLitofacies] [Action] Paginator',
}

export const initParametrosLitofacies = createAction( ParametrosLitofaciesActionsNames.Init);

export const getAllParametrosLitofacies = createAction(ParametrosLitofaciesActionsNames.GetAllParametrosLitofacies);

export const getAllParametrosLitofaciesSuccess = createAction(
  ParametrosLitofaciesActionsNames.GetAllParametrosLitofaciesSuccess,
  props<{ litofacies: Litofacies[] , litofaciesFiltro: Litofacies[] }>()
);

export const getAllParametrosLitofaciesFailure = createAction(
  ParametrosLitofaciesActionsNames.GetAllParametrosLitofaciesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosLitofacies = createAction(
  ParametrosLitofaciesActionsNames.CreateModalParametrosLitofacies,
  props<{  edit: Litofacies }>()
);

export const createModalParametrosLitofaciesSuccess = createAction(
  ParametrosLitofaciesActionsNames.CreateModalParametrosLitofaciesSuccess,
  props<{ edit: Litofacies}>()
);

export const createModalParametrosLitofaciesFailure = createAction(
  ParametrosLitofaciesActionsNames.CreateModalParametrosLitofaciesFailure,
  props<{  edit: Litofacies, error: string }>()
);

export const postModalParametrosLitofaciesSuccess = createAction(
  ParametrosLitofaciesActionsNames.PostModalParametrosLitofaciesSuccess,
  props<{ edit: Litofacies, apiResponse: ApiResponse}>()
);

export const postModalParametrosLitofaciesFailure = createAction(
  ParametrosLitofaciesActionsNames.PostModalParametrosLitofaciesFailure,
  props<{  edit: Litofacies, error: string }>()
);

export const editModalParametrosLitofacies = createAction(
  ParametrosLitofaciesActionsNames.EditModalParametrosLitofacies,
  props<{ edit: Litofacies }>()
);

export const editModalParametrosLitofaciesSuccess = createAction(
  ParametrosLitofaciesActionsNames.EditModalParametrosLitofaciesSuccess,
  props<{ edit: Litofacies}>()
);

export const editModalParametrosLitofaciesFailure = createAction(
  ParametrosLitofaciesActionsNames.EditModalParametrosLitofaciesFailure,
  props<{ error: string }>()
);

export const putModalParametrosLitofaciesSuccess= createAction(
  ParametrosLitofaciesActionsNames.PutModalParametrosLitofaciesSuccess,
  props<{ edit: Litofacies, apiResponse: ApiResponse}>()
);

export const putModalParametrosLitofaciesFailure = createAction(
  ParametrosLitofaciesActionsNames.PutModalParametrosLitofaciesFailure,
  props<{  edit: Litofacies, error: string }>()
);

export const deleteParametrosLitofacies = createAction(
  ParametrosLitofaciesActionsNames.DeleteParametrosLitofacies,
  props<{ edit: Litofacies}>()
);

export const deleteParametrosLitofaciesSuccess = createAction(
  ParametrosLitofaciesActionsNames.DeleteParametrosLitofaciesSuccess,
  props<{ edit: Litofacies, apiResponse: ApiResponse}>()
);

export const deleteParametrosLitofaciesFailure = createAction(
  ParametrosLitofaciesActionsNames.DeleteParametrosLitofaciesFailure,
  props<{ error: string }>()
);

export const sortParametrosLitofacies = createAction(
  ParametrosLitofaciesActionsNames.SortParametrosLitofacies,
  props<{ column: any, direction: any}>()
);

export const filterParametrosLitofacies = createAction(
  ParametrosLitofaciesActionsNames.FilterParametrosLitofacies,
  props<{ filtro: string}>()
);

export const paginatorParametrosLitofacies = createAction(
  ParametrosLitofaciesActionsNames.PaginatorParametrosLitofacies,
  props<{ paginator: number}>()
);

