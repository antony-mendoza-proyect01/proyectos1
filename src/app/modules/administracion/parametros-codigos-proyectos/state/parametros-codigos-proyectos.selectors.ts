
import { createSelector } from '@ngrx/store';
import { ParametrosCodigosProyectosState } from './parametros-codigos-proyectos.state';
import {AppState} from '../../../../app.state';
import {selectListSondas} from "../../parametros-sondas/state/parametros-sondas.selectors";

export const selectCodigosProyectosFeature = (state: AppState) => state.parametrosCodigosProyectosState;// TODO: PADRE

export const selectListCodigosProyectos = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.codigosproyectos //TODO: HIJO
);

export const selectLoadingCodigosProyectos = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.loading //TODO: HIJO
);

export const selectActionCodigosProyectos = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCodigosProyectos = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.error //TODO: HIJO
);

export const selectActionCodigosProyectosEdit = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.edit //TODO: HIJO
);

export const selectListCodigosProyectosFiltro = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.codigosproyectosFiltro //TODO: HIJO
);

export const selectListCodigosProyectosPaginator = createSelector(
  selectCodigosProyectosFeature,
  (state: ParametrosCodigosProyectosState) => state.paginator //TODO: HIJO
);
