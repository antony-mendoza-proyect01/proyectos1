import {createAction, props} from '@ngrx/store';
import {Seudopozo, SeudoPozoResponseData} from '../../../../data/models/seudopozos';

export enum ImpresionSeudopozosActions {
  Init = '[ImpresionSeudopozos] Init',
  GetAllByPozoImpresionSeudopozos = '[ImpresionSeudopozos] [Api] Get all By Pozo',
  GetAllByPozoImpresionSeudopozosSuccess = '[ImpresionSeudopozos] [Api] Get all By Pozo Success',
  GetAllByPozoImpresionSeudopozosFailure = '[ImpresionSeudopozos] [Api] Get all By Pozo Failure',
  // GetAllImpresionSeudopozos = '[ImpresionSeudopozos] [Api] Get all',
  // GetAllImpresionSeudopozosSuccess = '[ImpresionSeudopozos] [Api] Get all Success',
  // GetAllImpresionSeudopozosFailure = '[ImpresionSeudopozos] [Api] Get all Failure',

  // CreateModalImpresionSeudopozos = '[ImpresionSeudopozos] [Action] create modal',
  // CreateModalImpresionSeudopozosSuccess = '[ImpresionSeudopozos] [Action] create modal Success',
  // CreateModalImpresionSeudopozosFailure = '[ImpresionSeudopozos] [Action] create modal Failure',
  // PostModalImpresionSeudopozosSuccess = '[ImpresionSeudopozos] [Action] [Api] create Success',
  // PostModalImpresionSeudopozosFailure = '[ImpresionSeudopozos] [Action] [Api] create Failure',

  ImpresionSeudopozosEditImpresionSeudopozos = '[ImpresionSeudopozos] [Action] Descripcion Nucleos Edit',
  PasarImpresionSeudopozos = '[ImpresionSeudopozos] [Action] Pasar Descripcion Nucleos',
  PdfImpresionSeudopozos = '[ImpresionSeudopozos] [Action] PDF Descripcion Nucleos',

}

export const initImpresionSeudopozos = createAction( ImpresionSeudopozosActions.Init);

export const getAllByPozoImpresionSeudopozos = createAction(
  ImpresionSeudopozosActions.GetAllByPozoImpresionSeudopozos,
  props<{ codPozo: string }>()
);

export const getAllByPozoImpresionSeudopozosSuccess = createAction(
  ImpresionSeudopozosActions.GetAllByPozoImpresionSeudopozosSuccess,
  props<{ grafica: SeudoPozoResponseData }>()
);

export const getAllByPozoImpresionSeudopozosFailure = createAction(
  ImpresionSeudopozosActions.GetAllByPozoImpresionSeudopozosFailure,
  props<{  error: string   }>()
);

export const seudopozosEditImpresionSeudopozos = createAction(
  ImpresionSeudopozosActions.ImpresionSeudopozosEditImpresionSeudopozos,
  props<{  seudopozoEdit: Seudopozo   }>()
);

export const pasarImpresionSeudopozos = createAction(
  ImpresionSeudopozosActions.PasarImpresionSeudopozos,
  props<{  posicion: number   }>()
);

export const pdfImpresionSeudopozos = createAction(
  ImpresionSeudopozosActions.PdfImpresionSeudopozos,
  props<{  codPozo: string   }>()
);
