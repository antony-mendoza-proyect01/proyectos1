import {createAction, props} from '@ngrx/store';
import { CalibracionSondaSusceptibilidadMagnetica } from 'src/app/data/models/calibracion-sonda-susceptibilidad-magnetica';
import {ApiResponse} from '../../../../data/models/api-response';

export enum CalibracionSondaSusceptibilidadMagneticaActionsNames {
  Init = '[CalibracionSondaSusceptibilidadMagnetica] Init',
  GetAllCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Api] Get all By Pozo',
  GetAllCalibracionSondaSusceptibilidadMagneticaSuccess = '[CalibracionSondaSusceptibilidadMagnetica] [Api] Get all By Pozo Success',
  GetAllCalibracionSondaSusceptibilidadMagneticaFailure = '[CalibracionSondaSusceptibilidadMagnetica] [Api] Get all By Pozo  Failure',

  CreateModalCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Action] create modal',
  CreateModalCalibracionSondaSusceptibilidadMagneticaSuccess = '[CalibracionSondaSusceptibilidadMagnetica] [Action] create modal Success',
  CreateModalCalibracionSondaSusceptibilidadMagneticaFailure = '[CalibracionSondaSusceptibilidadMagnetica] [Action] create modal Failure',
  PostModalCalibracionSondaSusceptibilidadMagneticaSuccess = '[CalibracionSondaSusceptibilidadMagnetica] [Action] [Api] create Success',
  PostModalCalibracionSondaSusceptibilidadMagneticaFailure = '[CalibracionSondaSusceptibilidadMagnetica] [Action] [Api] create Failure',

  EditModalCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Edit modal',
  EditModalCalibracionSondaSusceptibilidadMagneticaSuccess = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Edit modal Success',
  EditModalCalibracionSondaSusceptibilidadMagneticaFailure = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Edit modal Failure',
  PutModalCalibracionSondaSusceptibilidadMagneticaSuccess = '[CalibracionSondaSusceptibilidadMagnetica] [Action] [Api] Put Success',
  PutModalCalibracionSondaSusceptibilidadMagneticaFailure = '[CalibracionSondaSusceptibilidadMagnetica] [Action] [Api] Put Failure',

  DeleteCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Delete',
  DeleteCalibracionSondaSusceptibilidadMagneticaSuccess = '[CalibracionSondaSusceptibilidadMagnetica] [Action] [Api] Delete Success',
  DeleteCalibracionSondaSusceptibilidadMagneticaFailure = '[CalibracionSondaSusceptibilidadMagnetica] [Action] [Api] Delete Failure',

  SortCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Sort',
  FilterCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Filter',
  PaginatorCalibracionSondaSusceptibilidadMagnetica = '[CalibracionSondaSusceptibilidadMagnetica] [Action] Paginator',
}

export const initCalibracionSondaSusceptibilidadMagnetica = createAction( CalibracionSondaSusceptibilidadMagneticaActionsNames.Init);

export const getAllCalibracionSondaSusceptibilidadMagnetica = createAction(CalibracionSondaSusceptibilidadMagneticaActionsNames.GetAllCalibracionSondaSusceptibilidadMagnetica);

export const getAllCalibracionSondaSusceptibilidadMagneticaSuccess = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.GetAllCalibracionSondaSusceptibilidadMagneticaSuccess,
  props<{  calibracionSondaSusceptibilidadMagneticas: CalibracionSondaSusceptibilidadMagnetica[],   calibracionSondaSusceptibilidadMagneticasFiltro: CalibracionSondaSusceptibilidadMagnetica[] }>()
);

export const getAllCalibracionSondaSusceptibilidadMagneticaFailure = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.CreateModalCalibracionSondaSusceptibilidadMagnetica,
  props<{  error: string}>()
);


export const createModalCalibracionSondaSusceptibilidadMagnetica = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.CreateModalCalibracionSondaSusceptibilidadMagnetica,
  props<{  edit: CalibracionSondaSusceptibilidadMagnetica }>()
);

export const createModalCalibracionSondaSusceptibilidadMagneticaSuccess = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.CreateModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica}>()
);

export const createModalCalibracionSondaSusceptibilidadMagneticaFailure = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.CreateModalCalibracionSondaSusceptibilidadMagneticaFailure,
  props<{  edit: CalibracionSondaSusceptibilidadMagnetica, error: string }>()
);

export const postModalCalibracionSondaSusceptibilidadMagneticaSuccess = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.PostModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica, apiResponse: ApiResponse}>()
);

export const postModalCalibracionSondaSusceptibilidadMagneticaFailure = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.PostModalCalibracionSondaSusceptibilidadMagneticaFailure,
  props<{  edit: CalibracionSondaSusceptibilidadMagnetica, error: string }>()
);

export const editModalCalibracionSondaSusceptibilidadMagnetica = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.EditModalCalibracionSondaSusceptibilidadMagnetica,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica, codPozo: string }>()
);

export const editModalCalibracionSondaSusceptibilidadMagneticaSuccess = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.EditModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica, codPozo: string}>()
);

export const editModalCalibracionSondaSusceptibilidadMagneticaFailure = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.EditModalCalibracionSondaSusceptibilidadMagneticaFailure,
  props<{ error: string }>()
);

export const putModalCalibracionSondaSusceptibilidadMagneticaSuccess= createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.PutModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica, apiResponse: ApiResponse}>()
);

export const putModalCalibracionSondaSusceptibilidadMagneticaFailure = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.PutModalCalibracionSondaSusceptibilidadMagneticaFailure,
  props<{  edit: CalibracionSondaSusceptibilidadMagnetica, error: string }>()
);

export const deleteCalibracionSondaSusceptibilidadMagnetica = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.DeleteCalibracionSondaSusceptibilidadMagnetica,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica}>()
);

export const deleteCalibracionSondaSusceptibilidadMagneticaSuccess = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.DeleteCalibracionSondaSusceptibilidadMagneticaSuccess,
  props<{ edit: CalibracionSondaSusceptibilidadMagnetica, apiResponse: ApiResponse}>()
);

export const deleteCalibracionSondaSusceptibilidadMagneticaFailure = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.DeleteCalibracionSondaSusceptibilidadMagneticaFailure,
  props<{ error: string }>()
);

export const sortCalibracionSondaSusceptibilidadMagnetica = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.SortCalibracionSondaSusceptibilidadMagnetica,
  props<{ column: any, direction: any}>()
);

export const filterCalibracionSondaSusceptibilidadMagnetica = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.FilterCalibracionSondaSusceptibilidadMagnetica,
  props<{ filtro: string}>()
);

export const paginatorCalibracionSondaSusceptibilidadMagnetica = createAction(
  CalibracionSondaSusceptibilidadMagneticaActionsNames.PaginatorCalibracionSondaSusceptibilidadMagnetica,
  props<{ paginator: number}>()
);

