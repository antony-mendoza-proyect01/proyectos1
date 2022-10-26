
import { createSelector } from '@ngrx/store';
import { ParametrosTurnosState } from './parametros-turnos.state';
import {AppState} from '../../../../app.state';

export const selectTurnosFeature = (state: AppState) => state.parametrosTurnosState;// TODO: PADRE

export const selectListTurnos = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.turnos //TODO: HIJO
);

export const selectLoadingTurnos = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.loading //TODO: HIJO
);

export const selectActionTurnos = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorTurnos = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.error //TODO: HIJO
);

export const selectActionTurnosEdit = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.edit //TODO: HIJO
);

export const selectListTurnosFiltro = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.turnosFiltro //TODO: HIJO
);

export const selectListTurnosPaginator = createSelector(
  selectTurnosFeature,
  (state: ParametrosTurnosState) => state.paginator //TODO: HIJO
);
