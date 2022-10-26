import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {ParametrosContratoPerforacionTarifaState} from './parametros-contratos-perforacion-tarifa.state';
export const selectContratosPerforacionTarifaFeature = (state: AppState) => state.parametrosContratosPerforacionTarifaState;// TODO: PADRE

export const selectParametrosListContratosPerforacionTarifa = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.contratosPerforacionTarifa //TODO: HIJO
);

export const selectLoadinParametrosContratosPerforacionTarifa = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.loading //TODO: HIJO
);

export const selectActionContratosPerforacionTarifa = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.action //TODO: HIJO
);

export const selectMensajeErrorContratosPerforacionTarifa = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.error //TODO: HIJO
);

export const selectActionContratosPerforacionTarifaEdit = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.edit //TODO: HIJO
);

export const selectListContratosPerforacionTarifaFiltro = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.contratosPerforacionTarifaFiltro //TODO: HIJO
);

export const selectListContratosPerforacionTarifaPaginator = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.paginator //TODO: HIJO
);

export const selectActionContratosPerforacionTarifaCodContrato = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.codContrato //TODO: HIJO
);

export const selectActionContratosPerforacionTarifaTipoPozo = createSelector(
  selectContratosPerforacionTarifaFeature,
  (state: ParametrosContratoPerforacionTarifaState) => state.tipoPozo //TODO: HIJO
);
