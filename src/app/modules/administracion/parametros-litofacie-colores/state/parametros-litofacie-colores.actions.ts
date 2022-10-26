import {createAction, props} from '@ngrx/store';
import { LitofacieColores } from 'src/app/data/models/litofacie-colores';

import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosLitofacieColoresActionsNames {
  Init = '[ParametrosLitofacieColores] Init',
  GetAllParametrosLitofacieColores = '[ParametrosLitofacieColores] [Api] Get all',
  GetAllParametrosLitofacieColoresSuccess = '[ParametrosLitofacieColores] [Api] Get all Success',
  GetAllParametrosLitofacieColoresFailure = '[ParametrosLitofacieColores] [Api] Get all Failure',

  CreateModalParametrosLitofacieColores = '[ParametrosLitofacieColores] [Action] create modal',
  CreateModalParametrosLitofacieColoresSuccess = '[ParametrosLitofacieColores] [Action] create modal Success',
  CreateModalParametrosLitofacieColoresFailure = '[ParametrosLitofacieColores] [Action] create modal Failure',
  PostModalParametrosLitofacieColoresSuccess = '[ParametrosLitofacieColores] [Action] [Api] create Success',
  PostModalParametrosLitofacieColoresFailure = '[ParametrosLitofacieColores] [Action] [Api] create Failure',

  EditModalParametrosLitofacieColores = '[ParametrosLitofacieColores] [Action] Edit modal',
  EditModalParametrosLitofacieColoresSuccess = '[ParametrosLitofacieColores] [Action] Edit modal Success',
  EditModalParametrosLitofacieColoresFailure = '[ParametrosLitofacieColores] [Action] Edit modal Failure',
  PutModalParametrosLitofacieColoresSuccess = '[ParametrosLitofacieColores] [Action] [Api] Put Success',
  PutModalParametrosLitofacieColoresFailure = '[ParametrosLitofacieColores] [Action] [Api] Put Failure',

  DeleteParametrosLitofacieColores = '[ParametrosLitofacieColores] [Action] Delete',
  DeleteParametrosLitofacieColoresSuccess = '[ParametrosLitofacieColores] [Action] [Api] Delete Success',
  DeleteParametrosLitofacieColoresFailure = '[ParametrosLitofacieColores] [Action] [Api] Delete Failure',

  SortParametrosLitofacieColores = '[ParametrosLitofacieColores] [Action] Sort',
  FilterParametrosLitofacieColores = '[ParametrosLitofacieColores] [Action] Filter',
  PaginatorParametrosLitofacieColores = '[ParametrosLitofacieColores] [Action] Paginator',
}

export const initParametrosLitofacieColores = createAction( ParametrosLitofacieColoresActionsNames.Init);

export const getAllParametrosLitofacieColores = createAction(ParametrosLitofacieColoresActionsNames.GetAllParametrosLitofacieColores);

export const getAllParametrosLitofacieColoresSuccess = createAction(
  ParametrosLitofacieColoresActionsNames.GetAllParametrosLitofacieColoresSuccess,
  props<{ litofacies: LitofacieColores[] , litofaciesFiltro: LitofacieColores[] }>()
);

export const getAllParametrosLitofacieColoresFailure = createAction(
  ParametrosLitofacieColoresActionsNames.GetAllParametrosLitofacieColoresFailure,
  props<{  error: string   }>()
);

export const createModalParametrosLitofacieColores = createAction(
  ParametrosLitofacieColoresActionsNames.CreateModalParametrosLitofacieColores,
  props<{  edit: LitofacieColores }>()
);

export const createModalParametrosLitofacieColoresSuccess = createAction(
  ParametrosLitofacieColoresActionsNames.CreateModalParametrosLitofacieColoresSuccess,
  props<{ edit: LitofacieColores}>()
);

export const createModalParametrosLitofacieColoresFailure = createAction(
  ParametrosLitofacieColoresActionsNames.CreateModalParametrosLitofacieColoresFailure,
  props<{  edit: LitofacieColores, error: string }>()
);

export const postModalParametrosLitofacieColoresSuccess = createAction(
  ParametrosLitofacieColoresActionsNames.PostModalParametrosLitofacieColoresSuccess,
  props<{ edit: LitofacieColores, apiResponse: ApiResponse}>()
);

export const postModalParametrosLitofacieColoresFailure = createAction(
  ParametrosLitofacieColoresActionsNames.PostModalParametrosLitofacieColoresFailure,
  props<{  edit: LitofacieColores, error: string }>()
);

export const editModalParametrosLitofacieColores = createAction(
  ParametrosLitofacieColoresActionsNames.EditModalParametrosLitofacieColores,
  props<{ edit: LitofacieColores }>()
);

export const editModalParametrosLitofacieColoresSuccess = createAction(
  ParametrosLitofacieColoresActionsNames.EditModalParametrosLitofacieColoresSuccess,
  props<{ edit: LitofacieColores}>()
);

export const editModalParametrosLitofacieColoresFailure = createAction(
  ParametrosLitofacieColoresActionsNames.EditModalParametrosLitofacieColoresFailure,
  props<{ error: string }>()
);

export const putModalParametrosLitofacieColoresSuccess= createAction(
  ParametrosLitofacieColoresActionsNames.PutModalParametrosLitofacieColoresSuccess,
  props<{ edit: LitofacieColores, apiResponse: ApiResponse}>()
);

export const putModalParametrosLitofacieColoresFailure = createAction(
  ParametrosLitofacieColoresActionsNames.PutModalParametrosLitofacieColoresFailure,
  props<{  edit: LitofacieColores, error: string }>()
);

export const deleteParametrosLitofacieColores = createAction(
  ParametrosLitofacieColoresActionsNames.DeleteParametrosLitofacieColores,
  props<{ edit: LitofacieColores}>()
);

export const deleteParametrosLitofacieColoresSuccess = createAction(
  ParametrosLitofacieColoresActionsNames.DeleteParametrosLitofacieColoresSuccess,
  props<{ edit: LitofacieColores, apiResponse: ApiResponse}>()
);

export const deleteParametrosLitofacieColoresFailure = createAction(
  ParametrosLitofacieColoresActionsNames.DeleteParametrosLitofacieColoresFailure,
  props<{ error: string }>()
);

export const sortParametrosLitofacieColores = createAction(
  ParametrosLitofacieColoresActionsNames.SortParametrosLitofacieColores,
  props<{ column: any, direction: any}>()
);

export const filterParametrosLitofacieColores = createAction(
  ParametrosLitofacieColoresActionsNames.FilterParametrosLitofacieColores,
  props<{ filtro: string}>()
);

export const paginatorParametrosLitofacieColores = createAction(
  ParametrosLitofacieColoresActionsNames.PaginatorParametrosLitofacieColores,
  props<{ paginator: number}>()
);

