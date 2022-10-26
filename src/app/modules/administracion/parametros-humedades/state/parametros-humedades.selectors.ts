
import { createSelector } from '@ngrx/store';
import { ParametrosHumedadesState } from './parametros-humedades.state';
import {AppState} from '../../../../app.state';

export const selectHumedadesFeature = (state: AppState) => state.parametrosHumedadesState;// TODO: PADRE

export const selectListHumedades = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.humedades //TODO: HIJO
);

export const selectLoadingHumedades = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.loading //TODO: HIJO
);

export const selectActionHumedades = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorHumedades = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.error //TODO: HIJO
);

export const selectActionHumedadesEdit = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.edit //TODO: HIJO
);

export const selectListHumedadesFiltro = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.humedadesFiltro //TODO: HIJO
);

export const selectListHumedadesPaginator = createSelector(
  selectHumedadesFeature,
  (state: ParametrosHumedadesState) => state.paginator //TODO: HIJO
);
