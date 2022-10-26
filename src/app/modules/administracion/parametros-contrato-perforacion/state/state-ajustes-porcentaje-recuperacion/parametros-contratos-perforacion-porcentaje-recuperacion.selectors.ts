import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ParametrosContratoPerforacionAjustesRecuperacionState } from './parametros-contratos-perforacion-porcentaje-recuperacion.state';

export const selectContratoPerforacionAjustesRecuperacionFeature = (state: AppState) => state.parametrosContratoPerforacionAjustesRecuperacionState;// TODO: PADRE

export const selectParametrosListContratoPerforacionAjustesRecuperacion = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.contratosRecuperacion //TODO: HIJO
);

export const selectLoadinParametrosContratoPerforacionAjustesRecuperacion = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.loading //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRecuperacion = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.action //TODO: HIJO
);

export const selectMensajeErrorContratoPerforacionAjustesRecuperacion = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.error //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRecuperacionEdit = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.edit //TODO: HIJO
);

export const selectListContratoPerforacionAjustesRecuperacionFiltro = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.contratosRecuperacionFiltro //TODO: HIJO
);

export const selectListContratoPerforacionAjustesRecuperacionPaginator = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.paginator //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRecuperacionCodContrato = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.codContrato //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRecuperacionTipoPozo = createSelector(
  selectContratoPerforacionAjustesRecuperacionFeature,
  (state: ParametrosContratoPerforacionAjustesRecuperacionState) => state.tipoPozo //TODO: HIJO
);
