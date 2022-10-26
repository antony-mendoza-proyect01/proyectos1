
import { createSelector } from '@ngrx/store';
import { ImpresionSeudopozosState } from './impresion-seudopozos.state';
import {AppState} from '../../../../app.state';

export const selectImpresionSeudopozosFeature = (state: AppState) => state.impresionSeudopozosState;// TODO: PADRE

export const selectSeudopozoListImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.seudopozoList //TODO: HIJO
);

export const selectLoadingImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.loading //TODO: HIJO
);

export const selectMensajeErrorImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.error //TODO: HIJO
);

export const selectReglaLengthImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.reglaLength //TODO: HIJO
);

export const selectSeudopozoEditImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.seudopozoEdit //TODO: HIJO
);

export const selectSeudopozoInfoImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.seudopozoInfo //TODO: HIJO
);

export const selectFinalSeudopozoImpresionSeudopozos = createSelector(
  selectImpresionSeudopozosFeature,
  (state: ImpresionSeudopozosState) => state.finalSeudopozo //TODO: HIJO
);
