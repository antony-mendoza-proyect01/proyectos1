import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {ContratosRegistro} from '../../../../data/models/contratos-registro';
import {TarifasRegistro} from '../../../../data/models/tarifas-registro';

export enum ParametrosContratosRegistroActionsNames {
  Init = '[ParametrosContratosRegistro] Init',
  GetAllParametrosContratosRegistro = '[ParametrosContratosRegistro] [Api] Get all',
  GetAllParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Api] Get all Success',
  GetAllParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Api] Get all Failure',

  CreateModalParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] create modal',
  CreateModalParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] create modal Success',
  CreateModalParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] create modal Failure',
  PostModalParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] create Success',
  PostModalParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] create Failure',

  EditModalParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Edit modal',
  EditModalParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] Edit modal Success',
  EditModalParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] Edit modal Failure',
  PutModalParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] Put Success',
  PutModalParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] Put Failure',

  DeleteParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Delete',
  DeleteParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] Delete Success',
  DeleteParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] Delete Failure',

  SortParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Sort',
  FilterParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Filter',
  PaginatorParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Paginator',

  GetByCodContratoParametrosContratosRegistro = '[ParametrosContratosRegistro] [Api] GetByCodContrato',
  GetByCodContratoParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Api] GetByCodContrato Success',
  GetByCodContratoParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Api] GetByCodContrato Failure',

  CreateModalTarifaRegistroParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] create modal Tarifa Registro',
  CreateModalTarifaRegistroParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] create modal Tarifa Registro Success',
  CreateModalTarifaRegistroParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] create modal  Tarifa Registro Failure',
  PostModalTarifaRegistroParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] create  Tarifa Registro Success',
  PostModalTarifaRegistroParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] create  Tarifa Registro Failure',

  EditModalTarifaRegistroParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Edit Modal Tarifa Registro',
  EditModalTarifaRegistroParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] Edit Modal Tarifa Registro Success',
  EditModalTarifaRegistroParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] Edit Modal Tarifa Registro Failure',
  PutModalTarifaRegistroParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] Put Tarifa Registro Success',
  PutModalTarifaRegistroParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] Put Tarifa Registro Failure',

  DeleteTarifaRegistroParametrosContratosRegistro = '[ParametrosContratosRegistro] [Action] Delete Tarifa Registro ',
  DeleteTarifaRegistroParametrosContratosRegistroSuccess = '[ParametrosContratosRegistro] [Action] [Api] Delete Tarifa Registro  Success',
  DeleteTarifaRegistroParametrosContratosRegistroFailure = '[ParametrosContratosRegistro] [Action] [Api] Delete Tarifa Registro  Failure',

}

export const initParametrosContratosRegistro = createAction( ParametrosContratosRegistroActionsNames.Init);

export const getAllParametrosContratosRegistro = createAction(ParametrosContratosRegistroActionsNames.GetAllParametrosContratosRegistro);

export const getAllParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.GetAllParametrosContratosRegistroSuccess,
  props<{ contratosRegistro: ContratosRegistro[] , contratosRegistroFiltro: ContratosRegistro[] }>()
);

export const getAllParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.GetAllParametrosContratosRegistroFailure,
  props<{  error: string   }>()
);

export const createModalParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.CreateModalParametrosContratosRegistro,
  props<{  edit: ContratosRegistro }>()
);

export const createModalParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.CreateModalParametrosContratosRegistroSuccess,
  props<{ edit: ContratosRegistro}>()
);

export const createModalParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.CreateModalParametrosContratosRegistroFailure,
  props<{  edit: ContratosRegistro, error: string }>()
);

export const postModalParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.PostModalParametrosContratosRegistroSuccess,
  props<{ edit: ContratosRegistro, apiResponse: ApiResponse}>()
);

export const postModalParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.PostModalParametrosContratosRegistroFailure,
  props<{  edit: ContratosRegistro, error: string }>()
);

export const editModalParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.EditModalParametrosContratosRegistro,
  props<{ edit: ContratosRegistro }>()
);

export const editModalParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.EditModalParametrosContratosRegistroSuccess,
  props<{ edit: ContratosRegistro}>()
);

export const editModalParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.EditModalParametrosContratosRegistroFailure,
  props<{ error: string }>()
);

