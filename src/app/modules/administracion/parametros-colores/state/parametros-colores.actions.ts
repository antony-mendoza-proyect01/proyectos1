import {createAction, props} from '@ngrx/store';
import {Colores} from '../../../../data/models/colores';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosColoresActionsNames {
  Init = '[ParametrosColores] Init',
  GetAllParametrosColores = '[ParametrosColores] [Api] Get all',
  GetAllParametrosColoresSuccess = '[ParametrosColores] [Api] Get all Success',
  GetAllParametrosColoresFailure = '[ParametrosColores] [Api] Get all Failure',

  CreateModalParametrosColores = '[ParametrosColores] [Action] create modal',
  CreateModalParametrosColoresSuccess = '[ParametrosColores] [Action] create modal Success',
  CreateModalParametrosColoresFailure = '[ParametrosColores] [Action] create modal Failure',
  PostModalParametrosColoresSuccess = '[ParametrosColores] [Action] [Api] create Success',
  PostModalParametrosColoresFailure = '[ParametrosColores] [Action] [Api] create Failure',

  EditModalParametrosColores = '[ParametrosColores] [Action] Edit modal',
  EditModalParametrosColoresSuccess = '[ParametrosColores] [Action] Edit modal Success',
  EditModalParametrosColoresFailure = '[ParametrosColores] [Action] Edit modal Failure',
  PutModalParametrosColoresSuccess = '[ParametrosColores] [Action] [Api] Put Success',
  PutModalParametrosColoresFailure = '[ParametrosColores] [Action] [Api] Put Failure',

  DeleteParametrosColores = '[ParametrosColores] [Action] Delete',
  DeleteParametrosColoresSuccess = '[ParametrosColores] [Action] [Api] Delete Success',
  DeleteParametrosColoresFailure = '[ParametrosColores] [Action] [Api] Delete Failure',

  SortParametrosColores = '[ParametrosColores] [Action] Sort',
  FilterParametrosColores = '[ParametrosColores] [Action] Filter',
  PaginatorParametrosColores = '[ParametrosColores] [Action] Paginator',
}

export const initParametrosColores = createAction( ParametrosColoresActionsNames.Init);

export const getAllParametrosColores = createAction(ParametrosColoresActionsNames.GetAllParametrosColores);

export const getAllParametrosColoresSuccess = createAction(
  ParametrosColoresActionsNames.GetAllParametrosColoresSuccess,
  props<{ colores: Colores[] , coloresFiltro: Colores[] }>()
);

export const getAllParametrosColoresFailure = createAction(
  ParametrosColoresActionsNames.GetAllParametrosColoresFailure,
  props<{  error: string   }>()
);

export const createModalParametrosColores = createAction(
  ParametrosColoresActionsNames.CreateModalParametrosColores,
  props<{  edit: Colores }>()
);

export const createModalParametrosColoresSuccess = createAction(
  ParametrosColoresActionsNames.CreateModalParametrosColoresSuccess,
  props<{ edit: Colores}>()
);

export const createModalParametrosColoresFailure = createAction(
  ParametrosColoresActionsNames.CreateModalParametrosColoresFailure,
  props<{  edit: Colores, error: string }>()
);

export const postModalParametrosColoresSuccess = createAction(
  ParametrosColoresActionsNames.PostModalParametrosColoresSuccess,
  props<{ edit: Colores, apiResponse: ApiResponse}>()
);

export const postModalParametrosColoresFailure = createAction(
  ParametrosColoresActionsNames.PostModalParametrosColoresFailure,
  props<{  edit: Colores, error: string }>()
);

export const editModalParametrosColores = createAction(
  ParametrosColoresActionsNames.EditModalParametrosColores,
  props<{ edit: Colores }>()
);

export const editModalParametrosColoresSuccess = createAction(
  ParametrosColoresActionsNames.EditModalParametrosColoresSuccess,
  props<{ edit: Colores}>()
);

export const editModalParametrosColoresFailure = createAction(
  ParametrosColoresActionsNames.EditModalParametrosColoresFailure,
  props<{ error: string }>()
);

export const putModalParametrosColoresSuccess= createAction(
  ParametrosColoresActionsNames.PutModalParametrosColoresSuccess,
  props<{ edit: Colores, apiResponse: ApiResponse}>()
);

export const putModalParametrosColoresFailure = createAction(
  ParametrosColoresActionsNames.PutModalParametrosColoresFailure,
  props<{  edit: Colores, error: string }>()
);

export const deleteParametrosColores = createAction(
  ParametrosColoresActionsNames.DeleteParametrosColores,
  props<{ edit: Colores}>()
);

export const deleteParametrosColoresSuccess = createAction(
  ParametrosColoresActionsNames.DeleteParametrosColoresSuccess,
  props<{ edit: Colores, apiResponse: ApiResponse}>()
);

export const deleteParametrosColoresFailure = createAction(
  ParametrosColoresActionsNames.DeleteParametrosColoresFailure,
  props<{ error: string }>()
);

export const sortParametrosColores = createAction(
  ParametrosColoresActionsNames.SortParametrosColores,
  props<{ column: any, direction: any}>()
);

export const filterParametrosColores = createAction(
  ParametrosColoresActionsNames.FilterParametrosColores,
  props<{ filtro: string}>()
);

export const paginatorParametrosColores = createAction(
  ParametrosColoresActionsNames.PaginatorParametrosColores,
  props<{ paginator: number}>()
);

