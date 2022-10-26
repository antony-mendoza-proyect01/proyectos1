import {createAction, props} from '@ngrx/store';
import {Parasecuencias} from '../../../../data/models/parasecuencias';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosParasecuenciasActionsNames {
  Init = '[ParametrosParasecuencias] Init',
  GetAllParametrosParasecuencias = '[ParametrosParasecuencias] [Api] Get all',
  GetAllParametrosParasecuenciasSuccess = '[ParametrosParasecuencias] [Api] Get all Success',
  GetAllParametrosParasecuenciasFailure = '[ParametrosParasecuencias] [Api] Get all Failure',

  CreateModalParametrosParasecuencias = '[ParametrosParasecuencias] [Action] create modal',
  CreateModalParametrosParasecuenciasSuccess = '[ParametrosParasecuencias] [Action] create modal Success',
  CreateModalParametrosParasecuenciasFailure = '[ParametrosParasecuencias] [Action] create modal Failure',
  PostModalParametrosParasecuenciasSuccess = '[ParametrosParasecuencias] [Action] [Api] create Success',
  PostModalParametrosParasecuenciasFailure = '[ParametrosParasecuencias] [Action] [Api] create Failure',

  PutModalParametrosParasecuenciasSuccess = '[ParametrosParasecuencias] [Action] [Api] Put Success',
  PutModalParametrosParasecuenciasFailure = '[ParametrosParasecuencias] [Action] [Api] Put Failure',

  DeleteParametrosParasecuencias = '[ParametrosParasecuencias] [Action] Delete',
  DeleteParametrosParasecuenciasSuccess = '[ParametrosParasecuencias] [Action] [Api] Delete Success',
  DeleteParametrosParasecuenciasFailure = '[ParametrosParasecuencias] [Action] [Api] Delete Failure',

  SortParametrosParasecuencias = '[ParametrosParasecuencias] [Action] Sort',
  FilterParametrosParasecuencias = '[ParametrosParasecuencias] [Action] Filter',
  PaginatorParametrosParasecuencias = '[ParametrosParasecuencias] [Action] Paginator',
}

export const initParametrosParasecuencias = createAction( ParametrosParasecuenciasActionsNames.Init);

export const getAllParametrosParasecuencias = createAction(ParametrosParasecuenciasActionsNames.GetAllParametrosParasecuencias);

export const getAllParametrosParasecuenciasSuccess = createAction(
  ParametrosParasecuenciasActionsNames.GetAllParametrosParasecuenciasSuccess,
  props<{ parasecuencias: Parasecuencias[] , parasecuenciasFiltro: Parasecuencias[] }>()
);

export const getAllParametrosParasecuenciasFailure = createAction(
  ParametrosParasecuenciasActionsNames.GetAllParametrosParasecuenciasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosParasecuencias = createAction(
  ParametrosParasecuenciasActionsNames.CreateModalParametrosParasecuencias,
  props<{  edit: Parasecuencias }>()
);

export const createModalParametrosParasecuenciasSuccess = createAction(
  ParametrosParasecuenciasActionsNames.CreateModalParametrosParasecuenciasSuccess,
  props<{ edit: Parasecuencias}>()
);

export const createModalParametrosParasecuenciasFailure = createAction(
  ParametrosParasecuenciasActionsNames.CreateModalParametrosParasecuenciasFailure,
  props<{  edit: Parasecuencias, error: string }>()
);

export const postModalParametrosParasecuenciasSuccess = createAction(
  ParametrosParasecuenciasActionsNames.PostModalParametrosParasecuenciasSuccess,
  props<{ edit: Parasecuencias, apiResponse: ApiResponse}>()
);

export const postModalParametrosParasecuenciasFailure = createAction(
  ParametrosParasecuenciasActionsNames.PostModalParametrosParasecuenciasFailure,
  props<{  edit: Parasecuencias, error: string }>()
);

export const putModalParametrosParasecuenciasSuccess= createAction(
  ParametrosParasecuenciasActionsNames.PutModalParametrosParasecuenciasSuccess,
  props<{ edit: Parasecuencias, apiResponse: ApiResponse}>()
);

export const putModalParametrosParasecuenciasFailure = createAction(
  ParametrosParasecuenciasActionsNames.PutModalParametrosParasecuenciasFailure,
  props<{  edit: Parasecuencias, error: string }>()
);

export const deleteParametrosParasecuencias = createAction(
  ParametrosParasecuenciasActionsNames.DeleteParametrosParasecuencias,
  props<{ edit: Parasecuencias}>()
);

export const deleteParametrosParasecuenciasSuccess = createAction(
  ParametrosParasecuenciasActionsNames.DeleteParametrosParasecuenciasSuccess,
  props<{ edit: Parasecuencias, apiResponse: ApiResponse}>()
);

export const deleteParametrosParasecuenciasFailure = createAction(
  ParametrosParasecuenciasActionsNames.DeleteParametrosParasecuenciasFailure,
  props<{ error: string }>()
);

export const sortParametrosParasecuencias = createAction(
  ParametrosParasecuenciasActionsNames.SortParametrosParasecuencias,
  props<{ column: any, direction: any}>()
);

export const filterParametrosParasecuencias = createAction(
  ParametrosParasecuenciasActionsNames.FilterParametrosParasecuencias,
  props<{ filtro: string}>()
);

export const paginatorParametrosParasecuencias = createAction(
  ParametrosParasecuenciasActionsNames.PaginatorParametrosParasecuencias,
  props<{ paginator: number}>()
);

