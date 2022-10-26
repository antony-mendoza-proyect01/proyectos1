import {createAction, props} from '@ngrx/store';
import { CalibracionDatosPozoRegistrado } from 'src/app/data/models/calibracion-datos-pozo-registrado';
import {ApiResponse} from '../../../../data/models/api-response';
import {CategoriasAjuste} from "../../../../data/models/categorias-ajuste";
import {
  ParametrosContratoPerforacionAjustesDesviacionActionsNames
} from "../../../administracion/parametros-contrato-perforacion/state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.actions";
import {NombreSuperficies} from "../../../../data/models/nombre-superficies";

export enum CalibracionDatosPozoRegistradoActionsNames {
  Init = '[CalibracionDatosPozoRegistrado] Init',
  GetAllCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Api] Get all By Pozo',
  GetAllCalibracionDatosPozoRegistradoSuccess = '[CalibracionDatosPozoRegistrado] [Api] Get all By Pozo Success',
  GetAllCalibracionDatosPozoRegistradoFailure = '[CalibracionDatosPozoRegistrado] [Api] Get all By Pozo  Failure',

  CreateModalCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Action] create modal',
  CreateModalCalibracionDatosPozoRegistradoSuccess = '[CalibracionDatosPozoRegistrado] [Action] create modal Success',
  CreateModalCalibracionDatosPozoRegistradoFailure = '[CalibracionDatosPozoRegistrado] [Action] create modal Failure',
  PostModalCalibracionDatosPozoRegistradoSuccess = '[CalibracionDatosPozoRegistrado] [Action] [Api] create Success',
  PostModalCalibracionDatosPozoRegistradoFailure = '[CalibracionDatosPozoRegistrado] [Action] [Api] create Failure',

  EditModalCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Action] Edit modal',
  EditModalCalibracionDatosPozoRegistradoSuccess = '[CalibracionDatosPozoRegistrado] [Action] Edit modal Success',
  EditModalCalibracionDatosPozoRegistradoFailure = '[CalibracionDatosPozoRegistrado] [Action] Edit modal Failure',
  PutModalCalibracionDatosPozoRegistradoSuccess = '[CalibracionDatosPozoRegistrado] [Action] [Api] Put Success',
  PutModalCalibracionDatosPozoRegistradoFailure = '[CalibracionDatosPozoRegistrado] [Action] [Api] Put Failure',

  DeleteCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Action] Delete',
  DeleteCalibracionDatosPozoRegistradoSuccess = '[CalibracionDatosPozoRegistrado] [Action] [Api] Delete Success',
  DeleteCalibracionDatosPozoRegistradoFailure = '[CalibracionDatosPozoRegistrado] [Action] [Api] Delete Failure',

  SortCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Action] Sort',
  FilterCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Action] Filter',
  PaginatorCalibracionDatosPozoRegistrado = '[CalibracionDatosPozoRegistrado] [Action] Paginator',


}

export const initCalibracionDatosPozoRegistrado = createAction( CalibracionDatosPozoRegistradoActionsNames.Init);

export const getAllCalibracionDatosPozoRegistrado = createAction(CalibracionDatosPozoRegistradoActionsNames.GetAllCalibracionDatosPozoRegistrado);

export const getAllCalibracionDatosPozoRegistradoSuccess = createAction(
  CalibracionDatosPozoRegistradoActionsNames.GetAllCalibracionDatosPozoRegistradoSuccess,
  props<{  calibracionDatosPozoRegistrado: CalibracionDatosPozoRegistrado[],   calibracionDatosPozoRegistradoFiltro: CalibracionDatosPozoRegistrado[] }>()
);

export const getAllCalibracionDatosPozoRegistradoFailure = createAction(
  CalibracionDatosPozoRegistradoActionsNames.CreateModalCalibracionDatosPozoRegistrado,
  props<{  error: string}>()
);

export const createModalCalibracionDatosPozoRegistrado = createAction(
  CalibracionDatosPozoRegistradoActionsNames.CreateModalCalibracionDatosPozoRegistrado,
  props<{  edit: CalibracionDatosPozoRegistrado }>()
);

