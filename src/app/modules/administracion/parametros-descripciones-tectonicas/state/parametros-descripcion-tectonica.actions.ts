
import {createAction, props} from '@ngrx/store';
import { DescripcionTectonica } from 'src/app/data/models/descripcion-tectonica';
import {ApiResponse} from '../../../../data/models/api-response';


export enum ParametrosDescripcionTectonicasActionsNames {
  Init = '[ParametrosDescripcionTectonicas] Init',
  GetAllParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Api] Get all',
  GetAllParametrosDescripcionTectonicasSuccess = '[ParametrosDescripcionTectonicas] [Api] Get all Success',
  GetAllParametrosDescripcionTectonicasFailure = '[ParametrosDescripcionTectonicas] [Api] Get all Failure',

  CreateModalParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Action] create modal',
  CreateModalParametrosDescripcionTectonicasSuccess = '[ParametrosDescripcionTectonicas] [Action] create modal Success',
  CreateModalParametrosDescripcionTectonicasFailure = '[ParametrosDescripcionTectonicas] [Action] create modal Failure',
  PostModalParametrosDescripcionTectonicasSuccess = '[ParametrosDescripcionTectonicas] [Action] [Api] create Success',
  PostModalParametrosDescripcionTectonicasFailure = '[ParametrosDescripcionTectonicas] [Action] [Api] create Failure',

  EditModalParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Action] Edit modal',
  EditModalParametrosDescripcionTectonicasSuccess = '[ParametrosDescripcionTectonicas] [Action] Edit modal Success',
  EditModalParametrosDescripcionTectonicasFailure = '[ParametrosDescripcionTectonicas] [Action] Edit modal Failure',
  PutModalParametrosDescripcionTectonicasSuccess = '[ParametrosDescripcionTectonicas] [Action] [Api] Put Success',
  PutModalParametrosDescripcionTectonicasFailure = '[ParametrosDescripcionTectonicas] [Action] [Api] Put Failure',

  DeleteParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Action] Delete',
  DeleteParametrosDescripcionTectonicasSuccess = '[ParametrosDescripcionTectonicas] [Action] [Api] Delete Success',
  DeleteParametrosDescripcionTectonicasFailure = '[ParametrosDescripcionTectonicas] [Action] [Api] Delete Failure',

  SortParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Action] Sort',
  FilterParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Action] Filter',
  PaginatorParametrosDescripcionTectonicas = '[ParametrosDescripcionTectonicas] [Action] Paginator',
}

export const initParametrosDescripcionTectonica = createAction( ParametrosDescripcionTectonicasActionsNames.Init);

export const getAllParametrosDescripcionTectonica = createAction(ParametrosDescripcionTectonicasActionsNames.GetAllParametrosDescripcionTectonicas);

export const getAllParametrosDescripcionTectonicaSuccess = createAction(
  ParametrosDescripcionTectonicasActionsNames.GetAllParametrosDescripcionTectonicasSuccess,
  props<{ descripcionTectonicas: DescripcionTectonica[] , descripcionTectonicasFiltro: DescripcionTectonica[] }>()
);

export const getAllParametrosDescripcionTectonicaFailure = createAction(
  ParametrosDescripcionTectonicasActionsNames.GetAllParametrosDescripcionTectonicasFailure,
  props<{  error: string   }>()
);

export const createModalParametrosDescripcionTectonica = createAction(
  ParametrosDescripcionTectonicasActionsNames.CreateModalParametrosDescripcionTectonicas,
  props<{  edit: DescripcionTectonica }>()
);

export const createModalParametrosDescripcionTectonicaSuccess = createAction(
  ParametrosDescripcionTectonicasActionsNames.CreateModalParametrosDescripcionTectonicasSuccess,
  props<{ edit: DescripcionTectonica}>()
);

export const createModalParametrosDescripcionTectonicaFailure = createAction(
  ParametrosDescripcionTectonicasActionsNames.CreateModalParametrosDescripcionTectonicasFailure,
  props<{  edit: DescripcionTectonica, error: string }>()
);

export const postModalParametrosDescripcionTectonicaSuccess = createAction(
  ParametrosDescripcionTectonicasActionsNames.PostModalParametrosDescripcionTectonicasSuccess,
  props<{ edit: DescripcionTectonica, apiResponse: ApiResponse}>()
);

export const postModalParametrosDescripcionTectonicaFailure = createAction(
  ParametrosDescripcionTectonicasActionsNames.PostModalParametrosDescripcionTectonicasFailure,
  props<{  edit: DescripcionTectonica, error: string }>()
);

export const editModalParametrosDescripcionTectonica = createAction(
  ParametrosDescripcionTectonicasActionsNames.EditModalParametrosDescripcionTectonicas,
  props<{ edit: DescripcionTectonica }>()
);

export const editModalParametrosDescripcionTectonicaSuccess = createAction(
  ParametrosDescripcionTectonicasActionsNames.EditModalParametrosDescripcionTectonicasSuccess,
  props<{ edit: DescripcionTectonica}>()
);

export const editModalParametrosDescripcionTectonicaFailure = createAction(
  ParametrosDescripcionTectonicasActionsNames.EditModalParametrosDescripcionTectonicasFailure,
  props<{ error: string }>()
);

export const putModalParametrosDescripcionTectonicaSuccess= createAction(
  ParametrosDescripcionTectonicasActionsNames.PutModalParametrosDescripcionTectonicasSuccess,
  props<{ edit: DescripcionTectonica, apiResponse: ApiResponse}>()
);

export const putModalParametrosDescripcionTectonicaFailure = createAction(
  ParametrosDescripcionTectonicasActionsNames.PutModalParametrosDescripcionTectonicasFailure,
  props<{  edit: DescripcionTectonica, error: string }>()
);

export const deleteParametrosDescripcionTectonica = createAction(
  ParametrosDescripcionTectonicasActionsNames.DeleteParametrosDescripcionTectonicas,
  props<{ edit: DescripcionTectonica}>()
);

export const deleteParametrosDescripcionTectonicaSuccess = createAction(
  ParametrosDescripcionTectonicasActionsNames.DeleteParametrosDescripcionTectonicasSuccess,
  props<{ edit: DescripcionTectonica, apiResponse: ApiResponse}>()
);

export const deleteParametrosDescripcionTectonicaFailure = createAction(
  ParametrosDescripcionTectonicasActionsNames.DeleteParametrosDescripcionTectonicasFailure,
  props<{ error: string }>()
);

export const sortParametrosDescripcionTectonica = createAction(
  ParametrosDescripcionTectonicasActionsNames.SortParametrosDescripcionTectonicas,
  props<{ column: any, direction: any}>()
);

export const filterParametrosDescripcionTectonica = createAction(
  ParametrosDescripcionTectonicasActionsNames.FilterParametrosDescripcionTectonicas,
  props<{ filtro: string}>()
);

export const paginatorParametrosDescripcionTectonica = createAction(
  ParametrosDescripcionTectonicasActionsNames.PaginatorParametrosDescripcionTectonicas,
  props<{ paginator: number}>()
);

