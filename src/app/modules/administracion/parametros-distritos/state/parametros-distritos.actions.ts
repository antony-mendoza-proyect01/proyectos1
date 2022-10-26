import {createAction, props} from '@ngrx/store';
import {Distritos} from '../../../../data/models/distritos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosDistritosActionsNames {
  Init = '[ParametrosDistritos] Init',
  GetAllParametrosDistritos = '[ParametrosDistritos] [Api] Get all',
  GetAllParametrosDistritosSuccess = '[ParametrosDistritos] [Api] Get all Success',
  GetAllParametrosDistritosFailure = '[ParametrosDistritos] [Api] Get all Failure',

  CreateModalParametrosDistritos = '[ParametrosDistritos] [Action] create modal',
  CreateModalParametrosDistritosSuccess = '[ParametrosDistritos] [Action] create modal Success',
  CreateModalParametrosDistritosFailure = '[ParametrosDistritos] [Action] create modal Failure',
  PostModalParametrosDistritosSuccess = '[ParametrosDistritos] [Action] [Api] create Success',
  PostModalParametrosDistritosFailure = '[ParametrosDistritos] [Action] [Api] create Failure',

  EditModalParametrosDistritos = '[ParametrosDistritos] [Action] Edit modal',
  EditModalParametrosDistritosSuccess = '[ParametrosDistritos] [Action] Edit modal Success',
  EditModalParametrosDistritosFailure = '[ParametrosDistritos] [Action] Edit modal Failure',
  PutModalParametrosDistritosSuccess = '[ParametrosDistritos] [Action] [Api] Put Success',
  PutModalParametrosDistritosFailure = '[ParametrosDistritos] [Action] [Api] Put Failure',

  DeleteParametrosDistritos = '[ParametrosDistritos] [Action] Delete',
  DeleteParametrosDistritosSuccess = '[ParametrosDistritos] [Action] [Api] Delete Success',
  DeleteParametrosDistritosFailure = '[ParametrosDistritos] [Action] [Api] Delete Failure',

  SortParametrosDistritos = '[ParametrosDistritos] [Action] Sort',
  FilterParametrosDistritos = '[ParametrosDistritos] [Action] Filter',
  PaginatorParametrosDistritos = '[ParametrosDistritos] [Action] Paginator',
}

export const initParametrosDistritos = createAction( ParametrosDistritosActionsNames.Init);

export const getAllParametrosDistritos = createAction(ParametrosDistritosActionsNames.GetAllParametrosDistritos);

export const getAllParametrosDistritosSuccess = createAction(
  ParametrosDistritosActionsNames.GetAllParametrosDistritosSuccess,
  props<{ distritos: Distritos[] , distritosFiltro: Distritos[] }>()
);

export const getAllParametrosDistritosFailure = createAction(
  ParametrosDistritosActionsNames.GetAllParametrosDistritosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosDistritos = createAction(
  ParametrosDistritosActionsNames.CreateModalParametrosDistritos,
  props<{  edit: Distritos }>()
);

export const createModalParametrosDistritosSuccess = createAction(
  ParametrosDistritosActionsNames.CreateModalParametrosDistritosSuccess,
  props<{ edit: Distritos}>()
);

export const createModalParametrosDistritosFailure = createAction(
  ParametrosDistritosActionsNames.CreateModalParametrosDistritosFailure,
  props<{  edit: Distritos, error: string }>()
);

export const postModalParametrosDistritosSuccess = createAction(
  ParametrosDistritosActionsNames.PostModalParametrosDistritosSuccess,
  props<{ edit: Distritos, apiResponse: ApiResponse}>()
);

export const postModalParametrosDistritosFailure = createAction(
  ParametrosDistritosActionsNames.PostModalParametrosDistritosFailure,
  props<{  edit: Distritos, error: string }>()
);

export const editModalParametrosDistritos = createAction(
  ParametrosDistritosActionsNames.EditModalParametrosDistritos,
  props<{ edit: Distritos }>()
);

export const editModalParametrosDistritosSuccess = createAction(
  ParametrosDistritosActionsNames.EditModalParametrosDistritosSuccess,
  props<{ edit: Distritos}>()
);

export const editModalParametrosDistritosFailure = createAction(
  ParametrosDistritosActionsNames.EditModalParametrosDistritosFailure,
  props<{ error: string }>()
);

export const putModalParametrosDistritosSuccess= createAction(
  ParametrosDistritosActionsNames.PutModalParametrosDistritosSuccess,
  props<{ edit: Distritos, apiResponse: ApiResponse}>()
);

export const putModalParametrosDistritosFailure = createAction(
  ParametrosDistritosActionsNames.PutModalParametrosDistritosFailure,
  props<{  edit: Distritos, error: string }>()
);

export const deleteParametrosDistritos = createAction(
  ParametrosDistritosActionsNames.DeleteParametrosDistritos,
  props<{ edit: Distritos}>()
);

export const deleteParametrosDistritosSuccess = createAction(
  ParametrosDistritosActionsNames.DeleteParametrosDistritosSuccess,
  props<{ edit: Distritos, apiResponse: ApiResponse}>()
);

export const deleteParametrosDistritosFailure = createAction(
  ParametrosDistritosActionsNames.DeleteParametrosDistritosFailure,
  props<{ error: string }>()
);

export const sortParametrosDistritos = createAction(
  ParametrosDistritosActionsNames.SortParametrosDistritos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosDistritos = createAction(
  ParametrosDistritosActionsNames.FilterParametrosDistritos,
  props<{ filtro: string}>()
);

export const paginatorParametrosDistritos = createAction(
  ParametrosDistritosActionsNames.PaginatorParametrosDistritos,
  props<{ paginator: number}>()
);

