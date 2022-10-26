import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosLitofacieColores,
  createModalParametrosLitofacieColoresFailure,
  createModalParametrosLitofacieColoresSuccess,
  deleteParametrosLitofacieColores,
  deleteParametrosLitofacieColoresFailure,
  deleteParametrosLitofacieColoresSuccess, editModalParametrosLitofacieColores,
  editModalParametrosLitofacieColoresFailure,
  editModalParametrosLitofacieColoresSuccess,
  getAllParametrosLitofacieColores,
  getAllParametrosLitofacieColoresFailure,
  getAllParametrosLitofacieColoresSuccess, postModalParametrosLitofacieColoresFailure, postModalParametrosLitofacieColoresSuccess,
  putModalParametrosLitofacieColoresFailure,
  putModalParametrosLitofacieColoresSuccess
} from './parametros-litofacie-colores.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {LitofacieColores, ResponseLitofacieColor, ResponseLitofacieColores} from "../../../../data/models/litofacie-colores";


@Injectable()
export class ParametrosLitofacieColoresEffects {
  getAllParametrosLitofacieColores$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosLitofacieColores),
    switchMap(async () =>
      await this.apiService.litofacieService.getAll()
        .then((r: ResponseLitofacieColores) => getAllParametrosLitofacieColoresSuccess({litofacies: r.data, litofaciesFiltro: r.data}))
        .catch(error => getAllParametrosLitofacieColoresFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosLitofacieColores$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLitofacieColores),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((litofacies: LitofacieColores) =>  createModalParametrosLitofacieColoresSuccess({edit: litofacies})),
      catchError(error => of(createModalParametrosLitofacieColoresFailure({edit, error})))
    ))));

  createModalParametrosLitofacieColoresSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLitofacieColoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.litofacieService.post(edit)
        .then((r: ResponseLitofacieColor) => postModalParametrosLitofacieColoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosLitofacieColoresFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosLitofacieColores$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLitofacieColores),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((litofacies: LitofacieColores) =>  editModalParametrosLitofacieColoresSuccess({edit: litofacies})),
        catchError(error => of(editModalParametrosLitofacieColoresFailure({error})))
      ))));

  editModalParametrosLitofacieColoresSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLitofacieColoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.litofacieService.put(edit)
        .then((r: ResponseLitofacieColor) => putModalParametrosLitofacieColoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosLitofacieColoresFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosLitofacieColores$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosLitofacieColores),
    concatMap(async ({edit}) =>
      await this.apiService.litofacieService.delete(edit)
        .then((r: ResponseLitofacieColor) => deleteParametrosLitofacieColoresSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosLitofacieColoresFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosLitofacieColoresSuccess,
        putModalParametrosLitofacieColoresSuccess,
        deleteParametrosLitofacieColoresSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosLitofacieColoresFailure,
        postModalParametrosLitofacieColoresFailure,
        putModalParametrosLitofacieColoresFailure,
        deleteParametrosLitofacieColoresFailure,
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

  openModal(litofacie: LitofacieColores): Observable<LitofacieColores>{
    return from(this._openModal(litofacie));
  }

  async _openModal(litofacie: LitofacieColores): Promise<LitofacieColores> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.litofacie = litofacie;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
