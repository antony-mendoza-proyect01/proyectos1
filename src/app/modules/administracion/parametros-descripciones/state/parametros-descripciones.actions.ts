import {createAction, props} from '@ngrx/store';
import {Descripciones} from '../../../../data/models/descripciones';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosDescripcionesActionsNames {
  Init = '[ParametrosDescripciones] Init',
  GetAllParametrosDescripciones = '[ParametrosDescripciones] [Api] Get all',
  GetAllParametrosDescripcionesSuccess = '[ParametrosDescripciones] [Api] Get all Success',
  GetAllParametrosDescripcionesFailure = '[ParametrosDescripciones] [Api] Get all Failure',

  CreateModalParametrosDescripciones = '[ParametrosDescripciones] [Action] create modal',
  CreateModalParametrosDescripcionesSuccess = '[ParametrosDescripciones] [Action] create modal Success',
  CreateModalParametrosDescripcionesFailure = '[ParametrosDescripciones] [Action] create modal Failure',
  PostModalParametrosDescripcionesSuccess = '[ParametrosDescripciones] [Action] [Api] create Success',
  PostModalParametrosDescripcionesFailure = '[ParametrosDescripciones] [Action] [Api] create Failure',

  EditModalParametrosDescripciones = '[ParametrosDescripciones] [Action] Edit modal',
  EditModalParametrosDescripcionesSuccess = '[ParametrosDescripciones] [Action] Edit modal Success',
  EditModalParametrosDescripcionesFailure = '[ParametrosDescripciones] [Action] Edit modal Failure',
  PutModalParametrosDescripcionesSuccess = '[ParametrosDescripciones] [Action] [Api] Put Success',
  PutModalParametrosDescripcionesFailure = '[ParametrosDescripciones] [Action] [Api] Put Failure',

  DeleteParametrosDescripciones = '[ParametrosDescripciones] [Action] Delete',
  DeleteParametrosDescripcionesSuccess = '[ParametrosDescripciones] [Action] [Api] Delete Success',
  DeleteParametrosDescripcionesFailure = '[ParametrosDescripciones] [Action] [Api] Delete Failure',

  SortParametrosDescripciones = '[ParametrosDescripciones] [Action] Sort',
  FilterParametrosDescripciones = '[ParametrosDescripciones] [Action] Filter',
  PaginatorParametrosDescripciones = '[ParametrosDescripciones] [Action] Paginator',
}

export const initParametrosDescripciones = createAction( ParametrosDescripcionesActionsNames.Init);

export const getAllParametrosDescripciones = createAction(ParametrosDescripcionesActionsNames.GetAllParametrosDescripciones);

export const getAllParametrosDescripcionesSuccess = createAction(
  ParametrosDescripcionesActionsNames.GetAllParametrosDescripcionesSuccess,
  props<{ descripciones: Descripciones[] , descripcionesFiltro: Descripciones[] }>()
);

export const getAllParametrosDescripcionesFailure = createAction(
  ParametrosDescripcionesActionsNames.GetAllParametrosDescripcionesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosDescripciones = createAction(
  ParametrosDescripcionesActionsNames.CreateModalParametrosDescripciones,
  props<{  edit: Descripciones }>()
);

export const createModalParametrosDescripcionesSuccess = createAction(
  ParametrosDescripcionesActionsNames.CreateModalParametrosDescripcionesSuccess,
  props<{ edit: Descripciones}>()
);

export const createModalParametrosDescripcionesFailure = createAction(
  ParametrosDescripcionesActionsNames.CreateModalParametrosDescripcionesFailure,
  props<{  edit: Descripciones, error: string }>()
);

export const postModalParametrosDescripcionesSuccess = createAction(
  ParametrosDescripcionesActionsNames.PostModalParametrosDescripcionesSuccess,
  props<{ edit: Descripciones, apiResponse: ApiResponse}>()
);

export const postModalParametrosDescripcionesFailure = createAction(
  ParametrosDescripcionesActionsNames.PostModalParametrosDescripcionesFailure,
  props<{  edit: Descripciones, error: string }>()
);

export const editModalParametrosDescripciones = createAction(
  ParametrosDescripcionesActionsNames.EditModalParametrosDescripciones,
  props<{ edit: Descripciones }>()
);

export const editModalParametrosDescripcionesSuccess = createAction(
  ParametrosDescripcionesActionsNames.EditModalParametrosDescripcionesSuccess,
  props<{ edit: Descripciones}>()
);

export const editModalParametrosDescripcionesFailure = createAction(
  ParametrosDescripcionesActionsNames.EditModalParametrosDescripcionesFailure,
  props<{ error: string }>()
);

export const putModalParametrosDescripcionesSuccess= createAction(
  ParametrosDescripcionesActionsNames.PutModalParametrosDescripcionesSuccess,
  props<{ edit: Descripciones, apiResponse: ApiResponse}>()
);

export const putModalParametrosDescripcionesFailure = createAction(
  ParametrosDescripcionesActionsNames.PutModalParametrosDescripcionesFailure,
  props<{  edit: Descripciones, error: string }>()
);

export const deleteParametrosDescripciones = createAction(
  ParametrosDescripcionesActionsNames.DeleteParametrosDescripciones,
  props<{ edit: Descripciones}>()
);

export const deleteParametrosDescripcionesSuccess = createAction(
  ParametrosDescripcionesActionsNames.DeleteParametrosDescripcionesSuccess,
  props<{ edit: Descripciones, apiResponse: ApiResponse}>()
);

export const deleteParametrosDescripcionesFailure = createAction(
  ParametrosDescripcionesActionsNames.DeleteParametrosDescripcionesFailure,
  props<{ error: string }>()
);

export const sortParametrosDescripciones = createAction(
  ParametrosDescripcionesActionsNames.SortParametrosDescripciones,
  props<{ column: any, direction: any}>()
);

export const filterParametrosDescripciones = createAction(
  ParametrosDescripcionesActionsNames.FilterParametrosDescripciones,
  props<{ filtro: string}>()
);

export const paginatorParametrosDescripciones = createAction(
  ParametrosDescripcionesActionsNames.PaginatorParametrosDescripciones,
  props<{ paginator: number}>()
);

