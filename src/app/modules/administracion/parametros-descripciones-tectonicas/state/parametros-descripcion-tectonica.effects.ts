import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {
  createModalParametrosDescripcionTectonica,
  createModalParametrosDescripcionTectonicaFailure,
  createModalParametrosDescripcionTectonicaSuccess,
  deleteParametrosDescripcionTectonica,
  deleteParametrosDescripcionTectonicaFailure,
  deleteParametrosDescripcionTectonicaSuccess, editModalParametrosDescripcionTectonica,
  editModalParametrosDescripcionTectonicaFailure,
  editModalParametrosDescripcionTectonicaSuccess,
  getAllParametrosDescripcionTectonica,
  getAllParametrosDescripcionTectonicaFailure,
  getAllParametrosDescripcionTectonicaSuccess, postModalParametrosDescripcionTectonicaFailure, postModalParametrosDescripcionTectonicaSuccess,
  putModalParametrosDescripcionTectonicaFailure,
  putModalParametrosDescripcionTectonicaSuccess
} from './parametros-descripcion-tectonica.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import { FormModalComponent } from '../components/form-modal/form-modal.component';
import {
  DescripcionTectonica,
  ResponseDescipcionTectonica,
  ResponseDescipcionTectonicas
} from "../../../../data/models/descripcion-tectonica";



@Injectable()
export class ParametrosDescripcionTectonicaEffects {
  getAllParametrosDescripcionTectonica$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosDescripcionTectonica),
    switchMap(async () =>
      await this.apiService.descripcionTectonicaService.getAll()
        .then((r: ResponseDescipcionTectonicas) => getAllParametrosDescripcionTectonicaSuccess({descripcionTectonicas: r.data, descripcionTectonicasFiltro: r.data}))
        .catch(error => getAllParametrosDescripcionTectonicaFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosDescripcionTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripcionTectonica),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((descripcionTectonicas: DescripcionTectonica) =>  createModalParametrosDescripcionTectonicaSuccess({edit: descripcionTectonicas})),
      catchError(error => of(createModalParametrosDescripcionTectonicaFailure({edit, error})))
    ))));

  createModalParametrosDescripcionTectonicasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripcionTectonicaSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionTectonicaService.post(edit)
        .then((r: ResponseDescipcionTectonica) => postModalParametrosDescripcionTectonicaSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosDescripcionTectonicaFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosDescripcionTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripcionTectonica),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((descripcionTectonicas: DescripcionTectonica) =>  editModalParametrosDescripcionTectonicaSuccess({edit: descripcionTectonicas})),
        catchError(error => of(editModalParametrosDescripcionTectonicaFailure({error})))
      ))));

  editModalParametrosDescripcionTectonicaSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripcionTectonicaSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionTectonicaService.put(edit)
        .then((r: ResponseDescipcionTectonica) => putModalParametrosDescripcionTectonicaSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosDescripcionTectonicaFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosDescripcionTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosDescripcionTectonica),
    concatMap(async ({edit}) =>
      await this.apiService.descripcionTectonicaService.delete(edit)
        .then((r: ResponseDescipcionTectonica) => deleteParametrosDescripcionTectonicaSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosDescripcionTectonicaFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosDescripcionTectonicaSuccess,
        putModalParametrosDescripcionTectonicaSuccess,
        deleteParametrosDescripcionTectonicaSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosDescripcionTectonicaFailure,
        postModalParametrosDescripcionTectonicaFailure,
        putModalParametrosDescripcionTectonicaFailure,
        deleteParametrosDescripcionTectonicaFailure,
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

  openModal(descripciontectonica: DescripcionTectonica): Observable<DescripcionTectonica>{
    return from(this._openModal(descripciontectonica));
  }

  async _openModal(descripciontectonica: DescripcionTectonica): Promise<DescripcionTectonica> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.descripcionTectonicas = descripciontectonica;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
