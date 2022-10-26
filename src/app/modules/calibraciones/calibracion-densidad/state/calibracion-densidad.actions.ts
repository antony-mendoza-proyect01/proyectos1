import {createAction, props} from '@ngrx/store';
import { CalibracionDensidad } from 'src/app/data/models/calibracion-densidad';
import {ApiResponse} from '../../../../data/models/api-response';

export enum CalibracionDensidadActionsNames {
  Init = '[CalibracionDensidad] Init',
  GetAllCalibracionDensidad = '[CalibracionDensidad] [Api] Get all By Pozo',
  GetAllCalibracionDensidadSuccess = '[CalibracionDensidad] [Api] Get all By Pozo Success',
  GetAllCalibracionDensidadFailure = '[CalibracionDensidad] [Api] Get all By Pozo  Failure',

  CreateModalCalibracionDensidad = '[CalibracionDensidad] [Action] create modal',
  CreateModalCalibracionDensidadSuccess = '[CalibracionDensidad] [Action] create modal Success',
  CreateModalCalibracionDensidadFailure = '[CalibracionDensidad] [Action] create modal Failure',
  PostModalCalibracionDensidadSuccess = '[CalibracionDensidad] [Action] [Api] create Success',
  PostModalCalibracionDensidadFailure = '[CalibracionDensidad] [Action] [Api] create Failure',

  EditModalCalibracionDensidad = '[CalibracionDensidad] [Action] Edit modal',
  EditModalCalibracionDensidadSuccess = '[CalibracionDensidad] [Action] Edit modal Success',
  EditModalCalibracionDensidadFailure = '[CalibracionDensidad] [Action] Edit modal Failure',
  PutModalCalibracionDensidadSuccess = '[CalibracionDensidad] [Action] [Api] Put Success',
  PutModalCalibracionDensidadFailure = '[CalibracionDensidad] [Action] [Api] Put Failure',

  DeleteCalibracionDensidad = '[CalibracionDensidad] [Action] Delete',
  DeleteCalibracionDensidadSuccess = '[CalibracionDensidad] [Action] [Api] Delete Success',
  DeleteCalibracionDensidadFailure = '[CalibracionDensidad] [Action] [Api] Delete Failure',

  SortCalibracionDensidad = '[CalibracionDensidad] [Action] Sort',
  FilterCalibracionDensidad = '[CalibracionDensidad] [Action] Filter',
  PaginatorCalibracionDensidad = '[CalibracionDensidad] [Action] Paginator',
}

export const initCalibracionDensidad = createAction( CalibracionDensidadActionsNames.Init);

export const getAllCalibracionDensidad = createAction(CalibracionDensidadActionsNames.GetAllCalibracionDensidad);

export const getAllCalibracionDensidadSuccess = createAction(
  CalibracionDensidadActionsNames.GetAllCalibracionDensidadSuccess,
  props<{  calibracionDensidades: CalibracionDensidad[],   calibracionDensidadesFiltro: CalibracionDensidad[] }>()
);

export const getAllCalibracionDensidadFailure = createAction(
  CalibracionDensidadActionsNames.CreateModalCalibracionDensidad,
  props<{  error: string}>()
);


export const createModalCalibracionDensidad = createAction(
  CalibracionDensidadActionsNames.CreateModalCalibracionDensidad,
  props<{  edit: CalibracionDensidad }>()
);

export const createModalCalibracionDensidadSuccess = createAction(
  CalibracionDensidadActionsNames.CreateModalCalibracionDensidadSuccess,
  props<{ edit: CalibracionDensidad}>()
);

export const createModalCalibracionDensidadFailure = createAction(
  CalibracionDensidadActionsNames.CreateModalCalibracionDensidadFailure,
  props<{  edit: CalibracionDensidad, error: string }>()
);

export const postModalCalibracionDensidadSuccess = createAction(
  CalibracionDensidadActionsNames.PostModalCalibracionDensidadSuccess,
  props<{ edit: CalibracionDensidad, apiResponse: ApiResponse}>()
);

export const postModalCalibracionDensidadFailure = createAction(
  CalibracionDensidadActionsNames.PostModalCalibracionDensidadFailure,
  props<{  edit: CalibracionDensidad, error: string }>()
);

export const editModalCalibracionDensidad = createAction(
  CalibracionDensidadActionsNames.EditModalCalibracionDensidad,
  props<{ edit: CalibracionDensidad, codPozo: string }>()
);

export const editModalCalibracionDensidadSuccess = createAction(
  CalibracionDensidadActionsNames.EditModalCalibracionDensidadSuccess,
  props<{ edit: CalibracionDensidad, codPozo: string}>()
);

export const editModalCalibracionDensidadFailure = createAction(
  CalibracionDensidadActionsNames.EditModalCalibracionDensidadFailure,
  props<{ error: string }>()
);

export const putModalCalibracionDensidadSuccess= createAction(
  CalibracionDensidadActionsNames.PutModalCalibracionDensidadSuccess,
  props<{ edit: CalibracionDensidad, apiResponse: ApiResponse}>()
);

export const putModalCalibracionDensidadFailure = createAction(
  CalibracionDensidadActionsNames.PutModalCalibracionDensidadFailure,
  props<{  edit: CalibracionDensidad, error: string }>()
);

export const deleteCalibracionDensidad = createAction(
  CalibracionDensidadActionsNames.DeleteCalibracionDensidad,
  props<{ edit: CalibracionDensidad}>()
);

export const deleteCalibracionDensidadSuccess = createAction(
  CalibracionDensidadActionsNames.DeleteCalibracionDensidadSuccess,
  props<{ edit: CalibracionDensidad, apiResponse: ApiResponse}>()
);

export const deleteCalibracionDensidadFailure = createAction(
  CalibracionDensidadActionsNames.DeleteCalibracionDensidadFailure,
  props<{ error: string }>()
);

export const sortCalibracionDensidad = createAction(
  CalibracionDensidadActionsNames.SortCalibracionDensidad,
  props<{ column: any, direction: any}>()
);

export const filterCalibracionDensidad = createAction(
  CalibracionDensidadActionsNames.FilterCalibracionDensidad,
  props<{ filtro: string}>()
);

export const paginatorCalibracionDensidad = createAction(
  CalibracionDensidadActionsNames.PaginatorCalibracionDensidad,
  props<{ paginator: number}>()
);

