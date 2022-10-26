import {createAction, props} from '@ngrx/store';
import { NombreSuperficies } from 'src/app/data/models/nombre-superficies';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosNombreSuperficiesActionsNames {
  Init = '[ParametrosNombreSuperficies] Init',
  GetAllParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Api] Get all',
  GetAllParametrosNombreSuperficiesSuccess = '[ParametrosNombreSuperficies] [Api] Get all Success',
  GetAllParametrosNombreSuperficiesFailure = '[ParametrosNombreSuperficies] [Api] Get all Failure',

  CreateModalParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Action] create modal',
  CreateModalParametrosNombreSuperficiesSuccess = '[ParametrosNombreSuperficies] [Action] create modal Success',
  CreateModalParametrosNombreSuperficiesFailure = '[ParametrosNombreSuperficies] [Action] create modal Failure',
  PostModalParametrosNombreSuperficiesSuccess = '[ParametrosNombreSuperficies] [Action] [Api] create Success',
  PostModalParametrosNombreSuperficiesFailure = '[ParametrosNombreSuperficies] [Action] [Api] create Failure',

  EditModalParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Action] Edit modal',
  EditModalParametrosNombreSuperficiesSuccess = '[ParametrosNombreSuperficies] [Action] Edit modal Success',
  EditModalParametrosNombreSuperficiesFailure = '[ParametrosNombreSuperficies] [Action] Edit modal Failure',
  PutModalParametrosNombreSuperficiesSuccess = '[ParametrosNombreSuperficies] [Action] [Api] Put Success',
  PutModalParametrosNombreSuperficiesFailure = '[ParametrosNombreSuperficies] [Action] [Api] Put Failure',

  DeleteParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Action] Delete',
  DeleteParametrosNombreSuperficiesSuccess = '[ParametrosNombreSuperficies] [Action] [Api] Delete Success',
  DeleteParametrosNombreSuperficiesFailure = '[ParametrosNombreSuperficies] [Action] [Api] Delete Failure',

  SortParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Action] Sort',
  FilterParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Action] Filter',
  PaginatorParametrosNombreSuperficies = '[ParametrosNombreSuperficies] [Action] Paginator',
}

export const initParametrosNombreSuperficies = createAction( ParametrosNombreSuperficiesActionsNames.Init);

export const getAllParametrosNombreSuperficies = createAction(ParametrosNombreSuperficiesActionsNames.GetAllParametrosNombreSuperficies);

export const getAllParametrosNombreSuperficiesSuccess = createAction(
  ParametrosNombreSuperficiesActionsNames.GetAllParametrosNombreSuperficiesSuccess,
  props<{ nombres: NombreSuperficies[] , nombresFiltro: NombreSuperficies[] }>()
);

export const getAllParametrosNombreSuperficiesFailure = createAction(
  ParametrosNombreSuperficiesActionsNames.GetAllParametrosNombreSuperficiesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosNombreSuperficies = createAction(
  ParametrosNombreSuperficiesActionsNames.CreateModalParametrosNombreSuperficies,
  props<{  edit: NombreSuperficies }>()
);

export const createModalParametrosNombreSuperficiesSuccess = createAction(
  ParametrosNombreSuperficiesActionsNames.CreateModalParametrosNombreSuperficiesSuccess,
  props<{ edit: NombreSuperficies}>()
);

export const createModalParametrosNombreSuperficiesFailure = createAction(
  ParametrosNombreSuperficiesActionsNames.CreateModalParametrosNombreSuperficiesFailure,
  props<{  edit: NombreSuperficies, error: string }>()
);

export const postModalParametrosNombreSuperficiesSuccess = createAction(
  ParametrosNombreSuperficiesActionsNames.PostModalParametrosNombreSuperficiesSuccess,
  props<{ edit: NombreSuperficies, apiResponse: ApiResponse}>()
);

export const postModalParametrosNombreSuperficiesFailure = createAction(
  ParametrosNombreSuperficiesActionsNames.PostModalParametrosNombreSuperficiesFailure,
  props<{  edit: NombreSuperficies, error: string }>()
);

export const editModalParametrosNombreSuperficies = createAction(
  ParametrosNombreSuperficiesActionsNames.EditModalParametrosNombreSuperficies,
  props<{ edit: NombreSuperficies }>()
);

export const editModalParametrosNombreSuperficiesSuccess = createAction(
  ParametrosNombreSuperficiesActionsNames.EditModalParametrosNombreSuperficiesSuccess,
  props<{ edit: NombreSuperficies}>()
);

export const editModalParametrosNombreSuperficiesFailure = createAction(
  ParametrosNombreSuperficiesActionsNames.EditModalParametrosNombreSuperficiesFailure,
  props<{ error: string }>()
);

export const putModalParametrosNombreSuperficiesSuccess= createAction(
  ParametrosNombreSuperficiesActionsNames.PutModalParametrosNombreSuperficiesSuccess,
  props<{ edit: NombreSuperficies, apiResponse: ApiResponse}>()
);

export const putModalParametrosNombreSuperficiesFailure = createAction(
  ParametrosNombreSuperficiesActionsNames.PutModalParametrosNombreSuperficiesFailure,
  props<{  edit: NombreSuperficies, error: string }>()
);

export const deleteParametrosNombreSuperficies = createAction(
  ParametrosNombreSuperficiesActionsNames.DeleteParametrosNombreSuperficies,
  props<{ edit: NombreSuperficies}>()
);

export const deleteParametrosNombreSuperficiesSuccess = createAction(
  ParametrosNombreSuperficiesActionsNames.DeleteParametrosNombreSuperficiesSuccess,
  props<{ edit: NombreSuperficies, apiResponse: ApiResponse}>()
);

export const deleteParametrosNombreSuperficiesFailure = createAction(
  ParametrosNombreSuperficiesActionsNames.DeleteParametrosNombreSuperficiesFailure,
  props<{ error: string }>()
);

export const sortParametrosNombreSuperficies = createAction(
  ParametrosNombreSuperficiesActionsNames.SortParametrosNombreSuperficies,
  props<{ column: any, direction: any}>()
);

export const filterParametrosNombreSuperficies = createAction(
  ParametrosNombreSuperficiesActionsNames.FilterParametrosNombreSuperficies,
  props<{ filtro: string}>()
);

export const paginatorParametrosNombreSuperficies = createAction(
  ParametrosNombreSuperficiesActionsNames.PaginatorParametrosNombreSuperficies,
  props<{ paginator: number}>()
);

