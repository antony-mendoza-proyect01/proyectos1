import {createAction, props} from '@ngrx/store';
import {Fluidos} from '../../../../data/models/fluidos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosFluidosActionsNames {
  Init = '[ParametrosFluidos] Init',
  GetAllParametrosFluidos = '[ParametrosFluidos] [Api] Get all',
  GetAllParametrosFluidosSuccess = '[ParametrosFluidos] [Api] Get all Success',
  GetAllParametrosFluidosFailure = '[ParametrosFluidos] [Api] Get all Failure',

  CreateModalParametrosFluidos = '[ParametrosFluidos] [Action] create modal',
  CreateModalParametrosFluidosSuccess = '[ParametrosFluidos] [Action] create modal Success',
  CreateModalParametrosFluidosFailure = '[ParametrosFluidos] [Action] create modal Failure',
  PostModalParametrosFluidosSuccess = '[ParametrosFluidos] [Action] [Api] create Success',
  PostModalParametrosFluidosFailure = '[ParametrosFluidos] [Action] [Api] create Failure',

  EditModalParametrosFluidos = '[ParametrosFluidos] [Action] Edit modal',
  EditModalParametrosFluidosSuccess = '[ParametrosFluidos] [Action] Edit modal Success',
  EditModalParametrosFluidosFailure = '[ParametrosFluidos] [Action] Edit modal Failure',
  PutModalParametrosFluidosSuccess = '[ParametrosFluidos] [Action] [Api] Put Success',
  PutModalParametrosFluidosFailure = '[ParametrosFluidos] [Action] [Api] Put Failure',

  DeleteParametrosFluidos = '[ParametrosFluidos] [Action] Delete',
  DeleteParametrosFluidosSuccess = '[ParametrosFluidos] [Action] [Api] Delete Success',
  DeleteParametrosFluidosFailure = '[ParametrosFluidos] [Action] [Api] Delete Failure',

  SortParametrosFluidos = '[ParametrosFluidos] [Action] Sort',
  FilterParametrosFluidos = '[ParametrosFluidos] [Action] Filter',
  PaginatorParametrosFluidos = '[ParametrosFluidos] [Action] Paginator',
}

export const initParametrosFluidos = createAction( ParametrosFluidosActionsNames.Init);

export const getAllParametrosFluidos = createAction(ParametrosFluidosActionsNames.GetAllParametrosFluidos);

export const getAllParametrosFluidosSuccess = createAction(
  ParametrosFluidosActionsNames.GetAllParametrosFluidosSuccess,
  props<{ fluidos: Fluidos[] , fluidosFiltro: Fluidos[] }>()
);

export const getAllParametrosFluidosFailure = createAction(
  ParametrosFluidosActionsNames.GetAllParametrosFluidosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosFluidos = createAction(
  ParametrosFluidosActionsNames.CreateModalParametrosFluidos,
  props<{  edit: Fluidos }>()
);

export const createModalParametrosFluidosSuccess = createAction(
  ParametrosFluidosActionsNames.CreateModalParametrosFluidosSuccess,
  props<{ edit: Fluidos}>()
);

export const createModalParametrosFluidosFailure = createAction(
  ParametrosFluidosActionsNames.CreateModalParametrosFluidosFailure,
  props<{  edit: Fluidos, error: string }>()
);

export const postModalParametrosFluidosSuccess = createAction(
  ParametrosFluidosActionsNames.PostModalParametrosFluidosSuccess,
  props<{ edit: Fluidos, apiResponse: ApiResponse}>()
);

export const postModalParametrosFluidosFailure = createAction(
  ParametrosFluidosActionsNames.PostModalParametrosFluidosFailure,
  props<{  edit: Fluidos, error: string }>()
);

export const editModalParametrosFluidos = createAction(
  ParametrosFluidosActionsNames.EditModalParametrosFluidos,
  props<{ edit: Fluidos }>()
);

export const editModalParametrosFluidosSuccess = createAction(
  ParametrosFluidosActionsNames.EditModalParametrosFluidosSuccess,
  props<{ edit: Fluidos}>()
);

export const editModalParametrosFluidosFailure = createAction(
  ParametrosFluidosActionsNames.EditModalParametrosFluidosFailure,
  props<{ error: string }>()
);

export const putModalParametrosFluidosSuccess= createAction(
  ParametrosFluidosActionsNames.PutModalParametrosFluidosSuccess,
  props<{ edit: Fluidos, apiResponse: ApiResponse}>()
);

export const putModalParametrosFluidosFailure = createAction(
  ParametrosFluidosActionsNames.PutModalParametrosFluidosFailure,
  props<{  edit: Fluidos, error: string }>()
);

export const deleteParametrosFluidos = createAction(
  ParametrosFluidosActionsNames.DeleteParametrosFluidos,
  props<{ edit: Fluidos}>()
);

export const deleteParametrosFluidosSuccess = createAction(
  ParametrosFluidosActionsNames.DeleteParametrosFluidosSuccess,
  props<{ edit: Fluidos, apiResponse: ApiResponse}>()
);

export const deleteParametrosFluidosFailure = createAction(
  ParametrosFluidosActionsNames.DeleteParametrosFluidosFailure,
  props<{ error: string }>()
);

export const sortParametrosFluidos = createAction(
  ParametrosFluidosActionsNames.SortParametrosFluidos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosFluidos = createAction(
  ParametrosFluidosActionsNames.FilterParametrosFluidos,
  props<{ filtro: string}>()
);

export const paginatorParametrosFluidos = createAction(
  ParametrosFluidosActionsNames.PaginatorParametrosFluidos,
  props<{ paginator: number}>()
);

