import {createAction, props} from '@ngrx/store';
import { ContratoPerforacionAjustesRegistro } from 'src/app/data/models/ajustes-porcentaje-verticalidad';
import { ApiResponse } from 'src/app/data/models/api-response';

export enum ParametrosContratoPerforacionAjustesRegistroActionsNames {
  Init = '[ParametrosContratoPerforacionAjustesRegistro] Init',
  GetAllParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Api] Get all',
  GetAllParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Api] Get all Success',
  GetAllParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Api] Get all Failure',

  CreateModalParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Action] create modal',
  CreateModalParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Action] create modal Success',
  CreateModalParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Action] create modal Failure',
  PostModalParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Action] [Api] create Success',
  PostModalParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Action] [Api] create Failure',

  EditModalParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Edit modal',
  EditModalParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Edit modal Success',
  EditModalParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Edit modal Failure',
  PutModalParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Action] [Api] Put Success',
  PutModalParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Action] [Api] Put Failure',

  DeleteParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Delete',
  DeleteParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Action] [Api] Delete Success',
  DeleteParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Action] [Api] Delete Failure',

  SortParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Sort',
  FilterParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Filter',
  PaginatorParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Action] Paginator',

  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro = '[ParametrosContratoPerforacionAjustesRegistro] [Api] GetByCodContratoByTipoPozo',
  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess = '[ParametrosContratoPerforacionAjustesRegistro] [Api] GetByCodContratoByTipoPozo Success',
  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure = '[ParametrosContratoPerforacionAjustesRegistro] [Api] GetByCodContratoByTipoPozo Failure',

}

export const initParametrosContratoPerforacionAjustesRegistro = createAction( ParametrosContratoPerforacionAjustesRegistroActionsNames.Init);

export const getAllParametrosContratoPerforacionAjustesRegistro = createAction(ParametrosContratoPerforacionAjustesRegistroActionsNames.GetAllParametrosContratoPerforacionAjustesRegistro);

export const getAllParametrosContratoPerforacionAjustesRegistroSuccess = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.GetAllParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ contratosRegistro: ContratoPerforacionAjustesRegistro[] , contratosRegistroFiltro: ContratoPerforacionAjustesRegistro[] }>()
);

export const getAllParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.GetAllParametrosContratoPerforacionAjustesRegistroFailure,
  props<{  error: string   }>()
);

export const createModalParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.CreateModalParametrosContratoPerforacionAjustesRegistro,
  props<{  edit: ContratoPerforacionAjustesRegistro}>()
);

export const createModalParametrosContratoPerforacionAjustesRegistroSuccess = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.CreateModalParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ edit: ContratoPerforacionAjustesRegistro}>()
);

export const createModalParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.CreateModalParametrosContratoPerforacionAjustesRegistroFailure,
  props<{  edit: ContratoPerforacionAjustesRegistro, error: string }>()
);

export const postModalParametrosContratoPerforacionAjustesRegistroSuccess = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.PostModalParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ edit: ContratoPerforacionAjustesRegistro, apiResponse: ApiResponse}>()
);

export const postModalParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.PostModalParametrosContratoPerforacionAjustesRegistroFailure,
  props<{  edit: ContratoPerforacionAjustesRegistro, error: string }>()
);

export const editModalParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.EditModalParametrosContratoPerforacionAjustesRegistro,
  props<{ edit: ContratoPerforacionAjustesRegistro }>()
);

export const editModalParametrosContratoPerforacionAjustesRegistroSuccess = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.EditModalParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ edit: ContratoPerforacionAjustesRegistro}>()
);

export const editModalParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.EditModalParametrosContratoPerforacionAjustesRegistroFailure,
  props<{ error: string }>()
);

export const putModalParametrosContratoPerforacionAjustesRegistroSuccess= createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.PutModalParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ edit: ContratoPerforacionAjustesRegistro, apiResponse: ApiResponse}>()
);

export const putModalParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.PutModalParametrosContratoPerforacionAjustesRegistroFailure,
  props<{  edit: ContratoPerforacionAjustesRegistro, error: string }>()
);

export const deleteParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.DeleteParametrosContratoPerforacionAjustesRegistro,
  props<{ edit: ContratoPerforacionAjustesRegistro}>()
);

export const deleteParametrosContratoPerforacionAjustesRegistroSuccess = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.DeleteParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ edit: ContratoPerforacionAjustesRegistro, apiResponse: ApiResponse}>()
);

export const deleteParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.DeleteParametrosContratoPerforacionAjustesRegistroFailure,
  props<{ error: string }>()
);

export const sortParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.SortParametrosContratoPerforacionAjustesRegistro,
  props<{ column: any, direction: any}>()
);

export const filterParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.FilterParametrosContratoPerforacionAjustesRegistro,
  props<{ filtro: string}>()
);

export const paginatorParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.PaginatorParametrosContratoPerforacionAjustesRegistro,
  props<{ paginator: number}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro,
  props<{ codContrato: string, tipoPozo: string}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess,
  props<{ contratosRegistro: ContratoPerforacionAjustesRegistro[], contratosRegistroFiltro: ContratoPerforacionAjustesRegistro[]}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure = createAction(
  ParametrosContratoPerforacionAjustesRegistroActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure,
  props<{ error: string }>()
);
