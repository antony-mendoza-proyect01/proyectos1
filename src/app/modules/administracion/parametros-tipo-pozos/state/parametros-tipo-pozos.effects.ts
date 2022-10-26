import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {
  createModalParametrosTipopozos,
  createModalParametrosTipopozosFailure,
  createModalParametrosTipopozosSuccess,
  deleteParametrosTipopozos,
  deleteParametrosTipopozosFailure,
  deleteParametrosTipopozosSuccess, editModalParametrosTipopozos,
  editModalParametrosTipopozosFailure,
  editModalParametrosTipopozosSuccess,
  getAllParametrosTipopozos,
  getAllParametrosTipopozosFailure,
  getAllParametrosTipopozosSuccess, postModalParametrosTipopozosFailure, postModalParametrosTipopozosSuccess,
  putModalParametrosTipopozosFailure,
  putModalParametrosTipopozosSuccess
} from './parametros-tipo-pozos.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {ResponseTipopozo, ResponseTipopozos, TipoPozos} from "../../../../data/models/tipo-pozos";
import {FormModalComponent} from "../components/form-modal/form-modal.component";


@Injectable()
export class ParametrosTipoPozosEffects {
  getAllParametrosTipopozos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosTipopozos),
    switchMap(async () =>
      await this.apiService.tipoPozosService.getAll()
        .then((r: ResponseTipopozos) => getAllParametrosTipopozosSuccess({tipopozos: r.data, tipopozosFiltro: r.data}))
        .catch(error => getAllParametrosTipopozosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosTipopozos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTipopozos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((tipopozos: TipoPozos) =>  createModalParametrosTipopozosSuccess({edit: tipopozos})),
      catchError(error => of(createModalParametrosTipopozosFailure({edit, error})))
    ))));

  createModalParametrosTipopozosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTipopozosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tipoPozosService.post(edit)
        .then((r: ResponseTipopozo) => postModalParametrosTipopozosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosTipopozosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosTipopozos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTipopozos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((tipopozos: TipoPozos) =>  editModalParametrosTipopozosSuccess({edit: tipopozos})),
      catchError(error => of(editModalParametrosTipopozosFailure({error})))
    ))));

  editModalParametrosTipopozosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTipopozosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tipoPozosService.put(edit)
        .then((r: ResponseTipopozo) => putModalParametrosTipopozosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosTipopozosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosTipopozos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosTipopozos),
    concatMap(async ({edit}) =>
      await this.apiService.tipoPozosService.delete(edit)
        .then((r: ResponseTipopozo) => deleteParametrosTipopozosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosTipopozosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTipopozosSuccess,
        putModalParametrosTipopozosSuccess,
        deleteParametrosTipopozosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTipopozosFailure,
        putModalParametrosTipopozosFailure,
        deleteParametrosTipopozosFailure,
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

  openModal(tipopozo: TipoPozos): Observable<TipoPozos>{
    return from(this._openModal(tipopozo));
  }

  async _openModal(tipopozo: TipoPozos): Promise<TipoPozos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.tipopozo = tipopozo;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
