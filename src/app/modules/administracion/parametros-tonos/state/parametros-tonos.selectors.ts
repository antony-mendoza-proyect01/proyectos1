
import { createSelector } from '@ngrx/store';
import { ParametrosTonosState } from './parametros-tonos.state';
import {AppState} from '../../../../app.state';

export const selectTonosFeature = (state: AppState) => state.parametrosTonosState;// TODO: PADRE

export const selectListTonos = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.tonos //TODO: HIJO
);

export const selectLoadingTonos = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.loading //TODO: HIJO
);

export const selectActionTonos = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorTonos = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.error //TODO: HIJO
);

export const selectActionTonosEdit = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.edit //TODO: HIJO
);

export const selectListTonosFiltro = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.tonosFiltro //TODO: HIJO
);

export const selectListTonosPaginator = createSelector(
  selectTonosFeature,
  (state: ParametrosTonosState) => state.paginator //TODO: HIJO
);
