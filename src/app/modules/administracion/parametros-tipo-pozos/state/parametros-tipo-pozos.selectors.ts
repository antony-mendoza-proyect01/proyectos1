
import { createSelector } from '@ngrx/store';
import { ParametrosTipoPozosState } from './parametros-tipo-pozos.state';
import {AppState} from '../../../../app.state';

export const selectTipopozosFeature = (state: AppState) => state.parametrosTipoPozosState;// TODO: PADRE

export const selectListTipopozos = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.tipopozos //TODO: HIJO
);

export const selectLoadingTipopozos = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.loading //TODO: HIJO
);

export const selectActionTipopozos = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorTipopozos = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.error //TODO: HIJO
);

export const selectActionTipopozosEdit = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.edit //TODO: HIJO
);

export const selectListTipopozosFiltro = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.tipopozosFiltro //TODO: HIJO
);

export const selectListTipopozosPaginator = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.paginator //TODO: HIJO
);

export const selectTipopozosSelected = createSelector(
  selectTipopozosFeature,
  (state: ParametrosTipoPozosState) => state.tipopozosSelected //TODO: HIJO
);
