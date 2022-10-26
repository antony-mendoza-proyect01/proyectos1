import {createAction, props} from '@ngrx/store';
import {Patron} from '../../../../data/models/patron';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosPatronActionsNames {
  Init = '[ParametrosPatron] Init',
  GetAllParametrosPatron = '[ParametrosPatron] [Api] Get all',
  GetAllParametrosPatronSuccess = '[ParametrosPatron] [Api] Get all Success',
  GetAllParametrosPatronFailure = '[ParametrosPatron] [Api] Get all Failure',

  CreateModalParametrosPatron = '[ParametrosPatron] [Action] create modal',
  CreateModalParametrosPatronSuccess = '[ParametrosPatron] [Action] create modal Success',
  CreateModalParametrosPatronFailure = '[ParametrosPatron] [Action] create modal Failure',
  PostModalParametrosPatronSuccess = '[ParametrosPatron] [Action] [Api] create Success',
  PostModalParametrosPatronFailure = '[ParametrosPatron] [Action] [Api] create Failure',

  EditModalParametrosPatron = '[ParametrosPatron] [Action] Edit modal',
  EditModalParametrosPatronSuccess = '[ParametrosPatron] [Action] Edit modal Success',
  EditModalParametrosPatronFailure = '[ParametrosPatron] [Action] Edit modal Failure',
  PutModalParametrosPatronSuccess = '[ParametrosPatron] [Action] [Api] Put Success',
  PutModalParametrosPatronFailure = '[ParametrosPatron] [Action] [Api] Put Failure',

  DeleteParametrosPatron = '[ParametrosPatron] [Action] Delete',
  DeleteParametrosPatronSuccess = '[ParametrosPatron] [Action] [Api] Delete Success',
  DeleteParametrosPatronFailure = '[ParametrosPatron] [Action] [Api] Delete Failure',

  SortParametrosPatron = '[ParametrosPatron] [Action] Sort',
  FilterParametrosPatron = '[ParametrosPatron] [Action] Filter',
  PaginatorParametrosPatron = '[ParametrosPatron] [Action] Paginator',
}

export const initParametrosPatron = createAction( ParametrosPatronActionsNames.Init);

export const getAllParametrosPatron = createAction(ParametrosPatronActionsNames.GetAllParametrosPatron);

export const getAllParametrosPatronSuccess = createAction(
  ParametrosPatronActionsNames.GetAllParametrosPatronSuccess,
  props<{ patrones: Patron[] , patronesFiltro: Patron[] }>()
);

export const getAllParametrosPatronFailure = createAction(
  ParametrosPatronActionsNames.GetAllParametrosPatronFailure,
  props<{  error: string   }>()
);

export const createModalParametrosPatron = createAction(
  ParametrosPatronActionsNames.CreateModalParametrosPatron,
  props<{  edit: Patron }>()
);

export const createModalParametrosPatronSuccess = createAction(
  ParametrosPatronActionsNames.CreateModalParametrosPatronSuccess,
  props<{ edit: Patron}>()
);

export const createModalParametrosPatronFailure = createAction(
  ParametrosPatronActionsNames.CreateModalParametrosPatronFailure,
  props<{  edit: Patron, error: string }>()
);

export const postModalParametrosPatronSuccess = createAction(
  ParametrosPatronActionsNames.PostModalParametrosPatronSuccess,
  props<{ edit: Patron, apiResponse: ApiResponse}>()
);

export const postModalParametrosPatronFailure = createAction(
  ParametrosPatronActionsNames.PostModalParametrosPatronFailure,
  props<{  edit: Patron, error: string }>()
);

export const editModalParametrosPatron = createAction(
  ParametrosPatronActionsNames.EditModalParametrosPatron,
  props<{ edit: Patron }>()
);

export const editModalParametrosPatronSuccess = createAction(
  ParametrosPatronActionsNames.EditModalParametrosPatronSuccess,
  props<{ edit: Patron}>()
);

export const editModalParametrosPatronFailure = createAction(
  ParametrosPatronActionsNames.EditModalParametrosPatronFailure,
  props<{ error: string }>()
);

export const putModalParametrosPatronSuccess= createAction(
  ParametrosPatronActionsNames.PutModalParametrosPatronSuccess,
  props<{ edit: Patron, apiResponse: ApiResponse}>()
);

export const putModalParametrosPatronFailure = createAction(
  ParametrosPatronActionsNames.PutModalParametrosPatronFailure,
  props<{  edit: Patron, error: string }>()
);

export const deleteParametrosPatron = createAction(
  ParametrosPatronActionsNames.DeleteParametrosPatron,
  props<{ edit: Patron}>()
);

export const deleteParametrosPatronSuccess = createAction(
  ParametrosPatronActionsNames.DeleteParametrosPatronSuccess,
  props<{ edit: Patron, apiResponse: ApiResponse}>()
);

export const deleteParametrosPatronFailure = createAction(
  ParametrosPatronActionsNames.DeleteParametrosPatronFailure,
  props<{ error: string }>()
);

export const sortParametrosPatron = createAction(
  ParametrosPatronActionsNames.SortParametrosPatron,
  props<{ column: any, direction: any}>()
);

export const filterParametrosPatron = createAction(
  ParametrosPatronActionsNames.FilterParametrosPatron,
  props<{ filtro: string}>()
);

export const paginatorParametrosPatron = createAction(
  ParametrosPatronActionsNames.PaginatorParametrosPatron,
  props<{ paginator: number}>()
);