export const putModalParametrosContratosRegistroSuccess= createAction(
  ParametrosContratosRegistroActionsNames.PutModalParametrosContratosRegistroSuccess,
  props<{ edit: ContratosRegistro, apiResponse: ApiResponse}>()
);

export const putModalParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.PutModalParametrosContratosRegistroFailure,
  props<{  edit: ContratosRegistro, error: string }>()
);

export const deleteParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.DeleteParametrosContratosRegistro,
  props<{ edit: ContratosRegistro}>()
);

export const deleteParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.DeleteParametrosContratosRegistroSuccess,
  props<{ edit: ContratosRegistro, apiResponse: ApiResponse}>()
);

export const deleteParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.DeleteParametrosContratosRegistroFailure,
  props<{ error: string }>()
);

export const sortParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.SortParametrosContratosRegistro,
  props<{ column: any, direction: any}>()
);

export const filterParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.FilterParametrosContratosRegistro,
  props<{ filtro: string}>()
);

export const paginatorParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.PaginatorParametrosContratosRegistro,
  props<{ paginator: number}>()
);

/*
* Parametros Contratos
*
*/

export const getByCodContratoParametrosContratosRegistroRegistro = createAction(
  ParametrosContratosRegistroActionsNames.GetByCodContratoParametrosContratosRegistro,
  props<{ edit: ContratosRegistro}>()
);

export const getByCodContratoParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.GetByCodContratoParametrosContratosRegistroSuccess,
  props<{ tarifasRegistro: TarifasRegistro[], apiResponse: ApiResponse}>()
);

export const getByCodContratoParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.GetByCodContratoParametrosContratosRegistroFailure,
  props<{ error: string }>()
);

export const createModalTarifaRegistroParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.CreateModalTarifaRegistroParametrosContratosRegistro,
  props<{  edit: TarifasRegistro }>()
);

export const createModalTarifaRegistroParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.CreateModalTarifaRegistroParametrosContratosRegistroSuccess,
  props<{ edit: TarifasRegistro}>()
);

export const createModalTarifaRegistroParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.CreateModalTarifaRegistroParametrosContratosRegistroFailure,
  props<{  edit: TarifasRegistro, error: string }>()
);

export const postModalTarifaRegistroParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.PostModalTarifaRegistroParametrosContratosRegistroSuccess,
  props<{ edit: TarifasRegistro, apiResponse: ApiResponse}>()
);

export const postModalTarifaRegistroParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.PostModalTarifaRegistroParametrosContratosRegistroFailure,
  props<{  edit: TarifasRegistro, error: string }>()
);

export const editModalTarifaRegistroParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.EditModalTarifaRegistroParametrosContratosRegistro,
  props<{ edit: TarifasRegistro}>()
);

export const editModalTarifaRegistroParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.EditModalTarifaRegistroParametrosContratosRegistroSuccess,
  props<{ edit: TarifasRegistro}>()
);

export const editModalTarifaRegistroParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.EditModalTarifaRegistroParametrosContratosRegistroFailure,
  props<{ error: string }>()
);

export const putModalTarifaRegistroParametrosContratosRegistroSuccess= createAction(
  ParametrosContratosRegistroActionsNames.PutModalTarifaRegistroParametrosContratosRegistroSuccess,
  props<{ edit: TarifasRegistro, apiResponse: ApiResponse}>()
);

export const putModalTarifaRegistroParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.PutModalTarifaRegistroParametrosContratosRegistroFailure,
  props<{  edit: TarifasRegistro, error: string }>()
);

export const deleteTarifaRegistroParametrosContratosRegistro = createAction(
  ParametrosContratosRegistroActionsNames.DeleteTarifaRegistroParametrosContratosRegistro,
  props<{ edit: TarifasRegistro}>()
);

export const deleteTarifaRegistroParametrosContratosRegistroSuccess = createAction(
  ParametrosContratosRegistroActionsNames.DeleteTarifaRegistroParametrosContratosRegistroSuccess,
  props<{ edit: TarifasRegistro, apiResponse: ApiResponse}>()
);

export const deleteTarifaRegistroParametrosContratosRegistroFailure = createAction(
  ParametrosContratosRegistroActionsNames.DeleteTarifaRegistroParametrosContratosRegistroFailure,
  props<{ error: string }>()
);
