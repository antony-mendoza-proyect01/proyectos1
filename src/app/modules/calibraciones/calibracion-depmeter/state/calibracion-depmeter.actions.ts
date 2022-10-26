import {createAction, props} from '@ngrx/store';
import { CalibracionDipmeter } from 'src/app/data/models/calibraciom-dipmeter';
import {ApiResponse} from '../../../../data/models/api-response';

export enum CalibracionDipmeterActionsNames {
  Init = '[CalibracionDipmeter] Init',
  GetAllCalibracionDipmeter = '[CalibracionDipmeter] [Api] Get all By Pozo',
  GetAllCalibracionDipmeterSuccess = '[CalibracionDipmeter] [Api] Get all By Pozo Success',
  GetAllCalibracionDipmeterFailure = '[CalibracionDipmeter] [Api] Get all By Pozo  Failure',

  CreateModalCalibracionDipmeter = '[CalibracionDipmeter] [Action] create modal',
  CreateModalCalibracionDipmeterSuccess = '[CalibracionDipmeter] [Action] create modal Success',
  CreateModalCalibracionDipmeterFailure = '[CalibracionDipmeter] [Action] create modal Failure',
  PostModalCalibracionDipmeterSuccess = '[CalibracionDipmeter] [Action] [Api] create Success',
  PostModalCalibracionDipmeterFailure = '[CalibracionDipmeter] [Action] [Api] create Failure',

  EditModalCalibracionDipmeter = '[CalibracionDipmeter] [Action] Edit modal',
  EditModalCalibracionDipmeterSuccess = '[CalibracionDipmeter] [Action] Edit modal Success',
  EditModalCalibracionDipmeterFailure = '[CalibracionDipmeter] [Action] Edit modal Failure',
  PutModalCalibracionDipmeterSuccess = '[CalibracionDipmeter] [Action] [Api] Put Success',
  PutModalCalibracionDipmeterFailure = '[CalibracionDipmeter] [Action] [Api] Put Failure',

  DeleteCalibracionDipmeter = '[CalibracionDipmeter] [Action] Delete',
  DeleteCalibracionDipmeterSuccess = '[CalibracionDipmeter] [Action] [Api] Delete Success',
  DeleteCalibracionDipmeterFailure = '[CalibracionDipmeter] [Action] [Api] Delete Failure',

  SortCalibracionDipmeter = '[CalibracionDipmeter] [Action] Sort',
  FilterCalibracionDipmeter = '[CalibracionDipmeter] [Action] Filter',
  PaginatorCalibracionDipmeter = '[CalibracionDipmeter] [Action] Paginator',
}

export const initCalibracionDipmeter = createAction( CalibracionDipmeterActionsNames.Init);

export const getAllCalibracionDipmeter = createAction(CalibracionDipmeterActionsNames.GetAllCalibracionDipmeter);

export const getAllCalibracionDipmeterSuccess = createAction(
  CalibracionDipmeterActionsNames.GetAllCalibracionDipmeterSuccess,
  props<{  calibracionDipmeter: CalibracionDipmeter[],   calibracionDipmeterFiltro: CalibracionDipmeter[] }>()
);

export const getAllCalibracionDipmeterFailure = createAction(
  CalibracionDipmeterActionsNames.CreateModalCalibracionDipmeter,
  props<{  error: string}>()
);


export const createModalCalibracionDipmeter = createAction(
  CalibracionDipmeterActionsNames.CreateModalCalibracionDipmeter,
  props<{  edit: CalibracionDipmeter }>()
);

export const createModalCalibracionDipmeterSuccess = createAction(
  CalibracionDipmeterActionsNames.CreateModalCalibracionDipmeterSuccess,
  props<{ edit: CalibracionDipmeter}>()
);

export const createModalCalibracionDipmeterFailure = createAction(
  CalibracionDipmeterActionsNames.CreateModalCalibracionDipmeterFailure,
  props<{  edit: CalibracionDipmeter, error: string }>()
);

export const postModalCalibracionDipmeterSuccess = createAction(
  CalibracionDipmeterActionsNames.PostModalCalibracionDipmeterSuccess,
  props<{ edit: CalibracionDipmeter, apiResponse: ApiResponse}>()
);

export const postModalCalibracionDipmeterFailure = createAction(
  CalibracionDipmeterActionsNames.PostModalCalibracionDipmeterFailure,
  props<{  edit: CalibracionDipmeter, error: string }>()
);

export const editModalCalibracionDipmeter = createAction(
  CalibracionDipmeterActionsNames.EditModalCalibracionDipmeter,
  props<{ edit: CalibracionDipmeter, codPozo: string }>()
);

export const editModalCalibracionDipmeterSuccess = createAction(
  CalibracionDipmeterActionsNames.EditModalCalibracionDipmeterSuccess,
  props<{ edit: CalibracionDipmeter, codPozo: string}>()
);

export const editModalCalibracionDipmeterFailure = createAction(
  CalibracionDipmeterActionsNames.EditModalCalibracionDipmeterFailure,
  props<{ error: string }>()
);

export const putModalCalibracionDipmeterSuccess= createAction(
  CalibracionDipmeterActionsNames.PutModalCalibracionDipmeterSuccess,
  props<{ edit: CalibracionDipmeter, apiResponse: ApiResponse}>()
);

export const putModalCalibracionDipmeterFailure = createAction(
  CalibracionDipmeterActionsNames.PutModalCalibracionDipmeterFailure,
  props<{  edit: CalibracionDipmeter, error: string }>()
);

export const deleteCalibracionDipmeter = createAction(
  CalibracionDipmeterActionsNames.DeleteCalibracionDipmeter,
  props<{ edit: CalibracionDipmeter}>()
);

export const deleteCalibracionDipmeterSuccess = createAction(
  CalibracionDipmeterActionsNames.DeleteCalibracionDipmeterSuccess,
  props<{ edit: CalibracionDipmeter, apiResponse: ApiResponse}>()
);

export const deleteCalibracionDipmeterFailure = createAction(
  CalibracionDipmeterActionsNames.DeleteCalibracionDipmeterFailure,
  props<{ error: string }>()
);

export const sortCalibracionDipmeter = createAction(
  CalibracionDipmeterActionsNames.SortCalibracionDipmeter,
  props<{ column: any, direction: any}>()
);

export const filterCalibracionDipmeter = createAction(
  CalibracionDipmeterActionsNames.FilterCalibracionDipmeter,
  props<{ filtro: string}>()
);

export const paginatorCalibracionDipmeter = createAction(
  CalibracionDipmeterActionsNames.PaginatorCalibracionDipmeter,
  props<{ paginator: number}>()
);

