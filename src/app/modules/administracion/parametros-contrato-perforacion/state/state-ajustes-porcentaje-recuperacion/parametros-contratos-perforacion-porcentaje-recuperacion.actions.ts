import {createAction, props} from '@ngrx/store';
import { ApiResponse } from 'src/app/data/models/api-response';
import {ContratoPerforacionAjustesRecuperacion} from "../../../../../data/models/ajustes-porcentaje-recuperacion";

export enum ParametrosContratoPerforacionAjustesRecuperacionActionsNames {
  Init = '[ParametrosContratoPerforacionAjustesRecuperacion] Init',
  GetAllParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Api] Get all',
  GetAllParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Api] Get all Success',
  GetAllParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Api] Get all Failure',

  CreateModalParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] create modal',
  CreateModalParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] create modal Success',
  CreateModalParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] create modal Failure',
  PostModalParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] [Api] create Success',
  PostModalParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] [Api] create Failure',

  EditModalParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Edit modal',
  EditModalParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Edit modal Success',
  EditModalParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Edit modal Failure',
  PutModalParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] [Api] Put Success',
  PutModalParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] [Api] Put Failure',

  DeleteParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Delete',
  DeleteParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] [Api] Delete Success',
  DeleteParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] [Api] Delete Failure',

  SortParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Sort',
  FilterParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Filter',
  PaginatorParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Action] Paginator',

  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion = '[ParametrosContratoPerforacionAjustesRecuperacion] [Api] GetByCodContratoByTipoPozo',
  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess = '[ParametrosContratoPerforacionAjustesRecuperacion] [Api] GetByCodContratoByTipoPozo Success',
  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure = '[ParametrosContratoPerforacionAjustesRecuperacion] [Api] GetByCodContratoByTipoPozo Failure',

}

export const initParametrosContratoPerforacionAjustesRecuperacion = createAction( ParametrosContratoPerforacionAjustesRecuperacionActionsNames.Init);

export const getAllParametrosContratoPerforacionAjustesRecuperacion = createAction(ParametrosContratoPerforacionAjustesRecuperacionActionsNames.GetAllParametrosContratoPerforacionAjustesRecuperacion);

export const getAllParametrosContratoPerforacionAjustesRecuperacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.GetAllParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ contratosRecuperacion: ContratoPerforacionAjustesRecuperacion[] , contratosRecuperacionFiltro: ContratoPerforacionAjustesRecuperacion[] }>()
);

export const getAllParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.GetAllParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{  error: string   }>()
);

export const createModalParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.CreateModalParametrosContratoPerforacionAjustesRecuperacion,
  props<{  edit: ContratoPerforacionAjustesRecuperacion}>()
);

export const createModalParametrosContratoPerforacionAjustesRecuperacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.CreateModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ edit: ContratoPerforacionAjustesRecuperacion}>()
);

export const createModalParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.CreateModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{  edit: ContratoPerforacionAjustesRecuperacion, error: string }>()
);

export const postModalParametrosContratoPerforacionAjustesRecuperacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.PostModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ edit: ContratoPerforacionAjustesRecuperacion, apiResponse: ApiResponse}>()
);

export const postModalParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.PostModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{  edit: ContratoPerforacionAjustesRecuperacion, error: string }>()
);

export const editModalParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.EditModalParametrosContratoPerforacionAjustesRecuperacion,
  props<{ edit: ContratoPerforacionAjustesRecuperacion }>()
);

export const editModalParametrosContratoPerforacionAjustesRecuperacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.EditModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ edit: ContratoPerforacionAjustesRecuperacion}>()
);

export const editModalParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.EditModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{ error: string }>()
);

export const putModalParametrosContratoPerforacionAjustesRecuperacionSuccess= createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.PutModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ edit: ContratoPerforacionAjustesRecuperacion, apiResponse: ApiResponse}>()
);

export const putModalParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.PutModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{  edit: ContratoPerforacionAjustesRecuperacion, error: string }>()
);

export const deleteParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.DeleteParametrosContratoPerforacionAjustesRecuperacion,
  props<{ edit: ContratoPerforacionAjustesRecuperacion}>()
);

export const deleteParametrosContratoPerforacionAjustesRecuperacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.DeleteParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ edit: ContratoPerforacionAjustesRecuperacion, apiResponse: ApiResponse}>()
);

export const deleteParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.DeleteParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{ error: string }>()
);

export const sortParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.SortParametrosContratoPerforacionAjustesRecuperacion,
  props<{ column: any, direction: any}>()
);

export const filterParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.FilterParametrosContratoPerforacionAjustesRecuperacion,
  props<{ filtro: string}>()
);

export const paginatorParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.PaginatorParametrosContratoPerforacionAjustesRecuperacion,
  props<{ paginator: number}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion,
  props<{ codContrato: string, tipoPozo: string}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess,
  props<{ contratosRecuperacion: ContratoPerforacionAjustesRecuperacion[], contratosRecuperacionFiltro: ContratoPerforacionAjustesRecuperacion[]}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure = createAction(
  ParametrosContratoPerforacionAjustesRecuperacionActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure,
  props<{ error: string }>()
);
