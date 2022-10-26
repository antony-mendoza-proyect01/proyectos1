import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {CalibracionDensidadState} from './calibracion-densidad.state';

export const selectCalibracionDensidadFeature = (state: AppState) => state.calibracionDensidadState;// TODO: PADRE

export const selectListCalibracionDensidad = createSelector(
  selectCalibracionDensidadFeature,
  (state: CalibracionDensidadState) => state.calibracionDensidades //TODO: HIJO
);

export const selectLoadingCalibracionDensidad = createSelector(
  selectCalibracionDensidadFeature,
  (state: CalibracionDensidadState) => state.loading //TODO: HIJO
);

export const selectActionCalibracionDensidad = createSelector(
  selectCalibracionDensidadFeature,
  (state: CalibracionDensidadState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalibracionDensidad = createSelector(
  selectCalibracionDensidadFeature,
  (state: CalibracionDensidadState) => state.error //TODO: HIJO
);

export const selectActionCalibracionDensidadEdit = createSelector(
  selectCalibracionDensidadFeature,
  (state: CalibracionDensidadState) => state.edit //TODO: HIJO
);

export const selectListCalibracionDensidadPaginator = createSelector(
  selectCalibracionDensidadFeature,
  (state: CalibracionDensidadState) => state.paginator //TODO: HIJO
);

