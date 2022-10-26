

import {AppState} from '../../../../app.state';
import { createSelector } from '@ngrx/store';
import { ParametrosDescripcionSedimentariaState } from './parametros-descripcion-sedimentaria.state';

export const selectDescripcionSedimentariaFeature = (state: AppState) => state.parametrosDescripcionSedimentariaState;// TODO: PADRE

export const selectListDescipcionSedimentaria = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.descripcionSedimentarias //TODO: HIJO
);

export const selectLoadingDescipcionSedimentaria = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.loading //TODO: HIJO
);

export const selectActionDescripcionSedimentaria = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.action //TODO: HIJO
);

export const selectMensajeErrorDescripcionSedimentaria = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.error //TODO: HIJO
);

export const selectActionDescripcionSedimentariaEdit = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.edit //TODO: HIJO
);

export const selectListDescripcionSedimentariaFiltro = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.descripcionSedimentariasFiltro //TODO: HIJO
);

export const selectListDescripcionSedimentariaPaginator = createSelector(
  selectDescripcionSedimentariaFeature,
  (state: ParametrosDescripcionSedimentariaState) => state.paginator //TODO: HIJO
);
