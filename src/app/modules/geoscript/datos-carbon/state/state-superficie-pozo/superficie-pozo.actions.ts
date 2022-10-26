import {createAction, props} from '@ngrx/store';
import { ApiResponse } from 'src/app/data/models/api-response';
import {ResponseSuperficiePozoDetailRGB, SuperficiePozo} from 'src/app/data/models/superficie-pozo';

export enum SuperficiePozoActionsNames {
  Init = '[SuperficiePozo] Init',
  GetAllByPozoSuperficiePozo = '[SuperficiePozo] [Api] Get all By Pozo',
  GetAllByPozoSuperficiePozoSuccess = '[SuperficiePozo] [Api] Get all By Pozo Success',
  GetAllByPozoSuperficiePozoFailure = '[SuperficiePozo] [Api] Get all By Pozo  Failure',

  CreateModalSuperficiePozo = '[SuperficiePozo] [Action] create modal',
  CreateModalSuperficiePozoSuccess = '[SuperficiePozo] [Action] create modal Success',
  CreateModalSuperficiePozoFailure = '[SuperficiePozo] [Action] create modal Failure',
  PostModalSuperficiePozoSuccess = '[SuperficiePozo] [Action] [Api] create Success',
  PostModalSuperficiePozoFailure = '[SuperficiePozo] [Action] [Api] create Failure',

  EditModalSuperficiePozo = '[SuperficiePozo] [Action] Edit modal',
  EditModalSuperficiePozoSuccess = '[SuperficiePozo] [Action] Edit modal Success',
  EditModalSuperficiePozoFailure = '[SuperficiePozo] [Action] Edit modal Failure',
  PutModalSuperficiePozoSuccess = '[SuperficiePozo] [Action] [Api] Put Success',
  PutModalSuperficiePozoFailure = '[SuperficiePozo] [Action] [Api] Put Failure',

  DeleteSuperficiePozo = '[SuperficiePozo] [Action] Delete',
  DeleteSuperficiePozoSuccess = '[SuperficiePozo] [Action] [Api] Delete Success',
  DeleteSuperficiePozoFailure = '[SuperficiePozo] [Action] [Api] Delete Failure',

  // GetByDatoPozoNombreSuperficie = '[CalibracionNombreSuperficie] [Api] GetByCalibracionNombreSuperficie',
  // GetByDatoPozoNombreSuperficieSuccess = '[CalibracionNombreSuperficie] [Api] GetByCalibracionNombreSuperficie Success',
  // GetByDatoPozoNombreSuperficieFailure = '[CalibracionNombreSuperficie] [Api] GetByCalibracionNombreSuperficie Failure',

}

export const initSuperficiePozo = createAction( SuperficiePozoActionsNames.Init);

export const getAllSuperficiePozo = createAction(SuperficiePozoActionsNames.GetAllByPozoSuperficiePozo);

export const getAllByPozoSuperficiePozo = createAction(
  SuperficiePozoActionsNames.GetAllByPozoSuperficiePozo,
  props<{  pozo: string  }>()
);

export const getAllByPozoSuperficiePozoSuccess = createAction(
  SuperficiePozoActionsNames.GetAllByPozoSuperficiePozoSuccess,
  props<{ superficiePozos: SuperficiePozo[] }>()
);

export const getAllByPozoSuperficiePozoFailure = createAction(
  SuperficiePozoActionsNames.GetAllByPozoSuperficiePozoFailure,
  props<{  error: string   }>()
);

export const createModalSuperficiePozo = createAction(
  SuperficiePozoActionsNames.CreateModalSuperficiePozo,
  props<{  edit: SuperficiePozo }>()
);

export const createModalSuperficiePozoSuccess = createAction(
  SuperficiePozoActionsNames.CreateModalSuperficiePozoSuccess,
  props<{ edit: SuperficiePozo}>()
);

export const createModalSuperficiePozoFailure = createAction(
  SuperficiePozoActionsNames.CreateModalSuperficiePozoFailure,
  props<{  edit: SuperficiePozo, error: string }>()
);

export const postModalSuperficiePozoSuccess = createAction(
  SuperficiePozoActionsNames.PostModalSuperficiePozoSuccess,
  props<{ edit: ResponseSuperficiePozoDetailRGB, apiResponse: ApiResponse}>()
);

export const postModalSuperficiePozoFailure = createAction(
  SuperficiePozoActionsNames.PostModalSuperficiePozoFailure,
  props<{  edit: SuperficiePozo, error: string }>()
);

export const editModalSuperficiePozo = createAction(
  SuperficiePozoActionsNames.EditModalSuperficiePozo,
  props<{ edit: SuperficiePozo, codPozo: string }>()
);

export const editModalSuperficiePozoSuccess = createAction(
  SuperficiePozoActionsNames.EditModalSuperficiePozoSuccess,
  props<{ edit: SuperficiePozo, codPozo: string }>()
);

export const editModalSuperficiePozoFailure = createAction(
  SuperficiePozoActionsNames.EditModalSuperficiePozoFailure,
  props<{ error: string }>()
);

export const putModalSuperficiePozoSuccess= createAction(
  SuperficiePozoActionsNames.PutModalSuperficiePozoSuccess,
  props<{ edit: SuperficiePozo, apiResponse: ApiResponse}>()
);

export const putModalSuperficiePozoFailure = createAction(
  SuperficiePozoActionsNames.PutModalSuperficiePozoFailure,
  props<{  edit: SuperficiePozo, error: string }>()
);

export const deleteSuperficiePozo = createAction(
  SuperficiePozoActionsNames.DeleteSuperficiePozo,
  props<{ edit: SuperficiePozo}>()
);

export const deleteSuperficiePozoSuccess = createAction(
  SuperficiePozoActionsNames.DeleteSuperficiePozoSuccess,
  props<{ edit: SuperficiePozo, apiResponse: ApiResponse}>()
);

export const deleteSuperficiePozoFailure = createAction(
  SuperficiePozoActionsNames.DeleteSuperficiePozoFailure,
  props<{ error: string }>()
);

// export const getByDatoPozoNombreSuperficie = createAction(
//   SuperficiePozoActionsNames.GetByDatoPozoNombreSuperficie
// );
//
// export const getByDatoPozoNombreSuperficieSuccess = createAction(
//   SuperficiePozoActionsNames.GetByDatoPozoNombreSuperficieSuccess,
//   props<{ nombreSuperficie: NombreSuperficies[]}>()
// );
//
// export const getByDatoPozoNombreSuperficieFailure = createAction(
//   SuperficiePozoActionsNames.GetByDatoPozoNombreSuperficieFailure,
//   props<{ error: string }>()
// );




