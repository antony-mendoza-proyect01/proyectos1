import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosPatron,
  createModalParametrosPatronFailure,
  createModalParametrosPatronSuccess,
  deleteParametrosPatron,
  deleteParametrosPatronFailure,
  deleteParametrosPatronSuccess, editModalParametrosPatron,
  editModalParametrosPatronFailure,
  editModalParametrosPatronSuccess,
  getAllParametrosPatron,
  getAllParametrosPatronFailure,
  getAllParametrosPatronSuccess, postModalParametrosPatronFailure, postModalParametrosPatronSuccess,
  putModalParametrosPatronFailure,
  putModalParametrosPatronSuccess
} from './parametros-patron.actions';
import {Patron, ResponsePatron, ResponsePatrones} from '../../../../data/models/patron';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosPatronEffects {
  getAllParametrosPatron$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosPatron),
    switchMap(async () =>
      await this.apiService.patronService.getAll()
        .then((r: ResponsePatrones) => getAllParametrosPatronSuccess({patrones: r.data, patronesFiltro: r.data}))
        .catch(error => getAllParametrosPatronFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosPatron$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosPatron),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((patrones: Patron) =>  createModalParametrosPatronSuccess({edit: patrones})),
      catchError(error => of(createModalParametrosPatronFailure({edit, error})))
    ))));

  createModalParametrosPatronSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosPatronSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.patronService.post(edit)
        .then((r: ResponsePatron) => postModalParametrosPatronSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosPatronFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosPatron$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosPatron),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((patrones: Patron) =>  editModalParametrosPatronSuccess({edit: patrones})),
        catchError(error => of(editModalParametrosPatronFailure({error})))
      ))));

  editModalParametrosPatronSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosPatronSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.patronService.put(edit)
        .then((r: ResponsePatron) => putModalParametrosPatronSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosPatronFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosPatron$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosPatron),
    concatMap(async ({edit}) =>
      await this.apiService.patronService.delete(edit)
        .then((r: ResponsePatron) => deleteParametrosPatronSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosPatronFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosPatronSuccess,
        putModalParametrosPatronSuccess,
        deleteParametrosPatronSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosPatronFailure,
        postModalParametrosPatronFailure,
        putModalParametrosPatronFailure,
        deleteParametrosPatronFailure,
      ),
      tap(action => {
        this.toastService.danger(null, action.error);
      })),{ dispatch: false });


  constructor(
    private store: Store,
    private toastService: ToastService,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  openModal(patron: Patron): Observable<Patron>{
    return from(this._openModal(patron));
  }

  async _openModal(patron: Patron): Promise<Patron> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.patron = patron;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
