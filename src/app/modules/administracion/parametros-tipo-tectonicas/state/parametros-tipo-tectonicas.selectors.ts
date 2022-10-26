
import { createSelector } from '@ngrx/store';
import { ParametrosTipoTectonicasState } from './parametros-tipo-tectonicas.state';
import {AppState} from '../../../../app.state';

export const selectParametrosTipoTectonicasFeature = (state: AppState) => state.parametrosTipoTectonicasState;// TODO: PADRE

export const selectParametrosListTipoTectonicas = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.tipoTectonicas //TODO: HIJO
);

export const selectParametrosLoadinTipoTectonicas = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.loading //TODO: HIJO
);

export const selectParametrosActionTipoTectonicas = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.action //TODO: HIJO
);

export const selectParametrosMensajeErrorTipoTectonicas = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.error //TODO: HIJO
);

export const selectParametrosActionTipoTectonicasEdit = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.edit //TODO: HIJO
);

export const selectParametrosListTipoTectonicasFiltro = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.tipoTectonicasFiltro //TODO: HIJO
);

export const selectParametrosListTipoTectonicasPaginator = createSelector(
  selectParametrosTipoTectonicasFeature,
  (state: ParametrosTipoTectonicasState) => state.paginator //TODO: HIJO
);
