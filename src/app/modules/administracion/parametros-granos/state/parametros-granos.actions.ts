import {createAction, props} from '@ngrx/store';
import {Granos} from '../../../../data/models/granos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosGranosActionsNames {
  Init = '[ParametrosGranos] Init',
  GetAllParametrosGranos = '[ParametrosGranos] [Api] Get all',
  GetAllParametrosGranosSuccess = '[ParametrosGranos] [Api] Get all Success',
  GetAllParametrosGranosFailure = '[ParametrosGranos] [Api] Get all Failure',

  CreateModalParametrosGranos = '[ParametrosGranos] [Action] create modal',
  CreateModalParametrosGranosSuccess = '[ParametrosGranos] [Action] create modal Success',
  CreateModalParametrosGranosFailure = '[ParametrosGranos] [Action] create modal Failure',
  PostModalParametrosGranosSuccess = '[ParametrosGranos] [Action] [Api] create Success',
  PostModalParametrosGranosFailure = '[ParametrosGranos] [Action] [Api] create Failure',

  EditModalParametrosGranos = '[ParametrosGranos] [Action] Edit modal',
  EditModalParametrosGranosSuccess = '[ParametrosGranos] [Action] Edit modal Success',
  EditModalParametrosGranosFailure = '[ParametrosGranos] [Action] Edit modal Failure',
  PutModalParametrosGranosSuccess = '[ParametrosGranos] [Action] [Api] Put Success',
  PutModalParametrosGranosFailure = '[ParametrosGranos] [Action] [Api] Put Failure',

  DeleteParametrosGranos = '[ParametrosGranos] [Action] Delete',
  DeleteParametrosGranosSuccess = '[ParametrosGranos] [Action] [Api] Delete Success',
  DeleteParametrosGranosFailure = '[ParametrosGranos] [Action] [Api] Delete Failure',

  SortParametrosGranos = '[ParametrosGranos] [Action] Sort',
  FilterParametrosGranos = '[ParametrosGranos] [Action] Filter',
  PaginatorParametrosGranos = '[ParametrosGranos] [Action] Paginator',
}

export const initParametrosGranos = createAction( ParametrosGranosActionsNames.Init);

export const getAllParametrosGranos = createAction(ParametrosGranosActionsNames.GetAllParametrosGranos);

export const getAllParametrosGranosSuccess = createAction(
  ParametrosGranosActionsNames.GetAllParametrosGranosSuccess,
  props<{ granos: Granos[] , granosFiltro: Granos[] }>()
);

export const getAllParametrosGranosFailure = createAction(
  ParametrosGranosActionsNames.GetAllParametrosGranosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosGranos = createAction(
  ParametrosGranosActionsNames.CreateModalParametrosGranos,
  props<{  edit: Granos }>()
);

export const createModalParametrosGranosSuccess = createAction(
  ParametrosGranosActionsNames.CreateModalParametrosGranosSuccess,
  props<{ edit: Granos}>()
);

export const createModalParametrosGranosFailure = createAction(
  ParametrosGranosActionsNames.CreateModalParametrosGranosFailure,
  props<{  edit: Granos, error: string }>()
);

export const postModalParametrosGranosSuccess = createAction(
  ParametrosGranosActionsNames.PostModalParametrosGranosSuccess,
  props<{ edit: Granos, apiResponse: ApiResponse}>()
);

export const postModalParametrosGranosFailure = createAction(
  ParametrosGranosActionsNames.PostModalParametrosGranosFailure,
  props<{  edit: Granos, error: string }>()
);

export const editModalParametrosGranos = createAction(
  ParametrosGranosActionsNames.EditModalParametrosGranos,
  props<{ edit: Granos }>()
);

export const editModalParametrosGranosSuccess = createAction(
  ParametrosGranosActionsNames.EditModalParametrosGranosSuccess,
  props<{ edit: Granos}>()
);

export const editModalParametrosGranosFailure = createAction(
  ParametrosGranosActionsNames.EditModalParametrosGranosFailure,
  props<{ error: string }>()
);

export const putModalParametrosGranosSuccess= createAction(
  ParametrosGranosActionsNames.PutModalParametrosGranosSuccess,
  props<{ edit: Granos, apiResponse: ApiResponse}>()
);

export const putModalParametrosGranosFailure = createAction(
  ParametrosGranosActionsNames.PutModalParametrosGranosFailure,
  props<{  edit: Granos, error: string }>()
);

export const deleteParametrosGranos = createAction(
  ParametrosGranosActionsNames.DeleteParametrosGranos,
  props<{ edit: Granos}>()
);

export const deleteParametrosGranosSuccess = createAction(
  ParametrosGranosActionsNames.DeleteParametrosGranosSuccess,
  props<{ edit: Granos, apiResponse: ApiResponse}>()
);

export const deleteParametrosGranosFailure = createAction(
  ParametrosGranosActionsNames.DeleteParametrosGranosFailure,
  props<{ error: string }>()
);

export const sortParametrosGranos = createAction(
  ParametrosGranosActionsNames.SortParametrosGranos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosGranos = createAction(
  ParametrosGranosActionsNames.FilterParametrosGranos,
  props<{ filtro: string}>()
);

export const paginatorParametrosGranos = createAction(
  ParametrosGranosActionsNames.PaginatorParametrosGranos,
  props<{ paginator: number}>()
);

