import {createAction, props} from '@ngrx/store';
import {Durezas} from '../../../../data/models/durezas';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosDurezasActionsNames {
  Init = '[ParametrosDurezas] Init',
  GetAllParametrosDurezas = '[ParametrosDurezas] [Api] Get all',
  GetAllParametrosDurezasSuccess = '[ParametrosDurezas] [Api] Get all Success',
  GetAllParametrosDurezasFailure = '[ParametrosDurezas] [Api] Get all Failure',

  CreateModalParametrosDurezas = '[ParametrosDurezas] [Action] create modal',
  CreateModalParametrosDurezasSuccess = '[ParametrosDurezas] [Action] create modal Success',
  CreateModalParametrosDurezasFailure = '[ParametrosDurezas] [Action] create modal Failure',
  PostModalParametrosDurezasSuccess = '[ParametrosDurezas] [Action] [Api] create Success',
  PostModalParametrosDurezasFailure = '[ParametrosDurezas] [Action] [Api] create Failure',

  EditModalParametrosDurezas = '[ParametrosDurezas] [Action] Edit modal',
  EditModalParametrosDurezasSuccess = '[ParametrosDurezas] [Action] Edit modal Success',
  EditModalParametrosDurezasFailure = '[ParametrosDurezas] [Action] Edit modal Failure',
  PutModalParametrosDurezasSuccess = '[ParametrosDurezas] [Action] [Api] Put Success',
  PutModalParametrosDurezasFailure = '[ParametrosDurezas] [Action] [Api] Put Failure',

  DeleteParametrosDurezas = '[ParametrosDurezas] [Action] Delete',
  DeleteParametrosDurezasSuccess = '[ParametrosDurezas] [Action] [Api] Delete Success',
  DeleteParametrosDurezasFailure = '[ParametrosDurezas] [Action] [Api] Delete Failure',

  SortParametrosDurezas = '[ParametrosDurezas] [Action] Sort',
  FilterParametrosDurezas = '[ParametrosDurezas] [Action] Filter',
  PaginatorParametrosDurezas = '[ParametrosDurezas] [Action] Paginator',
}

export const initParametrosDurezas = createAction( ParametrosDurezasActionsNames.Init);

export const getAllParametrosDurezas = createAction(ParametrosDurezasActionsNames.GetAllParametrosDurezas);

export const getAllParametrosDurezasSuccess = createAction(
  ParametrosDurezasActionsNames.GetAllParametrosDurezasSuccess,
  props<{ durezas: Durezas[] , durezasFiltro: Durezas[] }>()
);

export const getAllParametrosDurezasFailure = createAction(
  ParametrosDurezasActionsNames.GetAllParametrosDurezasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosDurezas = createAction(
  ParametrosDurezasActionsNames.CreateModalParametrosDurezas,
  props<{  edit: Durezas }>()
);

export const createModalParametrosDurezasSuccess = createAction(
  ParametrosDurezasActionsNames.CreateModalParametrosDurezasSuccess,
  props<{ edit: Durezas}>()
);

export const createModalParametrosDurezasFailure = createAction(
  ParametrosDurezasActionsNames.CreateModalParametrosDurezasFailure,
  props<{  edit: Durezas, error: string }>()
);

export const postModalParametrosDurezasSuccess = createAction(
  ParametrosDurezasActionsNames.PostModalParametrosDurezasSuccess,
  props<{ edit: Durezas, apiResponse: ApiResponse}>()
);

export const postModalParametrosDurezasFailure = createAction(
  ParametrosDurezasActionsNames.PostModalParametrosDurezasFailure,
  props<{  edit: Durezas, error: string }>()
);

export const editModalParametrosDurezas = createAction(
  ParametrosDurezasActionsNames.EditModalParametrosDurezas,
  props<{ edit: Durezas }>()
);

export const editModalParametrosDurezasSuccess = createAction(
  ParametrosDurezasActionsNames.EditModalParametrosDurezasSuccess,
  props<{ edit: Durezas}>()
);

export const editModalParametrosDurezasFailure = createAction(
  ParametrosDurezasActionsNames.EditModalParametrosDurezasFailure,
  props<{ error: string }>()
);

export const putModalParametrosDurezasSuccess= createAction(
  ParametrosDurezasActionsNames.PutModalParametrosDurezasSuccess,
  props<{ edit: Durezas, apiResponse: ApiResponse}>()
);

export const putModalParametrosDurezasFailure = createAction(
  ParametrosDurezasActionsNames.PutModalParametrosDurezasFailure,
  props<{  edit: Durezas, error: string }>()
);

export const deleteParametrosDurezas = createAction(
  ParametrosDurezasActionsNames.DeleteParametrosDurezas,
  props<{ edit: Durezas}>()
);

export const deleteParametrosDurezasSuccess = createAction(
  ParametrosDurezasActionsNames.DeleteParametrosDurezasSuccess,
  props<{ edit: Durezas, apiResponse: ApiResponse}>()
);

export const deleteParametrosDurezasFailure = createAction(
  ParametrosDurezasActionsNames.DeleteParametrosDurezasFailure,
  props<{ error: string }>()
);

export const sortParametrosDurezas = createAction(
  ParametrosDurezasActionsNames.SortParametrosDurezas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosDurezas = createAction(
  ParametrosDurezasActionsNames.FilterParametrosDurezas,
  props<{ filtro: string}>()
);

export const paginatorParametrosDurezas = createAction(
  ParametrosDurezasActionsNames.PaginatorParametrosDurezas,
  props<{ paginator: number}>()
);

