
import { createSelector } from '@ngrx/store';
import { ParametrosAreasState } from './parametros-areas.state';
import {AppState} from '../../../../app.state';
import {selectListSondas} from "../../parametros-sondas/state/parametros-sondas.selectors";

export const selectAreasFeature = (state: AppState) => state.parametrosAreasState;// TODO: PADRE

export const selectListAreas = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.areas //TODO: HIJO
);

export const selectLoadinParametrosAreas = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.loading //TODO: HIJO
);

export const selectActionAreas = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.action //TODO: HIJO
);

export const selectMensajeErrorAreas = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.error //TODO: HIJO
);

export const selectActionAreasEdit = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.edit //TODO: HIJO
);

export const selectListAreasFiltro = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.areasFiltro //TODO: HIJO
);

export const selectListAreasPaginator = createSelector(
  selectAreasFeature,
  (state: ParametrosAreasState) => state.paginator //TODO: HIJO
);
