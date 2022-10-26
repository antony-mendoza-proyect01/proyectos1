import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalParametrosContratoPerforacionAjustesRecuperacion,
  createModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  createModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  deleteParametrosContratoPerforacionAjustesRecuperacion,
  deleteParametrosContratoPerforacionAjustesRecuperacionFailure,
  deleteParametrosContratoPerforacionAjustesRecuperacionSuccess,
  editModalParametrosContratoPerforacionAjustesRecuperacion,
  editModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  editModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  getAllParametrosContratoPerforacionAjustesRecuperacion,
  getAllParametrosContratoPerforacionAjustesRecuperacionFailure,
  getAllParametrosContratoPerforacionAjustesRecuperacionSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess,
  postModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  postModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
  putModalParametrosContratoPerforacionAjustesRecuperacionFailure,
  putModalParametrosContratoPerforacionAjustesRecuperacionSuccess
} from './parametros-contratos-perforacion-porcentaje-recuperacion.actions';

import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/data/services/api.service';
import { ApiResponse } from 'src/app/data/models/api-response';
import {ContratoPerforacionAjustesRecuperacion,
  ResponseContratoPerforacionAjustesRecuperacion, ResponseContratoPerforacionAjustesRecuperaciones} from "../../../../../data/models/ajustes-porcentaje-recuperacion";
import {
  ListadoAjustesPorcentajeRecuperacionComponent
} from "../../components/listado-ajustes-porcentaje-recuperacion/listado-ajustes-porcentaje-recuperacion.component";
import {
  FormModalAjutesPorcentajeRecuperacionComponent
} from "../../components/form-modal-ajutes-porcentaje-recuperacion/form-modal-ajutes-porcentaje-recuperacion.component";


@Injectable()
export class ParametrosContratoPerforacionAjustesRecuperacionEffects {

  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion$ = createEffect(() => this.actions$.pipe(
    ofType(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion),
    switchMap(async ({codContrato, tipoPozo}) =>
      await this.apiService.AjustesRecuperacionService.getByCodContratoTipoPozo(codContrato, tipoPozo)
        .then((r: ResponseContratoPerforacionAjustesRecuperaciones) =>
          getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionSuccess(
            {contratosRecuperacion: r.data, contratosRecuperacionFiltro:  r.data}))
        .catch(error => getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacionFailure({error}))
    )));

  getAllParametrosContratoPerforacionAjustesRecuperacion$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosContratoPerforacionAjustesRecuperacion),
    switchMap(async () =>
      await this.apiService.AjustesRecuperacionService.getAll()
        .then((r: ResponseContratoPerforacionAjustesRecuperaciones) => getAllParametrosContratoPerforacionAjustesRecuperacionSuccess({contratosRecuperacion: r.data, contratosRecuperacionFiltro: r.data}))
        .catch(error => getAllParametrosContratoPerforacionAjustesRecuperacionFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosContratoPerforacionAjustesRecuperacion$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratoPerforacionAjustesRecuperacion),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosRecuperacion: ContratoPerforacionAjustesRecuperacion) =>  createModalParametrosContratoPerforacionAjustesRecuperacionSuccess({edit: contratosRecuperacion})),
      catchError(error => of(createModalParametrosContratoPerforacionAjustesRecuperacionFailure({edit, error})))
    ))));

  createModalParametrosContratoPerforacionAjustesRecuperacionSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratoPerforacionAjustesRecuperacionSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.AjustesRecuperacionService.post(edit)
        .then((r: ResponseContratoPerforacionAjustesRecuperacion) => postModalParametrosContratoPerforacionAjustesRecuperacionSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosContratoPerforacionAjustesRecuperacionFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosContratoPerforacionAjustesRecuperacion$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratoPerforacionAjustesRecuperacion),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosRecuperacion: ContratoPerforacionAjustesRecuperacion) =>  editModalParametrosContratoPerforacionAjustesRecuperacionSuccess({edit: contratosRecuperacion })),
      catchError(error => of(editModalParametrosContratoPerforacionAjustesRecuperacionFailure({error})))
    ))));

  editModalParametrosContratoPerforacionAjustesRecuperacionSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratoPerforacionAjustesRecuperacionSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.AjustesRecuperacionService.put(edit)
        .then((r: ResponseContratoPerforacionAjustesRecuperacion) => putModalParametrosContratoPerforacionAjustesRecuperacionSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosContratoPerforacionAjustesRecuperacionFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosContratoPerforacionAjustesRecuperacion$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosContratoPerforacionAjustesRecuperacion),
    concatMap(async ({edit}) =>
      await this.apiService.AjustesRecuperacionService.delete(edit)
        .then((r: ResponseContratoPerforacionAjustesRecuperacion) => deleteParametrosContratoPerforacionAjustesRecuperacionSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosContratoPerforacionAjustesRecuperacionFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
        putModalParametrosContratoPerforacionAjustesRecuperacionSuccess,
        deleteParametrosContratoPerforacionAjustesRecuperacionSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });
  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosContratoPerforacionAjustesRecuperacionFailure,
        postModalParametrosContratoPerforacionAjustesRecuperacionFailure,
        putModalParametrosContratoPerforacionAjustesRecuperacionFailure,
        deleteParametrosContratoPerforacionAjustesRecuperacionFailure,
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

  openModal(contratoPerforacionAjustesRecuperaciones: ContratoPerforacionAjustesRecuperacion): Observable<ContratoPerforacionAjustesRecuperacion>{
    return from(this._openModal(contratoPerforacionAjustesRecuperaciones));
  }

  async _openModal(contratoPerforacionAjustesRecuperaciones: ContratoPerforacionAjustesRecuperacion): Promise<ContratoPerforacionAjustesRecuperacion> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalAjutesPorcentajeRecuperacionComponent, { size: 'lg'});
      refModal.componentInstance.contratoPerforacionAjustesRecuperaciones = contratoPerforacionAjustesRecuperaciones;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
