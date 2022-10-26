
import { createSelector } from '@ngrx/store';
import { ParametrosMaterialesState } from './parametros-materiales.state';
import {AppState} from '../../../../app.state';

export const selectMaterialesFeature = (state: AppState) => state.parametrosMaterialesState;// TODO: PADRE

export const selectListMateriales = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.materiales //TODO: HIJO
);

export const selectLoadingMateriales = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.loading //TODO: HIJO
);

export const selectActionMateriales = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.action //TODO: HIJO
);

export const selectMensajeErrorMateriales = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.error //TODO: HIJO
);

export const selectActionMaterialesEdit = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.edit //TODO: HIJO
);

export const selectListMaterialesFiltro = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.materialesFiltro //TODO: HIJO
);

export const selectListMaterialesPaginator = createSelector(
  selectMaterialesFeature,
  (state: ParametrosMaterialesState) => state.paginator //TODO: HIJO
);
