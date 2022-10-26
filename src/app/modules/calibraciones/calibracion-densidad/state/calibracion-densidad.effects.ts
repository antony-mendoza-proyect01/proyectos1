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
  createModalCalibracionDensidad,
  createModalCalibracionDensidadFailure,
  createModalCalibracionDensidadSuccess,
  deleteCalibracionDensidad, deleteCalibracionDensidadFailure,
  deleteCalibracionDensidadSuccess,
  editModalCalibracionDensidad,
  editModalCalibracionDensidadFailure,
  editModalCalibracionDensidadSuccess,
  getAllCalibracionDensidad,
  getAllCalibracionDensidadFailure,
  getAllCalibracionDensidadSuccess,
  postModalCalibracionDensidadFailure,
  postModalCalibracionDensidadSuccess,
  putModalCalibracionDensidadFailure,
  putModalCalibracionDensidadSuccess
} from './calibracion-densidad.actions';
import {CalibracionDensidad, ResponseCalibracionDensidad, ResponseCalibracionDensidades} from "../../../../data/models/calibracion-densidad";


@Injectable()
export class CalibracionDensidadEffects {
  getAllByPozoCalibracionDensidad$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCalibracionDensidad),
    switchMap(async () =>
      await this.apiService.calibracionDensidadService.getAll()
        .then((r: ResponseCalibracionDensidades) => getAllCalibracionDensidadSuccess({calibracionDensidades: r.data, calibracionDensidadesFiltro:  r.data}))
        .catch(error => getAllCalibracionDensidadFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalCalibracionDensidad$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionDensidad),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((calibracionDensidades: CalibracionDensidad) =>
        createModalCalibracionDensidadSuccess({edit: calibracionDensidades})),
      catchError(error => of(createModalCalibracionDensidadFailure({edit, error})))
    ))));

  createModalCalibracionDensidaduccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionDensidadSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calibracionDensidadService.post(edit)
        .then((r: ResponseCalibracionDensidad) => postModalCalibracionDensidadSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalCalibracionDensidadFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalCalibracionDensidad$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionDensidad),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((CalibracionDensidad: CalibracionDensidad) =>
        editModalCalibracionDensidadSuccess({edit: CalibracionDensidad, codPozo})),
      catchError(error => of(editModalCalibracionDensidadFailure({error})))
    ))));

  editModalCalibracionDensidaduccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionDensidadSuccess),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.calibracionDensidadService.put(edit)
        .then((r: ResponseCalibracionDensidad) =>
          putModalCalibracionDensidadSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalCalibracionDensidadFailure({edit, error}))
    )));

  // run this code when a delete
  deleteCalibracionDensidad$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCalibracionDensidad),

    concatMap(async ({edit}) =>
      await this.apiService.calibracionDensidadService.delete(edit)
        .then((r: ResponseCalibracionDensidad) =>
          deleteCalibracionDensidadSuccess({edit, apiResponse: r }))
        .catch(error => deleteCalibracionDensidadFailure({ error}))
    )));


  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionDensidadSuccess,
        putModalCalibracionDensidadSuccess,
        deleteCalibracionDensidadSuccess,
      ),
      tap(action => {
        this.toast(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionDensidadFailure,
        putModalCalibracionDensidadFailure,
        deleteCalibracionDensidadFailure,
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

  openModal(calibracionDensidadService: CalibracionDensidad): Observable<CalibracionDensidad>{
    return from(this._openModal(calibracionDensidadService));
  }

  async _openModal(calibracionDensidadService: CalibracionDensidad): Promise<CalibracionDensidad> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl'});
      refModal.componentInstance.CalibracionDensidadService = calibracionDensidadService;

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
