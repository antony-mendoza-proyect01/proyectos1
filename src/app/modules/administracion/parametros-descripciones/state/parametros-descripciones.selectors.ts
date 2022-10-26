
import { createSelector } from '@ngrx/store';
import { ParametrosDescripcionesState } from './parametros-descripciones.state';
import {AppState} from '../../../../app.state';

export const selectDescripcionesFeature = (state: AppState) => state.parametrosDescripcionState;// TODO: PADRE

export const selectListDescripciones = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.descripcionesFiltro //TODO: HIJO
);

export const selectLoadingDescripciones = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.loading //TODO: HIJO
);

export const selectActionDescripciones = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorDescripciones = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.error //TODO: HIJO
);

export const selectActionDescripcionesEdit = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.edit //TODO: HIJO
);

export const selectListDescripcionesFiltro = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.descripcionesFiltro //TODO: HIJO
);

export const selectListDescripcionesPaginator = createSelector(
  selectDescripcionesFeature,
  (state: ParametrosDescripcionesState) => state.paginator //TODO: HIJO
);
