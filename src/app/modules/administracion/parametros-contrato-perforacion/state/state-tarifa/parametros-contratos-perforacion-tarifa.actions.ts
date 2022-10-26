import {createAction, props} from '@ngrx/store';
import { ApiResponse } from 'src/app/data/models/api-response';
import {Tarifas} from "../../../../../data/models/tarifas";

export enum ParametrosContratosPerforacionTarifasActionsNames {
  Init = '[ParametrosContratosPerforacionTarifas] Init',
  GetAllParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Api] Get all',
  GetAllParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Api] Get all Success',
  GetAllParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Api] Get all Failure',

  CreateModalParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Action] create modal',
  CreateModalParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Action] create modal Success',
  CreateModalParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Action] create modal Failure',
  PostModalParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Action] [Api] create Success',
  PostModalParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Action] [Api] create Failure',

  EditModalParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Action] Edit modal',
  EditModalParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Action] Edit modal Success',
  EditModalParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Action] Edit modal Failure',
  PutModalParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Action] [Api] Put Success',
  PutModalParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Action] [Api] Put Failure',

  DeleteParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Action] Delete',
  DeleteParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Action] [Api] Delete Success',
  DeleteParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Action] [Api] Delete Failure',

  SortParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Action] Sort',
  FilterParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Action] Filter',
  PaginatorParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Action] Paginator',

  GetByCodContratoByTipoPozoParametrosContratosPerforacionTarifas = '[ParametrosContratosPerforacionTarifas] [Api] GetByCodContratoByTipoPozo',
  GetByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess = '[ParametrosContratosPerforacionTarifas] [Api] GetByCodContratoByTipoPozo Success',
  GetByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure = '[ParametrosContratosPerforacionTarifas] [Api] GetByCodContratoByTipoPozo Failure',

}

export const initParametrosContratosPerforacionTarifas = createAction( ParametrosContratosPerforacionTarifasActionsNames.Init);

export const getAllParametrosContratosPerforacionTarifas = createAction(ParametrosContratosPerforacionTarifasActionsNames.GetAllParametrosContratosPerforacionTarifas);

export const getAllParametrosContratosPerforacionTarifasSuccess = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.GetAllParametrosContratosPerforacionTarifasSuccess,
  props<{ contratosPerforacionTarifa: Tarifas[] , contratosPerforacionTarifaFiltro: Tarifas[] }>()
);

export const getAllParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.GetAllParametrosContratosPerforacionTarifasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.CreateModalParametrosContratosPerforacionTarifas,
  props<{  edit: Tarifas}>()
);

export const createModalParametrosContratosPerforacionTarifasSuccess = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.CreateModalParametrosContratosPerforacionTarifasSuccess,
  props<{ edit: Tarifas}>()
);

export const createModalParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.CreateModalParametrosContratosPerforacionTarifasFailure,
  props<{  edit: Tarifas, error: string }>()
);

export const postModalParametrosContratosPerforacionTarifasSuccess = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.PostModalParametrosContratosPerforacionTarifasSuccess,
  props<{ edit: Tarifas, apiResponse: ApiResponse}>()
);

export const postModalParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.PostModalParametrosContratosPerforacionTarifasFailure,
  props<{  edit: Tarifas, error: string }>()
);

export const editModalParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.EditModalParametrosContratosPerforacionTarifas,
  props<{ edit: Tarifas }>()
);

export const editModalParametrosContratosPerforacionTarifasSuccess = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.EditModalParametrosContratosPerforacionTarifasSuccess,
  props<{ edit: Tarifas}>()
);

export const editModalParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.EditModalParametrosContratosPerforacionTarifasFailure,
  props<{ error: string }>()
);

export const putModalParametrosContratosPerforacionTarifasSuccess= createAction(
  ParametrosContratosPerforacionTarifasActionsNames.PutModalParametrosContratosPerforacionTarifasSuccess,
  props<{ edit: Tarifas, apiResponse: ApiResponse}>()
);

export const putModalParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.PutModalParametrosContratosPerforacionTarifasFailure,
  props<{  edit: Tarifas, error: string }>()
);

export const deleteParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.DeleteParametrosContratosPerforacionTarifas,
  props<{ edit: Tarifas}>()
);

export const deleteParametrosContratosPerforacionTarifasSuccess = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.DeleteParametrosContratosPerforacionTarifasSuccess,
  props<{ edit: Tarifas, apiResponse: ApiResponse}>()
);

export const deleteParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.DeleteParametrosContratosPerforacionTarifasFailure,
  props<{ error: string }>()
);

export const sortParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.SortParametrosContratosPerforacionTarifas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.FilterParametrosContratosPerforacionTarifas,
  props<{ filtro: string}>()
);

export const paginatorParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.PaginatorParametrosContratosPerforacionTarifas,
  props<{ paginator: number}>()
);

export const getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.GetByCodContratoByTipoPozoParametrosContratosPerforacionTarifas,
  props<{ codContrato: string, tipoPozo: string}>()
);

export const getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.GetByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess,
  props<{ contratosPerforacionTarifa: Tarifas[], contratosPerforacionTarifaFiltro: Tarifas[]}>()
);

export const getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure = createAction(
  ParametrosContratosPerforacionTarifasActionsNames.GetByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure,
  props<{ error: string }>()
);
