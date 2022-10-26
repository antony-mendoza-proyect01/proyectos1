import {createAction, props} from '@ngrx/store';
import {Visibilidades} from '../../../../data/models/visibilidades';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosVisibilidadesActionsNames {
  Init = '[ParametrosVisibilidades] Init',
  GetAllParametrosVisibilidades = '[ParametrosVisibilidades] [Api] Get all',
  GetAllParametrosVisibilidadesSuccess = '[ParametrosVisibilidades] [Api] Get all Success',
  GetAllParametrosVisibilidadesFailure = '[ParametrosVisibilidades] [Api] Get all Failure',

  CreateModalParametrosVisibilidades = '[ParametrosVisibilidades] [Action] create modal',
  CreateModalParametrosVisibilidadesSuccess = '[ParametrosVisibilidades] [Action] create modal Success',
  CreateModalParametrosVisibilidadesFailure = '[ParametrosVisibilidades] [Action] create modal Failure',
  PostModalParametrosVisibilidadesSuccess = '[ParametrosVisibilidades] [Action] [Api] create Success',
  PostModalParametrosVisibilidadesFailure = '[ParametrosVisibilidades] [Action] [Api] create Failure',

  EditModalParametrosVisibilidades = '[ParametrosVisibilidades] [Action] Edit modal',
  EditModalParametrosVisibilidadesSuccess = '[ParametrosVisibilidades] [Action] Edit modal Success',
  EditModalParametrosVisibilidadesFailure = '[ParametrosVisibilidades] [Action] Edit modal Failure',
  PutModalParametrosVisibilidadesSuccess = '[ParametrosVisibilidades] [Action] [Api] Put Success',
  PutModalParametrosVisibilidadesFailure = '[ParametrosVisibilidades] [Action] [Api] Put Failure',

  DeleteParametrosVisibilidades = '[ParametrosVisibilidades] [Action] Delete',
  DeleteParametrosVisibilidadesSuccess = '[ParametrosVisibilidades] [Action] [Api] Delete Success',
  DeleteParametrosVisibilidadesFailure = '[ParametrosVisibilidades] [Action] [Api] Delete Failure',

  SortParametrosVisibilidades = '[ParametrosVisibilidades] [Action] Sort',
  FilterParametrosVisibilidades = '[ParametrosVisibilidades] [Action] Filter',
  PaginatorParametrosVisibilidades = '[ParametrosVisibilidades] [Action] Paginator',
}

export const initParametrosVisibilidades = createAction( ParametrosVisibilidadesActionsNames.Init);

export const getAllParametrosVisibilidades = createAction(ParametrosVisibilidadesActionsNames.GetAllParametrosVisibilidades);

export const getAllParametrosVisibilidadesSuccess = createAction(
  ParametrosVisibilidadesActionsNames.GetAllParametrosVisibilidadesSuccess,
  props<{ visibilidades: Visibilidades[] , visibilidadesFiltro: Visibilidades[] }>()
);

export const getAllParametrosVisibilidadesFailure = createAction(
  ParametrosVisibilidadesActionsNames.GetAllParametrosVisibilidadesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosVisibilidades = createAction(
  ParametrosVisibilidadesActionsNames.CreateModalParametrosVisibilidades,
  props<{  edit: Visibilidades }>()
);

export const createModalParametrosVisibilidadesSuccess = createAction(
  ParametrosVisibilidadesActionsNames.CreateModalParametrosVisibilidadesSuccess,
  props<{ edit: Visibilidades}>()
);

export const createModalParametrosVisibilidadesFailure = createAction(
  ParametrosVisibilidadesActionsNames.CreateModalParametrosVisibilidadesFailure,
  props<{  edit: Visibilidades, error: string }>()
);

export const postModalParametrosVisibilidadesSuccess = createAction(
  ParametrosVisibilidadesActionsNames.PostModalParametrosVisibilidadesSuccess,
  props<{ edit: Visibilidades, apiResponse: ApiResponse}>()
);

export const postModalParametrosVisibilidadesFailure = createAction(
  ParametrosVisibilidadesActionsNames.PostModalParametrosVisibilidadesFailure,
  props<{  edit: Visibilidades, error: string }>()
);

export const editModalParametrosVisibilidades = createAction(
  ParametrosVisibilidadesActionsNames.EditModalParametrosVisibilidades,
  props<{ edit: Visibilidades }>()
);

export const editModalParametrosVisibilidadesSuccess = createAction(
  ParametrosVisibilidadesActionsNames.EditModalParametrosVisibilidadesSuccess,
  props<{ edit: Visibilidades}>()
);

export const editModalParametrosVisibilidadesFailure = createAction(
  ParametrosVisibilidadesActionsNames.EditModalParametrosVisibilidadesFailure,
  props<{ error: string }>()
);

export const putModalParametrosVisibilidadesSuccess= createAction(
  ParametrosVisibilidadesActionsNames.PutModalParametrosVisibilidadesSuccess,
  props<{ edit: Visibilidades, apiResponse: ApiResponse}>()
);

export const putModalParametrosVisibilidadesFailure = createAction(
  ParametrosVisibilidadesActionsNames.PutModalParametrosVisibilidadesFailure,
  props<{  edit: Visibilidades, error: string }>()
);

export const deleteParametrosVisibilidades = createAction(
  ParametrosVisibilidadesActionsNames.DeleteParametrosVisibilidades,
  props<{ edit: Visibilidades}>()
);

export const deleteParametrosVisibilidadesSuccess = createAction(
  ParametrosVisibilidadesActionsNames.DeleteParametrosVisibilidadesSuccess,
  props<{ edit: Visibilidades, apiResponse: ApiResponse}>()
);

export const deleteParametrosVisibilidadesFailure = createAction(
  ParametrosVisibilidadesActionsNames.DeleteParametrosVisibilidadesFailure,
  props<{ error: string }>()
);

export const sortParametrosVisibilidades = createAction(
  ParametrosVisibilidadesActionsNames.SortParametrosVisibilidades,
  props<{ column: any, direction: any}>()
);

export const filterParametrosVisibilidades = createAction(
  ParametrosVisibilidadesActionsNames.FilterParametrosVisibilidades,
  props<{ filtro: string}>()
);

export const paginatorParametrosVisibilidades = createAction(
  ParametrosVisibilidadesActionsNames.PaginatorParametrosVisibilidades,
  props<{ paginator: number}>()
);

