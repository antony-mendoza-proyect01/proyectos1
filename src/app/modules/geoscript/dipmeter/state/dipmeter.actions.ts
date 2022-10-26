
import {createAction, props} from '@ngrx/store';
import {Dipmeter} from '../../../../data/models/dipmeter';
import {ApiResponse} from '../../../../data/models/api-response';

export enum DipmeterActionsNames {
  Init = '[Dipmeter] Init',
  GetAllByPozoDipmeter = '[Dipmeter] [Api] Get all By Pozo',
  GetAllByPozoDipmeterSuccess = '[Dipmeter] [Api] Get all By Pozo Success',
  GetAllByPozoDipmeterFailure = '[Dipmeter] [Api] Get all By Pozo  Failure',

  CreateModalDipmeter = '[Dipmeter] [Action] create modal',
  CreateModalDipmeterSuccess = '[Dipmeter] [Action] create modal Success',
  CreateModalDipmeterFailure = '[Dipmeter] [Action] create modal Failure',
  PostModalDipmeterSuccess = '[Dipmeter] [Action] [Api] create Success',
  PostModalDipmeterFailure = '[Dipmeter] [Action] [Api] create Failure',

  EditModalDipmeter = '[Dipmeter] [Action] Edit modal',
  EditModalDipmeterSuccess = '[Dipmeter] [Action] Edit modal Success',
  EditModalDipmeterFailure = '[Dipmeter] [Action] Edit modal Failure',
  PutModalDipmeterSuccess = '[Dipmeter] [Action] [Api] Put Success',
  PutModalDipmeterFailure = '[Dipmeter] [Action] [Api] Put Failure',

  DeleteDipmeter = '[Dipmeter] [Action] Delete',
  DeleteDipmeterSuccess = '[Dipmeter] [Action] [Api] Delete Success',
  DeleteDipmeterFailure = '[Dipmeter] [Action] [Api] Delete Failure',

  SortDipmeter = '[Dipmeter] [Action] Sort',
  FilterDipmeter = '[Dipmeter] [Action] Filter',
  PaginatorDipmeter = '[Dipmeter] [Action] Paginator',
}

export const initDipmeter = createAction( DipmeterActionsNames.Init);

export const getAllDipmeter = createAction(DipmeterActionsNames.GetAllByPozoDipmeter);

export const getAllByPozoDipmeter = createAction(
  DipmeterActionsNames.GetAllByPozoDipmeter,
  props<{  pozo: string   }>()
);

export const getAllByPozoDipmeterSuccess = createAction(
  DipmeterActionsNames.GetAllByPozoDipmeterSuccess,
  props<{ dipmeters: Dipmeter[], dipmetersFiltro: Dipmeter[], profundidadExistente: number  }>()
);

export const getAllByPozoDipmeterFailure = createAction(
  DipmeterActionsNames.GetAllByPozoDipmeterFailure,
  props<{  error: string   }>()
);

export const createModalDipmeter = createAction(
  DipmeterActionsNames.CreateModalDipmeter,
  props<{  edit: Dipmeter }>()
);

export const createModalDipmeterSuccess = createAction(
  DipmeterActionsNames.CreateModalDipmeterSuccess,
  props<{ edit: Dipmeter}>()
);

export const createModalDipmeterFailure = createAction(
  DipmeterActionsNames.CreateModalDipmeterFailure,
  props<{  edit: Dipmeter, error: string }>()
);

export const postModalDipmeterSuccess = createAction(
  DipmeterActionsNames.PostModalDipmeterSuccess,
  props<{ edit: Dipmeter, apiResponse: ApiResponse}>()
);

export const postModalDipmeterFailure = createAction(
  DipmeterActionsNames.PostModalDipmeterFailure,
  props<{  edit: Dipmeter, error: string }>()
);

export const editModalDipmeter = createAction(
  DipmeterActionsNames.EditModalDipmeter,
  props<{ edit: Dipmeter, codPozo: string }>()
);

export const editModalDipmeterSuccess = createAction(
  DipmeterActionsNames.EditModalDipmeterSuccess,
  props<{ edit: Dipmeter, codPozo: string, profundidadEdit: Dipmeter }>()
);

export const editModalDipmeterFailure = createAction(
  DipmeterActionsNames.EditModalDipmeterFailure,
  props<{ error: string }>()
);

export const putModalDipmeterSuccess= createAction(
  DipmeterActionsNames.PutModalDipmeterSuccess,
  props<{ edit: Dipmeter, apiResponse: ApiResponse}>()
);

export const putModalDipmeterFailure = createAction(
  DipmeterActionsNames.PutModalDipmeterFailure,
  props<{  edit: Dipmeter, error: string }>()
);

export const deleteDipmeter = createAction(
  DipmeterActionsNames.DeleteDipmeter,
  props<{ edit: Dipmeter}>()
);

export const deleteDipmeterSuccess = createAction(
  DipmeterActionsNames.DeleteDipmeterSuccess,
  props<{ edit: Dipmeter, apiResponse: ApiResponse}>()
);

export const deleteDipmeterFailure = createAction(
  DipmeterActionsNames.DeleteDipmeterFailure,
  props<{ error: string }>()
);

export const sortDipmeter = createAction(
  DipmeterActionsNames.SortDipmeter,
  props<{ column: any, direction: any}>()
);

export const filterDipmeter = createAction(
  DipmeterActionsNames.FilterDipmeter,
  props<{ filtro: string}>()
);

export const paginatorDipmeter = createAction(
  DipmeterActionsNames.PaginatorDipmeter,
  props<{ paginator: number}>()
);

