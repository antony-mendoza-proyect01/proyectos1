
import { createSelector } from '@ngrx/store';
import { ParametrosEmpresasState } from './parametros-empresas.state';
import {AppState} from '../../../../app.state';

export const selectEmpresasFeature = (state: AppState) => state.parametrosEmpresasState;// TODO: PADRE

export const selectListEmpresas = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.empresas //TODO: HIJO
);

export const selectLoadingEmpresas = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.loading //TODO: HIJO
);

export const selectActionEmpresas = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorEmpresas = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.error //TODO: HIJO
);

export const selectActionEmpresasEdit = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.edit //TODO: HIJO
);

export const selectListEmpresasFiltro = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.empresasFiltro //TODO: HIJO
);

export const selectListEmpresasPaginator = createSelector(
  selectEmpresasFeature,
  (state: ParametrosEmpresasState) => state.paginator //TODO: HIJO
);
