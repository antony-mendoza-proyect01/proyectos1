
import { createSelector } from '@ngrx/store';
import { ParametrosCalificadoresState } from './parametros-calificadores.state';
import {AppState} from '../../../../app.state';

export const selectCalificadoresFeature = (state: AppState) => state.parametrosCalificadoresState;// TODO: PADRE

export const selectListCalificadores = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.calificadores //TODO: HIJO
);

export const selectLoadingCalificadores = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.loading //TODO: HIJO
);

export const selectActionCalificadores = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalificadores = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.error //TODO: HIJO
);

export const selectActionCalificadoresEdit = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.edit //TODO: HIJO
);

export const selectListCalificadoresFiltro = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.calificadoresFiltro //TODO: HIJO
);

export const selectListCalificadoresPaginator = createSelector(
  selectCalificadoresFeature,
  (state: ParametrosCalificadoresState) => state.paginator //TODO: HIJO
);
