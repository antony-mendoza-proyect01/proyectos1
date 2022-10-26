import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {
  createModalParametrosDistritos,
  createModalParametrosDistritosFailure,
  createModalParametrosDistritosSuccess,
  deleteParametrosDistritos,
  deleteParametrosDistritosFailure,
  deleteParametrosDistritosSuccess, editModalParametrosDistritos,
  editModalParametrosDistritosFailure,
  editModalParametrosDistritosSuccess,
  getAllParametrosDistritos,
  getAllParametrosDistritosFailure,
  getAllParametrosDistritosSuccess, postModalParametrosDistritosFailure, postModalParametrosDistritosSuccess,
  putModalParametrosDistritosFailure,
  putModalParametrosDistritosSuccess
} from './parametros-distritos.actions';
import {Distritos, ResponseDistrito,  ResponseDistritos} from '../../../../data/models/distritos';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {FormModalComponent} from "../components/form-modal/form-modal.component";


@Injectable()
export class ParametrosDistritosEffects {
  getAllParametrosDistritos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosDistritos),
    switchMap(async () =>
      await this.apiService.distritosService.getAll()
        .then((r: ResponseDistritos) => getAllParametrosDistritosSuccess({distritos: r.data, distritosFiltro: r.data}))
        .catch(error => getAllParametrosDistritosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosDistritos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDistritos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((distritos: Distritos) =>  createModalParametrosDistritosSuccess({edit: distritos})),
      catchError(error => of(createModalParametrosDistritosFailure({edit, error})))
    ))));

  createModalParametrosDistritosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDistritosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.distritosService.post(edit)
        .then((r: ResponseDistrito) => postModalParametrosDistritosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosDistritosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosDistritos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDistritos),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((distritos: Distritos) =>  editModalParametrosDistritosSuccess({edit: distritos})),
        catchError(error => of(editModalParametrosDistritosFailure({error})))
      ))));

  editModalParametrosDistritosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDistritosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.distritosService.put(edit)
        .then((r: ResponseDistrito) => putModalParametrosDistritosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosDistritosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosDistritos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosDistritos),
    concatMap(async ({edit}) =>
      await this.apiService.distritosService.delete(edit)
        .then((r: ResponseDistrito) => deleteParametrosDistritosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosDistritosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosDistritosSuccess,
        putModalParametrosDistritosSuccess,
        deleteParametrosDistritosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });
  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosDistritosFailure,
        postModalParametrosDistritosFailure,
        putModalParametrosDistritosFailure,
        deleteParametrosDistritosFailure,
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

  openModal(distrito: Distritos): Observable<Distritos>{
    return from(this._openModal(distrito));
  }

  async _openModal(distrito: Distritos): Promise<Distritos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.distrito = distrito;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
