import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {CalibracionDepmeterState} from './calibracion-depmeter.state';

export const selectCalibracionDipmeterFeature = (state: AppState) => state.calibracionDipmeterState;// TODO: PADRE

export const selectListCalibracionDipmeter = createSelector(
  selectCalibracionDipmeterFeature,
  (state: CalibracionDepmeterState) => state.calibracionDipmeter //TODO: HIJO
);

export const selectLoadingCalibracionDipmeter = createSelector(
  selectCalibracionDipmeterFeature,
  (state: CalibracionDepmeterState) => state.loading //TODO: HIJO
);

export const selectActionCalibracionDipmeter = createSelector(
  selectCalibracionDipmeterFeature,
  (state: CalibracionDepmeterState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalibracionDipmeter = createSelector(
  selectCalibracionDipmeterFeature,
  (state: CalibracionDepmeterState) => state.error //TODO: HIJO
);

export const selectActionCalibracionDipmeterEdit = createSelector(
  selectCalibracionDipmeterFeature,
  (state: CalibracionDepmeterState) => state.edit //TODO: HIJO
);

export const selectListCalibracionDipmeterPaginator = createSelector(
  selectCalibracionDipmeterFeature,
  (state: CalibracionDepmeterState) => state.paginator //TODO: HIJO
);

