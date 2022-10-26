import {createAction, props} from '@ngrx/store';
import {TipoPozos} from '../../../../data/models/tipo-pozos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosTipopozosActionsNames {
  Init = '[ParametrosTipopozos] Init',
  GetAllParametrosTipopozos = '[ParametrosTipopozos] [Api] Get all',
  GetAllParametrosTipopozosSuccess = '[ParametrosTipopozos] [Api] Get all Success',
  GetAllParametrosTipopozosFailure = '[ParametrosTipopozos] [Api] Get all Failure',

  CreateModalParametrosTipopozos = '[ParametrosTipopozos] [Action] create modal',
  CreateModalParametrosTipopozosSuccess = '[ParametrosTipopozos] [Action] create modal Success',
  CreateModalParametrosTipopozosFailure = '[ParametrosTipopozos] [Action] create modal Failure',
  PostModalParametrosTipopozosSuccess = '[ParametrosTipopozos] [Action] [Api] create Success',
  PostModalParametrosTipopozosFailure = '[ParametrosTipopozos] [Action] [Api] create Failure',

  EditModalParametrosTipopozos = '[ParametrosTipopozos] [Action] Edit modal',
  EditModalParametrosTipopozosSuccess = '[ParametrosTipopozos] [Action] Edit modal Success',
  EditModalParametrosTipopozosFailure = '[ParametrosTipopozos] [Action] Edit modal Failure',
  PutModalParametrosTipopozosSuccess = '[ParametrosTipopozos] [Action] [Api] Put Success',
  PutModalParametrosTipopozosFailure = '[ParametrosTipopozos] [Action] [Api] Put Failure',

  DeleteParametrosTipopozos = '[ParametrosTipopozos] [Action] Delete',
  DeleteParametrosTipopozosSuccess = '[ParametrosTipopozos] [Action] [Api] Delete Success',
  DeleteParametrosTipopozosFailure = '[ParametrosTipopozos] [Action] [Api] Delete Failure',

  SortParametrosTipopozos = '[ParametrosTipopozos] [Action] Sort',
  FilterParametrosTipopozos = '[ParametrosTipopozos] [Action] Filter',
  PaginatorParametrosTipopozos = '[ParametrosTipopozos] [Action] Paginator',
  SelectedParametrosTipopozos = '[ParametrosTipopozos] [Action] Selected',
}

export const initParametrosTipopozos = createAction( ParametrosTipopozosActionsNames.Init);

export const getAllParametrosTipopozos = createAction(ParametrosTipopozosActionsNames.GetAllParametrosTipopozos);

export const getAllParametrosTipopozosSuccess = createAction(
  ParametrosTipopozosActionsNames.GetAllParametrosTipopozosSuccess,
  props<{ tipopozos: TipoPozos[] , tipopozosFiltro: TipoPozos[] }>()
);

export const getAllParametrosTipopozosFailure = createAction(
  ParametrosTipopozosActionsNames.GetAllParametrosTipopozosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.CreateModalParametrosTipopozos,
  props<{  edit: TipoPozos }>()
);

export const createModalParametrosTipopozosSuccess = createAction(
  ParametrosTipopozosActionsNames.CreateModalParametrosTipopozosSuccess,
  props<{ edit: TipoPozos}>()
);

export const createModalParametrosTipopozosFailure = createAction(
  ParametrosTipopozosActionsNames.CreateModalParametrosTipopozosFailure,
  props<{  edit: TipoPozos, error: string }>()
);

export const postModalParametrosTipopozosSuccess = createAction(
  ParametrosTipopozosActionsNames.PostModalParametrosTipopozosSuccess,
  props<{ edit: TipoPozos, apiResponse: ApiResponse}>()
);

export const postModalParametrosTipopozosFailure = createAction(
  ParametrosTipopozosActionsNames.PostModalParametrosTipopozosFailure,
  props<{  edit: TipoPozos, error: string }>()
);

export const editModalParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.EditModalParametrosTipopozos,
  props<{ edit: TipoPozos }>()
);

export const editModalParametrosTipopozosSuccess = createAction(
  ParametrosTipopozosActionsNames.EditModalParametrosTipopozosSuccess,
  props<{ edit: TipoPozos}>()
);

export const editModalParametrosTipopozosFailure = createAction(
  ParametrosTipopozosActionsNames.EditModalParametrosTipopozosFailure,
  props<{ error: string }>()
);

export const putModalParametrosTipopozosSuccess= createAction(
  ParametrosTipopozosActionsNames.PutModalParametrosTipopozosSuccess,
  props<{ edit: TipoPozos, apiResponse: ApiResponse}>()
);

export const putModalParametrosTipopozosFailure = createAction(
  ParametrosTipopozosActionsNames.PutModalParametrosTipopozosFailure,
  props<{  edit: TipoPozos, error: string }>()
);

export const deleteParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.DeleteParametrosTipopozos,
  props<{ edit: TipoPozos}>()
);

export const deleteParametrosTipopozosSuccess = createAction(
  ParametrosTipopozosActionsNames.DeleteParametrosTipopozosSuccess,
  props<{ edit: TipoPozos, apiResponse: ApiResponse}>()
);

export const deleteParametrosTipopozosFailure = createAction(
  ParametrosTipopozosActionsNames.DeleteParametrosTipopozosFailure,
  props<{ error: string }>()
);

export const sortParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.SortParametrosTipopozos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.FilterParametrosTipopozos,
  props<{ filtro: string}>()
);

export const paginatorParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.PaginatorParametrosTipopozos,
  props<{ paginator: number}>()
);

export const selectedParametrosTipopozos = createAction(
  ParametrosTipopozosActionsNames.SelectedParametrosTipopozos,
  props<{ tipopozosSelected: TipoPozos}>()
);
