import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {DescripcionSedimentaria} from "../../../../data/models/descripcion-sedimentaria";

export enum ParametrosDescripcionSedimentariaActionsNames {
  Init = '[ParametrosDescripcionSedimentaria] Init',
  GetAllParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Api] Get all',
  GetAllParametrosDescripcionSedimentariaSuccess = '[ParametrosDescripcionSedimentaria] [Api] Get all Success',
  GetAllParametrosDescripcionSedimentariaFailure = '[ParametrosDescripcionSedimentaria] [Api] Get all Failure',

  CreateModalParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Action] create modal',
  CreateModalParametrosDescripcionSedimentariaSuccess = '[ParametrosDescripcionSedimentaria] [Action] create modal Success',
  CreateModalParametrosDescripcionSedimentariaFailure = '[ParametrosDescripcionSedimentaria] [Action] create modal Failure',
  PostModalParametrosDescripcionSedimentariaSuccess = '[ParametrosDescripcionSedimentaria] [Action] [Api] create Success',
  PostModalParametrosDescripcionSedimentariaFailure = '[ParametrosDescripcionSedimentaria] [Action] [Api] create Failure',

  EditModalParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Action] Edit modal',
  EditModalParametrosDescripcionSedimentariaSuccess = '[ParametrosDescripcionSedimentaria] [Action] Edit modal Success',
  EditModalParametrosDescripcionSedimentariaFailure = '[ParametrosDescripcionSedimentaria] [Action] Edit modal Failure',
  PutModalParametrosDescripcionSedimentariaSuccess = '[ParametrosDescripcionSedimentaria] [Action] [Api] Put Success',
  PutModalParametrosDescripcionSedimentariaFailure = '[ParametrosDescripcionSedimentaria] [Action] [Api] Put Failure',

  DeleteParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Action] Delete',
  DeleteParametrosDescripcionSedimentariaSuccess = '[ParametrosDescripcionSedimentaria] [Action] [Api] Delete Success',
  DeleteParametrosDescripcionSedimentariaFailure = '[ParametrosDescripcionSedimentaria] [Action] [Api] Delete Failure',

  SortParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Action] Sort',
  FilterParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Action] Filter',
  PaginatorParametrosDescripcionSedimentaria = '[ParametrosDescripcionSedimentaria] [Action] Paginator',
}

export const initParametrosDescripcionSedimentaria = createAction( ParametrosDescripcionSedimentariaActionsNames.Init);

export const getAllParametrosDescripcionSedimentaria = createAction(ParametrosDescripcionSedimentariaActionsNames.GetAllParametrosDescripcionSedimentaria);

export const getAllParametrosDescripcionSedimentariaSuccess = createAction(
  ParametrosDescripcionSedimentariaActionsNames.GetAllParametrosDescripcionSedimentariaSuccess,
  props<{ descripcionSedimentarias: DescripcionSedimentaria[] , descripcionSedimentariasFiltro: DescripcionSedimentaria[] }>()
);

export const getAllParametrosDescripcionSedimentariaFailure = createAction(
  ParametrosDescripcionSedimentariaActionsNames.GetAllParametrosDescripcionSedimentariaFailure,
  props<{  error: string   }>()
);

export const createModalParametrosDescripcionSedimentaria = createAction(
  ParametrosDescripcionSedimentariaActionsNames.CreateModalParametrosDescripcionSedimentaria,
  props<{  edit: DescripcionSedimentaria }>()
);

export const createModalParametrosDescripcionSedimentariaSuccess = createAction(
  ParametrosDescripcionSedimentariaActionsNames.CreateModalParametrosDescripcionSedimentariaSuccess,
  props<{ edit: DescripcionSedimentaria}>()
);

export const createModalParametrosDescripcionSedimentariaFailure = createAction(
  ParametrosDescripcionSedimentariaActionsNames.CreateModalParametrosDescripcionSedimentariaFailure,
  props<{  edit: DescripcionSedimentaria, error: string }>()
);

export const postModalParametrosDescripcionSedimentariaSuccess = createAction(
  ParametrosDescripcionSedimentariaActionsNames.PostModalParametrosDescripcionSedimentariaSuccess,
  props<{ edit: DescripcionSedimentaria, apiResponse: ApiResponse}>()
);

export const postModalParametrosDescripcionSedimentariaFailure = createAction(
  ParametrosDescripcionSedimentariaActionsNames.PostModalParametrosDescripcionSedimentariaFailure,
  props<{  edit: DescripcionSedimentaria, error: string }>()
);

export const editModalParametrosDescripcionSedimentaria = createAction(
  ParametrosDescripcionSedimentariaActionsNames.EditModalParametrosDescripcionSedimentaria,
  props<{ edit: DescripcionSedimentaria }>()
);

export const editModalParametrosDescripcionSedimentariaSuccess = createAction(
  ParametrosDescripcionSedimentariaActionsNames.EditModalParametrosDescripcionSedimentariaSuccess,
  props<{ edit: DescripcionSedimentaria}>()
);

export const editModalParametrosDescripcionSedimentariaFailure = createAction(
  ParametrosDescripcionSedimentariaActionsNames.EditModalParametrosDescripcionSedimentariaFailure,
  props<{ error: string }>()
);

export const putModalParametrosDescripcionSedimentariaSuccess= createAction(
  ParametrosDescripcionSedimentariaActionsNames.PutModalParametrosDescripcionSedimentariaSuccess,
  props<{ edit: DescripcionSedimentaria, apiResponse: ApiResponse}>()
);

export const putModalParametrosDescripcionSedimentariaFailure = createAction(
  ParametrosDescripcionSedimentariaActionsNames.PutModalParametrosDescripcionSedimentariaFailure,
  props<{  edit: DescripcionSedimentaria, error: string }>()
);

export const deleteParametrosDescripcionSedimentaria = createAction(
  ParametrosDescripcionSedimentariaActionsNames.DeleteParametrosDescripcionSedimentaria,
  props<{ edit: DescripcionSedimentaria}>()
);

export const deleteParametrosDescripcionSedimentariaSuccess = createAction(
  ParametrosDescripcionSedimentariaActionsNames.DeleteParametrosDescripcionSedimentariaSuccess,
  props<{ edit: DescripcionSedimentaria, apiResponse: ApiResponse}>()
);

export const deleteParametrosDescripcionSedimentariaFailure = createAction(
  ParametrosDescripcionSedimentariaActionsNames.DeleteParametrosDescripcionSedimentariaFailure,
  props<{ error: string }>()
);

export const sortParametrosDescripcionSedimentaria = createAction(
  ParametrosDescripcionSedimentariaActionsNames.SortParametrosDescripcionSedimentaria,
  props<{ column: any, direction: any}>()
);

export const filterParametrosDescripcionSedimentaria = createAction(
  ParametrosDescripcionSedimentariaActionsNames.FilterParametrosDescripcionSedimentaria,
  props<{ filtro: string}>()
);

export const paginatorParametrosDescripcionSedimentaria = createAction(
  ParametrosDescripcionSedimentariaActionsNames.PaginatorParametrosDescripcionSedimentaria,
  props<{ paginator: number}>()
);

