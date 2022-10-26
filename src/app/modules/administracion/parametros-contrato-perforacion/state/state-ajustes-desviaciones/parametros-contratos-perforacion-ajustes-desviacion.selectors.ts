import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ParametrosContratoPerforacionAjustesDesviacionState } from './parametros-contratos-perforacion-ajustes-desviacion.state';

export const selectContratoPerforacionAjustesDesviacion = (state: AppState) => state.parametrosContratoPerforacionAjustesDesviacionState;// TODO: PADRE

export const selectParametrosListContratoPerforacionAjustesDesviacion = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.contratosAjutesDesviacion //TODO: HIJO
);

export const selectLoadinParametrosContratoPerforacionAjustesDesviacion = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.loading //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesDesviacion = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.action //TODO: HIJO
);

export const selectMensajeErrorContratoPerforacionAjustesDesviacion = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.error //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesDesviacionEdit = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.edit //TODO: HIJO
);

export const selectListContratoPerforacionAjustesDesviacionFiltro = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.contratosAjutesDesviacionFiltro //TODO: HIJO
);

export const selectListContratoPerforacionAjustesDesviacionPaginator = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.paginator //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesDesviacionCodContrato = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.codContrato //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesDesviacionTipoPozo = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.tipoPozo //TODO: HIJO
);

export const selectActionContratoPerforacionAjustesDesviacionCategoriasAjustes = createSelector(
  selectContratoPerforacionAjustesDesviacion,
  (state: ParametrosContratoPerforacionAjustesDesviacionState) => state.categoriasAjustes //TODO: HIJO
);
