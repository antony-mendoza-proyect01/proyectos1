import {createAction, props} from '@ngrx/store';
import { CalibracionSondaRuedaContadora } from 'src/app/data/models/calibracion-sonda-rueda-contadora';
import {ApiResponse} from '../../../../data/models/api-response';

export enum CalibracionSondaRuedaContadoraActionsNames {
  Init = '[CalibracionSondaRuedaContadora] Init',
  GetAllCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Api] Get all By Pozo',
  GetAllCalibracionSondaRuedaContadoraSuccess = '[CalibracionSondaRuedaContadora] [Api] Get all By Pozo Success',
  GetAllCalibracionSondaRuedaContadoraFailure = '[CalibracionSondaRuedaContadora] [Api] Get all By Pozo  Failure',

  CreateModalCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Action] create modal',
  CreateModalCalibracionSondaRuedaContadoraSuccess = '[CalibracionSondaRuedaContadora] [Action] create modal Success',
  CreateModalCalibracionSondaRuedaContadoraFailure = '[CalibracionSondaRuedaContadora] [Action] create modal Failure',
  PostModalCalibracionSondaRuedaContadoraSuccess = '[CalibracionSondaRuedaContadora] [Action] [Api] create Success',
  PostModalCalibracionSondaRuedaContadoraFailure = '[CalibracionSondaRuedaContadora] [Action] [Api] create Failure',

  EditModalCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Action] Edit modal',
  EditModalCalibracionSondaRuedaContadoraSuccess = '[CalibracionSondaRuedaContadora] [Action] Edit modal Success',
  EditModalCalibracionSondaRuedaContadoraFailure = '[CalibracionSondaRuedaContadora] [Action] Edit modal Failure',
  PutModalCalibracionSondaRuedaContadoraSuccess = '[CalibracionSondaRuedaContadora] [Action] [Api] Put Success',
  PutModalCalibracionSondaRuedaContadoraFailure = '[CalibracionSondaRuedaContadora] [Action] [Api] Put Failure',

  DeleteCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Action] Delete',
  DeleteCalibracionSondaRuedaContadoraSuccess = '[CalibracionSondaRuedaContadora] [Action] [Api] Delete Success',
  DeleteCalibracionSondaRuedaContadoraFailure = '[CalibracionSondaRuedaContadora] [Action] [Api] Delete Failure',

  SortCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Action] Sort',
  FilterCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Action] Filter',
  PaginatorCalibracionSondaRuedaContadora = '[CalibracionSondaRuedaContadora] [Action] Paginator',
}

export const initCalibracionSondaRuedaContadora = createAction( CalibracionSondaRuedaContadoraActionsNames.Init);

export const getAllCalibracionSondaRuedaContadora = createAction(CalibracionSondaRuedaContadoraActionsNames.GetAllCalibracionSondaRuedaContadora);

export const getAllCalibracionSondaRuedaContadoraSuccess = createAction(
  CalibracionSondaRuedaContadoraActionsNames.GetAllCalibracionSondaRuedaContadoraSuccess,
  props<{  calibracionSondaRuedaContadoras: CalibracionSondaRuedaContadora[],   calibracionSondaRuedaContadorasFiltro: CalibracionSondaRuedaContadora[] }>()
);

export const getAllCalibracionSondaRuedaContadoraFailure = createAction(
  CalibracionSondaRuedaContadoraActionsNames.CreateModalCalibracionSondaRuedaContadora,
  props<{  error: string}>()
);


export const createModalCalibracionSondaRuedaContadora = createAction(
  CalibracionSondaRuedaContadoraActionsNames.CreateModalCalibracionSondaRuedaContadora,
  props<{  edit: CalibracionSondaRuedaContadora }>()
);

export const createModalCalibracionSondaRuedaContadoraSuccess = createAction(
  CalibracionSondaRuedaContadoraActionsNames.CreateModalCalibracionSondaRuedaContadoraSuccess,
  props<{ edit: CalibracionSondaRuedaContadora}>()
);

export const createModalCalibracionSondaRuedaContadoraFailure = createAction(
  CalibracionSondaRuedaContadoraActionsNames.CreateModalCalibracionSondaRuedaContadoraFailure,
  props<{  edit: CalibracionSondaRuedaContadora, error: string }>()
);

export const postModalCalibracionSondaRuedaContadoraSuccess = createAction(
  CalibracionSondaRuedaContadoraActionsNames.PostModalCalibracionSondaRuedaContadoraSuccess,
  props<{ edit: CalibracionSondaRuedaContadora, apiResponse: ApiResponse}>()
);

export const postModalCalibracionSondaRuedaContadoraFailure = createAction(
  CalibracionSondaRuedaContadoraActionsNames.PostModalCalibracionSondaRuedaContadoraFailure,
  props<{  edit: CalibracionSondaRuedaContadora, error: string }>()
);

export const editModalCalibracionSondaRuedaContadora = createAction(
  CalibracionSondaRuedaContadoraActionsNames.EditModalCalibracionSondaRuedaContadora,
  props<{ edit: CalibracionSondaRuedaContadora, codPozo: string }>()
);

export const editModalCalibracionSondaRuedaContadoraSuccess = createAction(
  CalibracionSondaRuedaContadoraActionsNames.EditModalCalibracionSondaRuedaContadoraSuccess,
  props<{ edit: CalibracionSondaRuedaContadora, codPozo: string}>()
);

export const editModalCalibracionSondaRuedaContadoraFailure = createAction(
  CalibracionSondaRuedaContadoraActionsNames.EditModalCalibracionSondaRuedaContadoraFailure,
  props<{ error: string }>()
);

export const putModalCalibracionSondaRuedaContadoraSuccess= createAction(
  CalibracionSondaRuedaContadoraActionsNames.PutModalCalibracionSondaRuedaContadoraSuccess,
  props<{ edit: CalibracionSondaRuedaContadora, apiResponse: ApiResponse}>()
);

export const putModalCalibracionSondaRuedaContadoraFailure = createAction(
  CalibracionSondaRuedaContadoraActionsNames.PutModalCalibracionSondaRuedaContadoraFailure,
  props<{  edit: CalibracionSondaRuedaContadora, error: string }>()
);

export const deleteCalibracionSondaRuedaContadora = createAction(
  CalibracionSondaRuedaContadoraActionsNames.DeleteCalibracionSondaRuedaContadora,
  props<{ edit: CalibracionSondaRuedaContadora}>()
);

export const deleteCalibracionSondaRuedaContadoraSuccess = createAction(
  CalibracionSondaRuedaContadoraActionsNames.DeleteCalibracionSondaRuedaContadoraSuccess,
  props<{ edit: CalibracionSondaRuedaContadora, apiResponse: ApiResponse}>()
);

export const deleteCalibracionSondaRuedaContadoraFailure = createAction(
  CalibracionSondaRuedaContadoraActionsNames.DeleteCalibracionSondaRuedaContadoraFailure,
  props<{ error: string }>()
);

export const sortCalibracionSondaRuedaContadora = createAction(
  CalibracionSondaRuedaContadoraActionsNames.SortCalibracionSondaRuedaContadora,
  props<{ column: any, direction: any}>()
);

export const filterCalibracionSondaRuedaContadora = createAction(
  CalibracionSondaRuedaContadoraActionsNames.FilterCalibracionSondaRuedaContadora,
  props<{ filtro: string}>()
);

export const paginatorCalibracionSondaRuedaContadora = createAction(
  CalibracionSondaRuedaContadoraActionsNames.PaginatorCalibracionSondaRuedaContadora,
  props<{ paginator: number}>()
);

