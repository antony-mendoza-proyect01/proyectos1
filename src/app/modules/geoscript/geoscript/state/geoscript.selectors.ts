
import { createSelector } from '@ngrx/store';
import { GeoscriptState } from './geoscript.state';
import {AppState} from '../../../../app.state';

export const selecGeoscriptFeature = (state: AppState) => state.geoscriptState;// TODO: PADRE

export const selectListPozos = createSelector(
  selecGeoscriptFeature,
  (state: GeoscriptState) => state.pozo //TODO: HIJO
);

export const selectLoadingPozos = createSelector(
  selecGeoscriptFeature,
  (state: GeoscriptState) => state.loading //TODO: HIJO
);

export const selectActionPozos = createSelector(
  selecGeoscriptFeature,
  (state: GeoscriptState) => state.action //TODO: HIJO
);

export const selectMensajeErrorPozos = createSelector(
  selecGeoscriptFeature,
  (state: GeoscriptState) => state.error //TODO: HIJO
);
