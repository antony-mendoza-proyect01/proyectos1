import {createAction, props} from '@ngrx/store';
import {Turnos} from '../../../../data/models/turnos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosTurnosActionsNames {
  Init = '[ParametrosTurnos] Init',
  GetAllParametrosTurnos = '[ParametrosTurnos] [Api] Get all',
  GetAllParametrosTurnosSuccess = '[ParametrosTurnos] [Api] Get all Success',
  GetAllParametrosTurnosFailure = '[ParametrosTurnos] [Api] Get all Failure',

  CreateModalParametrosTurnos = '[ParametrosTurnos] [Action] create modal',
  CreateModalParametrosTurnosSuccess = '[ParametrosTurnos] [Action] create modal Success',
  CreateModalParametrosTurnosFailure = '[ParametrosTurnos] [Action] create modal Failure',
  PostModalParametrosTurnosSuccess = '[ParametrosTurnos] [Action] [Api] create Success',
  PostModalParametrosTurnosFailure = '[ParametrosTurnos] [Action] [Api] create Failure',

  EditModalParametrosTurnos = '[ParametrosTurnos] [Action] Edit modal',
  EditModalParametrosTurnosSuccess = '[ParametrosTurnos] [Action] Edit modal Success',
  EditModalParametrosTurnosFailure = '[ParametrosTurnos] [Action] Edit modal Failure',
  PutModalParametrosTurnosSuccess = '[ParametrosTurnos] [Action] [Api] Put Success',
  PutModalParametrosTurnosFailure = '[ParametrosTurnos] [Action] [Api] Put Failure',

  DeleteParametrosTurnos = '[ParametrosTurnos] [Action] Delete',
  DeleteParametrosTurnosSuccess = '[ParametrosTurnos] [Action] [Api] Delete Success',
  DeleteParametrosTurnosFailure = '[ParametrosTurnos] [Action] [Api] Delete Failure',

  SortParametrosTurnos = '[ParametrosTurnos] [Action] Sort',
  FilterParametrosTurnos = '[ParametrosTurnos] [Action] Filter',
  PaginatorParametrosTurnos = '[ParametrosTurnos] [Action] Paginator',
}

export const initParametrosTurnos = createAction( ParametrosTurnosActionsNames.Init);

export const getAllParametrosTurnos = createAction(ParametrosTurnosActionsNames.GetAllParametrosTurnos);

export const getAllParametrosTurnosSuccess = createAction(
  ParametrosTurnosActionsNames.GetAllParametrosTurnosSuccess,
  props<{ turnos: Turnos[] , turnosFiltro: Turnos[] }>()
);

export const getAllParametrosTurnosFailure = createAction(
  ParametrosTurnosActionsNames.GetAllParametrosTurnosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosTurnos = createAction(
  ParametrosTurnosActionsNames.CreateModalParametrosTurnos,
  props<{  edit: Turnos }>()
);

export const createModalParametrosTurnosSuccess = createAction(
  ParametrosTurnosActionsNames.CreateModalParametrosTurnosSuccess,
  props<{ edit: Turnos}>()
);

export const createModalParametrosTurnosFailure = createAction(
  ParametrosTurnosActionsNames.CreateModalParametrosTurnosFailure,
  props<{  edit: Turnos, error: string }>()
);

export const postModalParametrosTurnosSuccess = createAction(
  ParametrosTurnosActionsNames.PostModalParametrosTurnosSuccess,
  props<{ edit: Turnos, apiResponse: ApiResponse}>()
);

export const postModalParametrosTurnosFailure = createAction(
  ParametrosTurnosActionsNames.PostModalParametrosTurnosFailure,
  props<{  edit: Turnos, error: string }>()
);

export const editModalParametrosTurnos = createAction(
  ParametrosTurnosActionsNames.EditModalParametrosTurnos,
  props<{ edit: Turnos }>()
);

export const editModalParametrosTurnosSuccess = createAction(
  ParametrosTurnosActionsNames.EditModalParametrosTurnosSuccess,
  props<{ edit: Turnos}>()
);

export const editModalParametrosTurnosFailure = createAction(
  ParametrosTurnosActionsNames.EditModalParametrosTurnosFailure,
  props<{ error: string }>()
);

export const putModalParametrosTurnosSuccess= createAction(
  ParametrosTurnosActionsNames.PutModalParametrosTurnosSuccess,
  props<{ edit: Turnos, apiResponse: ApiResponse}>()
);

export const putModalParametrosTurnosFailure = createAction(
  ParametrosTurnosActionsNames.PutModalParametrosTurnosFailure,
  props<{  edit: Turnos, error: string }>()
);

export const deleteParametrosTurnos = createAction(
  ParametrosTurnosActionsNames.DeleteParametrosTurnos,
  props<{ edit: Turnos}>()
);

export const deleteParametrosTurnosSuccess = createAction(
  ParametrosTurnosActionsNames.DeleteParametrosTurnosSuccess,
  props<{ edit: Turnos, apiResponse: ApiResponse}>()
);

export const deleteParametrosTurnosFailure = createAction(
  ParametrosTurnosActionsNames.DeleteParametrosTurnosFailure,
  props<{ error: string }>()
);

export const sortParametrosTurnos = createAction(
  ParametrosTurnosActionsNames.SortParametrosTurnos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosTurnos = createAction(
  ParametrosTurnosActionsNames.FilterParametrosTurnos,
  props<{ filtro: string}>()
);

export const paginatorParametrosTurnos = createAction(
  ParametrosTurnosActionsNames.PaginatorParametrosTurnos,
  props<{ paginator: number}>()
);

