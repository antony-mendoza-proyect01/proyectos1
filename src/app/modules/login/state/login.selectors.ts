import {AppState} from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { LoginState } from './login.state';

export const selecLogintFeature = (state: AppState) => state.login;// TODO: PADRE


export const selectLogin = createSelector(
  selecLogintFeature,
  (state: LoginState) => state.login //TODO: HIJO
);

export const selectLoadingLogin = createSelector(
  selecLogintFeature,
  (state: LoginState) => state.loading //TODO: HIJO
);

export const selectActionLogin = createSelector(
  selecLogintFeature,
  (state: LoginState) => state.action //TODO: HIJO
);

export const selectMensajeErrorLogin = createSelector(
  selecLogintFeature,
  (state: LoginState) => state.error //TODO: HIJO
);
