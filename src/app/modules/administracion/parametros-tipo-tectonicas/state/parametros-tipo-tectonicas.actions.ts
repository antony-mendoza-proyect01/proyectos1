import {createAction, props} from '@ngrx/store';
import { TipoTectonicas } from 'src/app/data/models/tipo-tectonica';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosTipoTectonicasActionsNames {
  Init = '[ParametrosTipoTectonicas] Init',
  GetAllParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Api] Get all',
  GetAllParametrosTipoTectonicasSuccess = '[ParametrosTipoTectonicas] [Api] Get all Success',
  GetAllParametrosTipoTectonicasFailure = '[ParametrosTipoTectonicas] [Api] Get all Failure',

  CreateModalParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Action] create modal',
  CreateModalParametrosTipoTectonicasSuccess = '[ParametrosTipoTectonicas] [Action] create modal Success',
  CreateModalParametrosTipoTectonicasFailure = '[ParametrosTipoTectonicas] [Action] create modal Failure',
  PostModalParametrosTipoTectonicasSuccess = '[ParametrosTipoTectonicas] [Action] [Api] create Success',
  PostModalParametrosTipoTectonicasFailure = '[ParametrosTipoTectonicas] [Action] [Api] create Failure',

  EditModalParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Action] Edit modal',
  EditModalParametrosTipoTectonicasSuccess = '[ParametrosTipoTectonicas] [Action] Edit modal Success',
  EditModalParametrosTipoTectonicasFailure = '[ParametrosTipoTectonicas] [Action] Edit modal Failure',
  PutModalParametrosTipoTectonicasSuccess = '[ParametrosTipoTectonicas] [Action] [Api] Put Success',
  PutModalParametrosTipoTectonicasFailure = '[ParametrosTipoTectonicas] [Action] [Api] Put Failure',

  DeleteParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Action] Delete',
  DeleteParametrosTipoTectonicasSuccess = '[ParametrosTipoTectonicas] [Action] [Api] Delete Success',
  DeleteParametrosTipoTectonicasFailure = '[ParametrosTipoTectonicas] [Action] [Api] Delete Failure',

  SortParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Action] Sort',
  FilterParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Action] Filter',
  PaginatorParametrosTipoTectonicas = '[ParametrosTipoTectonicas] [Action] Paginator',
}

export const initParametrosTipoTectonicas = createAction( ParametrosTipoTectonicasActionsNames.Init);

export const getAllParametrosTipoTectonicas = createAction(ParametrosTipoTectonicasActionsNames.GetAllParametrosTipoTectonicas);

export const getAllParametrosTipoTectonicasSuccess = createAction(
  ParametrosTipoTectonicasActionsNames.GetAllParametrosTipoTectonicasSuccess,
  props<{ tipoTectonicas: TipoTectonicas[] , tipoTectonicasFiltro: TipoTectonicas[] }>()
);

export const getAllParametrosTipoTectonicasFailure = createAction(
  ParametrosTipoTectonicasActionsNames.GetAllParametrosTipoTectonicasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosTipoTectonicas = createAction(
  ParametrosTipoTectonicasActionsNames.CreateModalParametrosTipoTectonicas,
  props<{  edit: TipoTectonicas }>()
);

export const createModalParametrosTipoTectonicasSuccess = createAction(
  ParametrosTipoTectonicasActionsNames.CreateModalParametrosTipoTectonicasSuccess,
  props<{ edit: TipoTectonicas}>()
);

export const createModalParametrosTipoTectonicasFailure = createAction(
  ParametrosTipoTectonicasActionsNames.CreateModalParametrosTipoTectonicasFailure,
  props<{  edit: TipoTectonicas, error: string }>()
);

export const postModalParametrosTipoTectonicasSuccess = createAction(
  ParametrosTipoTectonicasActionsNames.PostModalParametrosTipoTectonicasSuccess,
  props<{ edit: TipoTectonicas, apiResponse: ApiResponse}>()
);

export const postModalParametrosTipoTectonicasFailure = createAction(
  ParametrosTipoTectonicasActionsNames.PostModalParametrosTipoTectonicasFailure,
  props<{  edit: TipoTectonicas, error: string }>()
);

export const editModalParametrosTipoTectonicas = createAction(
  ParametrosTipoTectonicasActionsNames.EditModalParametrosTipoTectonicas,
  props<{ edit: TipoTectonicas }>()
);

export const editModalParametrosTipoTectonicasSuccess = createAction(
  ParametrosTipoTectonicasActionsNames.EditModalParametrosTipoTectonicasSuccess,
  props<{ edit: TipoTectonicas}>()
);

export const editModalParametrosTipoTectonicasFailure = createAction(
  ParametrosTipoTectonicasActionsNames.EditModalParametrosTipoTectonicasFailure,
  props<{ error: string }>()
);

export const putModalParametrosTipoTectonicasSuccess= createAction(
  ParametrosTipoTectonicasActionsNames.PutModalParametrosTipoTectonicasSuccess,
  props<{ edit: TipoTectonicas, apiResponse: ApiResponse}>()
);

export const putModalParametrosTipoTectonicasFailure = createAction(
  ParametrosTipoTectonicasActionsNames.PutModalParametrosTipoTectonicasFailure,
  props<{  edit: TipoTectonicas, error: string }>()
);

export const deleteParametrosTipoTectonicas = createAction(
  ParametrosTipoTectonicasActionsNames.DeleteParametrosTipoTectonicas,
  props<{ edit: TipoTectonicas}>()
);

export const deleteParametrosTipoTectonicasSuccess = createAction(
  ParametrosTipoTectonicasActionsNames.DeleteParametrosTipoTectonicasSuccess,
  props<{ edit: TipoTectonicas, apiResponse: ApiResponse}>()
);

export const deleteParametrosTipoTectonicasFailure = createAction(
  ParametrosTipoTectonicasActionsNames.DeleteParametrosTipoTectonicasFailure,
  props<{ error: string }>()
);

export const sortParametrosTipoTectonicas = createAction(
  ParametrosTipoTectonicasActionsNames.SortParametrosTipoTectonicas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosTipoTectonicas = createAction(
  ParametrosTipoTectonicasActionsNames.FilterParametrosTipoTectonicas,
  props<{ filtro: string}>()
);

export const paginatorParametrosTipoTectonicas = createAction(
  ParametrosTipoTectonicasActionsNames.PaginatorParametrosTipoTectonicas,
  props<{ paginator: number}>()
);

