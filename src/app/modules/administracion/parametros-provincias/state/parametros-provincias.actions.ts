import {createAction, props} from '@ngrx/store';
import {Provincias} from '../../../../data/models/provincias';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosProvinciasActionsNames {
  Init = '[ParametrosProvincias] Init',
  GetAllParametrosProvincias = '[ParametrosProvincias] [Api] Get all',
  GetAllParametrosProvinciasSuccess = '[ParametrosProvincias] [Api] Get all Success',
  GetAllParametrosProvinciasFailure = '[ParametrosProvincias] [Api] Get all Failure',

  CreateModalParametrosProvincias = '[ParametrosProvincias] [Action] create modal',
  CreateModalParametrosProvinciasSuccess = '[ParametrosProvincias] [Action] create modal Success',
  CreateModalParametrosProvinciasFailure = '[ParametrosProvincias] [Action] create modal Failure',
  PostModalParametrosProvinciasSuccess = '[ParametrosProvincias] [Action] [Api] create Success',
  PostModalParametrosProvinciasFailure = '[ParametrosProvincias] [Action] [Api] create Failure',

  EditModalParametrosProvincias = '[ParametrosProvincias] [Action] Edit modal',
  EditModalParametrosProvinciasSuccess = '[ParametrosProvincias] [Action] Edit modal Success',
  EditModalParametrosProvinciasFailure = '[ParametrosProvincias] [Action] Edit modal Failure',
  PutModalParametrosProvinciasSuccess = '[ParametrosProvincias] [Action] [Api] Put Success',
  PutModalParametrosProvinciasFailure = '[ParametrosProvincias] [Action] [Api] Put Failure',

  DeleteParametrosProvincias = '[ParametrosProvincias] [Action] Delete',
  DeleteParametrosProvinciasSuccess = '[ParametrosProvincias] [Action] [Api] Delete Success',
  DeleteParametrosProvinciasFailure = '[ParametrosProvincias] [Action] [Api] Delete Failure',

  SortParametrosProvincias = '[ParametrosProvincias] [Action] Sort',
  FilterParametrosProvincias = '[ParametrosProvincias] [Action] Filter',
  PaginatorParametrosProvincias = '[ParametrosProvincias] [Action] Paginator',
}

export const initParametrosProvincias = createAction( ParametrosProvinciasActionsNames.Init);

export const getAllParametrosProvincias = createAction(ParametrosProvinciasActionsNames.GetAllParametrosProvincias);

export const getAllParametrosProvinciasSuccess = createAction(
  ParametrosProvinciasActionsNames.GetAllParametrosProvinciasSuccess,
  props<{ provincias: Provincias[] , provinciasFiltro: Provincias[] }>()
);

export const getAllParametrosProvinciasFailure = createAction(
  ParametrosProvinciasActionsNames.GetAllParametrosProvinciasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosProvincias = createAction(
  ParametrosProvinciasActionsNames.CreateModalParametrosProvincias,
  props<{  edit: Provincias }>()
);

export const createModalParametrosProvinciasSuccess = createAction(
  ParametrosProvinciasActionsNames.CreateModalParametrosProvinciasSuccess,
  props<{ edit: Provincias}>()
);

export const createModalParametrosProvinciasFailure = createAction(
  ParametrosProvinciasActionsNames.CreateModalParametrosProvinciasFailure,
  props<{  edit: Provincias, error: string }>()
);

export const postModalParametrosProvinciasSuccess = createAction(
  ParametrosProvinciasActionsNames.PostModalParametrosProvinciasSuccess,
  props<{ edit: Provincias, apiResponse: ApiResponse}>()
);

export const postModalParametrosProvinciasFailure = createAction(
  ParametrosProvinciasActionsNames.PostModalParametrosProvinciasFailure,
  props<{  edit: Provincias, error: string }>()
);

export const editModalParametrosProvincias = createAction(
  ParametrosProvinciasActionsNames.EditModalParametrosProvincias,
  props<{ edit: Provincias }>()
);

export const editModalParametrosProvinciasSuccess = createAction(
  ParametrosProvinciasActionsNames.EditModalParametrosProvinciasSuccess,
  props<{ edit: Provincias}>()
);

export const editModalParametrosProvinciasFailure = createAction(
  ParametrosProvinciasActionsNames.EditModalParametrosProvinciasFailure,
  props<{ error: string }>()
);

export const putModalParametrosProvinciasSuccess= createAction(
  ParametrosProvinciasActionsNames.PutModalParametrosProvinciasSuccess,
  props<{ edit: Provincias, apiResponse: ApiResponse}>()
);

export const putModalParametrosProvinciasFailure = createAction(
  ParametrosProvinciasActionsNames.PutModalParametrosProvinciasFailure,
  props<{  edit: Provincias, error: string }>()
);

export const deleteParametrosProvincias = createAction(
  ParametrosProvinciasActionsNames.DeleteParametrosProvincias,
  props<{ edit: Provincias}>()
);

export const deleteParametrosProvinciasSuccess = createAction(
  ParametrosProvinciasActionsNames.DeleteParametrosProvinciasSuccess,
  props<{ edit: Provincias, apiResponse: ApiResponse}>()
);

export const deleteParametrosProvinciasFailure = createAction(
  ParametrosProvinciasActionsNames.DeleteParametrosProvinciasFailure,
  props<{ error: string }>()
);

export const sortParametrosProvincias = createAction(
  ParametrosProvinciasActionsNames.SortParametrosProvincias,
  props<{ column: any, direction: any}>()
);

export const filterParametrosProvincias = createAction(
  ParametrosProvinciasActionsNames.FilterParametrosProvincias,
  props<{ filtro: string}>()
);

export const paginatorParametrosProvincias = createAction(
  ParametrosProvinciasActionsNames.PaginatorParametrosProvincias,
  props<{ paginator: number}>()
);

