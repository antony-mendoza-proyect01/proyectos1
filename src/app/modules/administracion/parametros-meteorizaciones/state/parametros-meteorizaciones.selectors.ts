
import { createSelector } from '@ngrx/store';
import { ParametrosMeteorizacionesState } from './parametros-meteorizaciones.state';
import {AppState} from '../../../../app.state';
import {Meteorizaciones} from "../../../../data/models/meterorizaciones";

export const selectMeteorizacionesFeature = (state: AppState) => state.parametrosMeteorizacionesState;// TODO: PADRE

export const selectListMeteorizaciones = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.meteorizaciones //TODO: HIJO
);

export const selectLoadingMeteorizaciones = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.loading //TODO: HIJO
);

export const selectActionMeteorizaciones = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorMeteorizaciones = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.error //TODO: HIJO
);

export const selectActionMeteorizacionesEdit = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.edit //TODO: HIJO
);

export const selectListMeteorizacionesFiltro = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.meteorizacionesFiltro //TODO: HIJO
);

export const selectListMeteorizacionesPaginator = createSelector(
  selectMeteorizacionesFeature,
  (state: ParametrosMeteorizacionesState) => state.paginator //TODO: HIJO
);
