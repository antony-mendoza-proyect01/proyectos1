
import { createSelector } from '@ngrx/store';
import { ParametrosOrigenDatosState } from './parametros-origen-datos.state';
import {AppState} from '../../../../app.state';

export const selectOrigenDatosFeature = (state: AppState) => state.parametrosOrigenDatosState;// TODO: PADRE

export const selectListOrigenDatos = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.origendatos //TODO: HIJO
);

export const selectLoadingOrigenDatos = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.loading //TODO: HIJO
);

export const selectActionOrigenDatos = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorOrigenDatos = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.error //TODO: HIJO
);

export const selectActionOrigenDatosEdit = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.edit //TODO: HIJO
);

export const selectListOrigenDatosFiltro = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.origendatosFiltro //TODO: HIJO
);

export const selectListOrigenDatosPaginator = createSelector(
  selectOrigenDatosFeature,
  (state: ParametrosOrigenDatosState) => state.paginator //TODO: HIJO
);
