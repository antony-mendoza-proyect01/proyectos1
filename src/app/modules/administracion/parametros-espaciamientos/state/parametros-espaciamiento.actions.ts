import {createAction, props} from '@ngrx/store';
import {Espaciamiento} from '../../../../data/models/espaciamiento';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosEspaciamientoActionsNames {
  Init = '[ParametrosEspaciamiento] Init',
  GetAllParametrosEspaciamiento = '[ParametrosEspaciamiento] [Api] Get all',
  GetAllParametrosEspaciamientoSuccess = '[ParametrosEspaciamiento] [Api] Get all Success',
  GetAllParametrosEspaciamientoFailure = '[ParametrosEspaciamiento] [Api] Get all Failure',

  CreateModalParametrosEspaciamiento = '[ParametrosEspaciamiento] [Action] create modal',
  CreateModalParametrosEspaciamientoSuccess = '[ParametrosEspaciamiento] [Action] create modal Success',
  CreateModalParametrosEspaciamientoFailure = '[ParametrosEspaciamiento] [Action] create modal Failure',
  PostModalParametrosEspaciamientoSuccess = '[ParametrosEspaciamiento] [Action] [Api] create Success',
  PostModalParametrosEspaciamientoFailure = '[ParametrosEspaciamiento] [Action] [Api] create Failure',

  EditModalParametrosEspaciamiento = '[ParametrosEspaciamiento] [Action] Edit modal',
  EditModalParametrosEspaciamientoSuccess = '[ParametrosEspaciamiento] [Action] Edit modal Success',
  EditModalParametrosEspaciamientoFailure = '[ParametrosEspaciamiento] [Action] Edit modal Failure',
  PutModalParametrosEspaciamientoSuccess = '[ParametrosEspaciamiento] [Action] [Api] Put Success',
  PutModalParametrosEspaciamientoFailure = '[ParametrosEspaciamiento] [Action] [Api] Put Failure',

  DeleteParametrosEspaciamiento = '[ParametrosEspaciamiento] [Action] Delete',
  DeleteParametrosEspaciamientoSuccess = '[ParametrosEspaciamiento] [Action] [Api] Delete Success',
  DeleteParametrosEspaciamientoFailure = '[ParametrosEspaciamiento] [Action] [Api] Delete Failure',

  SortParametrosEspaciamiento = '[ParametrosEspaciamiento] [Action] Sort',
  FilterParametrosEspaciamiento = '[ParametrosEspaciamiento] [Action] Filter',
  PaginatorParametrosEspaciamiento = '[ParametrosEspaciamiento] [Action] Paginator',
}

export const initParametrosEspaciamiento = createAction( ParametrosEspaciamientoActionsNames.Init);

export const getAllParametrosEspaciamiento = createAction(ParametrosEspaciamientoActionsNames.GetAllParametrosEspaciamiento);

export const getAllParametrosEspaciamientoSuccess = createAction(
  ParametrosEspaciamientoActionsNames.GetAllParametrosEspaciamientoSuccess,
  props<{ espaciamientos: Espaciamiento[] , espaciamientosFiltro: Espaciamiento[] }>()
);

export const getAllParametrosEspaciamientoFailure = createAction(
  ParametrosEspaciamientoActionsNames.GetAllParametrosEspaciamientoFailure,
  props<{  error: string   }>()
);

export const createModalParametrosEspaciamiento = createAction(
  ParametrosEspaciamientoActionsNames.CreateModalParametrosEspaciamiento,
  props<{  edit: Espaciamiento }>()
);

export const createModalParametrosEspaciamientoSuccess = createAction(
  ParametrosEspaciamientoActionsNames.CreateModalParametrosEspaciamientoSuccess,
  props<{ edit: Espaciamiento}>()
);

export const createModalParametrosEspaciamientoFailure = createAction(
  ParametrosEspaciamientoActionsNames.CreateModalParametrosEspaciamientoFailure,
  props<{  edit: Espaciamiento, error: string }>()
);

export const postModalParametrosEspaciamientoSuccess = createAction(
  ParametrosEspaciamientoActionsNames.PostModalParametrosEspaciamientoSuccess,
  props<{ edit: Espaciamiento, apiResponse: ApiResponse}>()
);

export const postModalParametrosEspaciamientoFailure = createAction(
  ParametrosEspaciamientoActionsNames.PostModalParametrosEspaciamientoFailure,
  props<{  edit: Espaciamiento, error: string }>()
);

export const editModalParametrosEspaciamiento = createAction(
  ParametrosEspaciamientoActionsNames.EditModalParametrosEspaciamiento,
  props<{ edit: Espaciamiento }>()
);

export const editModalParametrosEspaciamientoSuccess = createAction(
  ParametrosEspaciamientoActionsNames.EditModalParametrosEspaciamientoSuccess,
  props<{ edit: Espaciamiento}>()
);

export const editModalParametrosEspaciamientoFailure = createAction(
  ParametrosEspaciamientoActionsNames.EditModalParametrosEspaciamientoFailure,
  props<{ error: string }>()
);

export const putModalParametrosEspaciamientoSuccess= createAction(
  ParametrosEspaciamientoActionsNames.PutModalParametrosEspaciamientoSuccess,
  props<{ edit: Espaciamiento, apiResponse: ApiResponse}>()
);

export const putModalParametrosEspaciamientoFailure = createAction(
  ParametrosEspaciamientoActionsNames.PutModalParametrosEspaciamientoFailure,
  props<{  edit: Espaciamiento, error: string }>()
);

export const deleteParametrosEspaciamiento = createAction(
  ParametrosEspaciamientoActionsNames.DeleteParametrosEspaciamiento,
  props<{ edit: Espaciamiento}>()
);

export const deleteParametrosEspaciamientoSuccess = createAction(
  ParametrosEspaciamientoActionsNames.DeleteParametrosEspaciamientoSuccess,
  props<{ edit: Espaciamiento, apiResponse: ApiResponse}>()
);

export const deleteParametrosEspaciamientoFailure = createAction(
  ParametrosEspaciamientoActionsNames.DeleteParametrosEspaciamientoFailure,
  props<{ error: string }>()
);

export const sortParametrosEspaciamiento = createAction(
  ParametrosEspaciamientoActionsNames.SortParametrosEspaciamiento,
  props<{ column: any, direction: any}>()
);

export const filterParametrosEspaciamiento = createAction(
  ParametrosEspaciamientoActionsNames.FilterParametrosEspaciamiento,
  props<{ filtro: string}>()
);

export const paginatorParametrosEspaciamiento = createAction(
  ParametrosEspaciamientoActionsNames.PaginatorParametrosEspaciamiento,
  props<{ paginator: number}>()
);

