
import { createSelector } from '@ngrx/store';
import { ParametrosColoresState } from './parametros-colores.state';
import {AppState} from '../../../../app.state';
import {selectListSondas} from "../../parametros-sondas/state/parametros-sondas.selectors";

export const selectColoresFeature = (state: AppState) => state.parametrosColoresState;// TODO: PADRE

export const selectListColores = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.colores //TODO: HIJO
);

export const selectLoadingColores = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.loading //TODO: HIJO
);

export const selectActionColores = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.action //TODO: HIJO
);

export const selectMensajeErrorColores = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.error //TODO: HIJO
);

export const selectActionColoresEdit = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.edit //TODO: HIJO
);

export const selectListColoresFiltro = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.coloresFiltro //TODO: HIJO
);

export const selectListColoresPaginator = createSelector(
  selectColoresFeature,
  (state: ParametrosColoresState) => state.paginator //TODO: HIJO
);
