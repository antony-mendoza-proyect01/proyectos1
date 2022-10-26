
import { createSelector } from '@ngrx/store';
import { ParametrosFluidosState } from './parametros-fluidos.state';
import {AppState} from '../../../../app.state';

export const selectFluidosFeature = (state: AppState) => state.parametrosFluidosState;// TODO: PADRE

export const selectListFluidos = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.fluidos //TODO: HIJO
);

export const selectLoadingFluidos = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.loading //TODO: HIJO
);

export const selectActionFluidos = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorFluidos = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.error //TODO: HIJO
);

export const selectActionFluidosEdit = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.edit //TODO: HIJO
);

export const selectListFluidosFiltro = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.fluidosFiltro //TODO: HIJO
);

export const selectListFluidosPaginator = createSelector(
  selectFluidosFeature,
  (state: ParametrosFluidosState) => state.paginator //TODO: HIJO
);
