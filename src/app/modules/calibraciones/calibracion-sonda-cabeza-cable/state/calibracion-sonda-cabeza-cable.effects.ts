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
  createModalCalibracionSondaCabezaCable,
  createModalCalibracionSondaCabezaCableFailure,
  createModalCalibracionSondaCabezaCableSuccess,
  deleteCalibracionSondaCabezaCable, deleteCalibracionSondaCabezaCableFailure,
  deleteCalibracionSondaCabezaCableSuccess,
  editModalCalibracionSondaCabezaCable,
  editModalCalibracionSondaCabezaCableFailure,
  editModalCalibracionSondaCabezaCableSuccess,
  getAllCalibracionSondaCabezaCable,
  getAllCalibracionSondaCabezaCableFailure,
  getAllCalibracionSondaCabezaCableSuccess,
  postModalCalibracionSondaCabezaCableFailure,
  postModalCalibracionSondaCabezaCableSuccess,
  putModalCalibracionSondaCabezaCableFailure,
  putModalCalibracionSondaCabezaCableSuccess
} from './calibracion-sonda-cabeza-cable.actions';
import {
  CalibracionSondaCabezaCable, ResponseCalibracionSondaCabezaCable,
  ResponseCalibracionSondaCabezaCables
} from '../../../../data/models/calibracion-sonda-cabeza-cable';


@Injectable()
export class CalibracionSondaCabezaCableEffects {
  getAllByPozoCalibracionSondaCabezaCable$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCalibracionSondaCabezaCable),
    switchMap(async () =>
      await this.apiService.calibracionSondaCabezaCableService.getAll()
        .then((r: ResponseCalibracionSondaCabezaCables) => getAllCalibracionSondaCabezaCableSuccess({calibracionSondaCabezaCables: r.data, calibracionSondaCabezaCablesFiltro:  r.data}))
        .catch(error => getAllCalibracionSondaCabezaCableFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalCalibracionSondaCabezaCable$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionSondaCabezaCable),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((calibracionSondaCabezaCables: CalibracionSondaCabezaCable) =>
        createModalCalibracionSondaCabezaCableSuccess({edit: calibracionSondaCabezaCables})),
      catchError(error => of(createModalCalibracionSondaCabezaCableFailure({edit, error})))
    ))));

  createModalCalibracionSondaCabezaCableSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionSondaCabezaCableSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calibracionSondaCabezaCableService.post(edit)
        .then((r: ResponseCalibracionSondaCabezaCable) => postModalCalibracionSondaCabezaCableSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalCalibracionSondaCabezaCableFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalCalibracionSondaCabezaCable$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionSondaCabezaCable),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((CalibracionSondaCabezaCables: CalibracionSondaCabezaCable) =>
        editModalCalibracionSondaCabezaCableSuccess({edit: CalibracionSondaCabezaCables, codPozo})),
      catchError(error => of(editModalCalibracionSondaCabezaCableFailure({error})))
    ))));

  editModalCalibracionSondaCabezaCableSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionSondaCabezaCableSuccess),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.calibracionSondaCabezaCableService.put(edit)
        .then((r: ResponseCalibracionSondaCabezaCable) =>
          putModalCalibracionSondaCabezaCableSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalCalibracionSondaCabezaCableFailure({edit, error}))
    )));

  // run this code when a delete
  deleteCalibracionSondaCabezaCable$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCalibracionSondaCabezaCable),

    concatMap(async ({edit}) =>
      await this.apiService.calibracionSondaCabezaCableService.delete(edit)
        .then((r: ResponseCalibracionSondaCabezaCable) =>
          deleteCalibracionSondaCabezaCableSuccess({edit, apiResponse: r }))
        .catch(error => deleteCalibracionSondaCabezaCableFailure({ error}))
    )));


  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionSondaCabezaCableSuccess,
        putModalCalibracionSondaCabezaCableSuccess,
        deleteCalibracionSondaCabezaCableSuccess,
      ),
      tap(action => {
        this.toast(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionSondaCabezaCableFailure,
        putModalCalibracionSondaCabezaCableFailure,
        deleteCalibracionSondaCabezaCableFailure,
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

  openModal(calibracionSondaCabezaCable: CalibracionSondaCabezaCable): Observable<CalibracionSondaCabezaCable>{
    return from(this._openModal(calibracionSondaCabezaCable));
  }

  async _openModal(calibracionSondaCabezaCable: CalibracionSondaCabezaCable): Promise<CalibracionSondaCabezaCable> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl'});
      refModal.componentInstance.CalibracionSondaCabezaCable = calibracionSondaCabezaCable;

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
