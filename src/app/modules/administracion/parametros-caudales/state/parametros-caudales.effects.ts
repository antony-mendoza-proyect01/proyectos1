import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosCaudales,
  createModalParametrosCaudalesFailure,
  createModalParametrosCaudalesSuccess,
  deleteParametrosCaudales,
  deleteParametrosCaudalesFailure,
  deleteParametrosCaudalesSuccess, editModalParametrosCaudales,
  editModalParametrosCaudalesFailure,
  editModalParametrosCaudalesSuccess,
  getAllParametrosCaudales,
  getAllParametrosCaudalesFailure,
  getAllParametrosCaudalesSuccess, postModalParametrosCaudalesFailure, postModalParametrosCaudalesSuccess,
  putModalParametrosCaudalesFailure,
  putModalParametrosCaudalesSuccess
} from './parametros-caudales.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {Caudales, ResponseCaudal, ResponseCaudales} from "../../../../data/models/caudales";


@Injectable()
export class ParametrosCaudalesEffects {
  getAllParametrosCaudales$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosCaudales),
    switchMap(async () =>
      await this.apiService.caudalesService.getAll()
        .then((r: ResponseCaudales) => getAllParametrosCaudalesSuccess({caudales: r.data, caudalesFiltro: r.data}))
        .catch(error => getAllParametrosCaudalesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosCaudales$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosCaudales),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((caudales: Caudales) =>  createModalParametrosCaudalesSuccess({edit: caudales})),
      catchError(error => of(createModalParametrosCaudalesFailure({edit, error})))
    ))));

  createModalParametrosCaudalesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosCaudalesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.caudalesService.post(edit)
        .then((r: ResponseCaudal) => postModalParametrosCaudalesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosCaudalesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosCaudales$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosCaudales),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((caudales: Caudales) =>  editModalParametrosCaudalesSuccess({edit: caudales})),
      catchError(error => of(editModalParametrosCaudalesFailure({error})))
    ))));

  editModalParametrosCaudalesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosCaudalesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.caudalesService.put(edit)
        .then((r: ResponseCaudal) => putModalParametrosCaudalesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosCaudalesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosCaudales$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosCaudales),
    concatMap(async ({edit}) =>
      await this.apiService.caudalesService.delete(edit)
        .then((r: ResponseCaudal) => deleteParametrosCaudalesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosCaudalesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosCaudalesSuccess,
        putModalParametrosCaudalesSuccess,
        deleteParametrosCaudalesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosCaudalesFailure,
        putModalParametrosCaudalesFailure,
        deleteParametrosCaudalesFailure,
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

  openModal(caudal: Caudales): Observable<Caudales>{
    return from(this._openModal(caudal));
  }

  async _openModal(caudal: Caudales): Promise<Caudales> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.caudal = caudal;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
