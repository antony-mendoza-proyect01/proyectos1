import { createSelector } from '@ngrx/store';
import { AdministracionUsuariosState } from './administracion-usuarios.state';
import {AppState} from '../../../../app.state';

export const selecAUsariosFeature = (state: AppState) => state.administracionUsuarios;// TODO: PADRE

export const selectListAUsarios = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.usuarios //TODO: HIJO
);

export const selectLoadingAUsarios = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.loading //TODO: HIJO
);

export const selectActionAUsarios = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorAUsarios = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.error //TODO: HIJO
);

export const selectActionAUsariosEdit = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.edit //TODO: HIJO
);

export const selectListAUsariosFiltro = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.usuariosFiltro //TODO: HIJO
);

export const selectListAUsariosPaginator = createSelector(
  selecAUsariosFeature,
  (state: AdministracionUsuariosState) => state.paginator //TODO: HIJO
);
