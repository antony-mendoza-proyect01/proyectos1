
import { createSelector } from '@ngrx/store';
import { ParametrosLitologiasState } from './parametros-litologias.state';
import {AppState} from '../../../../app.state';

export const selectLitologiasFeature = (state: AppState) => state.parametrosLitologiasState;// TODO: PADRE

export const selectListLitologias = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.litologias //TODO: HIJO
);

export const selectLoadingLitologias = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.loading //TODO: HIJO
);

export const selectActionLitologias = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorLitologias = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.error //TODO: HIJO
);

export const selectActionLitologiasEdit = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.edit //TODO: HIJO
);

export const selectListLitologiasFiltro = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.litologiasFiltro //TODO: HIJO
);

export const selectListLitologiasPaginator = createSelector(
  selectLitologiasFeature,
  (state: ParametrosLitologiasState) => state.paginator //TODO: HIJO
);
