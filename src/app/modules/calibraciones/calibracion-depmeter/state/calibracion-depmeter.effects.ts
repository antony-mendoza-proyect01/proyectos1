import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {
  createModalCalibracionDipmeter,
  createModalCalibracionDipmeterFailure,
  createModalCalibracionDipmeterSuccess,
  deleteCalibracionDipmeter, deleteCalibracionDipmeterFailure,
  deleteCalibracionDipmeterSuccess,
  editModalCalibracionDipmeter,
  editModalCalibracionDipmeterFailure,
  editModalCalibracionDipmeterSuccess,
  getAllCalibracionDipmeter,
  getAllCalibracionDipmeterFailure,
  getAllCalibracionDipmeterSuccess,
  postModalCalibracionDipmeterFailure,
  postModalCalibracionDipmeterSuccess,
  putModalCalibracionDipmeterFailure,
  putModalCalibracionDipmeterSuccess
} from './calibracion-depmeter.actions';
import {CalibracionDipmeter, ResponseCalibracionDipmeter, ResponseCalibracionDipmetes} from "../../../../data/models/calibraciom-dipmeter";



@Injectable()
export class CalibracionDepmeterEffects {
  getAllByPozoCalibracionDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCalibracionDipmeter),
    switchMap(async () =>
      await this.apiService.calibracionDipmeter.getAll()
        .then((r: ResponseCalibracionDipmetes) => getAllCalibracionDipmeterSuccess({calibracionDipmeter: r.data, calibracionDipmeterFiltro:  r.data}))
        .catch(error => getAllCalibracionDipmeterFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalCalibracionDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionDipmeter),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((calibracionDipmeter: CalibracionDipmeter) =>
        createModalCalibracionDipmeterSuccess({edit: calibracionDipmeter})),
      catchError(error => of(createModalCalibracionDipmeterFailure({edit, error})))
    ))));

  createModalCalibracionDipmeterSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionDipmeterSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calibracionDipmeter.post(edit)
        .then((r: ResponseCalibracionDipmeter) => postModalCalibracionDipmeterSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalCalibracionDipmeterFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalCalibracionDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionDipmeter),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((calibracionDipmeter: CalibracionDipmeter) =>
        editModalCalibracionDipmeterSuccess({edit: calibracionDipmeter, codPozo})),
      catchError(error => of(editModalCalibracionDipmeterFailure({error})))
    ))));

  editModalCalibracionDipmeterSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionDipmeterSuccess),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.calibracionDipmeter.put(edit)
        .then((r: ResponseCalibracionDipmeter) =>
          putModalCalibracionDipmeterSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalCalibracionDipmeterFailure({edit, error}))
    )));

  // run this code when a delete
  deleteCalibracionDipmeter$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCalibracionDipmeter),

    concatMap(async ({edit}) =>
      await this.apiService.calibracionDipmeter.delete(edit)
        .then((r: ResponseCalibracionDipmeter) =>
          deleteCalibracionDipmeterSuccess({edit, apiResponse: r }))
        .catch(error => deleteCalibracionDipmeterFailure({ error}))
    )));


  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionDipmeterSuccess,
        putModalCalibracionDipmeterSuccess,
        deleteCalibracionDipmeterSuccess,
      ),
      tap(action => {
        this.toast(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionDipmeterFailure,
        putModalCalibracionDipmeterFailure,
        deleteCalibracionDipmeterFailure,
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

  openModal(calibracionDipmeter: CalibracionDipmeter): Observable<CalibracionDipmeter>{
    return from(this._openModal(calibracionDipmeter));
  }

  async _openModal(calibracionDipmeter: CalibracionDipmeter): Promise<CalibracionDipmeter> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl'});
      refModal.componentInstance.CalibracionDipmeter = calibracionDipmeter;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

  toast(apiResponse: ApiResponse) {
    if(apiResponse.valido){
      this.toastService.success(null, apiResponse.message);
    }
    if(!apiResponse.valido){
      this.toastService.danger(null, apiResponse.message);
    }
  }
}
