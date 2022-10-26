import {createAction, props} from '@ngrx/store';
import {Humedades} from '../../../../data/models/humedades';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosHumedadesActionsNames {
  Init = '[ParametrosHumedades] Init',
  GetAllParametrosHumedades = '[ParametrosHumedades] [Api] Get all',
  GetAllParametrosHumedadesSuccess = '[ParametrosHumedades] [Api] Get all Success',
  GetAllParametrosHumedadesFailure = '[ParametrosHumedades] [Api] Get all Failure',

  CreateModalParametrosHumedades = '[ParametrosHumedades] [Action] create modal',
  CreateModalParametrosHumedadesSuccess = '[ParametrosHumedades] [Action] create modal Success',
  CreateModalParametrosHumedadesFailure = '[ParametrosHumedades] [Action] create modal Failure',
  PostModalParametrosHumedadesSuccess = '[ParametrosHumedades] [Action] [Api] create Success',
  PostModalParametrosHumedadesFailure = '[ParametrosHumedades] [Action] [Api] create Failure',

  EditModalParametrosHumedades = '[ParametrosHumedades] [Action] Edit modal',
  EditModalParametrosHumedadesSuccess = '[ParametrosHumedades] [Action] Edit modal Success',
  EditModalParametrosHumedadesFailure = '[ParametrosHumedades] [Action] Edit modal Failure',
  PutModalParametrosHumedadesSuccess = '[ParametrosHumedades] [Action] [Api] Put Success',
  PutModalParametrosHumedadesFailure = '[ParametrosHumedades] [Action] [Api] Put Failure',

  DeleteParametrosHumedades = '[ParametrosHumedades] [Action] Delete',
  DeleteParametrosHumedadesSuccess = '[ParametrosHumedades] [Action] [Api] Delete Success',
  DeleteParametrosHumedadesFailure = '[ParametrosHumedades] [Action] [Api] Delete Failure',

  SortParametrosHumedades = '[ParametrosHumedades] [Action] Sort',
  FilterParametrosHumedades = '[ParametrosHumedades] [Action] Filter',
  PaginatorParametrosHumedades = '[ParametrosHumedades] [Action] Paginator',
}

export const initParametrosHumedades = createAction( ParametrosHumedadesActionsNames.Init);

export const getAllParametrosHumedades = createAction(ParametrosHumedadesActionsNames.GetAllParametrosHumedades);

export const getAllParametrosHumedadesSuccess = createAction(
  ParametrosHumedadesActionsNames.GetAllParametrosHumedadesSuccess,
  props<{ humedades: Humedades[] , humedadesFiltro: Humedades[] }>()
);

export const getAllParametrosHumedadesFailure = createAction(
  ParametrosHumedadesActionsNames.GetAllParametrosHumedadesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosHumedades = createAction(
  ParametrosHumedadesActionsNames.CreateModalParametrosHumedades,
  props<{  edit: Humedades }>()
);

export const createModalParametrosHumedadesSuccess = createAction(
  ParametrosHumedadesActionsNames.CreateModalParametrosHumedadesSuccess,
  props<{ edit: Humedades}>()
);

export const createModalParametrosHumedadesFailure = createAction(
  ParametrosHumedadesActionsNames.CreateModalParametrosHumedadesFailure,
  props<{  edit: Humedades, error: string }>()
);

export const postModalParametrosHumedadesSuccess = createAction(
  ParametrosHumedadesActionsNames.PostModalParametrosHumedadesSuccess,
  props<{ edit: Humedades, apiResponse: ApiResponse}>()
);

export const postModalParametrosHumedadesFailure = createAction(
  ParametrosHumedadesActionsNames.PostModalParametrosHumedadesFailure,
  props<{  edit: Humedades, error: string }>()
);

export const editModalParametrosHumedades = createAction(
  ParametrosHumedadesActionsNames.EditModalParametrosHumedades,
  props<{ edit: Humedades }>()
);

export const editModalParametrosHumedadesSuccess = createAction(
  ParametrosHumedadesActionsNames.EditModalParametrosHumedadesSuccess,
  props<{ edit: Humedades}>()
);

export const editModalParametrosHumedadesFailure = createAction(
  ParametrosHumedadesActionsNames.EditModalParametrosHumedadesFailure,
  props<{ error: string }>()
);

export const putModalParametrosHumedadesSuccess= createAction(
  ParametrosHumedadesActionsNames.PutModalParametrosHumedadesSuccess,
  props<{ edit: Humedades, apiResponse: ApiResponse}>()
);

export const putModalParametrosHumedadesFailure = createAction(
  ParametrosHumedadesActionsNames.PutModalParametrosHumedadesFailure,
  props<{  edit: Humedades, error: string }>()
);

export const deleteParametrosHumedades = createAction(
  ParametrosHumedadesActionsNames.DeleteParametrosHumedades,
  props<{ edit: Humedades}>()
);

export const deleteParametrosHumedadesSuccess = createAction(
  ParametrosHumedadesActionsNames.DeleteParametrosHumedadesSuccess,
  props<{ edit: Humedades, apiResponse: ApiResponse}>()
);

export const deleteParametrosHumedadesFailure = createAction(
  ParametrosHumedadesActionsNames.DeleteParametrosHumedadesFailure,
  props<{ error: string }>()
);

export const sortParametrosHumedades = createAction(
  ParametrosHumedadesActionsNames.SortParametrosHumedades,
  props<{ column: any, direction: any}>()
);

export const filterParametrosHumedades = createAction(
  ParametrosHumedadesActionsNames.FilterParametrosHumedades,
  props<{ filtro: string}>()
);

export const paginatorParametrosHumedades = createAction(
  ParametrosHumedadesActionsNames.PaginatorParametrosHumedades,
  props<{ paginator: number}>()
);

