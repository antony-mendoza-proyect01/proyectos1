
import { createSelector } from '@ngrx/store';
import { ParametrosLitofacieColoresState } from './parametros-litofacie-colores.state';
import {AppState} from '../../../../app.state';

export const selectLitofacieColoresFeature = (state: AppState) => state.parametrosLitofacieColorState;// TODO: PADRE

export const selectListLitofacieColores = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.litofacies //TODO: HIJO
);

export const selectLoadingLitofacieColores = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.loading //TODO: HIJO
);

export const selectActionLitofacieColores = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.action //TODO: HIJO
);

export const selectMensajeErrorLitofacieColores = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.error //TODO: HIJO
);

export const selectActionLitofacieColoresEdit = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.edit //TODO: HIJO
);

export const selectListLitofacieColoresFiltro = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.litofaciesFiltro //TODO: HIJO
);

export const selectListLitofacieColoresPaginator = createSelector(
  selectLitofacieColoresFeature,
  (state: ParametrosLitofacieColoresState) => state.paginator //TODO: HIJO
);
