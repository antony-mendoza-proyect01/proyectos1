import {createAction, props} from '@ngrx/store';
import {ApiResponse} from '../../../../data/models/api-response';
import {DescripcionNucleos} from '../../../../data/models/descripcion-nucleos';
import {GraficasDescripcionNucleos} from '../../../../data/models/grafica-descripcion-nucleos';

export enum DescripcionNucleosActions {
  Init = '[DescripcionNucleos] Init',
  GetAllByPozoDescripcionNucleos = '[DescripcionNucleos] [Api] Get all By Pozo',
  GetAllByPozoDescripcionNucleosSuccess = '[DescripcionNucleos] [Api] Get all By Pozo Success',
  GetAllByPozoDescripcionNucleosFailure = '[DescripcionNucleos] [Api] Get all By Pozo Failure',
  // GetAllDescripcionNucleos = '[DescripcionNucleos] [Api] Get all',
  // GetAllDescripcionNucleosSuccess = '[DescripcionNucleos] [Api] Get all Success',
  // GetAllDescripcionNucleosFailure = '[DescripcionNucleos] [Api] Get all Failure',

  // CreateModalDescripcionNucleos = '[DescripcionNucleos] [Action] create modal',
  // CreateModalDescripcionNucleosSuccess = '[DescripcionNucleos] [Action] create modal Success',
  // CreateModalDescripcionNucleosFailure = '[DescripcionNucleos] [Action] create modal Failure',
  // PostModalDescripcionNucleosSuccess = '[DescripcionNucleos] [Action] [Api] create Success',
  // PostModalDescripcionNucleosFailure = '[DescripcionNucleos] [Action] [Api] create Failure',

  DescripcionNucleosEditDescripcionNucleos = '[DescripcionNucleos] [Action] Descripcion Nucleos Edit',
  PasarDescripcionNucleos = '[DescripcionNucleos] [Action] Pasar Descripcion Nucleos',

}

export const initDescripcionNucleos = createAction( DescripcionNucleosActions.Init);

export const getAllByPozoDescripcionNucleos = createAction(
  DescripcionNucleosActions.GetAllByPozoDescripcionNucleos,
  props<{ codPozo: string }>()
);

export const getAllByPozoDescripcionNucleosSuccess = createAction(
  DescripcionNucleosActions.GetAllByPozoDescripcionNucleosSuccess,
  props<{ grafica: GraficasDescripcionNucleos }>()
);

export const getAllByPozoDescripcionNucleosFailure = createAction(
  DescripcionNucleosActions.GetAllByPozoDescripcionNucleosFailure,
  props<{  error: string   }>()
);

export const descripcionNucleosEditDescripcionNucleos = createAction(
  DescripcionNucleosActions.DescripcionNucleosEditDescripcionNucleos,
  props<{  descripcionNucleosEdit: DescripcionNucleos   }>()
);

export const pasarDescripcionNucleos = createAction(
  DescripcionNucleosActions.PasarDescripcionNucleos,
  props<{  posicion: number   }>()
);
//
// export const createModalDescripcionNucleos = createAction(
//   DescripcionNucleosActions.CreateModalDescripcionNucleos,
//   props<{  edit: DescripcionNucleos }>()
// );
//
// export const createModalDescripcionNucleosSuccess = createAction(
//   DescripcionNucleosActions.CreateModalDescripcionNucleosSuccess,
//   props<{ edit: DescripcionNucleos}>()
// );
//
// export const createModalDescripcionNucleosFailure = createAction(
//   DescripcionNucleosActions.CreateModalDescripcionNucleosFailure,
//   props<{  edit: DescripcionNucleos, error: string }>()
// );
//
// export const postModalDescripcionNucleosSuccess = createAction(
//   DescripcionNucleosActions.PostModalDescripcionNucleosSuccess,
//   props<{ edit: DescripcionNucleos, apiResponse: ApiResponse}>()
// );
//
// export const postModalDescripcionNucleosFailure = createAction(
//   DescripcionNucleosActions.PostModalDescripcionNucleosFailure,
//   props<{  edit: DescripcionNucleos, error: string }>()
// );
