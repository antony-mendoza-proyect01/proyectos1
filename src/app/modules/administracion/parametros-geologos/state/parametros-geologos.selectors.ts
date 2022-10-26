
import { createSelector } from '@ngrx/store';
import { ParametrosGeologosState } from './parametros-geologos.state';
import {AppState} from '../../../../app.state';

export const selectPersonasRolesFeature = (state: AppState) => state.parametrosPersonasRolesState;// TODO: PADRE

export const selectListPersonasRoles = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.personasRoles //TODO: HIJO
);

export const selectLoadinParametrosPersonasRoles = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.loading //TODO: HIJO
);

export const selectActionPersonasRoles = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorPersonasRoles = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.error //TODO: HIJO
);

export const selectActionPersonasRolesEdit = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.edit //TODO: HIJO
);

export const selectListPersonasRolesFiltro = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.personasRolesFiltro //TODO: HIJO
);

export const selectListPersonasRolesPaginator = createSelector(
  selectPersonasRolesFeature,
  (state: ParametrosGeologosState) => state.paginator //TODO: HIJO
);
