import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {EMPTY} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {LOCAL_STORAGE} from '../const/localStorage.const';
import {User} from '../../data/models/user';
import {NAVIGATION_APLICATION} from '../const/navigation.const';
import {INTERNAL_PATHS} from '../const/routes.conts';
import {Router} from '@angular/router';
import {ToastService} from '../../shared/services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastService: ToastService,
  ) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let request = req;


    if (!req.url.toString().includes('login')) {
      try {
        const user: User = JSON.parse(localStorage.getItem(LOCAL_STORAGE.login));
        request = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${user.token}`,
          }
        });

      }catch (e) {
      }
    }

    return next.handle(request).pipe(
      map(event  => {
        if (event instanceof HttpResponse) {
          if (event.body.statusCode === 401) {
            localStorage.clear();
            this.toastService.danger(null,`${event.body.message}`);
            this.router.navigate([INTERNAL_PATHS.LOGIN]);// navego a la raiz
          }

        }
        return event;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          /*Mensajes de error*/
          console.log(error);
        }
        return EMPTY;
      }),
      finalize(() => {

      })
    );
  }

}
