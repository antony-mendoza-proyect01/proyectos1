
import { createSelector } from '@ngrx/store';
import { ParametrosLaboratoriosState } from './parametros-laboratorios.state';
import {AppState} from '../../../../app.state';

export const selectLaboratoriosFeature = (state: AppState) => state.parametrosLaboratoriosState;// TODO: PADRE

export const selectListLaboratorios = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.laboratorios //TODO: HIJO
);

export const selectLoadingLaboratorios = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.loading //TODO: HIJO
);

export const selectActionLaboratorios = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorLaboratorios = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.error //TODO: HIJO
);

export const selectActionLaboratoriosEdit = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.edit //TODO: HIJO
);

export const selectListLaboratoriosFiltro = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.laboratoriosFiltro //TODO: HIJO
);

export const selectListLaboratoriosPaginator = createSelector(
  selectLaboratoriosFeature,
  (state: ParametrosLaboratoriosState) => state.paginator //TODO: HIJO
);
