import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {CalibracionDatosPozoRegistradoState} from './calibracion-datos-pozo-registrado.state';

export const selectCalibracionDatosPozoRegistradoFeature = (state: AppState) => state.calibracionDatosPozoRegistradoState;// TODO: PADRE

export const selectListCalibracionDatosPozoRegistrado = createSelector(
  selectCalibracionDatosPozoRegistradoFeature,
  (state: CalibracionDatosPozoRegistradoState) => state.calibracionDatosPozoRegistrado //TODO: HIJO
);

export const selectLoadingCalibracionDatosPozoRegistrado = createSelector(
  selectCalibracionDatosPozoRegistradoFeature,
  (state: CalibracionDatosPozoRegistradoState) => state.loading //TODO: HIJO
);

export const selectActionCalibracionDatosPozoRegistrado = createSelector(
  selectCalibracionDatosPozoRegistradoFeature,
  (state: CalibracionDatosPozoRegistradoState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalibracionDatosPozoRegistrado = createSelector(
  selectCalibracionDatosPozoRegistradoFeature,
  (state: CalibracionDatosPozoRegistradoState) => state.error //TODO: HIJO
);

export const selectActionCalibracionDatosPozoRegistradoEdit = createSelector(
  selectCalibracionDatosPozoRegistradoFeature,
  (state: CalibracionDatosPozoRegistradoState) => state.edit //TODO: HIJO
);

export const selectListCalibracionDatosPozoRegistradoPaginator = createSelector(
  selectCalibracionDatosPozoRegistradoFeature,
  (state: CalibracionDatosPozoRegistradoState) => state.paginator //TODO: HIJO
);

