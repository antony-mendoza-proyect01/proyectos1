import {createAction, props} from '@ngrx/store';
import {Equipos} from '../../../../data/models/equipos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosEquiposActionsNames {
  Init = '[ParametrosEquipos] Init',
  GetAllParametrosEquipos = '[ParametrosEquipos] [Api] Get all',
  GetAllParametrosEquiposSuccess = '[ParametrosEquipos] [Api] Get all Success',
  GetAllParametrosEquiposFailure = '[ParametrosEquipos] [Api] Get all Failure',

  CreateModalParametrosEquipos = '[ParametrosEquipos] [Action] create modal',
  CreateModalParametrosEquiposSuccess = '[ParametrosEquipos] [Action] create modal Success',
  CreateModalParametrosEquiposFailure = '[ParametrosEquipos] [Action] create modal Failure',
  PostModalParametrosEquiposSuccess = '[ParametrosEquipos] [Action] [Api] create Success',
  PostModalParametrosEquiposFailure = '[ParametrosEquipos] [Action] [Api] create Failure',

  EditModalParametrosEquipos = '[ParametrosEquipos] [Action] Edit modal',
  EditModalParametrosEquiposSuccess = '[ParametrosEquipos] [Action] Edit modal Success',
  EditModalParametrosEquiposFailure = '[ParametrosEquipos] [Action] Edit modal Failure',
  PutModalParametrosEquiposSuccess = '[ParametrosEquipos] [Action] [Api] Put Success',
  PutModalParametrosEquiposFailure = '[ParametrosEquipos] [Action] [Api] Put Failure',

  DeleteParametrosEquipos = '[ParametrosEquipos] [Action] Delete',
  DeleteParametrosEquiposSuccess = '[ParametrosEquipos] [Action] [Api] Delete Success',
  DeleteParametrosEquiposFailure = '[ParametrosEquipos] [Action] [Api] Delete Failure',

  SortParametrosEquipos = '[ParametrosEquipos] [Action] Sort',
  FilterParametrosEquipos = '[ParametrosEquipos] [Action] Filter',
  PaginatorParametrosEquipos = '[ParametrosEquipos] [Action] Paginator',
}

export const initParametrosEquipos = createAction( ParametrosEquiposActionsNames.Init);

export const getAllParametrosEquipos = createAction(ParametrosEquiposActionsNames.GetAllParametrosEquipos);

export const getAllParametrosEquiposSuccess = createAction(
  ParametrosEquiposActionsNames.GetAllParametrosEquiposSuccess,
  props<{ equipos: Equipos[] , equiposFiltro: Equipos[] }>()
);

export const getAllParametrosEquiposFailure = createAction(
  ParametrosEquiposActionsNames.GetAllParametrosEquiposFailure,
  props<{  error: string   }>()
);

export const createModalParametrosEquipos = createAction(
  ParametrosEquiposActionsNames.CreateModalParametrosEquipos,
  props<{  edit: Equipos }>()
);

export const createModalParametrosEquiposSuccess = createAction(
  ParametrosEquiposActionsNames.CreateModalParametrosEquiposSuccess,
  props<{ edit: Equipos}>()
);

export const createModalParametrosEquiposFailure = createAction(
  ParametrosEquiposActionsNames.CreateModalParametrosEquiposFailure,
  props<{  edit: Equipos, error: string }>()
);

export const postModalParametrosEquiposSuccess = createAction(
  ParametrosEquiposActionsNames.PostModalParametrosEquiposSuccess,
  props<{ edit: Equipos, apiResponse: ApiResponse}>()
);

export const postModalParametrosEquiposFailure = createAction(
  ParametrosEquiposActionsNames.PostModalParametrosEquiposFailure,
  props<{  edit: Equipos, error: string }>()
);

export const editModalParametrosEquipos = createAction(
  ParametrosEquiposActionsNames.EditModalParametrosEquipos,
  props<{ edit: Equipos }>()
);

export const editModalParametrosEquiposSuccess = createAction(
  ParametrosEquiposActionsNames.EditModalParametrosEquiposSuccess,
  props<{ edit: Equipos}>()
);

export const editModalParametrosEquiposFailure = createAction(
  ParametrosEquiposActionsNames.EditModalParametrosEquiposFailure,
  props<{ error: string }>()
);

export const putModalParametrosEquiposSuccess= createAction(
  ParametrosEquiposActionsNames.PutModalParametrosEquiposSuccess,
  props<{ edit: Equipos, apiResponse: ApiResponse}>()
);

export const putModalParametrosEquiposFailure = createAction(
  ParametrosEquiposActionsNames.PutModalParametrosEquiposFailure,
  props<{  edit: Equipos, error: string }>()
);

export const deleteParametrosEquipos = createAction(
  ParametrosEquiposActionsNames.DeleteParametrosEquipos,
  props<{ edit: Equipos}>()
);

export const deleteParametrosEquiposSuccess = createAction(
  ParametrosEquiposActionsNames.DeleteParametrosEquiposSuccess,
  props<{ edit: Equipos, apiResponse: ApiResponse}>()
);

export const deleteParametrosEquiposFailure = createAction(
  ParametrosEquiposActionsNames.DeleteParametrosEquiposFailure,
  props<{ error: string }>()
);

export const sortParametrosEquipos = createAction(
  ParametrosEquiposActionsNames.SortParametrosEquipos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosEquipos = createAction(
  ParametrosEquiposActionsNames.FilterParametrosEquipos,
  props<{ filtro: string}>()
);

export const paginatorParametrosEquipos = createAction(
  ParametrosEquiposActionsNames.PaginatorParametrosEquipos,
  props<{ paginator: number}>()
);

