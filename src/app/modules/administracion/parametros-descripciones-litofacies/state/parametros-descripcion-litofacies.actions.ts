import {createAction, props} from '@ngrx/store';
import {DescripcionesLitofacies} from '../../../../data/models/descripciones-litofacies';


export enum ParametrosDescripcionesLitofaciesActionsNames {
  Init = '[ParametrosDescripcionesLitofacies] Init',
  GetAllParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Api] Get all',
  GetAllParametrosDescripcionesLitofaciesSuccess = '[ParametrosDescripcionesLitofacies] [Api] Get all Success',
  GetAllParametrosDescripcionesLitofaciesFailure = '[ParametrosDescripcionesLitofacies] [Api] Get all Failure',

  CreateModalParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Action] create modal',
  CreateModalParametrosDescripcionesLitofaciesSuccess = '[ParametrosDescripcionesLitofacies] [Action] create modal Success',
  CreateModalParametrosDescripcionesLitofaciesFailure = '[ParametrosDescripcionesLitofacies] [Action] create modal Failure',
  PostModalParametrosDescripcionesLitofaciesSuccess = '[ParametrosDescripcionesLitofacies] [Action] [Api] create Success',
  PostModalParametrosDescripcionesLitofaciesFailure = '[ParametrosDescripcionesLitofacies] [Action] [Api] create Failure',

  EditModalParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Action] Edit modal',
  EditModalParametrosDescripcionesLitofaciesSuccess = '[ParametrosDescripcionesLitofacies] [Action] Edit modal Success',
  EditModalParametrosDescripcionesLitofaciesFailure = '[ParametrosDescripcionesLitofacies] [Action] Edit modal Failure',
  PutModalParametrosDescripcionesLitofaciesSuccess = '[ParametrosDescripcionesLitofacies] [Action] [Api] Put Success',
  PutModalParametrosDescripcionesLitofaciesFailure = '[ParametrosDescripcionesLitofacies] [Action] [Api] Put Failure',

  DeleteParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Action] Delete',
  DeleteParametrosDescripcionesLitofaciesSuccess = '[ParametrosDescripcionesLitofacies] [Action] [Api] Delete Success',
  DeleteParametrosDescripcionesLitofaciesFailure = '[ParametrosDescripcionesLitofacies] [Action] [Api] Delete Failure',

  SortParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Action] Sort',
  FilterParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Action] Filter',
  PaginatorParametrosDescripcionesLitofacies = '[ParametrosDescripcionesLitofacies] [Action] Paginator',
}

export const initParametrosDescripcionesLitofacies = createAction( ParametrosDescripcionesLitofaciesActionsNames.Init);

export const getAllParametrosDescripcionesLitofacies = createAction(ParametrosDescripcionesLitofaciesActionsNames.GetAllParametrosDescripcionesLitofacies);

export const getAllParametrosDescripcionesLitofaciesSuccess = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.GetAllParametrosDescripcionesLitofaciesSuccess,
  props<{ descripcionesLitofacies: DescripcionesLitofacies[] , descripcionesLitofaciesFiltro: DescripcionesLitofacies[] }>()
);

export const getAllParametrosDescripcionesLitofaciesFailure = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.GetAllParametrosDescripcionesLitofaciesFailure,
  props<{  error: string   }>()
);

export const createModalParametrosDescripcionesLitofacies = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.CreateModalParametrosDescripcionesLitofacies,
  props<{  edit: DescripcionesLitofacies }>()
);

export const createModalParametrosDescripcionesLitofaciesSuccess = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.CreateModalParametrosDescripcionesLitofaciesSuccess,
  props<{ edit: DescripcionesLitofacies}>()
);

export const createModalParametrosDescripcionesLitofaciesFailure = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.CreateModalParametrosDescripcionesLitofaciesFailure,
  props<{  edit: DescripcionesLitofacies, error: string }>()
);

export const postModalParametrosDescripcionesLitofaciesSuccess= createAction(
  ParametrosDescripcionesLitofaciesActionsNames.PostModalParametrosDescripcionesLitofaciesSuccess,
  props<{ edit: DescripcionesLitofacies}>()
);

export const postModalParametrosDescripcionesLitofaciesFailure = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.PostModalParametrosDescripcionesLitofaciesFailure,
  props<{  edit: DescripcionesLitofacies, error: string }>()
);

export const editModalParametrosDescripcionesLitofacies = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.EditModalParametrosDescripcionesLitofacies,
  props<{ edit: DescripcionesLitofacies }>()
);

export const editModalParametrosDescripcionesLitofaciesSuccess = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.EditModalParametrosDescripcionesLitofaciesSuccess,
  props<{ edit: DescripcionesLitofacies}>()
);

export const editModalParametrosDescripcionesLitofaciesFailure = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.EditModalParametrosDescripcionesLitofaciesFailure,
  props<{ error: string }>()
);

export const putModalParametrosDescripcionesLitofaciesSuccess= createAction(
  ParametrosDescripcionesLitofaciesActionsNames.PutModalParametrosDescripcionesLitofaciesSuccess,
  props<{ edit: DescripcionesLitofacies}>()
);

export const putModalParametrosDescripcionesLitofaciesFailure = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.PutModalParametrosDescripcionesLitofaciesFailure,
  props<{  edit: DescripcionesLitofacies, error: string }>()
);

export const deleteParametrosDescripcionesLitofacies = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.DeleteParametrosDescripcionesLitofacies,
  props<{ edit: DescripcionesLitofacies}>()
);

export const deleteParametrosDescripcionesLitofaciesSuccess = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.DeleteParametrosDescripcionesLitofaciesSuccess,
  props<{ edit: DescripcionesLitofacies}>()
);

export const deleteParametrosDescripcionesLitofaciesFailure = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.DeleteParametrosDescripcionesLitofaciesFailure,
  props<{ error: string }>()
);

export const sortParametrosDescripcionesLitofacies = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.SortParametrosDescripcionesLitofacies,
  props<{ column: any, direction: any}>()
);

export const filterParametrosDescripcionesLitofacies = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.FilterParametrosDescripcionesLitofacies,
  props<{ filtro: string}>()
);

export const paginatorParametrosDescripcionesLitofacies = createAction(
  ParametrosDescripcionesLitofaciesActionsNames.PaginatorParametrosDescripcionesLitofacies,
  props<{ paginator: number}>()
);

