
import { createSelector } from '@ngrx/store';
import { ParametrosPatronState } from './parametros-patron.state';
import {AppState} from '../../../../app.state';

export const selectPatronFeature = (state: AppState) => state.parametrosPatronState;// TODO: PADRE

export const selectListPatron = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.patrones //TODO: HIJO
);

export const selectLoadingPatron = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.loading //TODO: HIJO
);

export const selectActionPatron = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.action //TODO: HIJO
);

export const selectMensajeErrorPatron = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.error //TODO: HIJO
);

export const selectActionPatronEdit = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.edit //TODO: HIJO
);

export const selectListPatronFiltro = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.patronesFiltro //TODO: HIJO
);

export const selectListPatronPaginator = createSelector(
  selectPatronFeature,
  (state: ParametrosPatronState) => state.paginator //TODO: HIJO
);
