import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {CalibracionSondaCabezaCableState} from './calibracion-sonda-cabeza-cable.state';

export const selectCalibracionSondaCabezaCableFeature = (state: AppState) => state.calibracionSondaCabezaCableState;// TODO: PADRE

export const selectListCalibracionSondaCabezaCable = createSelector(
  selectCalibracionSondaCabezaCableFeature,
  (state: CalibracionSondaCabezaCableState) => state.calibracionSondaCabezaCables //TODO: HIJO
);

export const selectLoadingCalibracionSondaCabezaCable = createSelector(
  selectCalibracionSondaCabezaCableFeature,
  (state: CalibracionSondaCabezaCableState) => state.loading //TODO: HIJO
);

export const selectActionCalibracionSondaCabezaCable = createSelector(
  selectCalibracionSondaCabezaCableFeature,
  (state: CalibracionSondaCabezaCableState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalibracionSondaCabezaCable = createSelector(
  selectCalibracionSondaCabezaCableFeature,
  (state: CalibracionSondaCabezaCableState) => state.error //TODO: HIJO
);

export const selectActionCalibracionSondaCabezaCableEdit = createSelector(
  selectCalibracionSondaCabezaCableFeature,
  (state: CalibracionSondaCabezaCableState) => state.edit //TODO: HIJO
);

export const selectListCalibracionSondaCabezaCablePaginator = createSelector(
  selectCalibracionSondaCabezaCableFeature,
  (state: CalibracionSondaCabezaCableState) => state.paginator //TODO: HIJO
);

