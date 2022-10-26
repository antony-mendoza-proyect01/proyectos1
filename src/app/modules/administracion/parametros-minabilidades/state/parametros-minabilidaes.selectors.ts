
import { createSelector } from '@ngrx/store';
import { ParametrosMinabilidaesState } from './parametros-minabilidaes.state';
import {AppState} from '../../../../app.state';

export const selectMinabilidadesFeature = (state: AppState) => state.parametrosMinabilidadesState;// TODO: PADRE

export const selectListMinabilidades = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.minabilidades //TODO: HIJO
);

export const selectLoadingMinabilidades = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.loading //TODO: HIJO
);

export const selectActionMinabilidades = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorMinabilidades = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.error //TODO: HIJO
);

export const selectActionMinabilidadesEdit = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.edit //TODO: HIJO
);

export const selectListMinabilidadesFiltro = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.minabilidadesFiltro //TODO: HIJO
);

export const selectListMinabilidadesPaginator = createSelector(
  selectMinabilidadesFeature,
  (state: ParametrosMinabilidaesState) => state.paginator //TODO: HIJO
);
