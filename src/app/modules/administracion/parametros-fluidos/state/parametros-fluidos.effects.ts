import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosFluidos,
  createModalParametrosFluidosFailure,
  createModalParametrosFluidosSuccess,
  deleteParametrosFluidos,
  deleteParametrosFluidosFailure,
  deleteParametrosFluidosSuccess, editModalParametrosFluidos,
  editModalParametrosFluidosFailure,
  editModalParametrosFluidosSuccess,
  getAllParametrosFluidos,
  getAllParametrosFluidosFailure,
  getAllParametrosFluidosSuccess, postModalParametrosFluidosFailure, postModalParametrosFluidosSuccess,
  putModalParametrosFluidosFailure,
  putModalParametrosFluidosSuccess
} from './parametros-fluidos.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {Fluidos, ResponseFluido, ResponseFluidos} from "../../../../data/models/fluidos";


@Injectable()
export class ParametrosFluidosEffects {
  getAllParametrosFluidos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosFluidos),
    switchMap(async () =>
      await this.apiService.fluidosService.getAll()
        .then((r: ResponseFluidos) => getAllParametrosFluidosSuccess({fluidos: r.data, fluidosFiltro: r.data}))
        .catch(error => getAllParametrosFluidosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosFluidos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosFluidos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((fluidos: Fluidos) =>  createModalParametrosFluidosSuccess({edit: fluidos})),
      catchError(error => of(createModalParametrosFluidosFailure({edit, error})))
    ))));

  createModalParametrosFluidosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosFluidosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.fluidosService.post(edit)
        .then((r: ResponseFluido) => postModalParametrosFluidosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosFluidosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosFluidos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosFluidos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((fluidos: Fluidos) =>  editModalParametrosFluidosSuccess({edit: fluidos})),
      catchError(error => of(editModalParametrosFluidosFailure({error})))
    ))));

  editModalParametrosFluidosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosFluidosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.fluidosService.put(edit)
        .then((r: ResponseFluido) => putModalParametrosFluidosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosFluidosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosFluidos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosFluidos),
    concatMap(async ({edit}) =>
      await this.apiService.fluidosService.delete(edit)
        .then((r: ResponseFluido) => deleteParametrosFluidosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosFluidosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosFluidosSuccess,
        putModalParametrosFluidosSuccess,
        deleteParametrosFluidosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosFluidosFailure,
        putModalParametrosFluidosFailure,
        deleteParametrosFluidosFailure,
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

  openModal(fluido: Fluidos): Observable<Fluidos>{
    return from(this._openModal(fluido));
  }

  async _openModal(fluido: Fluidos): Promise<Fluidos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.fluido = fluido;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
