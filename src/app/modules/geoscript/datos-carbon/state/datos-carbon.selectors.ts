import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {DatosCarbonState} from './datos-carbon.state';

export const selectDatosCarbonFeature = (state: AppState) => state.datosCarbon;// TODO: PADRE

export const selectGraficaDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.grafica //TODO: HIJO
);

export const selectLoadingDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.loading //TODO: HIJO
);

export const selectMensajeErrorDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.error //TODO: HIJO
);

export const selectReglaLengthDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.reglaLength //TODO: HIJO
);

export const selectIntevalosEditDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.datosCarbonEdit //TODO: HIJO
);

export const selectNucleosDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.nucleos //TODO: HIJO
);

export const selectIntervalosDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.intervalos //TODO: HIJO
);

export const selectSuperficiesDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.superficies //TODO: HIJO
);

export const selectProfundidadRegistroDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.profundidadRegistro //TODO: HIJO
);

export const selectRipiosDatosCarbon = createSelector(
  selectDatosCarbonFeature,
  (state: DatosCarbonState) => state.ripios //TODO: HIJO
);
