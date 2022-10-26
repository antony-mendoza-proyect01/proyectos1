import {createAction, props} from '@ngrx/store';
import {Areas} from '../../../../data/models/areas';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosAreasActionsNames {
  Init = '[ParametrosAreas] Init',
  GetAllParametrosAreas = '[ParametrosAreas] [Api] Get all',
  GetAllParametrosAreasSuccess = '[ParametrosAreas] [Api] Get all Success',
  GetAllParametrosAreasFailure = '[ParametrosAreas] [Api] Get all Failure',

  CreateModalParametrosAreas = '[ParametrosAreas] [Action] create modal',
  CreateModalParametrosAreasSuccess = '[ParametrosAreas] [Action] create modal Success',
  CreateModalParametrosAreasFailure = '[ParametrosAreas] [Action] create modal Failure',
  PostModalParametrosAreasSuccess = '[ParametrosAreas] [Action] [Api] create Success',
  PostModalParametrosAreasFailure = '[ParametrosAreas] [Action] [Api] create Failure',

  EditModalParametrosAreas = '[ParametrosAreas] [Action] Edit modal',
  EditModalParametrosAreasSuccess = '[ParametrosAreas] [Action] Edit modal Success',
  EditModalParametrosAreasFailure = '[ParametrosAreas] [Action] Edit modal Failure',
  PutModalParametrosAreasSuccess = '[ParametrosAreas] [Action] [Api] Put Success',
  PutModalParametrosAreasFailure = '[ParametrosAreas] [Action] [Api] Put Failure',

  DeleteParametrosAreas = '[ParametrosAreas] [Action] Delete',
  DeleteParametrosAreasSuccess = '[ParametrosAreas] [Action] [Api] Delete Success',
  DeleteParametrosAreasFailure = '[ParametrosAreas] [Action] [Api] Delete Failure',

  SortParametrosAreas = '[ParametrosAreas] [Action] Sort',
  FilterParametrosAreas = '[ParametrosAreas] [Action] Filter',
  PaginatorParametrosAreas = '[ParametrosAreas] [Action] Paginator',
}

export const initParametrosAreas = createAction( ParametrosAreasActionsNames.Init);

export const getAllParametrosAreas = createAction(ParametrosAreasActionsNames.GetAllParametrosAreas);

export const getAllParametrosAreasSuccess = createAction(
  ParametrosAreasActionsNames.GetAllParametrosAreasSuccess,
  props<{ areas: Areas[] , areasFiltro: Areas[] }>()
);

export const getAllParametrosAreasFailure = createAction(
  ParametrosAreasActionsNames.GetAllParametrosAreasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosAreas = createAction(
  ParametrosAreasActionsNames.CreateModalParametrosAreas,
  props<{  edit: Areas }>()
);

export const createModalParametrosAreasSuccess = createAction(
  ParametrosAreasActionsNames.CreateModalParametrosAreasSuccess,
  props<{ edit: Areas}>()
);

export const createModalParametrosAreasFailure = createAction(
  ParametrosAreasActionsNames.CreateModalParametrosAreasFailure,
  props<{  edit: Areas, error: string }>()
);

export const postModalParametrosAreasSuccess = createAction(
  ParametrosAreasActionsNames.PostModalParametrosAreasSuccess,
  props<{ edit: Areas, apiResponse: ApiResponse}>()
);

export const postModalParametrosAreasFailure = createAction(
  ParametrosAreasActionsNames.PostModalParametrosAreasFailure,
  props<{  edit: Areas, error: string }>()
);

export const editModalParametrosAreas = createAction(
  ParametrosAreasActionsNames.EditModalParametrosAreas,
  props<{ edit: Areas }>()
);

export const editModalParametrosAreasSuccess = createAction(
  ParametrosAreasActionsNames.EditModalParametrosAreasSuccess,
  props<{ edit: Areas}>()
);

export const editModalParametrosAreasFailure = createAction(
  ParametrosAreasActionsNames.EditModalParametrosAreasFailure,
  props<{ error: string }>()
);

export const putModalParametrosAreasSuccess= createAction(
  ParametrosAreasActionsNames.PutModalParametrosAreasSuccess,
  props<{ edit: Areas, apiResponse: ApiResponse}>()
);

export const putModalParametrosAreasFailure = createAction(
  ParametrosAreasActionsNames.PutModalParametrosAreasFailure,
  props<{  edit: Areas, error: string }>()
);

export const deleteParametrosAreas = createAction(
  ParametrosAreasActionsNames.DeleteParametrosAreas,
  props<{ edit: Areas}>()
);

export const deleteParametrosAreasSuccess = createAction(
  ParametrosAreasActionsNames.DeleteParametrosAreasSuccess,
  props<{ edit: Areas, apiResponse: ApiResponse}>()
);

export const deleteParametrosAreasFailure = createAction(
  ParametrosAreasActionsNames.DeleteParametrosAreasFailure,
  props<{ error: string }>()
);

export const sortParametrosAreas = createAction(
  ParametrosAreasActionsNames.SortParametrosAreas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosAreas = createAction(
  ParametrosAreasActionsNames.FilterParametrosAreas,
  props<{ filtro: string}>()
);

export const paginatorParametrosAreas = createAction(
  ParametrosAreasActionsNames.PaginatorParametrosAreas,
  props<{ paginator: number}>()
);

