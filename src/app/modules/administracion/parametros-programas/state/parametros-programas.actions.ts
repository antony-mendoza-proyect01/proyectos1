import {createAction, props} from '@ngrx/store';
import {Programas} from '../../../../data/models/programas';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosProgramasActionsNames {
  Init = '[ParametrosProgramas] Init',
  GetAllParametrosProgramas = '[ParametrosProgramas] [Api] Get all',
  GetAllParametrosProgramasSuccess = '[ParametrosProgramas] [Api] Get all Success',
  GetAllParametrosProgramasFailure = '[ParametrosProgramas] [Api] Get all Failure',

  CreateModalParametrosProgramas = '[ParametrosProgramas] [Action] create modal',
  CreateModalParametrosProgramasSuccess = '[ParametrosProgramas] [Action] create modal Success',
  CreateModalParametrosProgramasFailure = '[ParametrosProgramas] [Action] create modal Failure',
  PostModalParametrosProgramasSuccess = '[ParametrosProgramas] [Action] [Api] create Success',
  PostModalParametrosProgramasFailure = '[ParametrosProgramas] [Action] [Api] create Failure',

  EditModalParametrosProgramas = '[ParametrosProgramas] [Action] Edit modal',
  EditModalParametrosProgramasSuccess = '[ParametrosProgramas] [Action] Edit modal Success',
  EditModalParametrosProgramasFailure = '[ParametrosProgramas] [Action] Edit modal Failure',
  PutModalParametrosProgramasSuccess = '[ParametrosProgramas] [Action] [Api] Put Success',
  PutModalParametrosProgramasFailure = '[ParametrosProgramas] [Action] [Api] Put Failure',

  DeleteParametrosProgramas = '[ParametrosProgramas] [Action] Delete',
  DeleteParametrosProgramasSuccess = '[ParametrosProgramas] [Action] [Api] Delete Success',
  DeleteParametrosProgramasFailure = '[ParametrosProgramas] [Action] [Api] Delete Failure',

  SortParametrosProgramas = '[ParametrosProgramas] [Action] Sort',
  FilterParametrosProgramas = '[ParametrosProgramas] [Action] Filter',
  PaginatorParametrosProgramas = '[ParametrosProgramas] [Action] Paginator',
}

export const initParametrosProgramas = createAction( ParametrosProgramasActionsNames.Init);

export const getAllParametrosProgramas = createAction(ParametrosProgramasActionsNames.GetAllParametrosProgramas);

export const getAllParametrosProgramasSuccess = createAction(
  ParametrosProgramasActionsNames.GetAllParametrosProgramasSuccess,
  props<{ programas: Programas[] , programasFiltro: Programas[] }>()
);

export const getAllParametrosProgramasFailure = createAction(
  ParametrosProgramasActionsNames.GetAllParametrosProgramasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosProgramas = createAction(
  ParametrosProgramasActionsNames.CreateModalParametrosProgramas,
  props<{  edit: Programas }>()
);

export const createModalParametrosProgramasSuccess = createAction(
  ParametrosProgramasActionsNames.CreateModalParametrosProgramasSuccess,
  props<{ edit: Programas}>()
);

export const createModalParametrosProgramasFailure = createAction(
  ParametrosProgramasActionsNames.CreateModalParametrosProgramasFailure,
  props<{  edit: Programas, error: string }>()
);

export const postModalParametrosProgramasSuccess = createAction(
  ParametrosProgramasActionsNames.PostModalParametrosProgramasSuccess,
  props<{ edit: Programas, apiResponse: ApiResponse}>()
);

export const postModalParametrosProgramasFailure = createAction(
  ParametrosProgramasActionsNames.PostModalParametrosProgramasFailure,
  props<{  edit: Programas, error: string }>()
);

export const editModalParametrosProgramas = createAction(
  ParametrosProgramasActionsNames.EditModalParametrosProgramas,
  props<{ edit: Programas }>()
);

export const editModalParametrosProgramasSuccess = createAction(
  ParametrosProgramasActionsNames.EditModalParametrosProgramasSuccess,
  props<{ edit: Programas}>()
);

export const editModalParametrosProgramasFailure = createAction(
  ParametrosProgramasActionsNames.EditModalParametrosProgramasFailure,
  props<{ error: string }>()
);

export const putModalParametrosProgramasSuccess= createAction(
  ParametrosProgramasActionsNames.PutModalParametrosProgramasSuccess,
  props<{ edit: Programas, apiResponse: ApiResponse}>()
);

export const putModalParametrosProgramasFailure = createAction(
  ParametrosProgramasActionsNames.PutModalParametrosProgramasFailure,
  props<{  edit: Programas, error: string }>()
);

export const deleteParametrosProgramas = createAction(
  ParametrosProgramasActionsNames.DeleteParametrosProgramas,
  props<{ edit: Programas}>()
);

export const deleteParametrosProgramasSuccess = createAction(
  ParametrosProgramasActionsNames.DeleteParametrosProgramasSuccess,
  props<{ edit: Programas, apiResponse: ApiResponse}>()
);

export const deleteParametrosProgramasFailure = createAction(
  ParametrosProgramasActionsNames.DeleteParametrosProgramasFailure,
  props<{ error: string }>()
);

export const sortParametrosProgramas = createAction(
  ParametrosProgramasActionsNames.SortParametrosProgramas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosProgramas = createAction(
  ParametrosProgramasActionsNames.FilterParametrosProgramas,
  props<{ filtro: string}>()
);

export const paginatorParametrosProgramas = createAction(
  ParametrosProgramasActionsNames.PaginatorParametrosProgramas,
  props<{ paginator: number}>()
);

