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
  createModalCalibracionSondaRuedaContadora,
  createModalCalibracionSondaRuedaContadoraFailure,
  createModalCalibracionSondaRuedaContadoraSuccess,
  deleteCalibracionSondaRuedaContadora, deleteCalibracionSondaRuedaContadoraFailure,
  deleteCalibracionSondaRuedaContadoraSuccess,
  editModalCalibracionSondaRuedaContadora,
  editModalCalibracionSondaRuedaContadoraFailure,
  editModalCalibracionSondaRuedaContadoraSuccess,
  getAllCalibracionSondaRuedaContadora,
  getAllCalibracionSondaRuedaContadoraFailure,
  getAllCalibracionSondaRuedaContadoraSuccess,
  postModalCalibracionSondaRuedaContadoraFailure,
  postModalCalibracionSondaRuedaContadoraSuccess,
  putModalCalibracionSondaRuedaContadoraFailure,
  putModalCalibracionSondaRuedaContadoraSuccess
} from './calibracion-sonda-rueda-contadora.actions';
import {
  CalibracionSondaRuedaContadora,
  ResponseCalibracionSondaRuedaContadora,
  ResponseCalibracionSondaRuedaContadoras
} from 'src/app/data/models/calibracion-sonda-rueda-contadora';


@Injectable()
export class CalibracionSondaRuedaContadoraEffects {
  getAllByPozoCalibracionSondaRuedaContadora$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCalibracionSondaRuedaContadora),
    switchMap(async () =>
      await this.apiService.calibracionSondaRuedaContadoraService.getAll()
        .then((r: ResponseCalibracionSondaRuedaContadoras) => getAllCalibracionSondaRuedaContadoraSuccess({calibracionSondaRuedaContadoras: r.data, calibracionSondaRuedaContadorasFiltro:  r.data}))
        .catch(error => getAllCalibracionSondaRuedaContadoraFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalCalibracionSondaRuedaContadora$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionSondaRuedaContadora),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((CalibracionSondaRuedaContadoras: CalibracionSondaRuedaContadora) =>
        createModalCalibracionSondaRuedaContadoraSuccess({edit: CalibracionSondaRuedaContadoras})),
      catchError(error => of(createModalCalibracionSondaRuedaContadoraFailure({edit, error})))
    ))));

  createModalCalibracionSondaRuedaContadoraSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionSondaRuedaContadoraSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calibracionSondaRuedaContadoraService.post(edit)
        .then((r: ResponseCalibracionSondaRuedaContadora) => postModalCalibracionSondaRuedaContadoraSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalCalibracionSondaRuedaContadoraFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalCalibracionSondaRuedaContadora$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionSondaRuedaContadora),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((CalibracionSondaRuedaContadoras: CalibracionSondaRuedaContadora) =>
        editModalCalibracionSondaRuedaContadoraSuccess({edit: CalibracionSondaRuedaContadoras, codPozo})),
      catchError(error => of(editModalCalibracionSondaRuedaContadoraFailure({error})))
    ))));

  editModalCalibracionSondaRuedaContadoraSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionSondaRuedaContadoraSuccess),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.calibracionSondaRuedaContadoraService.put(edit)
        .then((r: ResponseCalibracionSondaRuedaContadora) =>
          putModalCalibracionSondaRuedaContadoraSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalCalibracionSondaRuedaContadoraFailure({edit, error}))
    )));

  // run this code when a delete
  deleteCalibracionSondaRuedaContadora$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCalibracionSondaRuedaContadora),

    concatMap(async ({edit}) =>
      await this.apiService.calibracionSondaRuedaContadoraService.delete(edit)
        .then((r: ResponseCalibracionSondaRuedaContadora) =>
          deleteCalibracionSondaRuedaContadoraSuccess({edit, apiResponse: r }))
        .catch(error => deleteCalibracionSondaRuedaContadoraFailure({ error}))
    )));


  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionSondaRuedaContadoraSuccess,
        putModalCalibracionSondaRuedaContadoraSuccess,
        deleteCalibracionSondaRuedaContadoraSuccess,
      ),
      tap(action => {
        this.toast(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionSondaRuedaContadoraFailure,
        putModalCalibracionSondaRuedaContadoraFailure,
        deleteCalibracionSondaRuedaContadoraFailure,
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

  openModal(calibracionSondaRuedaContadoras:CalibracionSondaRuedaContadora): Observable<CalibracionSondaRuedaContadora>{
    return from(this._openModal(calibracionSondaRuedaContadoras));
  }

  async _openModal(calibracionSondaRuedaContadoras: CalibracionSondaRuedaContadora): Promise<CalibracionSondaRuedaContadora> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl'});
      refModal.componentInstance.CalibracionSondaRuedaContadora = calibracionSondaRuedaContadoras;

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
