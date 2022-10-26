
import { createSelector } from '@ngrx/store';
import { ParametrosGranosState } from './parametros-granos.state';
import {AppState} from '../../../../app.state';

export const selectGranosFeature = (state: AppState) => state.parametrosGranosState;// TODO: PADRE

export const selectListGranos = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.granos //TODO: HIJO
);

export const selectLoadingGranos = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.loading //TODO: HIJO
);

export const selectActionGranos = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorGranos = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.error //TODO: HIJO
);

export const selectActionGranosEdit = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.edit //TODO: HIJO
);

export const selectListGranosFiltro = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.granosFiltro //TODO: HIJO
);

export const selectListGranosPaginator = createSelector(
  selectGranosFeature,
  (state: ParametrosGranosState) => state.paginator //TODO: HIJO
);
