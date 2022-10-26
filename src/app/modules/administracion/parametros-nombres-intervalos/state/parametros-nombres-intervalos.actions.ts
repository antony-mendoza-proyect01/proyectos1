import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {NombresIntervalos} from '../../../../data/models/nombres-intervalos';

export enum ParametrosNombresIntervalosActionsNames {
  Init = '[ParametrosNombresIntervalos] Init',
  GetAllParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Api] Get all',
  GetAllParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Api] Get all Success',
  GetAllParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Api] Get all Failure',

  GetAllPaginadoParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Api] Get all Paginado',
  GetAllPaginadoParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Api] Get all Paginado Success',
  GetAllPaginadoParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Api] Get all Paginado Failure',

  CreateModalParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] create modal',
  CreateModalParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Action] create modal Success',
  CreateModalParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Action] create modal Failure',
  PostModalParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Action] [Api] create Success',
  PostModalParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Action] [Api] create Failure',

  EditModalParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] Edit modal',
  EditModalParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Action] Edit modal Success',
  EditModalParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Action] Edit modal Failure',
  PutModalParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Action] [Api] Put Success',
  PutModalParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Action] [Api] Put Failure',

  DeleteParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] Delete',
  DeleteParametrosNombresIntervalosSuccess = '[ParametrosNombresIntervalos] [Action] [Api] Delete Success',
  DeleteParametrosNombresIntervalosFailure = '[ParametrosNombresIntervalos] [Action] [Api] Delete Failure',

  SortParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] Sort',
  FilterParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] Filter',
  PaginatorParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] Paginator',

  PageParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] Page',
  PaginatorSizeParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] PaginatorSize',

  GetByNombrePaginadoParametrosNombresIntervalos = '[ParametrosNombresIntervalos] [Action] [Api] GetByNombre',
  GetByNombrePaginadoParametrosNombresIntervalosSuccess  = '[ParametrosNombresIntervalos] [Action] [Api] GetByNombre Success',
  GetByNombrePaginadoParametrosNombresIntervalosFailure  = '[ParametrosNombresIntervalos] [Action] [Api] GetByNombre Failure',
}

export const initParametrosNombresIntervalos = createAction( ParametrosNombresIntervalosActionsNames.Init);

export const getAllParametrosNombresIntervalos = createAction(ParametrosNombresIntervalosActionsNames.GetAllParametrosNombresIntervalos);

export const getAllParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.GetAllParametrosNombresIntervalosSuccess,
  props<{ nombresIntervalos: NombresIntervalos[] , paginator: number, paginatorSize: number }>()
);

export const getAllParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.GetAllParametrosNombresIntervalosFailure,
  props<{  error: string   }>()
);

export const getAllPaginadoParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.GetAllPaginadoParametrosNombresIntervalos,
  props<{ page: number }>()
);

export const getAllPaginadoParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.GetAllPaginadoParametrosNombresIntervalosSuccess,
  props<{ nombresIntervalos: NombresIntervalos[], paginatorSize: number }>()
);

export const getAllPaginadoParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.GetAllPaginadoParametrosNombresIntervalosFailure,
  props<{  error: string   }>()
);


export const createModalParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.CreateModalParametrosNombresIntervalos,
  props<{  edit: NombresIntervalos }>()
);

export const createModalParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.CreateModalParametrosNombresIntervalosSuccess,
  props<{ edit: NombresIntervalos}>()
);

export const createModalParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.CreateModalParametrosNombresIntervalosFailure,
  props<{  edit: NombresIntervalos, error: string }>()
);

export const postModalParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.PostModalParametrosNombresIntervalosSuccess,
  props<{ edit: NombresIntervalos, apiResponse: ApiResponse}>()
);

export const postModalParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.PostModalParametrosNombresIntervalosFailure,
  props<{  edit: NombresIntervalos, error: string }>()
);

export const editModalParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.EditModalParametrosNombresIntervalos,
  props<{ edit: NombresIntervalos }>()
);

export const editModalParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.EditModalParametrosNombresIntervalosSuccess,
  props<{ edit: NombresIntervalos, editModal: NombresIntervalos}>()
);

export const editModalParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.EditModalParametrosNombresIntervalosFailure,
  props<{ error: string }>()
);

export const putModalParametrosNombresIntervalosSuccess= createAction(
  ParametrosNombresIntervalosActionsNames.PutModalParametrosNombresIntervalosSuccess,
  props<{ edit: NombresIntervalos, editModal: NombresIntervalos, apiResponse: ApiResponse}>()
);

export const putModalParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.PutModalParametrosNombresIntervalosFailure,
  props<{  edit: NombresIntervalos, error: string }>()
);

export const deleteParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.DeleteParametrosNombresIntervalos,
  props<{ edit: NombresIntervalos}>()
);

export const deleteParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.DeleteParametrosNombresIntervalosSuccess,
  props<{ edit: NombresIntervalos, apiResponse: ApiResponse}>()
);

export const deleteParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.DeleteParametrosNombresIntervalosFailure,
  props<{ error: string }>()
);

export const sortParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.SortParametrosNombresIntervalos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.FilterParametrosNombresIntervalos,
  props<{ filtro: string}>()
);

export const paginatorParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.PaginatorParametrosNombresIntervalos,
  props<{ paginator: number}>()
);

export const pageParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.PageParametrosNombresIntervalos,
  props<{ page: number}>()
);

export const paginatorSizeParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.PaginatorSizeParametrosNombresIntervalos,
  props<{ paginatorSize: number}>()
);

export const getByNombrePaginadoParametrosNombresIntervalos = createAction(
  ParametrosNombresIntervalosActionsNames.GetByNombrePaginadoParametrosNombresIntervalos,
  props<{ nombre: string}>()
);

export const getByNombrePaginadoParametrosNombresIntervalosSuccess = createAction(
  ParametrosNombresIntervalosActionsNames.GetByNombrePaginadoParametrosNombresIntervalosSuccess,
  props<{edit: NombresIntervalos, apiResponse: ApiResponse}>()
);

export const getByNombrePaginadoParametrosNombresIntervalosFailure = createAction(
  ParametrosNombresIntervalosActionsNames.GetByNombrePaginadoParametrosNombresIntervalosFailure,
  props<{ error: string}>()
);
