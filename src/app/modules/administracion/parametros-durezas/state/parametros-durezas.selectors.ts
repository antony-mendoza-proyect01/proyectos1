
import { createSelector } from '@ngrx/store';
import { ParametrosDurezasState } from './parametros-durezas.state';
import {AppState} from '../../../../app.state';

export const selectDurezasFeature = (state: AppState) => state.parametrosDurezasState;// TODO: PADRE

export const selectListDurezas = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.durezas //TODO: HIJO
);

export const selectLoadingDurezas = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.loading //TODO: HIJO
);

export const selectActionDurezas = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorDurezas = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.error //TODO: HIJO
);

export const selectActionDurezasEdit = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.edit //TODO: HIJO
);

export const selectListDurezasFiltro = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.durezasFiltro //TODO: HIJO
);

export const selectListDurezasPaginator = createSelector(
  selectDurezasFeature,
  (state: ParametrosDurezasState) => state.paginator //TODO: HIJO
);
