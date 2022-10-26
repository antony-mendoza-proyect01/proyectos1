
import { createSelector } from '@ngrx/store';
import { ParametrosNombreSuperficiesState } from './parametros-nombre-superficies.state';
import {AppState} from '../../../../app.state';

export const selectNombreSuperficiesFeature = (state: AppState) => state.parametrosNombreSuperficiesState;// TODO: PADRE

export const selectListNombreSuperficies = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.nombres //TODO: HIJO
);

export const selectLoadingNombreSuperficies = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.loading //TODO: HIJO
);

export const selectActionNombreSuperficies = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorNombreSuperficies = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.error //TODO: HIJO
);

export const selectActionNombreSuperficiesEdit = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.edit //TODO: HIJO
);

export const selectListNombreSuperficiesFiltro = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.nombresFiltro //TODO: HIJO
);

export const selectListNombreSuperficiesPaginator = createSelector(
  selectNombreSuperficiesFeature,
  (state: ParametrosNombreSuperficiesState) => state.paginator //TODO: HIJO
);
