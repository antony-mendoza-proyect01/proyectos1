import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalParametrosContratosPerforacionTarifas,
  createModalParametrosContratosPerforacionTarifasFailure,
  createModalParametrosContratosPerforacionTarifasSuccess,
  deleteParametrosContratosPerforacionTarifas,
  deleteParametrosContratosPerforacionTarifasFailure,
  deleteParametrosContratosPerforacionTarifasSuccess,
  editModalParametrosContratosPerforacionTarifas,
  editModalParametrosContratosPerforacionTarifasFailure,
  editModalParametrosContratosPerforacionTarifasSuccess,
  getAllParametrosContratosPerforacionTarifas,
  getAllParametrosContratosPerforacionTarifasFailure,
  getAllParametrosContratosPerforacionTarifasSuccess,
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas,
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure,
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess,
  postModalParametrosContratosPerforacionTarifasFailure,
  postModalParametrosContratosPerforacionTarifasSuccess,
  putModalParametrosContratosPerforacionTarifasFailure,
  putModalParametrosContratosPerforacionTarifasSuccess
} from './parametros-contratos-perforacion-tarifa.actions';

import {ResponseTarifa, ResponseTarifas, Tarifas} from "../../../../../data/models/tarifas";
import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/data/services/api.service';
import { ApiResponse } from 'src/app/data/models/api-response';
import {FormModalTarifaComponent} from '../../components/form-modal-tarifa/form-modal-tarifa.component';


@Injectable()
export class ParametrosContratosPerforacionTarifaEffects {

  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas$ = createEffect(() => this.actions$.pipe(
    ofType(getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas),
    switchMap(async ({codContrato, tipoPozo}) =>
      await this.apiService.contratosTarifasService.getByCodContratoTipoPozo(codContrato, tipoPozo)
        .then((r: ResponseTarifas) =>
          getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasSuccess(
            {contratosPerforacionTarifa: r.data, contratosPerforacionTarifaFiltro:  r.data}))
        .catch(error => getByCodContratoByTipoPozoParametrosContratosPerforacionTarifasFailure({error}))
    )));

  getAllParametrosContratosPerforacionTarifas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosContratosPerforacionTarifas),
    switchMap(async () =>
      await this.apiService.contratosTarifasService.getAll()
        .then((r: ResponseTarifas) => getAllParametrosContratosPerforacionTarifasSuccess({contratosPerforacionTarifa: r.data, contratosPerforacionTarifaFiltro: r.data}))
        .catch(error => getAllParametrosContratosPerforacionTarifasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosContratosPerforacionTarifas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratosPerforacionTarifas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosPerforacionTarifa: Tarifas) =>  createModalParametrosContratosPerforacionTarifasSuccess({edit: contratosPerforacionTarifa})),
      catchError(error => of(createModalParametrosContratosPerforacionTarifasFailure({edit, error})))
    ))));

  createModalParametrosContratosPerforacionTarifasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratosPerforacionTarifasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.contratosTarifasService.post(edit)
        .then((r: ResponseTarifa) => postModalParametrosContratosPerforacionTarifasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosContratosPerforacionTarifasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosContratosPerforacionTarifas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratosPerforacionTarifas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosPerforacionTarifa: Tarifas) =>  editModalParametrosContratosPerforacionTarifasSuccess({edit: contratosPerforacionTarifa})),
      catchError(error => of(editModalParametrosContratosPerforacionTarifasFailure({error})))
    ))));

  editModalParametrosContratosPerforacionTarifasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratosPerforacionTarifasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.contratosTarifasService.put(edit)
        .then((r: ResponseTarifa) => putModalParametrosContratosPerforacionTarifasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosContratosPerforacionTarifasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosContratosPerforacionTarifas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosContratosPerforacionTarifas),
    concatMap(async ({edit}) =>
      await this.apiService.contratosTarifasService.delete(edit)
        .then((r: ResponseTarifa) => deleteParametrosContratosPerforacionTarifasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosContratosPerforacionTarifasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosContratosPerforacionTarifasSuccess,
        putModalParametrosContratosPerforacionTarifasSuccess,
        deleteParametrosContratosPerforacionTarifasSuccess,
      ),  tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosContratosPerforacionTarifasFailure,
        postModalParametrosContratosPerforacionTarifasFailure,
        putModalParametrosContratosPerforacionTarifasFailure,
        deleteParametrosContratosPerforacionTarifasFailure,
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

  openModal(tarifa: Tarifas): Observable<Tarifas>{
    return from(this._openModal(tarifa));
  }

  async _openModal(tarifa: Tarifas): Promise<Tarifas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalTarifaComponent, { size: 'lg'});
      refModal.componentInstance.tarifa = tarifa;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
