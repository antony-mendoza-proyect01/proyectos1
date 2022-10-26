import {createAction, props} from '@ngrx/store';
import {GraficaDescipcionRipios} from '../../../../data/models/grafica-descripcion-ripios';
import {DescripcionRipios} from '../../../../data/models/descripcion-ripios';
export enum DescripcionRipiosActions {
  Init = '[DescripcionRipios] Init',
  GetAllByPozoDescripcionRipios = '[DescripcionRipios] [Api] Get all By Pozo',
  GetAllByPozoDescripcionRipiosSuccess = '[DescripcionRipios] [Api] Get all By Pozo Success',
  GetAllByPozoDescripcionRipiosFailure = '[DescripcionRipios] [Api] Get all By Pozo Failure',
  // GetAllDescripcionRipios = '[DescripcionRipios] [Api] Get all',
  // GetAllDescripcionRipiosSuccess = '[DescripcionRipios] [Api] Get all Success',
  // GetAllDescripcionRipiosFailure = '[DescripcionRipios] [Api] Get all Failure',

  // CreateModalDescripcionRipios = '[DescripcionRipios] [Action] create modal',
  // CreateModalDescripcionRipiosSuccess = '[DescripcionRipios] [Action] create modal Success',
  // CreateModalDescripcionRipiosFailure = '[DescripcionRipios] [Action] create modal Failure',
  // PostModalDescripcionRipiosSuccess = '[DescripcionRipios] [Action] [Api] create Success',
  // PostModalDescripcionRipiosFailure = '[DescripcionRipios] [Action] [Api] create Failure',

  DescripcionRipiosEditDescripcionRipios = '[DescripcionRipios] [Action] Descripcion Nucleos Edit',
  PasarDescripcionRipios = '[DescripcionRipios] [Action] Pasar Descripcion Nucleos',

}

export const initDescripcionRipios = createAction( DescripcionRipiosActions.Init);

export const getAllByPozoDescripcionRipios = createAction(
  DescripcionRipiosActions.GetAllByPozoDescripcionRipios,
  props<{ codPozo: string }>()
);

export const getAllByPozoDescripcionRipiosSuccess = createAction(
  DescripcionRipiosActions.GetAllByPozoDescripcionRipiosSuccess,
  props<{ grafica: GraficaDescipcionRipios }>()
);

export const getAllByPozoDescripcionRipiosFailure = createAction(
  DescripcionRipiosActions.GetAllByPozoDescripcionRipiosFailure,
  props<{  error: string   }>()
);

export const descripcionRipiosEditDescripcionRipios = createAction(
  DescripcionRipiosActions.DescripcionRipiosEditDescripcionRipios,
  props<{  descripcionRipiosEdit: DescripcionRipios   }>()
);

export const pasarDescripcionRipios = createAction(
  DescripcionRipiosActions.PasarDescripcionRipios,
  props<{  posicion: number   }>()
);
//
// export const createModalDescripcionRipios = createAction(
//   DescripcionRipiosActions.CreateModalDescripcionRipios,
//   props<{  edit: DescripcionRipios }>()
// );
//
// export const createModalDescripcionRipiosSuccess = createAction(
//   DescripcionRipiosActions.CreateModalDescripcionRipiosSuccess,
//   props<{ edit: DescripcionRipios}>()
// );
//
// export const createModalDescripcionRipiosFailure = createAction(
//   DescripcionRipiosActions.CreateModalDescripcionRipiosFailure,
//   props<{  edit: DescripcionRipios, error: string }>()
// );
//
// export const postModalDescripcionRipiosSuccess = createAction(
//   DescripcionRipiosActions.PostModalDescripcionRipiosSuccess,
//   props<{ edit: DescripcionRipios, apiResponse: ApiResponse}>()
// );
//
// export const postModalDescripcionRipiosFailure = createAction(
//   DescripcionRipiosActions.PostModalDescripcionRipiosFailure,
//   props<{  edit: DescripcionRipios, error: string }>()
// );
