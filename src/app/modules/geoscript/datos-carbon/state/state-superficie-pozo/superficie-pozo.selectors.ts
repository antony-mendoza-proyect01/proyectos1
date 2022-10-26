import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {SuperficiePozoState} from "./superficie-pozo.state";


export const selectSuperficiePozoFeature = (state: AppState) => state.superficiePozoState;// TODO: PADRE

export const selectListSuperficiePozo = createSelector(
  selectSuperficiePozoFeature,
  (state: SuperficiePozoState) => state.superficiePozos //TODO: HIJO
);

export const selectLoadingSuperficiePozo = createSelector(
  selectSuperficiePozoFeature,
  (state: SuperficiePozoState) => state.loading //TODO: HIJO
);

export const selectActionSuperficiePozo = createSelector(
  selectSuperficiePozoFeature,
  (state: SuperficiePozoState) => state.action //TODO: HIJO
);

export const selectMensajeErrorSuperficiePozo = createSelector(
  selectSuperficiePozoFeature,
  (state: SuperficiePozoState) => state.error //TODO: HIJO
);

export const selectActionSuperficiePozoEdit = createSelector(
  selectSuperficiePozoFeature,
  (state: SuperficiePozoState) => state.edit //TODO: HIJO
);

// export const selectActionDatoPozoNombreSuperficie = createSelector(
//   selectSuperficiePozoFeature,
//   (state: SuperficiePozoState) => state.nombreSuperficie //TODO: HIJO
// );
