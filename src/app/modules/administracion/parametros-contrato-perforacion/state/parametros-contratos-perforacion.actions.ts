import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {Contratos} from '../../../../data/models/contratos';

export enum ParametrosContratosPerforacionActionsNames {
  Init = '[ParametrosContratosPerforacion] Init',
  GetAllParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Api] Get all',
  GetAllParametrosContratosPerforacionSuccess = '[ParametrosContratosPerforacion] [Api] Get all Success',
  GetAllParametrosContratosPerforacionFailure = '[ParametrosContratosPerforacion] [Api] Get all Failure',

  CreateModalParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] create modal',
  CreateModalParametrosContratosPerforacionSuccess = '[ParametrosContratosPerforacion] [Action] create modal Success',
  CreateModalParametrosContratosPerforacionFailure = '[ParametrosContratosPerforacion] [Action] create modal Failure',
  PostModalParametrosContratosPerforacionSuccess = '[ParametrosContratosPerforacion] [Action] [Api] create Success',
  PostModalParametrosContratosPerforacionFailure = '[ParametrosContratosPerforacion] [Action] [Api] create Failure',

  EditModalParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] Edit modal',
  EditModalParametrosContratosPerforacionSuccess = '[ParametrosContratosPerforacion] [Action] Edit modal Success',
  EditModalParametrosContratosPerforacionFailure = '[ParametrosContratosPerforacion] [Action] Edit modal Failure',
  PutModalParametrosContratosPerforacionSuccess = '[ParametrosContratosPerforacion] [Action] [Api] Put Success',
  PutModalParametrosContratosPerforacionFailure = '[ParametrosContratosPerforacion] [Action] [Api] Put Failure',

  DeleteParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] Delete',
  DeleteParametrosContratosPerforacionSuccess = '[ParametrosContratosPerforacion] [Action] [Api] Delete Success',
  DeleteParametrosContratosPerforacionFailure = '[ParametrosContratosPerforacion] [Action] [Api] Delete Failure',

  SortParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] Sort',
  FilterParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] Filter',
  PaginatorParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] Paginator',
  DetailParametrosContratosPerforacion = '[ParametrosContratosPerforacion] [Action] Detail',

}

export const initParametrosContratosPerforacion = createAction( ParametrosContratosPerforacionActionsNames.Init);

export const getAllParametrosContratosPerforacion = createAction(ParametrosContratosPerforacionActionsNames.GetAllParametrosContratosPerforacion);

export const getAllParametrosContratosPerforacionSuccess = createAction(
  ParametrosContratosPerforacionActionsNames.GetAllParametrosContratosPerforacionSuccess,
  props<{ contratosPerforacion: Contratos[] , contratosPerforacionFiltro: Contratos[] }>()
);

export const getAllParametrosContratosPerforacionFailure = createAction(
  ParametrosContratosPerforacionActionsNames.GetAllParametrosContratosPerforacionFailure,
  props<{  error: string   }>()
);

export const createModalParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.CreateModalParametrosContratosPerforacion,
  props<{  edit: Contratos }>()
);

export const createModalParametrosContratosPerforacionSuccess = createAction(
  ParametrosContratosPerforacionActionsNames.CreateModalParametrosContratosPerforacionSuccess,
  props<{ edit: Contratos}>()
);

export const createModalParametrosContratosPerforacionFailure = createAction(
  ParametrosContratosPerforacionActionsNames.CreateModalParametrosContratosPerforacionFailure,
  props<{  edit: Contratos, error: string }>()
);

export const postModalParametrosContratosPerforacionSuccess = createAction(
  ParametrosContratosPerforacionActionsNames.PostModalParametrosContratosPerforacionSuccess,
  props<{ edit: Contratos, apiResponse: ApiResponse}>()
);

export const postModalParametrosContratosPerforacionFailure = createAction(
  ParametrosContratosPerforacionActionsNames.PostModalParametrosContratosPerforacionFailure,
  props<{  edit: Contratos, error: string }>()
);

export const editModalParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.EditModalParametrosContratosPerforacion,
  props<{ edit: Contratos }>()
);

export const editModalParametrosContratosPerforacionSuccess = createAction(
  ParametrosContratosPerforacionActionsNames.EditModalParametrosContratosPerforacionSuccess,
  props<{ edit: Contratos }>()
);

export const editModalParametrosContratosPerforacionFailure = createAction(
  ParametrosContratosPerforacionActionsNames.EditModalParametrosContratosPerforacionFailure,
  props<{ error: string }>()
);

export const putModalParametrosContratosPerforacionSuccess= createAction(
  ParametrosContratosPerforacionActionsNames.PutModalParametrosContratosPerforacionSuccess,
  props<{ edit: Contratos, apiResponse: ApiResponse}>()
);

export const putModalParametrosContratosPerforacionFailure = createAction(
  ParametrosContratosPerforacionActionsNames.PutModalParametrosContratosPerforacionFailure,
  props<{  edit: Contratos, error: string }>()
);

export const deleteParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.DeleteParametrosContratosPerforacion,
  props<{ edit: Contratos }>()
);

export const deleteParametrosContratosPerforacionSuccess = createAction(
  ParametrosContratosPerforacionActionsNames.DeleteParametrosContratosPerforacionSuccess,
  props<{ edit: Contratos, apiResponse: ApiResponse}>()
);

export const deleteParametrosContratosPerforacionFailure = createAction(
  ParametrosContratosPerforacionActionsNames.DeleteParametrosContratosPerforacionFailure,
  props<{ error: string }>()
);

export const sortParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.SortParametrosContratosPerforacion,
  props<{ column: any, direction: any}>()
);

export const filterParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.FilterParametrosContratosPerforacion,
  props<{ filtro: string}>()
);

export const paginatorParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.PaginatorParametrosContratosPerforacion,
  props<{ paginator: number}>()
);

export const detailParametrosContratosPerforacion = createAction(
  ParametrosContratosPerforacionActionsNames.DetailParametrosContratosPerforacion,
  props<{ edit: Contratos}>()
);

