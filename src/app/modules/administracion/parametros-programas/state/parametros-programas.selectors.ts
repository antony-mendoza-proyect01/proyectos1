
import { createSelector } from '@ngrx/store';
import { ParametrosProgramasState } from './parametros-programas.state';
import {AppState} from '../../../../app.state';

export const selectProgramasFeature = (state: AppState) => state.parametrosProgramasState;// TODO: PADRE

export const selectListProgramas = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.programas //TODO: HIJO
);

export const selectLoadingProgramas = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.loading //TODO: HIJO
);

export const selectActionProgramas = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorProgramas = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.error //TODO: HIJO
);

export const selectActionProgramasEdit = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.edit //TODO: HIJO
);

export const selectListProgramasFiltro = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.programasFiltro //TODO: HIJO
);

export const selectListProgramasPaginator = createSelector(
  selectProgramasFeature,
  (state: ParametrosProgramasState) => state.paginator //TODO: HIJO
);
