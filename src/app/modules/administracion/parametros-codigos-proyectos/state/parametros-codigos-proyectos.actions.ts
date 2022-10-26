import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {CodigosProyectos} from "../../../../data/models/codigos-proyectos";

export enum ParametrosCodigosProyectosActionsNames {
  Init = '[ParametrosCodigosProyectos] Init',
  GetAllParametrosCodigosProyectos = '[ParametrosCodigosProyectos] [Api] Get all',
  GetAllParametrosCodigosProyectosSuccess = '[ParametrosCodigosProyectos] [Api] Get all Success',
  GetAllParametrosCodigosProyectosFailure = '[ParametrosCodigosProyectos] [Api] Get all Failure',

  CreateModalParametrosCodigosProyectos = '[ParametrosCodigosProyectos] [Action] create modal',
  CreateModalParametrosCodigosProyectosSuccess = '[ParametrosCodigosProyectos] [Action] create modal Success',
  CreateModalParametrosCodigosProyectosFailure = '[ParametrosCodigosProyectos] [Action] create modal Failure',
  PostModalParametrosCodigosProyectosSuccess = '[ParametrosCodigosProyectos] [Action] [Api] create Success',
  PostModalParametrosCodigosProyectosFailure = '[ParametrosCodigosProyectos] [Action] [Api] create Failure',

  PutModalParametrosCodigosProyectosSuccess = '[ParametrosCodigosProyectos] [Action] [Api] Put Success',
  PutModalParametrosCodigosProyectosFailure = '[ParametrosCodigosProyectos] [Action] [Api] Put Failure',

  DeleteParametrosCodigosProyectos = '[ParametrosCodigosProyectos] [Action] Delete',
  DeleteParametrosCodigosProyectosSuccess = '[ParametrosCodigosProyectos] [Action] [Api] Delete Success',
  DeleteParametrosCodigosProyectosFailure = '[ParametrosCodigosProyectos] [Action] [Api] Delete Failure',

  SortParametrosCodigosProyectos = '[ParametrosCodigosProyectos] [Action] Sort',
  FilterParametrosCodigosProyectos = '[ParametrosCodigosProyectos] [Action] Filter',
  PaginatorParametrosCodigosProyectos = '[ParametrosCodigosProyectos] [Action] Paginator',
}

export const initParametrosCodigosProyectos = createAction( ParametrosCodigosProyectosActionsNames.Init);

export const getAllParametrosCodigosProyectos = createAction(ParametrosCodigosProyectosActionsNames.GetAllParametrosCodigosProyectos);

export const getAllParametrosCodigosProyectosSuccess = createAction(
  ParametrosCodigosProyectosActionsNames.GetAllParametrosCodigosProyectosSuccess,
  props<{ codigosproyectos: CodigosProyectos[] , codigosproyectosFiltro: CodigosProyectos[] }>()
);

export const getAllParametrosCodigosProyectosFailure = createAction(
  ParametrosCodigosProyectosActionsNames.GetAllParametrosCodigosProyectosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosCodigosProyectos = createAction(
  ParametrosCodigosProyectosActionsNames.CreateModalParametrosCodigosProyectos,
  props<{  edit: CodigosProyectos }>()
);

export const createModalParametrosCodigosProyectosSuccess = createAction(
  ParametrosCodigosProyectosActionsNames.CreateModalParametrosCodigosProyectosSuccess,
  props<{ edit: CodigosProyectos}>()
);

export const createModalParametrosCodigosProyectosFailure = createAction(
  ParametrosCodigosProyectosActionsNames.CreateModalParametrosCodigosProyectosFailure,
  props<{  edit: CodigosProyectos, error: string }>()
);

export const postModalParametrosCodigosProyectosSuccess = createAction(
  ParametrosCodigosProyectosActionsNames.PostModalParametrosCodigosProyectosSuccess,
  props<{ edit: CodigosProyectos, apiResponse: ApiResponse}>()
);

export const postModalParametrosCodigosProyectosFailure = createAction(
  ParametrosCodigosProyectosActionsNames.PostModalParametrosCodigosProyectosFailure,
  props<{  edit: CodigosProyectos, error: string }>()
);


export const putModalParametrosCodigosProyectosSuccess= createAction(
  ParametrosCodigosProyectosActionsNames.PutModalParametrosCodigosProyectosSuccess,
  props<{ edit: CodigosProyectos, apiResponse: ApiResponse}>()
);

export const putModalParametrosCodigosProyectosFailure = createAction(
  ParametrosCodigosProyectosActionsNames.PutModalParametrosCodigosProyectosFailure,
  props<{  edit: CodigosProyectos, error: string }>()
);

export const deleteParametrosCodigosProyectos = createAction(
  ParametrosCodigosProyectosActionsNames.DeleteParametrosCodigosProyectos,
  props<{ edit: CodigosProyectos}>()
);

export const deleteParametrosCodigosProyectosSuccess = createAction(
  ParametrosCodigosProyectosActionsNames.DeleteParametrosCodigosProyectosSuccess,
  props<{ edit: CodigosProyectos, apiResponse: ApiResponse}>()
);

export const deleteParametrosCodigosProyectosFailure = createAction(
  ParametrosCodigosProyectosActionsNames.DeleteParametrosCodigosProyectosFailure,
  props<{ error: string }>()
);

export const sortParametrosCodigosProyectos = createAction(
  ParametrosCodigosProyectosActionsNames.SortParametrosCodigosProyectos,
  props<{ column: any, direction: any}>()
);

export const filterParametrosCodigosProyectos = createAction(
  ParametrosCodigosProyectosActionsNames.FilterParametrosCodigosProyectos,
  props<{ filtro: string}>()
);

export const paginatorParametrosCodigosProyectos = createAction(
  ParametrosCodigosProyectosActionsNames.PaginatorParametrosCodigosProyectos,
  props<{ paginator: number}>()
);

