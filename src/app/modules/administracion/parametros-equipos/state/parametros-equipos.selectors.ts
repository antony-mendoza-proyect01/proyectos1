import { createSelector } from '@ngrx/store';
import { ParametrosEquiposState } from './parametros-equipos.state';
import {AppState} from '../../../../app.state';

export const selectEquiposFeature = (state: AppState) => state.parametrosEquiposState;// TODO: PADRE

export const selectListEquipos = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.equipos //TODO: HIJO
);

export const selectLoadingEquipos = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.loading //TODO: HIJO
);

export const selectActionEquipos = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.action //TODO: HIJO
);

export const selectMensajeErrorEquipos = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.error //TODO: HIJO
);

export const selectActionEquiposEdit = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.edit //TODO: HIJO
);

export const selectListEquiposFiltro = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.equiposFiltro //TODO: HIJO
);

export const selectListEquiposPaginator = createSelector(
  selectEquiposFeature,
  (state: ParametrosEquiposState) => state.paginator //TODO: HIJO
);
