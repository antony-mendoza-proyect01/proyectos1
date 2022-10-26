import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ParametrosContratoPerforacionAjustesRegistroState } from './parametros-contratos-perforacion-porcentaje-verticalidad.state';
export const selectContratoPerforacionAjustesRegistroFeature = (state: AppState) => state.parametrosContratoPerforacionAjustesRegistroState;// TODO: PADRE

export const selectParametrosListContratoPerforacionAjustesRegistro = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.contratosRegistro //TODO: HIJO
);

export const selectLoadinParametrosContratoPerforacionAjustesRegistro = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.loading //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRegistro = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.action //TODO: HIJO
);

export const selectMensajeErrorContratoPerforacionAjustesRegistro = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.error //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRegistroEdit = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.edit //TODO: HIJO
);

export const selectListContratoPerforacionAjustesRegistroFiltro = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.contratosRegistroFiltro //TODO: HIJO
);

export const selectListContratoPerforacionAjustesRegistroPaginator = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.paginator //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRegistroCodContrato = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.codContrato //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesRegistroTipoPozo = createSelector(
  selectContratoPerforacionAjustesRegistroFeature,
  (state: ParametrosContratoPerforacionAjustesRegistroState) => state.tipoPozo //TODO: HIJO
);
