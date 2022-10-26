
import { createSelector } from '@ngrx/store';
import { ParametrosCaudalesState } from './parametros-caudales.state';
import {AppState} from '../../../../app.state';

export const selectCaudalesFeature = (state: AppState) => state.parametrosCaudalesState;// TODO: PADRE

export const selectListCaudales = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.caudales //TODO: HIJO
);

export const selectLoadingCaudales = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.loading //TODO: HIJO
);

export const selectActionCaudales = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCaudales = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.error //TODO: HIJO
);

export const selectActionCaudalesEdit = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.edit //TODO: HIJO
);

export const selectListCaudalesFiltro = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.caudalesFiltro //TODO: HIJO
);

export const selectListParametrosCaudalesPaginator = createSelector(
  selectCaudalesFeature,
  (state: ParametrosCaudalesState) => state.paginator //TODO: HIJO
);