export const createModalCalibracionDatosPozoRegistradoSuccess = createAction(
  CalibracionDatosPozoRegistradoActionsNames.CreateModalCalibracionDatosPozoRegistradoSuccess,
  props<{ edit: CalibracionDatosPozoRegistrado}>()
);

export const createModalCalibracionDatosPozoRegistradoFailure = createAction(
  CalibracionDatosPozoRegistradoActionsNames.CreateModalCalibracionDatosPozoRegistradoFailure,
  props<{  edit: CalibracionDatosPozoRegistrado, error: string }>()
);

export const postModalCalibracionDatosPozoRegistradoSuccess = createAction(
  CalibracionDatosPozoRegistradoActionsNames.PostModalCalibracionDatosPozoRegistradoSuccess,
  props<{ edit: CalibracionDatosPozoRegistrado, apiResponse: ApiResponse}>()
);

export const postModalCalibracionDatosPozoRegistradoFailure = createAction(
  CalibracionDatosPozoRegistradoActionsNames.PostModalCalibracionDatosPozoRegistradoFailure,
  props<{  edit: CalibracionDatosPozoRegistrado, error: string }>()
);

export const editModalCalibracionDatosPozoRegistrado = createAction(
  CalibracionDatosPozoRegistradoActionsNames.EditModalCalibracionDatosPozoRegistrado,
  props<{ edit: CalibracionDatosPozoRegistrado, codPozo: string }>()
);

export const editModalCalibracionDatosPozoRegistradoSuccess = createAction(
  CalibracionDatosPozoRegistradoActionsNames.EditModalCalibracionDatosPozoRegistradoSuccess,
  props<{ edit: CalibracionDatosPozoRegistrado, codPozo: string}>()
);

export const editModalCalibracionDatosPozoRegistradoFailure = createAction(
  CalibracionDatosPozoRegistradoActionsNames.EditModalCalibracionDatosPozoRegistradoFailure,
  props<{ error: string }>()
);

export const putModalCalibracionDatosPozoRegistradoSuccess= createAction(
  CalibracionDatosPozoRegistradoActionsNames.PutModalCalibracionDatosPozoRegistradoSuccess,
  props<{ edit: CalibracionDatosPozoRegistrado, apiResponse: ApiResponse}>()
);

export const putModalCalibracionDatosPozoRegistradoFailure = createAction(
  CalibracionDatosPozoRegistradoActionsNames.PutModalCalibracionDatosPozoRegistradoFailure,
  props<{  edit: CalibracionDatosPozoRegistrado, error: string }>()
);

export const deleteCalibracionDatosPozoRegistrado = createAction(
  CalibracionDatosPozoRegistradoActionsNames.DeleteCalibracionDatosPozoRegistrado,
  props<{ edit: CalibracionDatosPozoRegistrado}>()
);

export const deleteCalibracionDatosPozoRegistradoSuccess = createAction(
  CalibracionDatosPozoRegistradoActionsNames.DeleteCalibracionDatosPozoRegistradoSuccess,
  props<{ edit: CalibracionDatosPozoRegistrado, apiResponse: ApiResponse}>()
);

export const deleteCalibracionDatosPozoRegistradoFailure = createAction(
  CalibracionDatosPozoRegistradoActionsNames.DeleteCalibracionDatosPozoRegistradoFailure,
  props<{ error: string }>()
);

export const sortCalibracionDatosPozoRegistrado = createAction(
  CalibracionDatosPozoRegistradoActionsNames.SortCalibracionDatosPozoRegistrado,
  props<{ column: any, direction: any}>()
);

export const filterCalibracionDatosPozoRegistrado = createAction(
  CalibracionDatosPozoRegistradoActionsNames.FilterCalibracionDatosPozoRegistrado,
  props<{ filtro: string}>()
);

export const paginatorCalibracionDatosPozoRegistrado = createAction(
  CalibracionDatosPozoRegistradoActionsNames.PaginatorCalibracionDatosPozoRegistrado,
  props<{ paginator: number}>()
);

