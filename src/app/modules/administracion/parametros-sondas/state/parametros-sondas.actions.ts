import {createAction, props} from '@ngrx/store';
import {Sondas} from '../../../../data/models/sondas';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosSondasActionsNames {
  Init = '[ParametrosSondas] Init',
  GetAllParametrosSondas = '[ParametrosSondas] [Api] Get all',
  GetAllParametrosSondasSuccess = '[ParametrosSondas] [Api] Get all Success',
  GetAllParametrosSondasFailure = '[ParametrosSondas] [Api] Get all Failure',

  CreateModalParametrosSondas = '[ParametrosSondas] [Action] create modal',
  CreateModalParametrosSondasSuccess = '[ParametrosSondas] [Action] create modal Success',
  CreateModalParametrosSondasFailure = '[ParametrosSondas] [Action] create modal Failure',
  PostModalParametrosSondasSuccess = '[ParametrosSondas] [Action] [Api] create Success',
  PostModalParametrosSondasFailure = '[ParametrosSondas] [Action] [Api] create Failure',

  EditModalParametrosSondas = '[ParametrosSondas] [Action] Edit modal',
  EditModalParametrosSondasSuccess = '[ParametrosSondas] [Action] Edit modal Success',
  EditModalParametrosSondasFailure = '[ParametrosSondas] [Action] Edit modal Failure',
  PutModalParametrosSondasSuccess = '[ParametrosSondas] [Action] [Api] Put Success',
  PutModalParametrosSondasFailure = '[ParametrosSondas] [Action] [Api] Put Failure',

  DeleteParametrosSondas = '[ParametrosSondas] [Action] Delete',
  DeleteParametrosSondasSuccess = '[ParametrosSondas] [Action] [Api] Delete Success',
  DeleteParametrosSondasFailure = '[ParametrosSondas] [Action] [Api] Delete Failure',

  SortParametrosSondas = '[ParametrosSondas] [Action] Sort',
  FilterParametrosSondas = '[ParametrosSondas] [Action] Filter',
  PaginatorParametrosSondas = '[ParametrosSondas] [Action] Paginator',
}

export const initParametrosSondas = createAction( ParametrosSondasActionsNames.Init);

export const getAllParametrosSondas = createAction(ParametrosSondasActionsNames.GetAllParametrosSondas);

export const getAllParametrosSondasSuccess = createAction(
  ParametrosSondasActionsNames.GetAllParametrosSondasSuccess,
  props<{ sondas: Sondas[] , sondasFiltro: Sondas[] }>()
);

export const getAllParametrosSondasFailure = createAction(
  ParametrosSondasActionsNames.GetAllParametrosSondasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosSondas = createAction(
  ParametrosSondasActionsNames.CreateModalParametrosSondas,
  props<{  edit: Sondas }>()
);

export const createModalParametrosSondasSuccess = createAction(
  ParametrosSondasActionsNames.CreateModalParametrosSondasSuccess,
  props<{ edit: Sondas}>()
);

export const createModalParametrosSondasFailure = createAction(
  ParametrosSondasActionsNames.CreateModalParametrosSondasFailure,
  props<{  edit: Sondas, error: string }>()
);

export const postModalParametrosSondasSuccess = createAction(
  ParametrosSondasActionsNames.PostModalParametrosSondasSuccess,
  props<{ edit: Sondas, apiResponse: ApiResponse}>()
);

export const postModalParametrosSondasFailure = createAction(
  ParametrosSondasActionsNames.PostModalParametrosSondasFailure,
  props<{  edit: Sondas, error: string }>()
);

export const editModalParametrosSondas = createAction(
  ParametrosSondasActionsNames.EditModalParametrosSondas,
  props<{ edit: Sondas }>()
);

export const editModalParametrosSondasSuccess = createAction(
  ParametrosSondasActionsNames.EditModalParametrosSondasSuccess,
  props<{ edit: Sondas}>()
);

export const editModalParametrosSondasFailure = createAction(
  ParametrosSondasActionsNames.EditModalParametrosSondasFailure,
  props<{ error: string }>()
);

export const putModalParametrosSondasSuccess= createAction(
  ParametrosSondasActionsNames.PutModalParametrosSondasSuccess,
  props<{ edit: Sondas, apiResponse: ApiResponse}>()
);

export const putModalParametrosSondasFailure = createAction(
  ParametrosSondasActionsNames.PutModalParametrosSondasFailure,
  props<{  edit: Sondas, error: string }>()
);

export const deleteParametrosSondas = createAction(
  ParametrosSondasActionsNames.DeleteParametrosSondas,
  props<{ edit: Sondas}>()
);

export const deleteParametrosSondasSuccess = createAction(
  ParametrosSondasActionsNames.DeleteParametrosSondasSuccess,
  props<{ edit: Sondas, apiResponse: ApiResponse}>()
);

export const deleteParametrosSondasFailure = createAction(
  ParametrosSondasActionsNames.DeleteParametrosSondasFailure,
  props<{ error: string }>()
);

export const sortParametrosSondas = createAction(
  ParametrosSondasActionsNames.SortParametrosSondas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosSondas = createAction(
  ParametrosSondasActionsNames.FilterParametrosSondas,
  props<{ filtro: string}>()
);

export const paginatorParametrosSondas = createAction(
  ParametrosSondasActionsNames.PaginatorParametrosSondas,
  props<{ paginator: number}>()
);

