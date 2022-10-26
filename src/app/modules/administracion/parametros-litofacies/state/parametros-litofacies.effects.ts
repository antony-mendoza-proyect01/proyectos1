import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosLitofacies,
  createModalParametrosLitofaciesFailure,
  createModalParametrosLitofaciesSuccess,
  deleteParametrosLitofacies,
  deleteParametrosLitofaciesFailure,
  deleteParametrosLitofaciesSuccess, editModalParametrosLitofacies,
  editModalParametrosLitofaciesFailure,
  editModalParametrosLitofaciesSuccess,
  getAllParametrosLitofacies,
  getAllParametrosLitofaciesFailure,
  getAllParametrosLitofaciesSuccess, postModalParametrosLitofaciesFailure, postModalParametrosLitofaciesSuccess,
  putModalParametrosLitofaciesFailure,
  putModalParametrosLitofaciesSuccess
} from './parametros-litofacies.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {Litofacies, ResponseLitofacie, ResponseLitofacies} from "../../../../data/models/litofacies";


@Injectable()
export class ParametrosLitofaciesEffects {
  getAllParametrosLitofacies$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosLitofacies),
    switchMap(async () =>
      await this.apiService.litofaciesService.getAll()
        .then((r: ResponseLitofacies) => getAllParametrosLitofaciesSuccess({litofacies: r.data, litofaciesFiltro: r.data}))
        .catch(error => getAllParametrosLitofaciesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosLitofacies$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLitofacies),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((litofacies: Litofacies) =>  createModalParametrosLitofaciesSuccess({edit: litofacies})),
      catchError(error => of(createModalParametrosLitofaciesFailure({edit, error})))
    ))));

  createModalParametrosLitofaciesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLitofaciesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.litofaciesService.post(edit)
        .then((r: ResponseLitofacie) => postModalParametrosLitofaciesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosLitofaciesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosLitofacies$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLitofacies),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((litofacies: Litofacies) =>  editModalParametrosLitofaciesSuccess({edit: litofacies})),
        catchError(error => of(editModalParametrosLitofaciesFailure({error})))
      ))));

  editModalParametrosLitofaciesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLitofaciesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.litofaciesService.put(edit)
        .then((r: ResponseLitofacie) => putModalParametrosLitofaciesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosLitofaciesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosLitofacies$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosLitofacies),
    concatMap(async ({edit}) =>
      await this.apiService.litofaciesService.delete(edit)
        .then((r: ResponseLitofacie) => deleteParametrosLitofaciesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosLitofaciesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosLitofaciesSuccess,
        putModalParametrosLitofaciesSuccess,
        deleteParametrosLitofaciesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosLitofaciesFailure,
        putModalParametrosLitofaciesFailure,
        deleteParametrosLitofaciesFailure,
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

  openModal(litofacie: Litofacies): Observable<Litofacies>{
    return from(this._openModal(litofacie));
  }

  async _openModal(litofacie: Litofacies): Promise<Litofacies> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.litofacie = litofacie;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
