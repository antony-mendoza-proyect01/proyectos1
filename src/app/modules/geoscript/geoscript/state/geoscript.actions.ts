import {createAction, props} from '@ngrx/store';

export enum GeoscriptActionsNames {
  Init = '[Geoscript] Init',

  GetByPozo = '[Geoscript] [Api] Get ByPozo',
  GetByPozoSuccess = '[Geoscript] [Api] Get ByPozo Success',
  GetByPozoFailure = '[Geoscript] [Api] Get ByPozo Failure',
}

export const initGeoscript = createAction( GeoscriptActionsNames.Init);

export const getByPozo = createAction(
  GeoscriptActionsNames.GetByPozo,
  props<{ pozo: string }>()
);

export const getByPozoSuccess = createAction(
  GeoscriptActionsNames.GetByPozoSuccess,
  props<{ pozoValidado: boolean }>()
);

export const getByPozoFailure = createAction(
  GeoscriptActionsNames.GetByPozoFailure,
  props<{  error: string   }>()
);
