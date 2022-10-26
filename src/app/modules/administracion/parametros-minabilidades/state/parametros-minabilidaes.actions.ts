import {createAction, props} from '@ngrx/store';
import {Minabilidades} from '../../../../data/models/minabilidades';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosMinabilidadesActionsNames {
  Init = '[ParametrosMinabilidades] Init',
  GetAllParametrosMinabilidades = '[ParametrosMinabilidades] [Api] Get all',
  GetAllParametrosMinabilidadesSuccess = '[ParametrosMinabilidades] [Api] Get all Success',
  GetAllParametrosMinabilidadesFailure = '[ParametrosMinabilidades] [Api] Get all Failure',

  CreateModalParametrosMinabilidades = '[ParametrosMinabilidades] [Action] create modal',
  CreateModalParametrosMinabilidadesSuccess = '[ParametrosMinabilidades] [Action] create modal Success',
  CreateModalParametrosMinabilidadesFailure = '[ParametrosMinabilidades] [Action] create modal Failure',
  PostModalParametrosMinabilidadesSuccess = '[ParametrosMinabilidades] [Action] [Api] create Success',
  PostModalParametrosMinabilidadesFailure = '[ParametrosMinabilidades] [Action] [Api] create Failure',

  EditModalParametrosMinabilidades = '[ParametrosMinabilidades] [Action] Edit modal',
  EditModalParametrosMinabilidadesSuccess = '[ParametrosMinabilidades] [Action] Edit modal Success',
  EditModalParametrosMinabilidadesFailure = '[ParametrosMinabilidades] [Action] Edit modal Failure',
  PutModalParametrosMinabilidadesSuccess = '[ParametrosMinabilidades] [Action] [Api] Put Success',
  PutModalParametrosMinabilidadesFailure = '[ParametrosMinabilidades] [Action] [Api] Put Failure',

  DeleteParametrosMinabilidades = '[ParametrosMinabilidades] [Action] Delete',
  DeleteParametrosMinabilidadesSuccess = '[ParametrosMinabilidades] [Action] [Api] Delete Success',
  DeleteParametrosMinabilidadesFailure = '[ParametrosMinabilidades] [Action] [Api] Delete Failure',

  SortParametrosMinabilidades = '[ParametrosMinabilidades] [Action] Sort',
  FilterParametrosMinabilidades = '[ParametrosMinabilidades] [Action] Filter',
  PaginatorParametrosMinabilidades = '[ParametrosMinabilidades] [Action] Paginator',
}

export const initParametrosMinabilidades = createAction( ParametrosMinabilidadesActionsNames.Init);

export const getAllParametrosMinabilidades = createAction(ParametrosMinabilidadesActionsNames.GetAllParametrosMinabilidades);

export const getAllParametrosMinabilidadesSuccess = createAction(
  ParametrosMinabilidadesActionsNames.GetAllParametrosMinabilidadesSuccess,
  props<{ minabilidades: Minabilidades[] , minabilidadesFiltro: Minabilidades[] }>()
);

export const getAllParametrosMinabilidadesFailure = createAction(
  ParametrosMinabilidadesActionsNames.GetAllParametrosMinabilidadesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosMinabilidades = createAction(
  ParametrosMinabilidadesActionsNames.CreateModalParametrosMinabilidades,
  props<{  edit: Minabilidades }>()
);

export const createModalParametrosMinabilidadesSuccess = createAction(
  ParametrosMinabilidadesActionsNames.CreateModalParametrosMinabilidadesSuccess,
  props<{ edit: Minabilidades}>()
);

export const createModalParametrosMinabilidadesFailure = createAction(
  ParametrosMinabilidadesActionsNames.CreateModalParametrosMinabilidadesFailure,
  props<{  edit: Minabilidades, error: string }>()
);

export const postModalParametrosMinabilidadesSuccess = createAction(
  ParametrosMinabilidadesActionsNames.PostModalParametrosMinabilidadesSuccess,
  props<{ edit: Minabilidades, apiResponse: ApiResponse}>()
);

export const postModalParametrosMinabilidadesFailure = createAction(
  ParametrosMinabilidadesActionsNames.PostModalParametrosMinabilidadesFailure,
  props<{  edit: Minabilidades, error: string }>()
);

export const editModalParametrosMinabilidades = createAction(
  ParametrosMinabilidadesActionsNames.EditModalParametrosMinabilidades,
  props<{ edit: Minabilidades }>()
);

export const editModalParametrosMinabilidadesSuccess = createAction(
  ParametrosMinabilidadesActionsNames.EditModalParametrosMinabilidadesSuccess,
  props<{ edit: Minabilidades}>()
);

export const editModalParametrosMinabilidadesFailure = createAction(
  ParametrosMinabilidadesActionsNames.EditModalParametrosMinabilidadesFailure,
  props<{ error: string }>()
);

export const putModalParametrosMinabilidadesSuccess= createAction(
  ParametrosMinabilidadesActionsNames.PutModalParametrosMinabilidadesSuccess,
  props<{ edit: Minabilidades, apiResponse: ApiResponse}>()
);

export const putModalParametrosMinabilidadesFailure = createAction(
  ParametrosMinabilidadesActionsNames.PutModalParametrosMinabilidadesFailure,
  props<{  edit: Minabilidades, error: string }>()
);

export const deleteParametrosMinabilidades = createAction(
  ParametrosMinabilidadesActionsNames.DeleteParametrosMinabilidades,
  props<{ edit: Minabilidades}>()
);

export const deleteParametrosMinabilidadesSuccess = createAction(
  ParametrosMinabilidadesActionsNames.DeleteParametrosMinabilidadesSuccess,
  props<{ edit: Minabilidades, apiResponse: ApiResponse}>()
);

export const deleteParametrosMinabilidadesFailure = createAction(
  ParametrosMinabilidadesActionsNames.DeleteParametrosMinabilidadesFailure,
  props<{ error: string }>()
);

export const sortParametrosMinabilidades = createAction(
  ParametrosMinabilidadesActionsNames.SortParametrosMinabilidades,
  props<{ column: any, direction: any}>()
);

export const filterParametrosMinabilidades = createAction(
  ParametrosMinabilidadesActionsNames.FilterParametrosMinabilidades,
  props<{ filtro: string}>()
);

export const paginatorParametrosMinabilidades = createAction(
  ParametrosMinabilidadesActionsNames.PaginatorParametrosMinabilidades,
  props<{ paginator: number}>()
);

