import {createAction, props} from '@ngrx/store';
import {Calificadores} from '../../../../data/models/calificadores';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosCalificadoresActionsNames {
  Init = '[ParametrosCalificadores] Init',
  GetAllParametrosCalificadores = '[ParametrosCalificadores] [Api] Get all',
  GetAllParametrosCalificadoresSuccess = '[ParametrosCalificadores] [Api] Get all Success',
  GetAllParametrosCalificadoresFailure = '[ParametrosCalificadores] [Api] Get all Failure',

  CreateModalParametrosCalificadores = '[ParametrosCalificadores] [Action] create modal',
  CreateModalParametrosCalificadoresSuccess = '[ParametrosCalificadores] [Action] create modal Success',
  CreateModalParametrosCalificadoresFailure = '[ParametrosCalificadores] [Action] create modal Failure',
  PostModalParametrosCalificadoresSuccess = '[ParametrosCalificadores] [Action] [Api] create Success',
  PostModalParametrosCalificadoresFailure = '[ParametrosCalificadores] [Action] [Api] create Failure',

  EditModalParametrosCalificadores = '[ParametrosCalificadores] [Action] Edit modal',
  EditModalParametrosCalificadoresSuccess = '[ParametrosCalificadores] [Action] Edit modal Success',
  EditModalParametrosCalificadoresFailure = '[ParametrosCalificadores] [Action] Edit modal Failure',
  PutModalParametrosCalificadoresSuccess = '[ParametrosCalificadores] [Action] [Api] Put Success',
  PutModalParametrosCalificadoresFailure = '[ParametrosCalificadores] [Action] [Api] Put Failure',

  DeleteParametrosCalificadores = '[ParametrosCalificadores] [Action] Delete',
  DeleteParametrosCalificadoresSuccess = '[ParametrosCalificadores] [Action] [Api] Delete Success',
  DeleteParametrosCalificadoresFailure = '[ParametrosCalificadores] [Action] [Api] Delete Failure',

  SortParametrosCalificadores = '[ParametrosCalificadores] [Action] Sort',
  FilterParametrosCalificadores = '[ParametrosCalificadores] [Action] Filter',
  PaginatorParametrosCalificadores = '[ParametrosCalificadores] [Action] Paginator',
}

export const initParametrosCalificadores = createAction( ParametrosCalificadoresActionsNames.Init);

export const getAllParametrosCalificadores = createAction(ParametrosCalificadoresActionsNames.GetAllParametrosCalificadores);

export const getAllParametrosCalificadoresSuccess = createAction(
  ParametrosCalificadoresActionsNames.GetAllParametrosCalificadoresSuccess,
  props<{ calificadores: Calificadores[] , calificadoresFiltro: Calificadores[] }>()
);

export const getAllParametrosCalificadoresFailure = createAction(
  ParametrosCalificadoresActionsNames.GetAllParametrosCalificadoresFailure,
  props<{  error: string   }>()
);

export const createModalParametrosCalificadores = createAction(
  ParametrosCalificadoresActionsNames.CreateModalParametrosCalificadores,
  props<{  edit: Calificadores }>()
);

export const createModalParametrosCalificadoresSuccess = createAction(
  ParametrosCalificadoresActionsNames.CreateModalParametrosCalificadoresSuccess,
  props<{ edit: Calificadores}>()
);

export const createModalParametrosCalificadoresFailure = createAction(
  ParametrosCalificadoresActionsNames.CreateModalParametrosCalificadoresFailure,
  props<{  edit: Calificadores, error: string }>()
);

export const postModalParametrosCalificadoresSuccess = createAction(
  ParametrosCalificadoresActionsNames.PostModalParametrosCalificadoresSuccess,
  props<{ edit: Calificadores, apiResponse: ApiResponse}>()
);

export const postModalParametrosCalificadoresFailure = createAction(
  ParametrosCalificadoresActionsNames.PostModalParametrosCalificadoresFailure,
  props<{  edit: Calificadores, error: string }>()
);

export const editModalParametrosCalificadores = createAction(
  ParametrosCalificadoresActionsNames.EditModalParametrosCalificadores,
  props<{ edit: Calificadores }>()
);

export const editModalParametrosCalificadoresSuccess = createAction(
  ParametrosCalificadoresActionsNames.EditModalParametrosCalificadoresSuccess,
  props<{ edit: Calificadores}>()
);

export const editModalParametrosCalificadoresFailure = createAction(
  ParametrosCalificadoresActionsNames.EditModalParametrosCalificadoresFailure,
  props<{ error: string }>()
);

export const putModalParametrosCalificadoresSuccess= createAction(
  ParametrosCalificadoresActionsNames.PutModalParametrosCalificadoresSuccess,
  props<{ edit: Calificadores, apiResponse: ApiResponse}>()
);

export const putModalParametrosCalificadoresFailure = createAction(
  ParametrosCalificadoresActionsNames.PutModalParametrosCalificadoresFailure,
  props<{  edit: Calificadores, error: string }>()
);

export const deleteParametrosCalificadores = createAction(
  ParametrosCalificadoresActionsNames.DeleteParametrosCalificadores,
  props<{ edit: Calificadores}>()
);

export const deleteParametrosCalificadoresSuccess = createAction(
  ParametrosCalificadoresActionsNames.DeleteParametrosCalificadoresSuccess,
  props<{ edit: Calificadores, apiResponse: ApiResponse}>()
);

export const deleteParametrosCalificadoresFailure = createAction(
  ParametrosCalificadoresActionsNames.DeleteParametrosCalificadoresFailure,
  props<{ error: string }>()
);

export const sortParametrosCalificadores = createAction(
  ParametrosCalificadoresActionsNames.SortParametrosCalificadores,
  props<{ column: any, direction: any}>()
);

export const filterParametrosCalificadores = createAction(
  ParametrosCalificadoresActionsNames.FilterParametrosCalificadores,
  props<{ filtro: string}>()
);

export const paginatorParametrosCalificadores = createAction(
  ParametrosCalificadoresActionsNames.PaginatorParametrosCalificadores,
  props<{ paginator: number}>()
);

