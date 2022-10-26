import {createAction, props} from '@ngrx/store';
import {Login} from '../../../data/models/login';
import {ErrorHttp} from '../../../data/models/error-http';

export enum LoginActionsNames {
  Init = '[Login] Init',
  PostVerificacionLogin = '[Login] [Post] verificar Login',
  PostVerificacionLoginSuccess = '[Login] [Post] Verificacion Login Success',
  PostVerificacionLoginFailure = '[Login] [Post] Verificacion Login Failure',
}

export const initLogin = createAction( LoginActionsNames.Init);

export const postVerificarLogin = createAction(
  LoginActionsNames.PostVerificacionLogin,
  props<{ login: Login }>()
);


export const postVerificacionLoginSuccess = createAction(
  LoginActionsNames.PostVerificacionLoginSuccess,
  props<{ loginSuccess: boolean }>()
);

export const postVerificacionLoginFailure = createAction(
  LoginActionsNames.PostVerificacionLoginFailure,
  props<{  error: ErrorHttp   }>()
);
