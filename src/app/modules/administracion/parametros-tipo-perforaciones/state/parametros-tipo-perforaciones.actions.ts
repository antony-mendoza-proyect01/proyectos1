import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../../../data/models/api-response';
import {TipoPerforaciones} from "../../../../data/models/tipo-perforaciones";

export enum ParametrosTipoPerforacionesActionsNames {
  Init = '[ParametrosTipoPerforaciones] Init',
  GetAllParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Api] Get all',
  GetAllParametrosTipoPerforacionesSuccess = '[ParametrosTipoPerforaciones] [Api] Get all Success',
  GetAllParametrosTipoPerforacionesFailure = '[ParametrosTipoPerforaciones] [Api] Get all Failure',

  CreateModalParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Action] create modal',
  CreateModalParametrosTipoPerforacionesSuccess = '[ParametrosTipoPerforaciones] [Action] create modal Success',
  CreateModalParametrosTipoPerforacionesFailure = '[ParametrosTipoPerforaciones] [Action] create modal Failure',
  PostModalParametrosTipoPerforacionesSuccess = '[ParametrosTipoPerforaciones] [Action] [Api] create Success',
  PostModalParametrosTipoPerforacionesFailure = '[ParametrosTipoPerforaciones] [Action] [Api] create Failure',

  EditModalParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Action] Edit modal',
  EditModalParametrosTipoPerforacionesSuccess = '[ParametrosTipoPerforaciones] [Action] Edit modal Success',
  EditModalParametrosTipoPerforacionesFailure = '[ParametrosTipoPerforaciones] [Action] Edit modal Failure',
  PutModalParametrosTipoPerforacionesSuccess = '[ParametrosTipoPerforaciones] [Action] [Api] Put Success',
  PutModalParametrosTipoPerforacionesFailure = '[ParametrosTipoPerforaciones] [Action] [Api] Put Failure',

  DeleteParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Action] Delete',
  DeleteParametrosTipoPerforacionesSuccess = '[ParametrosTipoPerforaciones] [Action] [Api] Delete Success',
  DeleteParametrosTipoPerforacionesFailure = '[ParametrosTipoPerforaciones] [Action] [Api] Delete Failure',

  SortParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Action] Sort',
  FilterParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Action] Filter',
  PaginatorParametrosTipoPerforaciones = '[ParametrosTipoPerforaciones] [Action] Paginator',
}

export const initParametrosTipoPerforaciones = createAction( ParametrosTipoPerforacionesActionsNames.Init);

export const getAllParametrosTipoPerforaciones = createAction(ParametrosTipoPerforacionesActionsNames.GetAllParametrosTipoPerforaciones);

export const getAllParametrosTipoPerforacionesSuccess = createAction(
  ParametrosTipoPerforacionesActionsNames.GetAllParametrosTipoPerforacionesSuccess,
  props<{ perforaciones: TipoPerforaciones[] , perforacionesFiltro: TipoPerforaciones[] }>()
);

export const getAllParametrosTipoPerforacionesFailure = createAction(
  ParametrosTipoPerforacionesActionsNames.GetAllParametrosTipoPerforacionesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosTipoPerforaciones = createAction(
  ParametrosTipoPerforacionesActionsNames.CreateModalParametrosTipoPerforaciones,
  props<{  edit: TipoPerforaciones }>()
);

export const createModalParametrosTipoPerforacionesSuccess = createAction(
  ParametrosTipoPerforacionesActionsNames.CreateModalParametrosTipoPerforacionesSuccess,
  props<{ edit: TipoPerforaciones}>()
);

export const createModalParametrosTipoPerforacionesFailure = createAction(
  ParametrosTipoPerforacionesActionsNames.CreateModalParametrosTipoPerforacionesFailure,
  props<{  edit: TipoPerforaciones, error: string }>()
);

export const postModalParametrosTipoPerforacionesSuccess = createAction(
  ParametrosTipoPerforacionesActionsNames.PostModalParametrosTipoPerforacionesSuccess,
  props<{ edit: TipoPerforaciones, apiResponse: ApiResponse}>()
);

export const postModalParametrosTipoPerforacionesFailure = createAction(
  ParametrosTipoPerforacionesActionsNames.PostModalParametrosTipoPerforacionesFailure,
  props<{  edit: TipoPerforaciones, error: string }>()
);

export const editModalParametrosTipoPerforaciones = createAction(
  ParametrosTipoPerforacionesActionsNames.EditModalParametrosTipoPerforaciones,
  props<{ edit: TipoPerforaciones }>()
);

export const editModalParametrosTipoPerforacionesSuccess = createAction(
  ParametrosTipoPerforacionesActionsNames.EditModalParametrosTipoPerforacionesSuccess,
  props<{ edit: TipoPerforaciones}>()
);

export const editModalParametrosTipoPerforacionesFailure = createAction(
  ParametrosTipoPerforacionesActionsNames.EditModalParametrosTipoPerforacionesFailure,
  props<{ error: string }>()
);

export const putModalParametrosTipoPerforacionesSuccess= createAction(
  ParametrosTipoPerforacionesActionsNames.PutModalParametrosTipoPerforacionesSuccess,
  props<{ edit: TipoPerforaciones, apiResponse: ApiResponse}>()
);

export const putModalParametrosTipoPerforacionesFailure = createAction(
  ParametrosTipoPerforacionesActionsNames.PutModalParametrosTipoPerforacionesFailure,
  props<{  edit: TipoPerforaciones, error: string }>()
);

export const deleteParametrosTipoPerforaciones = createAction(
  ParametrosTipoPerforacionesActionsNames.DeleteParametrosTipoPerforaciones,
  props<{ edit: TipoPerforaciones}>()
);

export const deleteParametrosTipoPerforacionesSuccess = createAction(
  ParametrosTipoPerforacionesActionsNames.DeleteParametrosTipoPerforacionesSuccess,
  props<{ edit: TipoPerforaciones, apiResponse: ApiResponse}>()
);

export const deleteParametrosTipoPerforacionesFailure = createAction(
  ParametrosTipoPerforacionesActionsNames.DeleteParametrosTipoPerforacionesFailure,
  props<{ error: string }>()
);

export const sortParametrosTipoPerforaciones = createAction(
  ParametrosTipoPerforacionesActionsNames.SortParametrosTipoPerforaciones,
  props<{ column: any, direction: any}>()
);

export const filterParametrosTipoPerforaciones = createAction(
  ParametrosTipoPerforacionesActionsNames.FilterParametrosTipoPerforaciones,
  props<{ filtro: string}>()
);

export const paginatorParametrosTipoPerforaciones = createAction(
  ParametrosTipoPerforacionesActionsNames.PaginatorParametrosTipoPerforaciones,
  props<{ paginator: number}>()
);

