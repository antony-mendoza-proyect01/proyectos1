import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalParametrosContratoPerforacionAjustesDesviacion,
  createModalParametrosContratoPerforacionAjustesDesviacionFailure,
  createModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  deleteParametrosContratoPerforacionAjustesDesviacion,
  deleteParametrosContratoPerforacionAjustesDesviacionFailure,
  deleteParametrosContratoPerforacionAjustesDesviacionSuccess,
  editModalParametrosContratoPerforacionAjustesDesviacion,
  editModalParametrosContratoPerforacionAjustesDesviacionFailure,
  editModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  getAllParametrosContratoPerforacionAjustesDesviacion,
  getAllParametrosContratoPerforacionAjustesDesviacionFailure,
  getAllParametrosContratoPerforacionAjustesDesviacionSuccess,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure,
  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess,
  postModalParametrosContratoPerforacionAjustesDesviacionFailure,
  postModalParametrosContratoPerforacionAjustesDesviacionSuccess,
  putModalParametrosContratoPerforacionAjustesDesviacionFailure,
  putModalParametrosContratoPerforacionAjustesDesviacionSuccess
} from './parametros-contratos-perforacion-ajustes-desviacion.actions';

import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/data/services/api.service';
import { ApiResponse } from 'src/app/data/models/api-response';
import {ContratoPerforacionAjustesDesviacion,
  ResponseContratoPerforacionAjustesDesviacion, ResponseContratoPerforacionAjustesDesviaciones} from "../../../../../data/models/ajustes-desviacion";
import {
  FormModalAjutesDesviacionComponent
} from "../../components/form-modal-ajutes-desviacion/form-modal-ajutes-desviacion.component";
import {ResponseCategoriasAjustes} from '../../../../../data/models/categorias-ajuste';



@Injectable()
export class ParametrosContratoPerforacionAjustesDesviacionEffects {

  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion$ = createEffect(() => this.actions$.pipe(
    ofType(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion),
    switchMap(async ({codContrato, tipoPozo}) =>
      await this.apiService.AjustesDesviacionService.getByCodContratoTipoPozo(codContrato, tipoPozo)
        .then((r: ResponseContratoPerforacionAjustesDesviaciones) =>
          getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionSuccess(
            {contratosAjutesDesviacion: r.data, contratosAjutesDesviacionFiltro:  r.data}))
        .catch(error => getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacionFailure({error}))
    )));

  getAllParametrosContratoPerforacionAjustesDesviacion$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosContratoPerforacionAjustesDesviacion),
    switchMap(async () =>
      await this.apiService.AjustesDesviacionService.getAll()
        .then((r: ResponseContratoPerforacionAjustesDesviaciones) => getAllParametrosContratoPerforacionAjustesDesviacionSuccess({contratosAjutesDesviacion: r.data, contratosAjutesDesviacionFiltro: r.data}))
        .catch(error => getAllParametrosContratoPerforacionAjustesDesviacionFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosContratoPerforacionAjustesDesviacion$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratoPerforacionAjustesDesviacion),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion) =>  createModalParametrosContratoPerforacionAjustesDesviacionSuccess({edit: contratosAjutesDesviacion})),
      catchError(error => of(createModalParametrosContratoPerforacionAjustesDesviacionFailure({edit, error})))
    ))));

  createModalParametrosContratoPerforacionAjustesDesviacionSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratoPerforacionAjustesDesviacionSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.AjustesDesviacionService.post(edit)
        .then((r: ResponseContratoPerforacionAjustesDesviacion) => postModalParametrosContratoPerforacionAjustesDesviacionSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosContratoPerforacionAjustesDesviacionFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosContratoPerforacionAjustesDesviacion$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratoPerforacionAjustesDesviacion),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion) =>  editModalParametrosContratoPerforacionAjustesDesviacionSuccess({edit: contratosAjutesDesviacion})),
      catchError(error => of(editModalParametrosContratoPerforacionAjustesDesviacionFailure({error})))
    ))));

  editModalParametrosContratoPerforacionAjustesDesviacionSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratoPerforacionAjustesDesviacionSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.AjustesDesviacionService.put(edit)
        .then((r: ResponseContratoPerforacionAjustesDesviacion) => putModalParametrosContratoPerforacionAjustesDesviacionSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosContratoPerforacionAjustesDesviacionFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosContratoPerforacionAjustesDesviacion$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosContratoPerforacionAjustesDesviacion),
    concatMap(async ({edit}) =>
      await this.apiService.AjustesDesviacionService.delete(edit)
        .then((r: ResponseContratoPerforacionAjustesDesviacion) => deleteParametrosContratoPerforacionAjustesDesviacionSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosContratoPerforacionAjustesDesviacionFailure({ error}))
    )));

  getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion$ = createEffect(() => this.actions$.pipe(
    ofType(getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion),
    switchMap(async () =>
      await this.apiService.AjustesDesviacionService.getByCategoriaAjuste()
        .then((r: ResponseCategoriasAjustes) =>
          getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionSuccess(
            {categoriasAjustes: r.data }))
        .catch(error => getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacionFailure({error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosContratoPerforacionAjustesDesviacionSuccess,
        putModalParametrosContratoPerforacionAjustesDesviacionSuccess,
        deleteParametrosContratoPerforacionAjustesDesviacionSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosContratoPerforacionAjustesDesviacionFailure,
        postModalParametrosContratoPerforacionAjustesDesviacionFailure,
        putModalParametrosContratoPerforacionAjustesDesviacionFailure,
        deleteParametrosContratoPerforacionAjustesDesviacionFailure,
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

  openModal(contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion): Observable<ContratoPerforacionAjustesDesviacion>{
    return from(this._openModal(contratosAjutesDesviacion));
  }

  async _openModal(contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion): Promise<ContratoPerforacionAjustesDesviacion> {
    try {// refModal = referencias que estan en el modal
      this.store.dispatch(getByCategoriaAjusteParametrosContratoPerforacionAjustesDesviacion());
      const refModal = this.ngbModal.open(FormModalAjutesDesviacionComponent, { size: 'lg'});
      refModal.componentInstance.contratosAjutesDesviaciones = contratosAjutesDesviacion;
      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
