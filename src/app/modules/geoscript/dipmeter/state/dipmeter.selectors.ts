import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {DipmeterState} from './dipmeter.state';

export const selectDipmeterFeature = (state: AppState) => state.dipmeterState;// TODO: PADRE

export const selectListDipmeter = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.dipmeters //TODO: HIJO
);

export const selectLoadingDipmeter = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.loading //TODO: HIJO
);

export const selectActionDipmeter = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.action //TODO: HIJO
);

export const selectMensajeErrorDipmeter = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.error //TODO: HIJO
);

export const selectActionDipmeterEdit = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.edit //TODO: HIJO
);

export const selectListDipmeterFiltro = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.dipmetersFiltro //TODO: HIJO
);

export const selectListDipmeterPaginator = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.paginator //TODO: HIJO
);

export const selectActionProfundidadExistente = createSelector(
  selectDipmeterFeature,
  (state: DipmeterState) => state.profundidadExistente //TODO: HIJO
);
