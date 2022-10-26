import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../../../data/models/api-response';
import {Tonos} from "../../../../data/models/tono";

export enum ParametrosTonosActionsNames {
  Init = '[ParametrosTonos] Init',
  GetAllParametrosTonos = '[ParametrosTonos] [Api] Get all',
  GetAllParametrosTonosSuccess = '[ParametrosTonos] [Api] Get all Success',
  GetAllParametrosTonosFailure = '[ParametrosTonos] [Api] Get all Failure',

  CreateModalParametrosTonos = '[ParametrosTonos] [Action] create modal',
  CreateModalParametrosTonosSuccess = '[ParametrosTonos] [Action] create modal Success',
  CreateModalParametrosTonosFailure = '[ParametrosTonos] [Action] create modal Failure',
  PostModalParametrosTonosSuccess = '[ParametrosTonos] [Action] [Api] create Success',
  PostModalParametrosTonosFailure = '[ParametrosTonos] [Action] [Api] create Failure',

  EditModalParametrosTonos = '[ParametrosTonos] [Action] Edit modal',
  EditModalParametrosTonosSuccess = '[ParametrosTonos] [Action] Edit modal Success',
  EditModalParametrosTonosFailure = '[ParametrosTonos] [Action] Edit modal Failure',
  PutModalParametrosTonosSuccess = '[ParametrosTonos] [Action] [Api] Put Success',
  PutModalParametrosTonosFailure = '[ParametrosTonos] [Action] [Api] Put Failure',

  DeleteParametrosTonos = '[ParametrosTonos] [Action] Delete',
  DeleteParametrosTonosSuccess = '[ParametrosTonos] [Action] [Api] Delete Success',
  DeleteParametrosTonosFailure = '[ParametrosTonos] [Action] [Api] Delete Failure',

  SortParametrosTonos = '[ParametrosTonos] [Action] Sort',
  FilterParametrosTonos = '[ParametrosTonos] [Action] Filter',
  PaginatorParametrosTonos = '[ParametrosTonos] [Action] Paginator',
}

export const initParametrosTonos = createAction( ParametrosTonosActionsNames.Init);

export const getAllParametrosTonos = createAction(ParametrosTonosActionsNames.GetAllParametrosTonos);

export const getAllParametrosTonosSuccess = createAction(
  ParametrosTonosActionsNames.GetAllParametrosTonosSuccess,
  props<{ tonos: Tonos[] , tonosFiltro: Tonos[] }>()
);

export const getAllParametrosTonosFailure = createAction(
  ParametrosTonosActionsNames.GetAllParametrosTonosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosTonos = createAction(
  ParametrosTonosActionsNames.CreateModalParametrosTonos,
  props<{  edit: Tonos }>()
);

export const createModalParametrosTonosSuccess = createAction(
  ParametrosTonosActionsNames.CreateModalParametrosTonosSuccess,
  props<{ edit: Tonos}>()
);

export const createModalParametrosTonosFailure = createAction(
  ParametrosTonosActionsNames.CreateModalParametrosTonosFailure,
  props<{  edit: Tonos, error: string }>()
);

export const postModalParametrosTonosSuccess = createAction(
  ParametrosTonosActionsNames.PostModalParametrosTonosSuccess,
  props<{ edit: Tonos, apiResponse: ApiResponse}>()
);

export const postModalParametrosTonosFailure = createAction(
  ParametrosTonosActionsNames.PostModalParametrosTonosFailure,
  props<{  edit: Tonos, error: string }>()
);

export const editModalParametrosTonos = createAction(
  ParametrosTonosActionsNames.EditModalParametrosTonos,
  props<{ edit: Tonos }>()
);

export const editModalParametrosTonosSuccess = createAction(
  ParametrosTonosActionsNames.EditModalParametrosTonosSuccess,
  props<{ edit: Tonos}>()
);

export const editModalParametrosTonosFailure = createAction(
  ParametrosTonosActionsNames.EditModalParametrosTonosFailure,
  props<{ error: string }>()
);

export const putModalParametrosTonosSuccess= createAction(
  ParametrosTonosActionsNames.PutModalParametrosTonosSuccess,
  props<{ edit: Tonos, apiResponse: ApiResponse}>()
);

export const putModalParametrosTonosFailure = createAction(
  ParametrosTonosActionsNames.PutModalParametrosTonosFailure,
  props<{  edit: Tonos, error: string }>()
);

export const deleteParametrosTonos = createAction(
  ParametrosTonosActionsNames.DeleteParametrosTonos,
  props<{ edit: Tonos}>()
);

export const deleteParametrosTonosSuccess = createAction(
  ParametrosTonosActionsNames.DeleteParametrosTonosSuccess,
  props<{ edit: Tonos, apiResponse: ApiResponse}>()
);

export const deleteParametrosTonosFailure = createAction(
  ParametrosTonosActionsNames.DeleteParametrosTonosFailure,
  props<{ error: string }>()
);

export const sortParametrosTonos = createAction(
  ParametrosTonosActionsNames.SortParametrosTonos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosTonos = createAction(
  ParametrosTonosActionsNames.FilterParametrosTonos,
  props<{ filtro: string}>()
);

export const paginatorParametrosTonos = createAction(
  ParametrosTonosActionsNames.PaginatorParametrosTonos,
  props<{ paginator: number}>()
);

