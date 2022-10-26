import { createSelector } from '@ngrx/store';
import { ParametrosNombresIntervalosState } from './parametros-nombres-intervalos.state';
import {AppState} from '../../../../app.state';

export const selectNombresIntervalosFeature = (state: AppState) => state.parametrosNombresIntervalosState;// TODO: PADRE

export const selectListNombresIntervalos = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.nombresIntervalos //TODO: HIJO
);

export const selectLoadingNombresIntervalos = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.loading //TODO: HIJO
);

export const selectActionNombresIntervalos = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorNombresIntervalos = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.error //TODO: HIJO
);

export const selectActionNombresIntervalosEdit = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.edit //TODO: HIJO
);

export const selectListNombresIntervalosFiltro = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.nombresIntervalosFiltro //TODO: HIJO
);

export const selectListNombresIntervalosPaginator = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.paginator //TODO: HIJO
);

export const selectListNombresIntervalosPageSize = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.page //TODO: HIJO
);

export const selectListNombresIntervalosPaginatorSize = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.paginatorSize //TODO: HIJO
);

export const selectListNombresIntervalosFiltroBusqueda = createSelector(
  selectNombresIntervalosFeature,
  (state: ParametrosNombresIntervalosState) => state.filtro //TODO: HIJO
);
