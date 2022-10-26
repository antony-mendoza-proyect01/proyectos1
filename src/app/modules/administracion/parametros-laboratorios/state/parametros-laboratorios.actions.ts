import {createAction, props} from '@ngrx/store';
import {Laboratorios} from '../../../../data/models/laboratorios';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosLaboratoriosActionsNames {
  Init = '[ParametrosLaboratorios] Init',
  GetAllParametrosLaboratorios = '[ParametrosLaboratorios] [Api] Get all',
  GetAllParametrosLaboratoriosSuccess = '[ParametrosLaboratorios] [Api] Get all Success',
  GetAllParametrosLaboratoriosFailure = '[ParametrosLaboratorios] [Api] Get all Failure',

  CreateModalParametrosLaboratorios = '[ParametrosLaboratorios] [Action] create modal',
  CreateModalParametrosLaboratoriosSuccess = '[ParametrosLaboratorios] [Action] create modal Success',
  CreateModalParametrosLaboratoriosFailure = '[ParametrosLaboratorios] [Action] create modal Failure',
  PostModalParametrosLaboratoriosSuccess = '[ParametrosLaboratorios] [Action] [Api] create Success',
  PostModalParametrosLaboratoriosFailure = '[ParametrosLaboratorios] [Action] [Api] create Failure',

  EditModalParametrosLaboratorios = '[ParametrosLaboratorios] [Action] Edit modal',
  EditModalParametrosLaboratoriosSuccess = '[ParametrosLaboratorios] [Action] Edit modal Success',
  EditModalParametrosLaboratoriosFailure = '[ParametrosLaboratorios] [Action] Edit modal Failure',
  PutModalParametrosLaboratoriosSuccess = '[ParametrosLaboratorios] [Action] [Api] Put Success',
  PutModalParametrosLaboratoriosFailure = '[ParametrosLaboratorios] [Action] [Api] Put Failure',

  DeleteParametrosLaboratorios = '[ParametrosLaboratorios] [Action] Delete',
  DeleteParametrosLaboratoriosSuccess = '[ParametrosLaboratorios] [Action] [Api] Delete Success',
  DeleteParametrosLaboratoriosFailure = '[ParametrosLaboratorios] [Action] [Api] Delete Failure',

  SortParametrosLaboratorios = '[ParametrosLaboratorios] [Action] Sort',
  FilterParametrosLaboratorios = '[ParametrosLaboratorios] [Action] Filter',
  PaginatorParametrosLaboratorios = '[ParametrosLaboratorios] [Action] Paginator',
}

export const initParametrosLaboratorios = createAction( ParametrosLaboratoriosActionsNames.Init);

export const getAllParametrosLaboratorios = createAction(ParametrosLaboratoriosActionsNames.GetAllParametrosLaboratorios);

export const getAllParametrosLaboratoriosSuccess = createAction(
  ParametrosLaboratoriosActionsNames.GetAllParametrosLaboratoriosSuccess,
  props<{ laboratorios: Laboratorios[] , laboratoriosFiltro: Laboratorios[] }>()
);

export const getAllParametrosLaboratoriosFailure = createAction(
  ParametrosLaboratoriosActionsNames.GetAllParametrosLaboratoriosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosLaboratorios = createAction(
  ParametrosLaboratoriosActionsNames.CreateModalParametrosLaboratorios,
  props<{  edit: Laboratorios }>()
);

export const createModalParametrosLaboratoriosSuccess = createAction(
  ParametrosLaboratoriosActionsNames.CreateModalParametrosLaboratoriosSuccess,
  props<{ edit: Laboratorios}>()
);

export const createModalParametrosLaboratoriosFailure = createAction(
  ParametrosLaboratoriosActionsNames.CreateModalParametrosLaboratoriosFailure,
  props<{  edit: Laboratorios, error: string }>()
);

export const postModalParametrosLaboratoriosSuccess = createAction(
  ParametrosLaboratoriosActionsNames.PostModalParametrosLaboratoriosSuccess,
  props<{ edit: Laboratorios, apiResponse: ApiResponse}>()
);

export const postModalParametrosLaboratoriosFailure = createAction(
  ParametrosLaboratoriosActionsNames.PostModalParametrosLaboratoriosFailure,
  props<{  edit: Laboratorios, error: string }>()
);

export const editModalParametrosLaboratorios = createAction(
  ParametrosLaboratoriosActionsNames.EditModalParametrosLaboratorios,
  props<{ edit: Laboratorios }>()
);

export const editModalParametrosLaboratoriosSuccess = createAction(
  ParametrosLaboratoriosActionsNames.EditModalParametrosLaboratoriosSuccess,
  props<{ edit: Laboratorios}>()
);

export const editModalParametrosLaboratoriosFailure = createAction(
  ParametrosLaboratoriosActionsNames.EditModalParametrosLaboratoriosFailure,
  props<{ error: string }>()
);

export const putModalParametrosLaboratoriosSuccess= createAction(
  ParametrosLaboratoriosActionsNames.PutModalParametrosLaboratoriosSuccess,
  props<{ edit: Laboratorios, apiResponse: ApiResponse}>()
);

export const putModalParametrosLaboratoriosFailure = createAction(
  ParametrosLaboratoriosActionsNames.PutModalParametrosLaboratoriosFailure,
  props<{  edit: Laboratorios, error: string }>()
);

export const deleteParametrosLaboratorios = createAction(
  ParametrosLaboratoriosActionsNames.DeleteParametrosLaboratorios,
  props<{ edit: Laboratorios}>()
);

export const deleteParametrosLaboratoriosSuccess = createAction(
  ParametrosLaboratoriosActionsNames.DeleteParametrosLaboratoriosSuccess,
  props<{ edit: Laboratorios, apiResponse: ApiResponse}>()
);

export const deleteParametrosLaboratoriosFailure = createAction(
  ParametrosLaboratoriosActionsNames.DeleteParametrosLaboratoriosFailure,
  props<{ error: string }>()
);

export const sortParametrosLaboratorios = createAction(
  ParametrosLaboratoriosActionsNames.SortParametrosLaboratorios,
  props<{ column: any, direction: any}>()
);

export const filterParametrosLaboratorios = createAction(
  ParametrosLaboratoriosActionsNames.FilterParametrosLaboratorios,
  props<{ filtro: string}>()
);

export const paginatorParametrosLaboratorios = createAction(
  ParametrosLaboratoriosActionsNames.PaginatorParametrosLaboratorios,
  props<{ paginator: number}>()
);

