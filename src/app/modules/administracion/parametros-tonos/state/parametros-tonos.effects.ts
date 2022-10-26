import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosTonos,
  createModalParametrosTonosFailure,
  createModalParametrosTonosSuccess,
  deleteParametrosTonos,
  deleteParametrosTonosFailure,
  deleteParametrosTonosSuccess, editModalParametrosTonos,
  editModalParametrosTonosFailure,
  editModalParametrosTonosSuccess,
  getAllParametrosTonos,
  getAllParametrosTonosFailure,
  getAllParametrosTonosSuccess, postModalParametrosTonosFailure, postModalParametrosTonosSuccess,
  putModalParametrosTonosFailure,
  putModalParametrosTonosSuccess
} from './parametros-tonos.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {ResponseTono, ResponseTonos, Tonos } from 'src/app/data/models/tono';

@Injectable()
export class ParametrosTonosEffects {
  getAllParametrosTonos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosTonos),
    switchMap(async () =>
      await this.apiService.tonosService.getAll()
        .then((r: ResponseTonos) => getAllParametrosTonosSuccess({tonos: r.data, tonosFiltro: r.data}))
        .catch(error => getAllParametrosTonosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosTonos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTonos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((tonos: Tonos) =>  createModalParametrosTonosSuccess({edit: tonos})),
      catchError(error => of(createModalParametrosTonosFailure({edit, error})))
    ))));

  createModalParametrosTonosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTonosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tonosService.post(edit)
        .then((r: ResponseTono) => postModalParametrosTonosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosTonosFailure({edit, error}))
    )));

  // run this code when a edit modal action is dispatched
  editModalParametrosTonos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTonos),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((tonos: Tonos) =>  editModalParametrosTonosSuccess({edit: tonos})),
        catchError(error => of(editModalParametrosTonosFailure({error})))
      ))));

  editModalParametrosTonosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTonosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tonosService.put(edit)
        .then((r: ResponseTono) => putModalParametrosTonosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosTonosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosTonos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosTonos),
    concatMap(async ({edit}) =>
      await this.apiService.tonosService.delete(edit)
        .then((r: ResponseTono) => deleteParametrosTonosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosTonosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTonosSuccess,
        putModalParametrosTonosSuccess,
        deleteParametrosTonosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosTonosFailure,
        postModalParametrosTonosFailure,
        putModalParametrosTonosFailure,
        deleteParametrosTonosFailure,
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

  openModal(tono: Tonos): Observable<Tonos>{
    return from(this._openModal(tono));
  }

  async _openModal(tono: Tonos): Promise<Tonos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.tono = tono;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
