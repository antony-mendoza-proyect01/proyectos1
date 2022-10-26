import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalParametrosContratoPerforacionAjustesRegistro,
  createModalParametrosContratoPerforacionAjustesRegistroFailure,
  createModalParametrosContratoPerforacionAjustesRegistroSuccess,
  deleteParametrosContratoPerforacionAjustesRegistro,
  deleteParametrosContratoPerforacionAjustesRegistroFailure,
  deleteParametrosContratoPerforacionAjustesRegistroSuccess,
  editModalParametrosContratoPerforacionAjustesRegistro,
  editModalParametrosContratoPerforacionAjustesRegistroFailure,
  editModalParametrosContratoPerforacionAjustesRegistroSuccess,
  getAllParametrosContratoPerforacionAjustesRegistro,
  getAllParametrosContratoPerforacionAjustesRegistroFailure,
  getAllParametrosContratoPerforacionAjustesRegistroSuccess,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure,
  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess,
  postModalParametrosContratoPerforacionAjustesRegistroFailure,
  postModalParametrosContratoPerforacionAjustesRegistroSuccess,
  putModalParametrosContratoPerforacionAjustesRegistroFailure,
  putModalParametrosContratoPerforacionAjustesRegistroSuccess
} from './parametros-contratos-perforacion-porcentaje-verticalidad.actions';

import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/data/services/api.service';
import { ApiResponse } from 'src/app/data/models/api-response';
import {ContratoPerforacionAjustesRegistro, ResponseContratoPerforacionAjustesRegistro, ResponseContratoPerforacionAjustesRegistros} from "../../../../../data/models/ajustes-porcentaje-verticalidad";
import {
  ListadoAjustesPorcentajeVerticalidadComponent
} from "../../components/listado-ajustes-porcentaje-verticalidad/listado-ajustes-porcentaje-verticalidad.component";
import {
  FormModalAjutesPorcentajeVerticalidadComponent
} from "../../components/form-modal-ajutes-porcentaje-verticalidad/form-modal-ajutes-porcentaje-verticalidad.component";


@Injectable()
export class ParametrosContratoPerforacionAjustesRegistroEffects {

  getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro),
    switchMap(async ({codContrato, tipoPozo}) =>
      await this.apiService.AjustesRegistroService.getByCodContratoTipoPozo(codContrato, tipoPozo)
        .then((r: ResponseContratoPerforacionAjustesRegistros) =>
          getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroSuccess(
            {contratosRegistro: r.data, contratosRegistroFiltro:  r.data}))
        .catch(error => getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistroFailure({error}))
    )));

  getAllParametrosContratoPerforacionAjustesRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosContratoPerforacionAjustesRegistro),
    switchMap(async () =>
      await this.apiService.AjustesRegistroService.getAll()
        .then((r: ResponseContratoPerforacionAjustesRegistros) => getAllParametrosContratoPerforacionAjustesRegistroSuccess({contratosRegistro: r.data, contratosRegistroFiltro: r.data}))
        .catch(error => getAllParametrosContratoPerforacionAjustesRegistroFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosContratoPerforacionAjustesRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratoPerforacionAjustesRegistro),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosPerforacionTarifa: ContratoPerforacionAjustesRegistro) =>  createModalParametrosContratoPerforacionAjustesRegistroSuccess({edit: contratosPerforacionTarifa})),
      catchError(error => of(createModalParametrosContratoPerforacionAjustesRegistroFailure({edit, error})))
    ))));

  createModalParametrosContratoPerforacionAjustesRegistroSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratoPerforacionAjustesRegistroSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.AjustesRegistroService.post(edit)
        .then((r: ResponseContratoPerforacionAjustesRegistro) => postModalParametrosContratoPerforacionAjustesRegistroSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosContratoPerforacionAjustesRegistroFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosContratoPerforacionAjustesRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratoPerforacionAjustesRegistro),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosPerforacionTarifa: ContratoPerforacionAjustesRegistro) =>  editModalParametrosContratoPerforacionAjustesRegistroSuccess({edit: contratosPerforacionTarifa})),
      catchError(error => of(editModalParametrosContratoPerforacionAjustesRegistroFailure({error})))
    ))));

  editModalParametrosContratoPerforacionAjustesRegistroSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratoPerforacionAjustesRegistroSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.AjustesRegistroService.put(edit)
        .then((r: ResponseContratoPerforacionAjustesRegistro) => putModalParametrosContratoPerforacionAjustesRegistroSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosContratoPerforacionAjustesRegistroFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosContratoPerforacionAjustesRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosContratoPerforacionAjustesRegistro),
    concatMap(async ({edit}) =>
      await this.apiService.AjustesRegistroService.delete(edit)
        .then((r: ResponseContratoPerforacionAjustesRegistro) => deleteParametrosContratoPerforacionAjustesRegistroSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosContratoPerforacionAjustesRegistroFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosContratoPerforacionAjustesRegistroSuccess,
        putModalParametrosContratoPerforacionAjustesRegistroSuccess,
        deleteParametrosContratoPerforacionAjustesRegistroSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosContratoPerforacionAjustesRegistroFailure,
        postModalParametrosContratoPerforacionAjustesRegistroFailure,
        putModalParametrosContratoPerforacionAjustesRegistroFailure,
        deleteParametrosContratoPerforacionAjustesRegistroFailure,
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

  openModal(contratosRegistros: ContratoPerforacionAjustesRegistro): Observable<ContratoPerforacionAjustesRegistro>{
    return from(this._openModal(contratosRegistros));
  }

  async _openModal(contratosRegistros: ContratoPerforacionAjustesRegistro): Promise<ContratoPerforacionAjustesRegistro> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalAjutesPorcentajeVerticalidadComponent, { size: 'lg'});
      refModal.componentInstance.contratosRegistros = contratosRegistros;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
