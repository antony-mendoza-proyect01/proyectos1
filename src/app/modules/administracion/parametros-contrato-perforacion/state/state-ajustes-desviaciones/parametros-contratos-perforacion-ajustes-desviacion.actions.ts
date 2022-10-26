import {createAction, props} from '@ngrx/store';
import { ContratoPerforacionAjustesDesviacion } from 'src/app/data/models/ajustes-desviacion';
import { ApiResponse } from 'src/app/data/models/api-response';
import {CategoriasAjuste} from '../../../../../data/models/categorias-ajuste';

export enum ParametrosContratoPerforacionAjustesDesviacionActionsNames {
  Init = '[ParametrosContratoPerforacionAjustesDesviacion] Init',
  GetAllParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] Get all',
  GetAllParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] Get all Success',
  GetAllParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] Get all Failure',

  CreateModalParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] create modal',
  CreateModalParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] create modal Success',
  CreateModalParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] create modal Failure',
  PostModalParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] [Api] create Success',
  PostModalParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] [Api] create Failure',

  EditModalParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Edit modal',
  EditModalParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Edit modal Success',
  EditModalParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Edit modal Failure',
  PutModalParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] [Api] Put Success',
  PutModalParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] [Api] Put Failure',

  DeleteParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Delete',
  DeleteParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] [Api] Delete Success',
  DeleteParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] [Api] Delete Failure',

  SortParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Sort',
  FilterParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Filter',
  PaginatorParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Action] Paginator',

  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] GetByCodContratoByTipoPozo',
  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] GetByCodContratoByTipoPozo Success',
  GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] GetByCodContratoByTipoPozo Failure',

  GetByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] GetByCategoriaAjuste',
  GetByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] GetByCategoriaAjuste Success',
  GetByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure = '[ParametrosContratoPerforacionAjustesDesviacion] [Api] GetByCategoriaAjuste Failure',

}

export const initParametrosContratoPerforacionAjustesDesviacion = createAction( ParametrosContratoPerforacionAjustesDesviacionActionsNames.Init);

export const getAllParametrosContratoPerforacionAjustesDesviacion = createAction(ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetAllParametrosContratoPerforacionAjustesDesviacion);

export const getAllParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetAllParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion[] , contratosAjutesDesviacionFiltro: ContratoPerforacionAjustesDesviacion[] }>()
);

export const getAllParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetAllParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{  error: string   }>()
);

export const createModalParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.CreateModalParametrosContratoPerforacionAjustesDesviacion,
  props<{  edit: ContratoPerforacionAjustesDesviacion}>()
);

export const createModalParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.CreateModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ edit: ContratoPerforacionAjustesDesviacion}>()
);

export const createModalParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.CreateModalParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{  edit: ContratoPerforacionAjustesDesviacion, error: string }>()
);

export const postModalParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.PostModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ edit: ContratoPerforacionAjustesDesviacion, apiResponse: ApiResponse}>()
);

export const postModalParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.PostModalParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{  edit: ContratoPerforacionAjustesDesviacion, error: string }>()
);

export const editModalParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.EditModalParametrosContratoPerforacionAjustesDesviacion,
  props<{ edit: ContratoPerforacionAjustesDesviacion }>()
);

export const editModalParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.EditModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ edit: ContratoPerforacionAjustesDesviacion}>()
);

export const editModalParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.EditModalParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{ error: string }>()
);

export const putModalParametrosContratoPerforacionAjustesDesviacionSuccess= createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.PutModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ edit: ContratoPerforacionAjustesDesviacion, apiResponse: ApiResponse}>()
);

export const putModalParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.PutModalParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{  edit: ContratoPerforacionAjustesDesviacion, error: string }>()
);

export const deleteParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.DeleteParametrosContratoPerforacionAjustesDesviacion,
  props<{ edit: ContratoPerforacionAjustesDesviacion}>()
);

export const deleteParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.DeleteParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ edit: ContratoPerforacionAjustesDesviacion, apiResponse: ApiResponse}>()
);

export const deleteParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.DeleteParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{ error: string }>()
);

export const sortParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.SortParametrosContratoPerforacionAjustesDesviacion,
  props<{ column: any, direction: any}>()
);

export const filterParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.FilterParametrosContratoPerforacionAjustesDesviacion,
  props<{ filtro: string}>()
);

export const paginatorParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.PaginatorParametrosContratoPerforacionAjustesDesviacion,
  props<{ paginator: number}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion,
  props<{ codContrato: string, tipoPozo: string}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion[], contratosAjutesDesviacionFiltro: ContratoPerforacionAjustesDesviacion[]}>()
);

export const getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{ error: string }>()
);

export const getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion
);

export const getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess,
  props<{ categoriasAjustes: CategoriasAjuste[]}>()
);

export const getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure = createAction(
  ParametrosContratoPerforacionAjustesDesviacionActionsNames.GetByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure,
  props<{ error: string }>()
);
