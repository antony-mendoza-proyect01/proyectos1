
import { createSelector } from '@ngrx/store';
import { ParametrosContratosPerforacionState } from './parametros-contratos-perforacion.state';
import {AppState} from '../../../../app.state';

export const selectContratosPerforacionFeature = (state: AppState) => state.parametrosContratosPerforacionState;// TODO: PADRE

export const selectListContratosPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.contratosPerforacion //TODO: HIJO
);

export const selectLoadingContratosPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.loading //TODO: HIJO
);

export const selectActionContratosPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.action //TODO: HIJO
);

export const selectMensajeErrorContratosPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.error //TODO: HIJO
);

export const selectActionContratosPerforacionEdit = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.edit //TODO: HIJO
);

export const selectListContratosPerforacionFiltro = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.contratosPerforacionFiltro //TODO: HIJO
);

export const selectListContratosPerforacionPaginator = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.paginator //TODO: HIJO
);

export const selectDetailContratosPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.detailContratosPerforacion //TODO: HIJO
);

export const selectLoadingDetailPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.loadingDetail //TODO: HIJO
);

export const selectMensajeErrorDetailContratosPerforacion = createSelector(
  selectContratosPerforacionFeature,
  (state: ParametrosContratosPerforacionState) => state.errorDetail //TODO: HIJO
);
