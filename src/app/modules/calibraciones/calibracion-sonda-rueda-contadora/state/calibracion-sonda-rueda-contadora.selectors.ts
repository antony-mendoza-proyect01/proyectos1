import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {CalibracionSondaRuedaContadoraState} from './calibracion-sonda-rueda-contadora..state';

export const selectCalibracionSondaRuedaContadoraFeature = (state: AppState) => state.calibracionSondaRuedaContadoraState;// TODO: PADRE

export const selectListCalibracionSondaRuedaContadora = createSelector(
  selectCalibracionSondaRuedaContadoraFeature,
  (state: CalibracionSondaRuedaContadoraState) => state.calibracionSondaRuedaContadoras //TODO: HIJO
);

export const selectLoadingCalibracionSondaRuedaContadora = createSelector(
  selectCalibracionSondaRuedaContadoraFeature,
  (state: CalibracionSondaRuedaContadoraState) => state.loading //TODO: HIJO
);

export const selectActionCalibracionSondaRuedaContadora = createSelector(
  selectCalibracionSondaRuedaContadoraFeature,
  (state: CalibracionSondaRuedaContadoraState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalibracionSondaRuedaContadora = createSelector(
  selectCalibracionSondaRuedaContadoraFeature,
  (state: CalibracionSondaRuedaContadoraState) => state.error //TODO: HIJO
);

export const selectActionCalibracionSondaRuedaContadoraEdit = createSelector(
  selectCalibracionSondaRuedaContadoraFeature,
  (state: CalibracionSondaRuedaContadoraState) => state.edit //TODO: HIJO
);

export const selectListCalibracionSondaRuedaContadoraPaginator = createSelector(
  selectCalibracionSondaRuedaContadoraFeature,
  (state: CalibracionSondaRuedaContadoraState) => state.paginator //TODO: HIJO
);

