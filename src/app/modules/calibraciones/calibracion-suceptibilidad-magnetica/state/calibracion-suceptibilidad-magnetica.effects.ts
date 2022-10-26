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
  createModalCalibracionSondaSusceptibilidadMagnetica,
  createModalCalibracionSondaSusceptibilidadMagneticaFailure,
  createModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  deleteCalibracionSondaSusceptibilidadMagnetica, deleteCalibracionSondaSusceptibilidadMagneticaFailure,
  deleteCalibracionSondaSusceptibilidadMagneticaSuccess,
  editModalCalibracionSondaSusceptibilidadMagnetica,
  editModalCalibracionSondaSusceptibilidadMagneticaFailure,
  editModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  getAllCalibracionSondaSusceptibilidadMagnetica,
  getAllCalibracionSondaSusceptibilidadMagneticaFailure,
  getAllCalibracionSondaSusceptibilidadMagneticaSuccess,
  postModalCalibracionSondaSusceptibilidadMagneticaFailure,
  postModalCalibracionSondaSusceptibilidadMagneticaSuccess,
  putModalCalibracionSondaSusceptibilidadMagneticaFailure,
  putModalCalibracionSondaSusceptibilidadMagneticaSuccess
} from './calibracion-suceptibilidad-magnetica.actions';
import {CalibracionSondaSusceptibilidadMagnetica,
  ResponseCalibracionSondaSusceptibilidadMagnetica, ResponseCalibracionSondaSusceptibilidadMagneticas } from 'src/app/data/models/calibracion-sonda-susceptibilidad-magnetica';



@Injectable()
export class CalibracionSuceptibilidadMagneticaEffects {
  getAllByPozoCalibracionSondaSusceptibilidadMagnetica$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCalibracionSondaSusceptibilidadMagnetica),
    switchMap(async () =>
      await this.apiService.calibracionSondaSusceptibilidadMagnetica.getAll()
        .then((r: ResponseCalibracionSondaSusceptibilidadMagneticas) => getAllCalibracionSondaSusceptibilidadMagneticaSuccess({calibracionSondaSusceptibilidadMagneticas: r.data, calibracionSondaSusceptibilidadMagneticasFiltro:  r.data}))
        .catch(error => getAllCalibracionSondaSusceptibilidadMagneticaFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalCalibracionSondaSusceptibilidadMagnetica$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionSondaSusceptibilidadMagnetica),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((calibracionSondaSusceptibilidadMagneticas: CalibracionSondaSusceptibilidadMagnetica) =>
        createModalCalibracionSondaSusceptibilidadMagneticaSuccess({edit: calibracionSondaSusceptibilidadMagneticas})),
      catchError(error => of(createModalCalibracionSondaSusceptibilidadMagneticaFailure({edit, error})))
    ))));

  createModalCalibracionSondaSusceptibilidadMagneticaSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionSondaSusceptibilidadMagneticaSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calibracionSondaSusceptibilidadMagnetica.post(edit)
        .then((r: ResponseCalibracionSondaSusceptibilidadMagnetica) => postModalCalibracionSondaSusceptibilidadMagneticaSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalCalibracionSondaSusceptibilidadMagneticaFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalCalibracionSondaSusceptibilidadMagnetica$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionSondaSusceptibilidadMagnetica),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((CalibracionSondaSusceptibilidadMagneticas: CalibracionSondaSusceptibilidadMagnetica) =>
        editModalCalibracionSondaSusceptibilidadMagneticaSuccess({edit: CalibracionSondaSusceptibilidadMagneticas, codPozo})),
      catchError(error => of(editModalCalibracionSondaSusceptibilidadMagneticaFailure({error})))
    ))));

  editModalCalibracionSondaSusceptibilidadMagneticaSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionSondaSusceptibilidadMagneticaSuccess),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.calibracionSondaSusceptibilidadMagnetica.put(edit)
        .then((r: ResponseCalibracionSondaSusceptibilidadMagnetica) =>
          putModalCalibracionSondaSusceptibilidadMagneticaSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalCalibracionSondaSusceptibilidadMagneticaFailure({edit, error}))
    )));

  // run this code when a delete
  deleteCalibracionSondaSusceptibilidadMagnetica$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCalibracionSondaSusceptibilidadMagnetica),

    concatMap(async ({edit}) =>
      await this.apiService.calibracionSondaSusceptibilidadMagnetica.delete(edit)
        .then((r: ResponseCalibracionSondaSusceptibilidadMagnetica) =>
          deleteCalibracionSondaSusceptibilidadMagneticaSuccess({edit, apiResponse: r }))
        .catch(error => deleteCalibracionSondaSusceptibilidadMagneticaFailure({ error}))
    )));


  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionSondaSusceptibilidadMagneticaSuccess,
        putModalCalibracionSondaSusceptibilidadMagneticaSuccess,
        deleteCalibracionSondaSusceptibilidadMagneticaSuccess,
      ),
      tap(action => {
        this.toast(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionSondaSusceptibilidadMagneticaFailure,
        putModalCalibracionSondaSusceptibilidadMagneticaFailure,
        deleteCalibracionSondaSusceptibilidadMagneticaFailure,
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

  openModal(calibracionSondaSusceptibilidadMagneticas: CalibracionSondaSusceptibilidadMagnetica): Observable<CalibracionSondaSusceptibilidadMagnetica>{
    return from(this._openModal(calibracionSondaSusceptibilidadMagneticas));
  }

  async _openModal(calibracionSondaSusceptibilidadMagneticas: CalibracionSondaSusceptibilidadMagnetica): Promise<CalibracionSondaSusceptibilidadMagnetica> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl'});
      refModal.componentInstance.CalibracionSuceptibilidadMagentica = calibracionSondaSusceptibilidadMagneticas;

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
