
import { createSelector } from '@ngrx/store';
import { ParametrosVisibilidadesState } from './parametros-visibilidades.state';
import {AppState} from '../../../../app.state';

export const selectVisibilidadesFeature = (state: AppState) => state.parametrosVisibilidadesState;// TODO: PADRE

export const selectListVisibilidades = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.visibilidades //TODO: HIJO
);

export const selectLoadingVisibilidades = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.loading //TODO: HIJO
);

export const selectActionVisibilidades = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorVisibilidades = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.error //TODO: HIJO
);

export const selectActionVisibilidadesEdit = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.edit //TODO: HIJO
);

export const selectListVisibilidadesFiltro = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.visibilidadesFiltro //TODO: HIJO
);

export const selectListVisibilidadesPaginator = createSelector(
  selectVisibilidadesFeature,
  (state: ParametrosVisibilidadesState) => state.paginator //TODO: HIJO
);
