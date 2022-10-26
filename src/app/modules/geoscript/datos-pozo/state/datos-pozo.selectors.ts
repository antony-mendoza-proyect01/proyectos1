
import { createSelector } from '@ngrx/store';

import {AppState} from '../../../../app.state';
import { DatosDelPozoState } from './datos-pozo.state';
import {SuperficiePozoState} from "../../datos-carbon/state/state-superficie-pozo/superficie-pozo.state";
import {selectSuperficiePozoFeature} from "../../datos-carbon/state/state-superficie-pozo/superficie-pozo.selectors";

export const selecGraficaDatosPozoFeature = (state: AppState) => state.datosPozoState;// TODO: PADRE

export const selectListDatosPozoDatosPozo = createSelector(
  selecGraficaDatosPozoFeature,
  (state: DatosDelPozoState) => state.datosPozo //TODO: HIJO
);

export const selectLoadingGraficaDatosPozo = createSelector(
  selecGraficaDatosPozoFeature,
  (state: DatosDelPozoState) => state.loading //TODO: HIJO
);

export const selectActionGraficaDatosPozo = createSelector(
  selecGraficaDatosPozoFeature,
  (state: DatosDelPozoState) => state.action //TODO: HIJO
);

export const selectMensajeErrorGraficaDatosPozo = createSelector(
  selecGraficaDatosPozoFeature,
  (state: DatosDelPozoState) => state.error //TODO: HIJO
);

export const selectActionPutEditGraficaDatosPozo = createSelector(
  selecGraficaDatosPozoFeature,
  (state: DatosDelPozoState) => state.edit //TODO: HIJO
);
