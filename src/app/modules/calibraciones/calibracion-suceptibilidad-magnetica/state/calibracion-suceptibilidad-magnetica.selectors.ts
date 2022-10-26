import { createSelector } from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {CalibracionSuceptibilidadMagneticaState} from './calibracion-suceptibilidad-magnetica.state';

export const selectCalibracionSuceptibilidadMagneticaFeature = (state: AppState) => state.calibracionSondaSusceptibilidadMagneticasState;// TODO: PADRE

export const selectListCalibracionSuceptibilidadMagnetica = createSelector(
  selectCalibracionSuceptibilidadMagneticaFeature,
  (state: CalibracionSuceptibilidadMagneticaState) => state.calibracionSondaSusceptibilidadMagneticas //TODO: HIJO
);

export const selectLoadingCalibracionSuceptibilidadMagnetica = createSelector(
  selectCalibracionSuceptibilidadMagneticaFeature,
  (state: CalibracionSuceptibilidadMagneticaState) => state.loading //TODO: HIJO
);

export const selectActionCalibracionSuceptibilidadMagnetica = createSelector(
  selectCalibracionSuceptibilidadMagneticaFeature,
  (state: CalibracionSuceptibilidadMagneticaState) => state.action //TODO: HIJO
);

export const selectMensajeErrorCalibracionSuceptibilidadMagnetica = createSelector(
  selectCalibracionSuceptibilidadMagneticaFeature,
  (state: CalibracionSuceptibilidadMagneticaState) => state.error //TODO: HIJO
);

export const selectActionCalibracionSuceptibilidadMagneticaEdit = createSelector(
  selectCalibracionSuceptibilidadMagneticaFeature,
  (state: CalibracionSuceptibilidadMagneticaState) => state.edit //TODO: HIJO
);

export const selectListCalibracionSuceptibilidadMagneticaPaginator = createSelector(
  selectCalibracionSuceptibilidadMagneticaFeature,
  (state: CalibracionSuceptibilidadMagneticaState) => state.paginator //TODO: HIJO
);

