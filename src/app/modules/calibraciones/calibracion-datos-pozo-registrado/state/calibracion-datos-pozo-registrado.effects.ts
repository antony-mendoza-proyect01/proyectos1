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
  createModalCalibracionDatosPozoRegistrado,
  createModalCalibracionDatosPozoRegistradoFailure,
  createModalCalibracionDatosPozoRegistradoSuccess,
  deleteCalibracionDatosPozoRegistrado,
  deleteCalibracionDatosPozoRegistradoFailure,
  deleteCalibracionDatosPozoRegistradoSuccess,
  editModalCalibracionDatosPozoRegistrado,
  editModalCalibracionDatosPozoRegistradoFailure,
  editModalCalibracionDatosPozoRegistradoSuccess,
  getAllCalibracionDatosPozoRegistrado,
  getAllCalibracionDatosPozoRegistradoFailure,
  getAllCalibracionDatosPozoRegistradoSuccess,
  postModalCalibracionDatosPozoRegistradoFailure,
  postModalCalibracionDatosPozoRegistradoSuccess,
  putModalCalibracionDatosPozoRegistradoFailure,
  putModalCalibracionDatosPozoRegistradoSuccess
} from './calibracion-datos-pozo-registrado.actions';
import {CalibracionDatosPozoRegistrado, ResponseCalibracionDatosPozoRegistrado, ResponseCalibracionDatosPozoRegistrados} from "../../../../data/models/calibracion-datos-pozo-registrado";
import {
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess
} from "../../../administracion/parametros-contrato-perforacion/state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.actions";
import {ResponseCategoriasAjustes} from "../../../../data/models/categorias-ajuste";
import {ResponseNombreSuperficies} from "../../../../data/models/nombre-superficies";



@Injectable()
export class CalibracionDatosPozoRegistradoEffects {
  getAllByPozoCalibracionDatosPozoRegistrado$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCalibracionDatosPozoRegistrado),
    switchMap(async () =>
      await this.apiService.calibracionDatosPozoRegistrado.getAll()
        .then((r: ResponseCalibracionDatosPozoRegistrados) => getAllCalibracionDatosPozoRegistradoSuccess({calibracionDatosPozoRegistrado: r.data, calibracionDatosPozoRegistradoFiltro:  r.data}))
        .catch(error => getAllCalibracionDatosPozoRegistradoFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalCalibracionDatosPozoRegistrado$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionDatosPozoRegistrado),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((CalibracionDatosPozoRegistrados: CalibracionDatosPozoRegistrado) =>
        createModalCalibracionDatosPozoRegistradoSuccess({edit: CalibracionDatosPozoRegistrados})),
      catchError(error => of(createModalCalibracionDatosPozoRegistradoFailure({edit, error})))
    ))));

  createModalCalibracionDatosPozoRegistradoSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalCalibracionDatosPozoRegistradoSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calibracionDatosPozoRegistrado.post(edit)
        .then((r: ResponseCalibracionDatosPozoRegistrado) => postModalCalibracionDatosPozoRegistradoSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalCalibracionDatosPozoRegistradoFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalCalibracionDatosPozoRegistrado$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionDatosPozoRegistrado),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((CalibracionDatosPozoRegistrados: CalibracionDatosPozoRegistrado) =>
        editModalCalibracionDatosPozoRegistradoSuccess({edit: CalibracionDatosPozoRegistrados, codPozo})),
      catchError(error => of(editModalCalibracionDatosPozoRegistradoFailure({error})))
    ))));

  editModalCalibracionDatosPozoRegistradoSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalCalibracionDatosPozoRegistradoSuccess),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.calibracionDatosPozoRegistrado.put(edit)
        .then((r: ResponseCalibracionDatosPozoRegistrado) =>
          putModalCalibracionDatosPozoRegistradoSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalCalibracionDatosPozoRegistradoFailure({edit, error}))
    )));

  // run this code when a delete
  deleteCalibracionDatosPozoRegistrado$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCalibracionDatosPozoRegistrado),

    concatMap(async ({edit}) =>
      await this.apiService.calibracionDatosPozoRegistrado.delete(edit)
        .then((r: ResponseCalibracionDatosPozoRegistrado) =>
          deleteCalibracionDatosPozoRegistradoSuccess({edit, apiResponse: r }))
        .catch(error => deleteCalibracionDatosPozoRegistradoFailure({ error}))
    )));




  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionDatosPozoRegistradoSuccess,
        putModalCalibracionDatosPozoRegistradoSuccess,
        deleteCalibracionDatosPozoRegistradoSuccess,
      ),
      tap(action => {
        this.toast(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalCalibracionDatosPozoRegistradoFailure,
        putModalCalibracionDatosPozoRegistradoFailure,
        deleteCalibracionDatosPozoRegistradoFailure,
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

  openModal(calibracionDatosPozoRegistrado: CalibracionDatosPozoRegistrado): Observable<CalibracionDatosPozoRegistrado>{
    return from(this._openModal(calibracionDatosPozoRegistrado));
  }

  async _openModal(calibracionDatosPozoRegistrado: CalibracionDatosPozoRegistrado): Promise<CalibracionDatosPozoRegistrado> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl'});
      refModal.componentInstance.CalibracionDatosPozoRegistrado = calibracionDatosPozoRegistrado;

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
