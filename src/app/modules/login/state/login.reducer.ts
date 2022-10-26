import {LoginState} from './login.state';
import {createReducer, on} from '@ngrx/store';
import {
  initLogin,
  postVerificacionLoginFailure,
  postVerificacionLoginSuccess,
  postVerificarLogin
} from './login.actions';
import {Login} from '../../../data/models/login';
import {ErrorHttp} from '../../../data/models/error-http';

// estado inicial de las variables
export const initialState: LoginState = {
  loading: true,
  action: true,
  error: new ErrorHttp(),
  login: new Login(),
  loginSuccess: false,
};
// inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const loginReducer = createReducer(
  initialState,
  on(initLogin, (state) => {
    return {...state, loading: false, action: true, error: new ErrorHttp(), login:  new Login(), loginSuccess: false}
  }),
  on(postVerificarLogin, (state, {login}) => {
    return {...state, loading: true, action: false, error: new ErrorHttp(), login: login}
  }),
  on(postVerificacionLoginSuccess, (state, {loginSuccess}) => {
    return {...state, loading: false, action: true, error: new ErrorHttp(), login:  new Login(),loginSuccess: loginSuccess}
  }),
  on(postVerificacionLoginFailure, (state, { error}) => {
    return {...state, loading: false, action: true, error: error, login:  new Login(), loginSuccess: false}
  }),


);
