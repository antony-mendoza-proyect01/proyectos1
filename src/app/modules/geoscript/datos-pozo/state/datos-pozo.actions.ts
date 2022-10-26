import {createAction, props} from '@ngrx/store';
import {ResponseDatosDelPozo, ResultDatosPozo} from 'src/app/data/models/result-datos-pozo';
import {ApiResponse} from "../../../../data/models/api-response";
import {DatosPozoForm} from '../components/form/form.component';

export enum GraficaDatosPozoActionsNames {
  Init = '[GraficaDatosPozo] Init',
  GetAllByPozoGraficaDatosPozo = '[GraficaDatosPozo] [Api] Get all',
  GetAllByPozoGraficaDatosPozoSuccess = '[GraficaDatosPozo] [Api] Get all Success',
  GetAllByPozoGraficaDatosPozoFailure = '[GraficaDatosPozo] [Api] Get all Failure',

  PutEditGraficaDatosPozo= '[GraficaDatosPozo] [Action] Edit ',
  PutEdiGraficaDatosPozoSuccess = '[GraficaDatosPozo] [Action] [Api] Put Success',
  PutEdiGraficaDatosPozoFailure = '[GraficaDatosPozo] [Action] [Api] Put Failure',

}

export const initGraficaDatosPozo = createAction( GraficaDatosPozoActionsNames.Init);

export const getAllGraficaDatosPozo = createAction(GraficaDatosPozoActionsNames.GetAllByPozoGraficaDatosPozo);


export const getAllByPozoGraficaDatosPozo = createAction(
  GraficaDatosPozoActionsNames.GetAllByPozoGraficaDatosPozo,
  props<{  codPozo: string  }>()
);

export const getAllByPozoGraficaDatosPozoSuccess = createAction(
  GraficaDatosPozoActionsNames.GetAllByPozoGraficaDatosPozoSuccess,
  props<{ datosPozo: ResultDatosPozo }>()
);

export const getAllByPozoGraficaDatosPozoFailure = createAction(
  GraficaDatosPozoActionsNames.GetAllByPozoGraficaDatosPozoFailure,
  props<{  error: string   }>()
);


export const putGraficaDatosPozo = createAction(
  GraficaDatosPozoActionsNames. PutEditGraficaDatosPozo,
  props<{ edit: DatosPozoForm, codPozo: string}>()
);

export const putGraficaDatosPozoSuccess= createAction(
  GraficaDatosPozoActionsNames. PutEdiGraficaDatosPozoSuccess,
  props<{  datosPozo: ResultDatosPozo  }>()
);

export const putGraficaDatosPozoFailure = createAction(
  GraficaDatosPozoActionsNames. PutEdiGraficaDatosPozoFailure,
  props<{ error: string }>()
);





