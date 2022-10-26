
import { createSelector } from '@ngrx/store';
import { ParametrosProvinciasState } from './parametros-provincias.state';
import {AppState} from '../../../../app.state';

export const selectProvinciasFeature = (state: AppState) => state.parametrosProvinciasState;// TODO: PADRE

export const selectListProvincias = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.provincias //TODO: HIJO
);

export const selectLoadingProvincias = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.loading //TODO: HIJO
);

export const selectActionProvincias = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorProvincias = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.error //TODO: HIJO
);

export const selectActionProvinciasEdit = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.edit //TODO: HIJO
);

export const selectListProvinciasFiltro = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.provinciasFiltro //TODO: HIJO
);

export const selectListProvinciasPaginator = createSelector(
  selectProvinciasFeature,
  (state: ParametrosProvinciasState) => state.paginator //TODO: HIJO
);
