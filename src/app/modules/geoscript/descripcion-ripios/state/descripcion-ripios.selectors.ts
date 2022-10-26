
import { createSelector } from '@ngrx/store';
import { DescripcionRipiosState } from './descripcion-ripios.state';
import {AppState} from '../../../../app.state';

export const selectDescripcionRipiosFeature = (state: AppState) => state.descripcionRipiosState;// TODO: PADRE

export const selectGraficaDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.grafica //TODO: HIJO
);

export const selectLoadingDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.loading //TODO: HIJO
);

export const selectMensajeErrorDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.error //TODO: HIJO
);

export const selectReglaLengthDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.reglaLength //TODO: HIJO
);

export const selectNucleoEditDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.descripcionRipiosEdit //TODO: HIJO
);

export const selectSuperficiesDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.superficies //TODO: HIJO
);

export const selectProfundidadRegistroDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.profundidadRegistro //TODO: HIJO
);

export const selectRipiosDescripcionRipios = createSelector(
  selectDescripcionRipiosFeature,
  (state: DescripcionRipiosState) => state.ripios //TODO: HIJO
);
