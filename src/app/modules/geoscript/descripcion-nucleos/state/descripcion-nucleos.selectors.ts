
import { createSelector } from '@ngrx/store';
import { DescripcionNucleosState } from './descripcion-nucleos.state';
import {AppState} from '../../../../app.state';

export const selectDescripcionNucleosFeature = (state: AppState) => state.descripcionNucleos;// TODO: PADRE

export const selectGraficaDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.grafica //TODO: HIJO
);

export const selectLoadingDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.loading //TODO: HIJO
);

export const selectMensajeErrorDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.error //TODO: HIJO
);

export const selectReglaLengthDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.reglaLength //TODO: HIJO
);

export const selectNucleoEditDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.descripcionNucleosEdit //TODO: HIJO
);

export const selectNucleosDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.nucleos //TODO: HIJO
);

export const selectIntervalosDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.intervalos //TODO: HIJO
);

export const selectFinalPozoDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.finalDelPozo //TODO: HIJO
);

export const selectSuperficiesDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.superficies //TODO: HIJO
);

export const selectProfundidadRegistroDescripcionNucleos = createSelector(
  selectDescripcionNucleosFeature,
  (state: DescripcionNucleosState) => state.profundidadRegistro //TODO: HIJO
);

