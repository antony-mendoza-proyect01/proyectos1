
import { createSelector } from '@ngrx/store';
import { ParametrosParasecuenciasState } from './parametros-parasecuencias.state';
import {AppState} from '../../../../app.state';

export const selectParasecuenciasFeature = (state: AppState) => state.parametrosParasecuenciasState;// TODO: PADRE

export const selectListGParasecuencias = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.parasecuencias //TODO: HIJO
);

export const selectLoadingGParasecuencias = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.loading //TODO: HIJO
);

export const selectActionGParasecuencias = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorGParasecuencias = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.error //TODO: HIJO
);

export const selectActionGParasecuenciasEdit = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.edit //TODO: HIJO
);

export const selectListGParasecuenciasFiltro = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.parasecuenciasFiltro //TODO: HIJO
);

export const selectListGParasecuenciasPaginator = createSelector(
  selectParasecuenciasFeature,
  (state: ParametrosParasecuenciasState) => state.paginator //TODO: HIJO
);
