
import { createSelector } from '@ngrx/store';
import { ParametrosContratosRegistroState } from './parametros-contratos-registro.state';
import {AppState} from '../../../../app.state';

export const selectContratosRegistroFeature = (state: AppState) => state.parametrosContratosRegistroState;// TODO: PADRE

export const selectListContratosRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.contratosRegistro //TODO: HIJO
);

export const selectLoadingContratosRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.loading //TODO: HIJO
);

export const selectActionContratosRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.action //TODO: HIJO
);

export const selectMensajeErrorContratosRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.error //TODO: HIJO
);

export const selectActionContratosRegistroEdit = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.edit //TODO: HIJO
);

export const selectListContratosRegistroFiltro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.contratosRegistroFiltro //TODO: HIJO
);

export const selectListContratosRegistroPaginator = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.paginator //TODO: HIJO
);

export const selectEditTarifasRegistroContratosRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.editContratosRegistroTarifasRegistro //TODO: HIJO
);

export const selectTarifasRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.tarifasRegistro //TODO: HIJO
);

export const selectLoadingTarifasRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.loadingTarifasRegistro //TODO: HIJO
);

export const selectEditTarifasRegistro = createSelector(
  selectContratosRegistroFeature,
  (state: ParametrosContratosRegistroState) => state.editTarifasRegistro //TODO: HIJO
);
