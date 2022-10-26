import {createAction, props} from '@ngrx/store';
import {Materiales} from '../../../../data/models/materiales';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosMaterialesActionsNames {
  Init = '[ParametrosMateriales] Init',
  GetAllParametrosMateriales = '[ParametrosMateriales] [Api] Get all',
  GetAllParametrosMaterialesSuccess = '[ParametrosMateriales] [Api] Get all Success',
  GetAllParametrosMaterialesFailure = '[ParametrosMateriales] [Api] Get all Failure',

  CreateModalParametrosMateriales = '[ParametrosMateriales] [Action] create modal',
  CreateModalParametrosMaterialesSuccess = '[ParametrosMateriales] [Action] create modal Success',
  CreateModalParametrosMaterialesFailure = '[ParametrosMateriales] [Action] create modal Failure',
  PostModalParametrosMaterialesSuccess = '[ParametrosMateriales] [Action] [Api] create Success',
  PostModalParametrosMaterialesFailure = '[ParametrosMateriales] [Action] [Api] create Failure',

  EditModalParametrosMateriales = '[ParametrosMateriales] [Action] Edit modal',
  EditModalParametrosMaterialesSuccess = '[ParametrosMateriales] [Action] Edit modal Success',
  EditModalParametrosMaterialesFailure = '[ParametrosMateriales] [Action] Edit modal Failure',
  PutModalParametrosMaterialesSuccess = '[ParametrosMateriales] [Action] [Api] Put Success',
  PutModalParametrosMaterialesFailure = '[ParametrosMateriales] [Action] [Api] Put Failure',

  DeleteParametrosMateriales = '[ParametrosMateriales] [Action] Delete',
  DeleteParametrosMaterialesSuccess = '[ParametrosMateriales] [Action] [Api] Delete Success',
  DeleteParametrosMaterialesFailure = '[ParametrosMateriales] [Action] [Api] Delete Failure',

  SortParametrosMateriales = '[ParametrosMateriales] [Action] Sort',
  FilterParametrosMateriales = '[ParametrosMateriales] [Action] Filter',
  PaginatorParametrosMateriales = '[ParametrosMateriales] [Action] Paginator',
}

export const initParametrosMateriales = createAction( ParametrosMaterialesActionsNames.Init);

export const getAllParametrosMateriales = createAction(ParametrosMaterialesActionsNames.GetAllParametrosMateriales);

export const getAllParametrosMaterialesSuccess = createAction(
  ParametrosMaterialesActionsNames.GetAllParametrosMaterialesSuccess,
  props<{ materiales: Materiales[] , materialesFiltro: Materiales[] }>()
);

export const getAllParametrosMaterialesFailure = createAction(
  ParametrosMaterialesActionsNames.GetAllParametrosMaterialesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosMateriales = createAction(
  ParametrosMaterialesActionsNames.CreateModalParametrosMateriales,
  props<{  edit: Materiales }>()
);

export const createModalParametrosMaterialesSuccess = createAction(
  ParametrosMaterialesActionsNames.CreateModalParametrosMaterialesSuccess,
  props<{ edit: Materiales}>()
);

export const createModalParametrosMaterialesFailure = createAction(
  ParametrosMaterialesActionsNames.CreateModalParametrosMaterialesFailure,
  props<{  edit: Materiales, error: string }>()
);

export const postModalParametrosMaterialesSuccess = createAction(
  ParametrosMaterialesActionsNames.PostModalParametrosMaterialesSuccess,
  props<{ edit: Materiales, apiResponse: ApiResponse}>()
);

export const postModalParametrosMaterialesFailure = createAction(
  ParametrosMaterialesActionsNames.PostModalParametrosMaterialesFailure,
  props<{  edit: Materiales, error: string }>()
);

export const editModalParametrosMateriales = createAction(
  ParametrosMaterialesActionsNames.EditModalParametrosMateriales,
  props<{ edit: Materiales }>()
);

export const editModalParametrosMaterialesSuccess = createAction(
  ParametrosMaterialesActionsNames.EditModalParametrosMaterialesSuccess,
  props<{ edit: Materiales}>()
);

export const editModalParametrosMaterialesFailure = createAction(
  ParametrosMaterialesActionsNames.EditModalParametrosMaterialesFailure,
  props<{ error: string }>()
);

export const putModalParametrosMaterialesSuccess= createAction(
  ParametrosMaterialesActionsNames.PutModalParametrosMaterialesSuccess,
  props<{ edit: Materiales, apiResponse: ApiResponse}>()
);

export const putModalParametrosMaterialesFailure = createAction(
  ParametrosMaterialesActionsNames.PutModalParametrosMaterialesFailure,
  props<{  edit: Materiales, error: string }>()
);

export const deleteParametrosMateriales = createAction(
  ParametrosMaterialesActionsNames.DeleteParametrosMateriales,
  props<{ edit: Materiales}>()
);

export const deleteParametrosMaterialesSuccess = createAction(
  ParametrosMaterialesActionsNames.DeleteParametrosMaterialesSuccess,
  props<{ edit: Materiales, apiResponse: ApiResponse}>()
);

export const deleteParametrosMaterialesFailure = createAction(
  ParametrosMaterialesActionsNames.DeleteParametrosMaterialesFailure,
  props<{ error: string }>()
);

export const sortParametrosMateriales = createAction(
  ParametrosMaterialesActionsNames.SortParametrosMateriales,
  props<{ column: any, direction: any}>()
);

export const filterParametrosMateriales = createAction(
  ParametrosMaterialesActionsNames.FilterParametrosMateriales,
  props<{ filtro: string}>()
);

export const paginatorParametrosMateriales = createAction(
  ParametrosMaterialesActionsNames.PaginatorParametrosMateriales,
  props<{ paginator: number}>()
);

