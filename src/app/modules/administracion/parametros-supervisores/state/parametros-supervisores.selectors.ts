
import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import { ParametrosSupervisoresState } from './parametros-supervisores.state';

export const selectSupervisoresFeature = (state: AppState) => state.parametrosSupervisoresState;// TODO: PADRE

export const selectListPersonasRoles = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.supervisores //TODO: HIJO
);

export const selectLoadinParametrosPersonasRoles = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.loading //TODO: HIJO
);

export const selectActionPersonasRoles = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.action //TODO: HIJO
);

export const selectMensajeErrorPersonasRoles = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.error //TODO: HIJO
);

export const selectActionPersonasRolesEdit = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.edit //TODO: HIJO
);

export const selectListPersonasRolesFiltro = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.supervisoresFiltro //TODO: HIJO
);

export const selectListPersonasRolesPaginator = createSelector(
  selectSupervisoresFeature,
  (state: ParametrosSupervisoresState) => state.paginator //TODO: HIJO
);
