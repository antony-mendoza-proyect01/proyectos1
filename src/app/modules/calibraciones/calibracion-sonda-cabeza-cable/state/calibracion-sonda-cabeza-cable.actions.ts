import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {CalibracionSondaCabezaCable} from '../../../../data/models/calibracion-sonda-cabeza-cable';

export enum CalibracionSondaCabezaCableActionsNames {
  Init = '[CalibracionSondaCabezaCable] Init',
  GetAllCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Api] Get all By Pozo',
  GetAllCalibracionSondaCabezaCableSuccess = '[CalibracionSondaCabezaCable] [Api] Get all By Pozo Success',
  GetAllCalibracionSondaCabezaCableFailure = '[CalibracionSondaCabezaCable] [Api] Get all By Pozo  Failure',

  CreateModalCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Action] create modal',
  CreateModalCalibracionSondaCabezaCableSuccess = '[CalibracionSondaCabezaCable] [Action] create modal Success',
  CreateModalCalibracionSondaCabezaCableFailure = '[CalibracionSondaCabezaCable] [Action] create modal Failure',
  PostModalCalibracionSondaCabezaCableSuccess = '[CalibracionSondaCabezaCable] [Action] [Api] create Success',
  PostModalCalibracionSondaCabezaCableFailure = '[CalibracionSondaCabezaCable] [Action] [Api] create Failure',

  EditModalCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Action] Edit modal',
  EditModalCalibracionSondaCabezaCableSuccess = '[CalibracionSondaCabezaCable] [Action] Edit modal Success',
  EditModalCalibracionSondaCabezaCableFailure = '[CalibracionSondaCabezaCable] [Action] Edit modal Failure',
  PutModalCalibracionSondaCabezaCableSuccess = '[CalibracionSondaCabezaCable] [Action] [Api] Put Success',
  PutModalCalibracionSondaCabezaCableFailure = '[CalibracionSondaCabezaCable] [Action] [Api] Put Failure',

  DeleteCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Action] Delete',
  DeleteCalibracionSondaCabezaCableSuccess = '[CalibracionSondaCabezaCable] [Action] [Api] Delete Success',
  DeleteCalibracionSondaCabezaCableFailure = '[CalibracionSondaCabezaCable] [Action] [Api] Delete Failure',

  SortCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Action] Sort',
  FilterCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Action] Filter',
  PaginatorCalibracionSondaCabezaCable = '[CalibracionSondaCabezaCable] [Action] Paginator',
}

export const initCalibracionSondaCabezaCable = createAction( CalibracionSondaCabezaCableActionsNames.Init);

export const getAllCalibracionSondaCabezaCable = createAction(CalibracionSondaCabezaCableActionsNames.GetAllCalibracionSondaCabezaCable);

export const getAllCalibracionSondaCabezaCableSuccess = createAction(
  CalibracionSondaCabezaCableActionsNames.GetAllCalibracionSondaCabezaCableSuccess,
  props<{  calibracionSondaCabezaCables: CalibracionSondaCabezaCable[],   calibracionSondaCabezaCablesFiltro: CalibracionSondaCabezaCable[] }>()
);

export const getAllCalibracionSondaCabezaCableFailure = createAction(
  CalibracionSondaCabezaCableActionsNames.CreateModalCalibracionSondaCabezaCable,
  props<{  error: string}>()
);


export const createModalCalibracionSondaCabezaCable = createAction(
  CalibracionSondaCabezaCableActionsNames.CreateModalCalibracionSondaCabezaCable,
  props<{  edit: CalibracionSondaCabezaCable }>()
);

export const createModalCalibracionSondaCabezaCableSuccess = createAction(
  CalibracionSondaCabezaCableActionsNames.CreateModalCalibracionSondaCabezaCableSuccess,
  props<{ edit: CalibracionSondaCabezaCable}>()
);

export const createModalCalibracionSondaCabezaCableFailure = createAction(
  CalibracionSondaCabezaCableActionsNames.CreateModalCalibracionSondaCabezaCableFailure,
  props<{  edit: CalibracionSondaCabezaCable, error: string }>()
);

export const postModalCalibracionSondaCabezaCableSuccess = createAction(
  CalibracionSondaCabezaCableActionsNames.PostModalCalibracionSondaCabezaCableSuccess,
  props<{ edit: CalibracionSondaCabezaCable, apiResponse: ApiResponse}>()
);

export const postModalCalibracionSondaCabezaCableFailure = createAction(
  CalibracionSondaCabezaCableActionsNames.PostModalCalibracionSondaCabezaCableFailure,
  props<{  edit: CalibracionSondaCabezaCable, error: string }>()
);

export const editModalCalibracionSondaCabezaCable = createAction(
  CalibracionSondaCabezaCableActionsNames.EditModalCalibracionSondaCabezaCable,
  props<{ edit: CalibracionSondaCabezaCable, codPozo: string }>()
);

export const editModalCalibracionSondaCabezaCableSuccess = createAction(
  CalibracionSondaCabezaCableActionsNames.EditModalCalibracionSondaCabezaCableSuccess,
  props<{ edit: CalibracionSondaCabezaCable, codPozo: string}>()
);

export const editModalCalibracionSondaCabezaCableFailure = createAction(
  CalibracionSondaCabezaCableActionsNames.EditModalCalibracionSondaCabezaCableFailure,
  props<{ error: string }>()
);

export const putModalCalibracionSondaCabezaCableSuccess= createAction(
  CalibracionSondaCabezaCableActionsNames.PutModalCalibracionSondaCabezaCableSuccess,
  props<{ edit: CalibracionSondaCabezaCable, apiResponse: ApiResponse}>()
);

export const putModalCalibracionSondaCabezaCableFailure = createAction(
  CalibracionSondaCabezaCableActionsNames.PutModalCalibracionSondaCabezaCableFailure,
  props<{  edit: CalibracionSondaCabezaCable, error: string }>()
);

export const deleteCalibracionSondaCabezaCable = createAction(
  CalibracionSondaCabezaCableActionsNames.DeleteCalibracionSondaCabezaCable,
  props<{ edit: CalibracionSondaCabezaCable}>()
);

export const deleteCalibracionSondaCabezaCableSuccess = createAction(
  CalibracionSondaCabezaCableActionsNames.DeleteCalibracionSondaCabezaCableSuccess,
  props<{ edit: CalibracionSondaCabezaCable, apiResponse: ApiResponse}>()
);

export const deleteCalibracionSondaCabezaCableFailure = createAction(
  CalibracionSondaCabezaCableActionsNames.DeleteCalibracionSondaCabezaCableFailure,
  props<{ error: string }>()
);

export const sortCalibracionSondaCabezaCable = createAction(
  CalibracionSondaCabezaCableActionsNames.SortCalibracionSondaCabezaCable,
  props<{ column: any, direction: any}>()
);

export const filterCalibracionSondaCabezaCable = createAction(
  CalibracionSondaCabezaCableActionsNames.FilterCalibracionSondaCabezaCable,
  props<{ filtro: string}>()
);

export const paginatorCalibracionSondaCabezaCable = createAction(
  CalibracionSondaCabezaCableActionsNames.PaginatorCalibracionSondaCabezaCable,
  props<{ paginator: number}>()
);

