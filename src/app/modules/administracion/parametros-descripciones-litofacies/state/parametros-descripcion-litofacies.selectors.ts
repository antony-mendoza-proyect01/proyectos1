
import { createSelector } from '@ngrx/store';
import { ParametrosDescripcionLitofaciesState } from './parametros-descripcion-litofacies.state';
import {AppState} from '../../../../app.state';

export const selecParametrosDescripcionesLitofaciesFeature = (state: AppState) => state.parametrosDescripcionLitofaciesState;// TODO: PADRE

export const selectListParametrosDescripcionesLitofacies = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.descripcionesLitofacies //TODO: HIJO
);

export const selectLoadingParametrosDescripcionesLitofacies = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.loading //TODO: HIJO
);

export const selectActionParametrosDescripcionesLitofacies = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorParametrosDescripcionesLitofacies = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.error //TODO: HIJO
);

export const selectActionParametrosDescripcionesLitofaciesEdit = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.edit //TODO: HIJO
);

export const selectListParametrosDescripcionesLitofaciesFiltro = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.descripcionesLitofaciesFiltro //TODO: HIJO
);

export const selectListParametrosDescripcionesLitofaciesPaginator = createSelector(
  selecParametrosDescripcionesLitofaciesFeature,
  (state: ParametrosDescripcionLitofaciesState) => state.paginator //TODO: HIJO
);
