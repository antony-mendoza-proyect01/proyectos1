
import { createSelector } from '@ngrx/store';
import { ParametrosTipoPerforacionesState } from './parametros-tipo-perforaciones.state';
import {AppState} from '../../../../app.state';

export const selectTipoPerforacionesFeature = (state: AppState) => state.parametrosTipoPerforacionesState;// TODO: PADRE

export const selectListTipoPerforaciones = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.perforaciones //TODO: HIJO
);

export const selectLoadingTipoPerforaciones = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.loading //TODO: HIJO
);

export const selectActionTipoPerforaciones = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorTipoPerforaciones = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.error //TODO: HIJO
);

export const selectActionTipoPerforacionesEdit = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.edit //TODO: HIJO
);

export const selectListTipoPerforacionesFiltro = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.perforacionesFiltro //TODO: HIJO
);

export const selectListTipoPerforacionesPaginator = createSelector(
  selectTipoPerforacionesFeature,
  (state: ParametrosTipoPerforacionesState) => state.paginator //TODO: HIJO
);
