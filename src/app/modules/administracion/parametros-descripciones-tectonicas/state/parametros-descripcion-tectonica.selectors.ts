

import { ParametrosDescripcionTectonicaState } from './parametros-descripcion-tectonica.state';
import {AppState} from '../../../../app.state';
import { createSelector } from '@ngrx/store';

export const selectDescripcionTectonicasFeature = (state: AppState) => state.parametrosDescripcionTectonicaState;// TODO: PADRE

export const selectListDescripcionTectonicas = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.descripcionTectonicas //TODO: HIJO
);

export const selectLoadinDescripcionTectonicas = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.loading //TODO: HIJO
);

export const selectActionDescripcionTectonicas = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.action //TODO: HIJO
);

export const selectMensajeErrorDescripcionTectonicas = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.error //TODO: HIJO
);

export const selectActionDescripcionTectonicasEdit = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.edit //TODO: HIJO
);

export const selectListDescripcionTectonicasFiltro = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.descripcionTectonicasFiltro //TODO: HIJO
);

export const selectListDescripcionTectonicasPaginator = createSelector(
  selectDescripcionTectonicasFeature,
  (state: ParametrosDescripcionTectonicaState) => state.paginator //TODO: HIJO
);
