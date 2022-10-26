import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {Meteorizaciones} from "../../../../data/models/meterorizaciones";

export enum ParametrosMeteorizacionesActionsNames {
  Init = '[ParametrosMeteorizaciones] Init',
  GetAllParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Api] Get all',
  GetAllParametrosMeteorizacionesSuccess = '[ParametrosMeteorizaciones] [Api] Get all Success',
  GetAllParametrosMeteorizacionesFailure = '[ParametrosMeteorizaciones] [Api] Get all Failure',

  CreateModalParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Action] create modal',
  CreateModalParametrosMeteorizacionesSuccess = '[ParametrosMeteorizaciones] [Action] create modal Success',
  CreateModalParametrosMeteorizacionesFailure = '[ParametrosMeteorizaciones] [Action] create modal Failure',
  PostModalParametrosMeteorizacionesSuccess = '[ParametrosMeteorizaciones] [Action] [Api] create Success',
  PostModalParametrosMeteorizacionesFailure = '[ParametrosMeteorizaciones] [Action] [Api] create Failure',

  EditModalParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Action] Edit modal',
  EditModalParametrosMeteorizacionesSuccess = '[ParametrosMeteorizaciones] [Action] Edit modal Success',
  EditModalParametrosMeteorizacionesFailure = '[ParametrosMeteorizaciones] [Action] Edit modal Failure',
  PutModalParametrosMeteorizacionesSuccess = '[ParametrosMeteorizaciones] [Action] [Api] Put Success',
  PutModalParametrosMeteorizacionesFailure = '[ParametrosMeteorizaciones] [Action] [Api] Put Failure',

  DeleteParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Action] Delete',
  DeleteParametrosMeteorizacionesSuccess = '[ParametrosMeteorizaciones] [Action] [Api] Delete Success',
  DeleteParametrosMeteorizacionesFailure = '[ParametrosMeteorizaciones] [Action] [Api] Delete Failure',

  SortParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Action] Sort',
  FilterParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Action] Filter',
  PaginatorParametrosMeteorizaciones = '[ParametrosMeteorizaciones] [Action] Paginator',
}

export const initParametrosMeteorizaciones = createAction( ParametrosMeteorizacionesActionsNames.Init);

export const getAllParametrosMeteorizaciones = createAction(ParametrosMeteorizacionesActionsNames.GetAllParametrosMeteorizaciones);

export const getAllParametrosMeteorizacionesSuccess = createAction(
  ParametrosMeteorizacionesActionsNames.GetAllParametrosMeteorizacionesSuccess,
  props<{ meteorizaciones: Meteorizaciones[] , meteorizacionesFiltro: Meteorizaciones[] }>()
);

export const getAllParametrosMeteorizacionesFailure = createAction(
  ParametrosMeteorizacionesActionsNames.GetAllParametrosMeteorizacionesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosMeteorizaciones = createAction(
  ParametrosMeteorizacionesActionsNames.CreateModalParametrosMeteorizaciones,
  props<{  edit: Meteorizaciones }>()
);

export const createModalParametrosMeteorizacionesSuccess = createAction(
  ParametrosMeteorizacionesActionsNames.CreateModalParametrosMeteorizacionesSuccess,
  props<{ edit: Meteorizaciones}>()
);

export const createModalParametrosMeteorizacionesFailure = createAction(
  ParametrosMeteorizacionesActionsNames.CreateModalParametrosMeteorizacionesFailure,
  props<{  edit: Meteorizaciones, error: string }>()
);

export const postModalParametrosMeteorizacionesSuccess = createAction(
  ParametrosMeteorizacionesActionsNames.PostModalParametrosMeteorizacionesSuccess,
  props<{ edit: Meteorizaciones, apiResponse: ApiResponse}>()
);

export const postModalParametrosMeteorizacionesFailure = createAction(
  ParametrosMeteorizacionesActionsNames.PostModalParametrosMeteorizacionesFailure,
  props<{  edit: Meteorizaciones, error: string }>()
);

export const editModalParametrosMeteorizaciones = createAction(
  ParametrosMeteorizacionesActionsNames.EditModalParametrosMeteorizaciones,
  props<{ edit: Meteorizaciones }>()
);

export const editModalParametrosMeteorizacionesSuccess = createAction(
  ParametrosMeteorizacionesActionsNames.EditModalParametrosMeteorizacionesSuccess,
  props<{ edit: Meteorizaciones}>()
);

export const editModalParametrosMeteorizacionesFailure = createAction(
  ParametrosMeteorizacionesActionsNames.EditModalParametrosMeteorizacionesFailure,
  props<{ error: string }>()
);

export const putModalParametrosMeteorizacionesSuccess= createAction(
  ParametrosMeteorizacionesActionsNames.PutModalParametrosMeteorizacionesSuccess,
  props<{ edit: Meteorizaciones, apiResponse: ApiResponse}>()
);

export const putModalParametrosMeteorizacionesFailure = createAction(
  ParametrosMeteorizacionesActionsNames.PutModalParametrosMeteorizacionesFailure,
  props<{  edit: Meteorizaciones, error: string }>()
);

export const deleteParametrosMeteorizaciones = createAction(
  ParametrosMeteorizacionesActionsNames.DeleteParametrosMeteorizaciones,
  props<{ edit: Meteorizaciones}>()
);

export const deleteParametrosMeteorizacionesSuccess = createAction(
  ParametrosMeteorizacionesActionsNames.DeleteParametrosMeteorizacionesSuccess,
  props<{ edit: Meteorizaciones, apiResponse: ApiResponse}>()
);

export const deleteParametrosMeteorizacionesFailure = createAction(
  ParametrosMeteorizacionesActionsNames.DeleteParametrosMeteorizacionesFailure,
  props<{ error: string }>()
);

export const sortParametrosMeteorizaciones = createAction(
  ParametrosMeteorizacionesActionsNames.SortParametrosMeteorizaciones,
  props<{ column: any, direction: any}>()
);

export const filterParametrosMeteorizaciones = createAction(
  ParametrosMeteorizacionesActionsNames.FilterParametrosMeteorizaciones,
  props<{ filtro: string}>()
);

export const paginatorParametrosMeteorizaciones = createAction(
  ParametrosMeteorizacionesActionsNames.PaginatorParametrosMeteorizaciones,
  props<{ paginator: number}>()
);

