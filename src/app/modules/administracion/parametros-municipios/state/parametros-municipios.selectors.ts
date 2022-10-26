
import { createSelector } from '@ngrx/store';
import { ParametrosMunicipiosState } from './parametros-municipios.state';
import {AppState} from '../../../../app.state';

export const selectMunicipiosFeature = (state: AppState) => state.parametrosMunicipiosState;// TODO: PADRE

export const selectListMunicipios = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.municipios //TODO: HIJO
);

export const selectLoadingMunicipios = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.loading //TODO: HIJO
);

export const selectActionMunicipios = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.action //TODO: HIJO
);

export const selectMensajeErrorMunicipios = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.error //TODO: HIJO
);

export const selectActionMunicipiosEdit = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.edit //TODO: HIJO
);

export const selectListMunicipiosFiltro = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.municipiosFiltro //TODO: HIJO
);

export const selectListMunicipiosPaginator = createSelector(
  selectMunicipiosFeature,
  (state: ParametrosMunicipiosState) => state.paginator //TODO: HIJO
);
