import {createAction, props} from '@ngrx/store';
import { OrigenDatos } from 'src/app/data/models/origen-datos';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosOrigenDatosActionsNames {
  Init = '[ParametrosOrigenDatos] Init',
  GetAllParametrosOrigenDatos = '[ParametrosOrigenDatos] [Api] Get all',
  GetAllParametrosOrigenDatosSuccess = '[ParametrosOrigenDatos] [Api] Get all Success',
  GetAllParametrosOrigenDatosFailure = '[ParametrosOrigenDatos] [Api] Get all Failure',

  CreateModalParametrosOrigenDatos = '[ParametrosOrigenDatos] [Action] create modal',
  CreateModalParametrosOrigenDatosSuccess = '[ParametrosOrigenDatos] [Action] create modal Success',
  CreateModalParametrosOrigenDatosFailure = '[ParametrosOrigenDatos] [Action] create modal Failure',
  PostModalParametrosOrigenDatosSuccess = '[ParametrosOrigenDatos] [Action] [Api] create Success',
  PostModalParametrosOrigenDatosFailure = '[ParametrosOrigenDatos] [Action] [Api] create Failure',

  EditModalParametrosOrigenDatos = '[ParametrosOrigenDatos] [Action] Edit modal',
  EditModalParametrosOrigenDatosSuccess = '[ParametrosOrigenDatos] [Action] Edit modal Success',
  EditModalParametrosOrigenDatosFailure = '[ParametrosOrigenDatos] [Action] Edit modal Failure',
  PutModalParametrosOrigenDatosSuccess = '[ParametrosOrigenDatos] [Action] [Api] Put Success',
  PutModalParametrosOrigenDatosFailure = '[ParametrosOrigenDatos] [Action] [Api] Put Failure',

  DeleteParametrosOrigenDatos = '[ParametrosOrigenDatos] [Action] Delete',
  DeleteParametrosOrigenDatosSuccess = '[ParametrosOrigenDatos] [Action] [Api] Delete Success',
  DeleteParametrosOrigenDatosFailure = '[ParametrosOrigenDatos] [Action] [Api] Delete Failure',

  SortParametrosOrigenDatos = '[ParametrosOrigenDatos] [Action] Sort',
  FilterParametrosOrigenDatos = '[ParametrosOrigenDatos] [Action] Filter',
  PaginatorParametrosOrigenDatos = '[ParametrosOrigenDatos] [Action] Paginator',
}

export const initParametrosOrigenDatos = createAction( ParametrosOrigenDatosActionsNames.Init);

export const getAllParametrosOrigenDatos = createAction(ParametrosOrigenDatosActionsNames.GetAllParametrosOrigenDatos);

export const getAllParametrosOrigenDatosSuccess = createAction(
  ParametrosOrigenDatosActionsNames.GetAllParametrosOrigenDatosSuccess,
  props<{ origendatos: OrigenDatos[] , origendatosFiltro: OrigenDatos[] }>()
);

export const getAllParametrosOrigenDatosFailure = createAction(
  ParametrosOrigenDatosActionsNames.GetAllParametrosOrigenDatosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosOrigenDatos = createAction(
  ParametrosOrigenDatosActionsNames.CreateModalParametrosOrigenDatos,
  props<{  edit: OrigenDatos }>()
);

export const createModalParametrosOrigenDatosSuccess = createAction(
  ParametrosOrigenDatosActionsNames.CreateModalParametrosOrigenDatosSuccess,
  props<{ edit: OrigenDatos}>()
);

export const createModalParametrosOrigenDatosFailure = createAction(
  ParametrosOrigenDatosActionsNames.CreateModalParametrosOrigenDatosFailure,
  props<{  edit: OrigenDatos, error: string }>()
);

export const postModalParametrosOrigenDatosSuccess = createAction(
  ParametrosOrigenDatosActionsNames.PostModalParametrosOrigenDatosSuccess,
  props<{ edit: OrigenDatos, apiResponse: ApiResponse}>()
);

export const postModalParametrosOrigenDatosFailure = createAction(
  ParametrosOrigenDatosActionsNames.PostModalParametrosOrigenDatosFailure,
  props<{  edit: OrigenDatos, error: string }>()
);

export const editModalParametrosOrigenDatos = createAction(
  ParametrosOrigenDatosActionsNames.EditModalParametrosOrigenDatos,
  props<{ edit: OrigenDatos }>()
);

export const editModalParametrosOrigenDatosSuccess = createAction(
  ParametrosOrigenDatosActionsNames.EditModalParametrosOrigenDatosSuccess,
  props<{ edit: OrigenDatos}>()
);

export const editModalParametrosOrigenDatosFailure = createAction(
  ParametrosOrigenDatosActionsNames.EditModalParametrosOrigenDatosFailure,
  props<{ error: string }>()
);

export const putModalParametrosOrigenDatosSuccess= createAction(
  ParametrosOrigenDatosActionsNames.PutModalParametrosOrigenDatosSuccess,
  props<{ edit: OrigenDatos, apiResponse: ApiResponse}>()
);

export const putModalParametrosOrigenDatosFailure = createAction(
  ParametrosOrigenDatosActionsNames.PutModalParametrosOrigenDatosFailure,
  props<{  edit: OrigenDatos, error: string }>()
);

export const deleteParametrosOrigenDatos = createAction(
  ParametrosOrigenDatosActionsNames.DeleteParametrosOrigenDatos,
  props<{ edit: OrigenDatos}>()
);

export const deleteParametrosOrigenDatosSuccess = createAction(
  ParametrosOrigenDatosActionsNames.DeleteParametrosOrigenDatosSuccess,
  props<{ edit: OrigenDatos, apiResponse: ApiResponse}>()
);

export const deleteParametrosOrigenDatosFailure = createAction(
  ParametrosOrigenDatosActionsNames.DeleteParametrosOrigenDatosFailure,
  props<{ error: string }>()
);

export const sortParametrosOrigenDatos = createAction(
  ParametrosOrigenDatosActionsNames.SortParametrosOrigenDatos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosOrigenDatos = createAction(
  ParametrosOrigenDatosActionsNames.FilterParametrosOrigenDatos,
  props<{ filtro: string}>()
);

export const paginatorParametrosOrigenDatos = createAction(
  ParametrosOrigenDatosActionsNames.PaginatorParametrosOrigenDatos,
  props<{ paginator: number}>()
);

