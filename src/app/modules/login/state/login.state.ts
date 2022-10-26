// interface de las variables
import {Login} from '../../../data/models/login';
import {ErrorHttp} from '../../../data/models/error-http';

export interface LoginState {
  loading: boolean,
  action: boolean,
  error: ErrorHttp;
  login: Login;
  loginSuccess: boolean;
}
