import {createAction, props} from '@ngrx/store';
import { Caudales } from 'src/app/data/models/caudales';

import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosCaudalesActionsNames {
  Init = '[ParametrosCaudales] Init',
  GetAllParametrosCaudales = '[ParametrosCaudales] [Api] Get all',
  GetAllParametrosCaudalesSuccess = '[ParametrosCaudales] [Api] Get all Success',
  GetAllParametrosCaudalesFailure = '[ParametrosCaudales] [Api] Get all Failure',

  CreateModalParametrosCaudales = '[ParametrosCaudales] [Action] create modal',
  CreateModalParametrosCaudalesSuccess = '[ParametrosCaudales] [Action] create modal Success',
  CreateModalParametrosCaudalesFailure = '[ParametrosCaudales] [Action] create modal Failure',
  PostModalParametrosCaudalesSuccess = '[ParametrosCaudales] [Action] [Api] create Success',
  PostModalParametrosCaudalesFailure = '[ParametrosCaudales] [Action] [Api] create Failure',

  EditModalParametrosCaudales = '[ParametrosCaudales] [Action] Edit modal',
  EditModalParametrosCaudalesSuccess = '[ParametrosCaudales] [Action] Edit modal Success',
  EditModalParametrosCaudalesFailure = '[ParametrosCaudales] [Action] Edit modal Failure',
  PutModalParametrosCaudalesSuccess = '[ParametrosCaudales] [Action] [Api] Put Success',
  PutModalParametrosCaudalesFailure = '[ParametrosCaudales] [Action] [Api] Put Failure',

  DeleteParametrosCaudales = '[ParametrosCaudales] [Action] Delete',
  DeleteParametrosCaudalesSuccess = '[ParametrosCaudales] [Action] [Api] Delete Success',
  DeleteParametrosCaudalesFailure = '[ParametrosCaudales] [Action] [Api] Delete Failure',

  SortParametrosCaudales = '[ParametrosCaudales] [Action] Sort',
  FilterParametrosCaudales = '[ParametrosCaudales] [Action] Filter',
  PaginatorParametrosCaudales = '[ParametrosCaudales] [Action] Paginator',
}

export const initParametrosCaudales = createAction( ParametrosCaudalesActionsNames.Init);

export const getAllParametrosCaudales = createAction(ParametrosCaudalesActionsNames.GetAllParametrosCaudales);

export const getAllParametrosCaudalesSuccess = createAction(
  ParametrosCaudalesActionsNames.GetAllParametrosCaudalesSuccess,
  props<{ caudales: Caudales[] , caudalesFiltro: Caudales[] }>()
);

export const getAllParametrosCaudalesFailure = createAction(
  ParametrosCaudalesActionsNames.GetAllParametrosCaudalesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosCaudales = createAction(
  ParametrosCaudalesActionsNames.CreateModalParametrosCaudales,
  props<{  edit: Caudales }>()
);

export const createModalParametrosCaudalesSuccess = createAction(
  ParametrosCaudalesActionsNames.CreateModalParametrosCaudalesSuccess,
  props<{ edit: Caudales}>()
);

export const createModalParametrosCaudalesFailure = createAction(
  ParametrosCaudalesActionsNames.CreateModalParametrosCaudalesFailure,
  props<{  edit: Caudales, error: string }>()
);

export const postModalParametrosCaudalesSuccess = createAction(
  ParametrosCaudalesActionsNames.PostModalParametrosCaudalesSuccess,
  props<{ edit: Caudales, apiResponse: ApiResponse}>()
);

export const postModalParametrosCaudalesFailure = createAction(
  ParametrosCaudalesActionsNames.PostModalParametrosCaudalesFailure,
  props<{  edit: Caudales, error: string }>()
);

export const editModalParametrosCaudales = createAction(
  ParametrosCaudalesActionsNames.EditModalParametrosCaudales,
  props<{ edit: Caudales }>()
);

export const editModalParametrosCaudalesSuccess = createAction(
  ParametrosCaudalesActionsNames.EditModalParametrosCaudalesSuccess,
  props<{ edit: Caudales}>()
);

export const editModalParametrosCaudalesFailure = createAction(
  ParametrosCaudalesActionsNames.EditModalParametrosCaudalesFailure,
  props<{ error: string }>()
);

export const putModalParametrosCaudalesSuccess= createAction(
  ParametrosCaudalesActionsNames.PutModalParametrosCaudalesSuccess,
  props<{ edit: Caudales, apiResponse: ApiResponse}>()
);

export const putModalParametrosCaudalesFailure = createAction(
  ParametrosCaudalesActionsNames.PutModalParametrosCaudalesFailure,
  props<{  edit: Caudales, error: string }>()
);

export const deleteParametrosCaudales = createAction(
  ParametrosCaudalesActionsNames.DeleteParametrosCaudales,
  props<{ edit: Caudales}>()
);

export const deleteParametrosCaudalesSuccess = createAction(
  ParametrosCaudalesActionsNames.DeleteParametrosCaudalesSuccess,
  props<{ edit: Caudales, apiResponse: ApiResponse}>()
);

export const deleteParametrosCaudalesFailure = createAction(
  ParametrosCaudalesActionsNames.DeleteParametrosCaudalesFailure,
  props<{ error: string }>()
);

export const sortParametrosCaudales = createAction(
  ParametrosCaudalesActionsNames.SortParametrosCaudales,
  props<{ column: any, direction: any}>()
);

export const filterParametrosCaudales = createAction(
  ParametrosCaudalesActionsNames.FilterParametrosCaudales,
  props<{ filtro: string}>()
);

export const paginatorParametrosCaudales = createAction(
  ParametrosCaudalesActionsNames.PaginatorParametrosCaudales,
  props<{ paginator: number}>()
);

