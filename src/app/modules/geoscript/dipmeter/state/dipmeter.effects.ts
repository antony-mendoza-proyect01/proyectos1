import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalDipmeter,
  createModalDipmeterFailure,
  createModalDipmeterSuccess,
  deleteDipmeter,
  deleteDipmeterFailure,
  deleteDipmeterSuccess, editModalDipmeter,
  editModalDipmeterFailure,
  editModalDipmeterSuccess,
  getAllByPozoDipmeter,
  getAllByPozoDipmeterFailure,
  getAllByPozoDipmeterSuccess,
   postModalDipmeterFailure, postModalDipmeterSuccess,
  putModalDipmeterFailure,
  putModalDipmeterSuccess
} from './dipmeter.actions';
import {Dipmeter,  ResponseDipmeter, ResponseDipmeters} from '../../../../data/models/dipmeter';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class DipmeterEffects {
  getAllByPozoDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoDipmeter),
    switchMap(async ({pozo}) =>
      await this.apiService.dipmeterService.getByPozo(pozo)
        .then((r: ResponseDipmeters) => getAllByPozoDipmeterSuccess({dipmeters: r.data.dipmeterList, dipmetersFiltro:  r.data.dipmeterList, profundidadExistente: r.data.profundidadRegistro }))
        .catch(error => getAllByPozoDipmeterFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(createModalDipmeter),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((dipmeters: Dipmeter) =>  createModalDipmeterSuccess({edit: dipmeters})),
      catchError(error => of(createModalDipmeterFailure({edit, error})))
    ))));

  createModalDipmeterSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalDipmeterSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.dipmeterService.post(edit)
        .then((r: ResponseDipmeter) => postModalDipmeterSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalDipmeterFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(editModalDipmeter),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((dipmeters: Dipmeter) =>  editModalDipmeterSuccess({edit: dipmeters, codPozo, profundidadEdit: edit})),
      catchError(error => of(editModalDipmeterFailure({error})))
    ))));

  editModalDipmeterSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalDipmeterSuccess),
    switchMap(async ({edit, codPozo, profundidadEdit}) =>
      await this.apiService.dipmeterService.put(edit, codPozo, profundidadEdit)
        .then((r: ResponseDipmeter) => putModalDipmeterSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalDipmeterFailure({edit, error}))
    )));

  // run this code when a delete
  deleteDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(deleteDipmeter),
    concatMap(async ({edit}) =>
      await this.apiService.dipmeterService.delete(edit)
        .then((r: ResponseDipmeter) => deleteDipmeterSuccess({edit, apiResponse: r }))
        .catch(error => deleteDipmeterFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalDipmeterSuccess,
        putModalDipmeterSuccess,
        deleteDipmeterSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllByPozoDipmeterFailure,
        postModalDipmeterFailure,
        putModalDipmeterFailure,
        deleteDipmeterFailure,
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

  openModal(dipmeter: Dipmeter): Observable<Dipmeter>{
    return from(this._openModal(dipmeter));
  }

  async _openModal(dipmeter: Dipmeter): Promise<Dipmeter> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.dipmeter = dipmeter;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
