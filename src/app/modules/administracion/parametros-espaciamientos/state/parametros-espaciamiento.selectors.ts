
import { createSelector } from '@ngrx/store';
import { ParametrosEspaciamientoState } from './parametros-espaciamiento.state';
import {AppState} from '../../../../app.state';

export const selectEspaciamientoFeature = (state: AppState) => state.parametrosEspaciamientoState;// TODO: PADRE

export const selectListEspaciamiento = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.espaciamientos //TODO: HIJO
);

export const selectLoadingEspaciamiento = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.loading //TODO: HIJO
);

export const selectActionEspaciamiento = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.action //TODO: HIJO
);

export const selectMensajeErrorEspaciamiento = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.error //TODO: HIJO
);

export const selectActionEspaciamientoEdit = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.edit //TODO: HIJO
);

export const selectListEspaciamientoFiltro = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.espaciamientosFiltro //TODO: HIJO
);

export const selectListEspaciamientoPaginator = createSelector(
  selectEspaciamientoFeature,
  (state: ParametrosEspaciamientoState) => state.paginator //TODO: HIJO
);
