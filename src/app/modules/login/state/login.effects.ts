import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiService} from '../../../data/services/api.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ToastService} from '../../../shared/services/toast.service';
import {Router} from '@angular/router';
import {concatMap, tap} from 'rxjs/operators';
import {
  postVerificacionLoginFailure,
  postVerificacionLoginSuccess,
  postVerificarLogin
} from './login.actions';
import {catchError, from, map, Observable, of} from 'rxjs';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {NAVIGATION_APLICATION} from '../../../core/const/navigation.const';
import {Login} from '../../../data/models/login';
import {ResponseUser} from '../../../data/models/user';
import {
  deleteParametrosAreasSuccess,
  postModalParametrosAreasSuccess,
  putModalParametrosAreasSuccess
} from '../../administracion/parametros-areas/state/parametros-areas.actions';

@Injectable()
export class LoginEffects {
  postVerificacionLogin$ = createEffect(() => this.actions$.pipe(
      ofType(postVerificarLogin),
      concatMap(({ login }) => this.onVerificarLogin(login).pipe(
        map(loginSuccess =>  postVerificacionLoginSuccess({loginSuccess})),
        catchError(error => of(postVerificacionLoginFailure({error})))
        ))
    ));

  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router
  ) {}

  onVerificarLogin(login: Login): Observable<boolean>{
    return from(this._onVerificarLogin(login));
  }

  async _onVerificarLogin(login: Login): Promise<boolean> {
    try {
      const responseLogin$: ResponseUser = await this.apiService.userService.login(login);

      if(!responseLogin$.valido) {
        this.toastService.danger(null,`${responseLogin$.message}`);
        return responseLogin$.valido;
      }

      localStorage.setItem(LOCAL_STORAGE.login, JSON.stringify(responseLogin$.data));// coloco en el storage
      localStorage.setItem(LOCAL_STORAGE.navegacion, JSON.stringify(NAVIGATION_APLICATION));// coloco en el storage
      await this.router.navigate([INTERNAL_PATHS.RAIZ]);// navego a la raiz

      return  true;
    }catch (e) {
      console.log(e);
      throw(e);
    }
  }

}
