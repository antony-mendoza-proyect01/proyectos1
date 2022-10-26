
import { createSelector } from '@ngrx/store';
import { ParametrosLitofaciesState } from './parametros-litofacies.state';
import {AppState} from '../../../../app.state';

export const selectLitofaciesFeature = (state: AppState) => state.parametrosLitofaciesState;// TODO: PADRE

export const selectListLitofacies = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.litofacies //TODO: HIJO
);

export const selectLoadingLitofacies = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.loading //TODO: HIJO
);

export const selectActionLitofacies = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorLitofacies = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.error //TODO: HIJO
);

export const selectActionLitofaciesEdit = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.edit //TODO: HIJO
);

export const selectListLitofaciesFiltro = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.litofaciesFiltro //TODO: HIJO
);

export const selectListLitofaciesPaginator = createSelector(
  selectLitofaciesFeature,
  (state: ParametrosLitofaciesState) => state.paginator //TODO: HIJO
);
