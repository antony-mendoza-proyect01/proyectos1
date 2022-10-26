
import { createSelector } from '@ngrx/store';
import { ParametrosDistritosState } from './parametros-distritos.state';
import {AppState} from '../../../../app.state';

export const selectDistritosFeature = (state: AppState) => state.parametrosDistritosState;// TODO: PADRE

export const selectListDistritos = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.distritos //TODO: HIJO
);

export const selectLoadingDistritos = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.loading //TODO: HIJO
);

export const selectActionDistritos = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorDistritos = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.error //TODO: HIJO
);

export const selectActionDistritosEdit = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.edit //TODO: HIJO
);

export const selectListDistritosFiltro = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.distritosFiltro //TODO: HIJO
);

export const selectListDistritosPaginator = createSelector(
  selectDistritosFeature,
  (state: ParametrosDistritosState) => state.paginator //TODO: HIJO
);
