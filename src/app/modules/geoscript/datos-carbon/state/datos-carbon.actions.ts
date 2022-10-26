import {createAction, props} from '@ngrx/store';
import {GraficaDatosCarbones} from '../../../../data/models/grafica-datos-carbones';
import {DatosCarbon} from '../../../../data/models/datos-carbon';
import {SuperficiePozo} from '../../../../data/models/superficie-pozo';

export enum DatosCarbonActions {
  Init = '[DatosCarbon] Init',
  GetAllByPozoValidacionTipoPozoDatosCarbon = '[DatosCarbon] [action] Get all By Pozo Validacion TipoPozo',
  GetAllByPozoDatosCarbon = '[DatosCarbon] [Api] Get all By Pozo',
  GetAllByPozoDatosCarbonSuccess = '[DatosCarbon] [Api] Get all By Pozo Success',
  GetAllByPozoDatosCarbonFailure = '[DatosCarbon] [Api] Get all By Pozo Failure',
  // GetAllDatosCarbon = '[DatosCarbon] [Api] Get all',
  // GetAllDatosCarbonSuccess = '[DatosCarbon] [Api] Get all Success',
  // GetAllDatosCarbonFailure = '[DatosCarbon] [Api] Get all Failure',

  // CreateModalDatosCarbon = '[DatosCarbon] [Action] create modal',
  // CreateModalDatosCarbonSuccess = '[DatosCarbon] [Action] create modal Success',
  // CreateModalDatosCarbonFailure = '[DatosCarbon] [Action] create modal Failure',
  // PostModalDatosCarbonSuccess = '[DatosCarbon] [Action] [Api] create Success',
  // PostModalDatosCarbonFailure = '[DatosCarbon] [Action] [Api] create Failure',

  DatosCarbonEditDatosCarbon = '[DatosCarbon] [Action] Descripcion Nucleos Edit',
  PasarDatosCarbon = '[DatosCarbon] [Action] Pasar Descripcion Nucleos',

}

export const initDatosCarbon = createAction( DatosCarbonActions.Init);

export const getAllByPozoValidacionTipoPozoDatosCarbon = createAction(
  DatosCarbonActions.GetAllByPozoValidacionTipoPozoDatosCarbon,
  props<{ codPozo: string   }>()
);

export const getAllByPozoDatosCarbon = createAction(
  DatosCarbonActions.GetAllByPozoDatosCarbon,
  props<{ codPozo: string; tipoPozo: string  }>()
);

export const getAllByPozoDatosCarbonSuccess = createAction(
  DatosCarbonActions.GetAllByPozoDatosCarbonSuccess,
  props<{ grafica: GraficaDatosCarbones }>()
);

export const getAllByPozoDatosCarbonFailure = createAction(
  DatosCarbonActions.GetAllByPozoDatosCarbonFailure,
  props<{  error: string   }>()
);

export const datosCarbonEditDatosCarbon = createAction(
  DatosCarbonActions.DatosCarbonEditDatosCarbon,
  props<{  datosCarbonEdit: DatosCarbon   }>()
);

export const pasarDatosCarbon = createAction(
  DatosCarbonActions.PasarDatosCarbon,
  props<{  posicion: number   }>()
);


//
// export const createModalDatosCarbon = createAction(
//   DatosCarbonActions.CreateModalDatosCarbon,
//   props<{  edit: DatosCarbon }>()
// );
//
// export const createModalDatosCarbonSuccess = createAction(
//   DatosCarbonActions.CreateModalDatosCarbonSuccess,
//   props<{ edit: DatosCarbon}>()
// );
//
// export const createModalDatosCarbonFailure = createAction(
//   DatosCarbonActions.CreateModalDatosCarbonFailure,
//   props<{  edit: DatosCarbon, error: string }>()
// );
//
// export const postModalDatosCarbonSuccess = createAction(
//   DatosCarbonActions.PostModalDatosCarbonSuccess,
//   props<{ edit: DatosCarbon, apiResponse: ApiResponse}>()
// );
//
// export const postModalDatosCarbonFailure = createAction(
//   DatosCarbonActions.PostModalDatosCarbonFailure,
//   props<{  edit: DatosCarbon, error: string }>()
// );
