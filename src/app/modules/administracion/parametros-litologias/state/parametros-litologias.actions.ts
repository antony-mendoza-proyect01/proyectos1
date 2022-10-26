import {createAction, props} from '@ngrx/store';
import {Litologias} from '../../../../data/models/litologias';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosLitologiasActionsNames {
  Init = '[ParametrosLitologias] Init',
  GetAllParametrosLitologias = '[ParametrosLitologias] [Api] Get all',
  GetAllParametrosLitologiasSuccess = '[ParametrosLitologias] [Api] Get all Success',
  GetAllParametrosLitologiasFailure = '[ParametrosLitologias] [Api] Get all Failure',

  CreateModalParametrosLitologias = '[ParametrosLitologias] [Action] create modal',
  CreateModalParametrosLitologiasSuccess = '[ParametrosLitologias] [Action] create modal Success',
  CreateModalParametrosLitologiasFailure = '[ParametrosLitologias] [Action] create modal Failure',
  PostModalParametrosLitologiasSuccess = '[ParametrosLitologias] [Action] [Api] create Success',
  PostModalParametrosLitologiasFailure = '[ParametrosLitologias] [Action] [Api] create Failure',

  EditModalParametrosLitologias = '[ParametrosLitologias] [Action] Edit modal',
  EditModalParametrosLitologiasSuccess = '[ParametrosLitologias] [Action] Edit modal Success',
  EditModalParametrosLitologiasFailure = '[ParametrosLitologias] [Action] Edit modal Failure',
  PutModalParametrosLitologiasSuccess = '[ParametrosLitologias] [Action] [Api] Put Success',
  PutModalParametrosLitologiasFailure = '[ParametrosLitologias] [Action] [Api] Put Failure',

  DeleteParametrosLitologias = '[ParametrosLitologias] [Action] Delete',
  DeleteParametrosLitologiasSuccess = '[ParametrosLitologias] [Action] [Api] Delete Success',
  DeleteParametrosLitologiasFailure = '[ParametrosLitologias] [Action] [Api] Delete Failure',

  SortParametrosLitologias = '[ParametrosLitologias] [Action] Sort',
  FilterParametrosLitologias = '[ParametrosLitologias] [Action] Filter',
  PaginatorParametrosLitologias = '[ParametrosLitologias] [Action] Paginator',
}

export const initParametrosLitologias = createAction( ParametrosLitologiasActionsNames.Init);

export const getAllParametrosLitologias = createAction(ParametrosLitologiasActionsNames.GetAllParametrosLitologias);

export const getAllParametrosLitologiasSuccess = createAction(
  ParametrosLitologiasActionsNames.GetAllParametrosLitologiasSuccess,
  props<{ litologias: Litologias[] , litologiasFiltro: Litologias[] }>()
);

export const getAllParametrosLitologiasFailure = createAction(
  ParametrosLitologiasActionsNames.GetAllParametrosLitologiasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosLitologias = createAction(
  ParametrosLitologiasActionsNames.CreateModalParametrosLitologias,
  props<{  edit: Litologias }>()
);

export const createModalParametrosLitologiasSuccess = createAction(
  ParametrosLitologiasActionsNames.CreateModalParametrosLitologiasSuccess,
  props<{ edit: Litologias}>()
);

export const createModalParametrosLitologiasFailure = createAction(
  ParametrosLitologiasActionsNames.CreateModalParametrosLitologiasFailure,
  props<{  edit: Litologias, error: string }>()
);

export const postModalParametrosLitologiasSuccess = createAction(
  ParametrosLitologiasActionsNames.PostModalParametrosLitologiasSuccess,
  props<{ edit: Litologias, apiResponse: ApiResponse}>()
);

export const postModalParametrosLitologiasFailure = createAction(
  ParametrosLitologiasActionsNames.PostModalParametrosLitologiasFailure,
  props<{  edit: Litologias, error: string }>()
);

export const editModalParametrosLitologias = createAction(
  ParametrosLitologiasActionsNames.EditModalParametrosLitologias,
  props<{ edit: Litologias }>()
);

export const editModalParametrosLitologiasSuccess = createAction(
  ParametrosLitologiasActionsNames.EditModalParametrosLitologiasSuccess,
  props<{ edit: Litologias}>()
);

export const editModalParametrosLitologiasFailure = createAction(
  ParametrosLitologiasActionsNames.EditModalParametrosLitologiasFailure,
  props<{ error: string }>()
);

export const putModalParametrosLitologiasSuccess= createAction(
  ParametrosLitologiasActionsNames.PutModalParametrosLitologiasSuccess,
  props<{ edit: Litologias, apiResponse: ApiResponse}>()
);

export const putModalParametrosLitologiasFailure = createAction(
  ParametrosLitologiasActionsNames.PutModalParametrosLitologiasFailure,
  props<{  edit: Litologias, error: string }>()
);

export const deleteParametrosLitologias = createAction(
  ParametrosLitologiasActionsNames.DeleteParametrosLitologias,
  props<{ edit: Litologias}>()
);

export const deleteParametrosLitologiasSuccess = createAction(
  ParametrosLitologiasActionsNames.DeleteParametrosLitologiasSuccess,
  props<{ edit: Litologias, apiResponse: ApiResponse}>()
);

export const deleteParametrosLitologiasFailure = createAction(
  ParametrosLitologiasActionsNames.DeleteParametrosLitologiasFailure,
  props<{ error: string }>()
);

export const sortParametrosLitologias = createAction(
  ParametrosLitologiasActionsNames.SortParametrosLitologias,
  props<{ column: any, direction: any}>()
);

export const filterParametrosLitologias = createAction(
  ParametrosLitologiasActionsNames.FilterParametrosLitologias,
  props<{ filtro: string}>()
);

export const paginatorParametrosLitologias = createAction(
  ParametrosLitologiasActionsNames.PaginatorParametrosLitologias,
  props<{ paginator: number}>()
);

