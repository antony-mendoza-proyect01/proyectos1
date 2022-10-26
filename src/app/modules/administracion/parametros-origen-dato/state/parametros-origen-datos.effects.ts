import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {
  createModalParametrosOrigenDatos,
  createModalParametrosOrigenDatosFailure,
  createModalParametrosOrigenDatosSuccess,
  deleteParametrosOrigenDatos,
  deleteParametrosOrigenDatosFailure,
  deleteParametrosOrigenDatosSuccess, editModalParametrosOrigenDatos,
  editModalParametrosOrigenDatosFailure,
  editModalParametrosOrigenDatosSuccess,
  getAllParametrosOrigenDatos,
  getAllParametrosOrigenDatosFailure,
  getAllParametrosOrigenDatosSuccess, postModalParametrosOrigenDatosFailure, postModalParametrosOrigenDatosSuccess,
  putModalParametrosOrigenDatosFailure,
  putModalParametrosOrigenDatosSuccess
} from './parametros-origen-datos.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {OrigenDatos, ResponseOrigenDato, ResponseOrigenDatos} from 'src/app/data/models/origen-datos';
import {FormModalComponent} from "../components/form-modal/form-modal.component";


@Injectable()
export class ParametrosOrigenDatosEffects {
  getAllParametrosOrigenDatos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosOrigenDatos),
    switchMap(async () =>
      await this.apiService.origendatosService.getAll()
        .then((r: ResponseOrigenDatos) => getAllParametrosOrigenDatosSuccess({origendatos: r.data, origendatosFiltro: r.data}))
        .catch(error => getAllParametrosOrigenDatosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosOrigenDatos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosOrigenDatos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((origendatos: OrigenDatos) =>  createModalParametrosOrigenDatosSuccess({edit: origendatos})),
      catchError(error => of(createModalParametrosOrigenDatosFailure({edit, error})))
    ))));

  createModalParametrosOrigenDatosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosOrigenDatosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.origendatosService.post(edit)
        .then((r: ResponseOrigenDato) => postModalParametrosOrigenDatosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosOrigenDatosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosOrigenDatos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosOrigenDatos),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((origendatos: OrigenDatos) =>  editModalParametrosOrigenDatosSuccess({edit: origendatos})),
        catchError(error => of(editModalParametrosOrigenDatosFailure({error})))
      ))));

  editModalParametrosOrigenDatosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosOrigenDatosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.origendatosService.put(edit)
        .then((r: ResponseOrigenDato) => putModalParametrosOrigenDatosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosOrigenDatosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosOrigenDatos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosOrigenDatos),
    concatMap(async ({edit}) =>
      await this.apiService.origendatosService.delete(edit)
        .then((r: ResponseOrigenDato) => deleteParametrosOrigenDatosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosOrigenDatosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosOrigenDatosSuccess,
        putModalParametrosOrigenDatosSuccess,
        deleteParametrosOrigenDatosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosOrigenDatosFailure,
        postModalParametrosOrigenDatosFailure,
        putModalParametrosOrigenDatosFailure,
        deleteParametrosOrigenDatosFailure,
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

  openModal(origendato: OrigenDatos): Observable<OrigenDatos>{
    return from(this._openModal(origendato));
  }

  async _openModal(origendato: OrigenDatos): Promise<OrigenDatos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.origendato = origendato;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
