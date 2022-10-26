import {createAction, props} from '@ngrx/store';
import {Empresas} from '../../../../data/models/empresas';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosEmpresasActionsNames {
  Init = '[ParametrosEmpresas] Init',
  GetAllParametrosEmpresas = '[ParametrosEmpresas] [Api] Get all',
  GetAllParametrosEmpresasSuccess = '[ParametrosEmpresas] [Api] Get all Success',
  GetAllParametrosEmpresasFailure = '[ParametrosEmpresas] [Api] Get all Failure',

  CreateModalParametrosEmpresas = '[ParametrosEmpresas] [Action] create modal',
  CreateModalParametrosEmpresasSuccess = '[ParametrosEmpresas] [Action] create modal Success',
  CreateModalParametrosEmpresasFailure = '[ParametrosEmpresas] [Action] create modal Failure',
  PostModalParametrosEmpresasSuccess = '[ParametrosEmpresas] [Action] [Api] create Success',
  PostModalParametrosEmpresasFailure = '[ParametrosEmpresas] [Action] [Api] create Failure',

  EditModalParametrosEmpresas = '[ParametrosEmpresas] [Action] Edit modal',
  EditModalParametrosEmpresasSuccess = '[ParametrosEmpresas] [Action] Edit modal Success',
  EditModalParametrosEmpresasFailure = '[ParametrosEmpresas] [Action] Edit modal Failure',
  PutModalParametrosEmpresasSuccess = '[ParametrosEmpresas] [Action] [Api] Put Success',
  PutModalParametrosEmpresasFailure = '[ParametrosEmpresas] [Action] [Api] Put Failure',

  DeleteParametrosEmpresas = '[ParametrosEmpresas] [Action] Delete',
  DeleteParametrosEmpresasSuccess = '[ParametrosEmpresas] [Action] [Api] Delete Success',
  DeleteParametrosEmpresasFailure = '[ParametrosEmpresas] [Action] [Api] Delete Failure',

  SortParametrosEmpresas = '[ParametrosEmpresas] [Action] Sort',
  FilterParametrosEmpresas = '[ParametrosEmpresas] [Action] Filter',
  PaginatorParametrosEmpresas = '[ParametrosEmpresas] [Action] Paginator',
}

export const initParametrosEmpresas = createAction( ParametrosEmpresasActionsNames.Init);

export const getAllParametrosEmpresas = createAction(ParametrosEmpresasActionsNames.GetAllParametrosEmpresas);

export const getAllParametrosEmpresasSuccess = createAction(
  ParametrosEmpresasActionsNames.GetAllParametrosEmpresasSuccess,
  props<{ empresas: Empresas[] , empresasFiltro: Empresas[] }>()
);

export const getAllParametrosEmpresasFailure = createAction(
  ParametrosEmpresasActionsNames.GetAllParametrosEmpresasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosEmpresas = createAction(
  ParametrosEmpresasActionsNames.CreateModalParametrosEmpresas,
  props<{  edit: Empresas }>()
);

export const createModalParametrosEmpresasSuccess = createAction(
  ParametrosEmpresasActionsNames.CreateModalParametrosEmpresasSuccess,
  props<{ edit: Empresas}>()
);

export const createModalParametrosEmpresasFailure = createAction(
  ParametrosEmpresasActionsNames.CreateModalParametrosEmpresasFailure,
  props<{  edit: Empresas, error: string }>()
);

export const postModalParametrosEmpresasSuccess = createAction(
  ParametrosEmpresasActionsNames.PostModalParametrosEmpresasSuccess,
  props<{ edit: Empresas, apiResponse: ApiResponse}>()
);

export const postModalParametrosEmpresasFailure = createAction(
  ParametrosEmpresasActionsNames.PostModalParametrosEmpresasFailure,
  props<{  edit: Empresas, error: string }>()
);

export const editModalParametrosEmpresas = createAction(
  ParametrosEmpresasActionsNames.EditModalParametrosEmpresas,
  props<{ edit: Empresas }>()
);

export const editModalParametrosEmpresasSuccess = createAction(
  ParametrosEmpresasActionsNames.EditModalParametrosEmpresasSuccess,
  props<{ edit: Empresas}>()
);

export const editModalParametrosEmpresasFailure = createAction(
  ParametrosEmpresasActionsNames.EditModalParametrosEmpresasFailure,
  props<{ error: string }>()
);

export const putModalParametrosEmpresasSuccess= createAction(
  ParametrosEmpresasActionsNames.PutModalParametrosEmpresasSuccess,
  props<{ edit: Empresas, apiResponse: ApiResponse}>()
);

export const putModalParametrosEmpresasFailure = createAction(
  ParametrosEmpresasActionsNames.PutModalParametrosEmpresasFailure,
  props<{  edit: Empresas, error: string }>()
);

export const deleteParametrosEmpresas = createAction(
  ParametrosEmpresasActionsNames.DeleteParametrosEmpresas,
  props<{ edit: Empresas}>()
);

export const deleteParametrosEmpresasSuccess = createAction(
  ParametrosEmpresasActionsNames.DeleteParametrosEmpresasSuccess,
  props<{ edit: Empresas, apiResponse: ApiResponse}>()
);

export const deleteParametrosEmpresasFailure = createAction(
  ParametrosEmpresasActionsNames.DeleteParametrosEmpresasFailure,
  props<{ error: string }>()
);

export const sortParametrosEmpresas = createAction(
  ParametrosEmpresasActionsNames.SortParametrosEmpresas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosEmpresas = createAction(
  ParametrosEmpresasActionsNames.FilterParametrosEmpresas,
  props<{ filtro: string}>()
);

export const paginatorParametrosEmpresas = createAction(
  ParametrosEmpresasActionsNames.PaginatorParametrosEmpresas,
  props<{ paginator: number}>()
);

