
import { createSelector } from '@ngrx/store';
import { ParametrosSondasState } from './parametros-sondas.state';
import {AppState} from '../../../../app.state';

export const selectSondasFeature = (state: AppState) => state.parametrosSondasState;// TODO: PADRE

export const selectListSondas = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.sondas //TODO: HIJO
);

export const selectLoadingSondas = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.loading //TODO: HIJO
);

export const selectActionSondas = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorSondas = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.error //TODO: HIJO
);

export const selectActionSondasEdit = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.edit //TODO: HIJO
);

export const selectListSondasFiltro = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.sondasFiltro //TODO: HIJO
);

export const selectListSondasPaginator = createSelector(
  selectSondasFeature,
  (state: ParametrosSondasState) => state.paginator //TODO: HIJO
);
