import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosTipoPerforaciones,
  createModalParametrosTipoPerforacionesFailure,
  createModalParametrosTipoPerforacionesSuccess,
  deleteParametrosTipoPerforaciones,
  deleteParametrosTipoPerforacionesFailure,
  deleteParametrosTipoPerforacionesSuccess, editModalParametrosTipoPerforaciones,
  editModalParametrosTipoPerforacionesFailure,
  editModalParametrosTipoPerforacionesSuccess,
  getAllParametrosTipoPerforaciones,
  getAllParametrosTipoPerforacionesFailure,
  getAllParametrosTipoPerforacionesSuccess, postModalParametrosTipoPerforacionesFailure, postModalParametrosTipoPerforacionesSuccess,
  putModalParametrosTipoPerforacionesFailure,
  putModalParametrosTipoPerforacionesSuccess
} from './parametros-tipo-perforaciones.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {ResponseTipoPerforacion, ResponseTipoPerforaciones, TipoPerforaciones} from "../../../../data/models/tipo-perforaciones";


@Injectable()
export class ParametrosTipoPerforacionesEffects {
  getAllParametrosTipoPerforaciones$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosTipoPerforaciones),
    switchMap(async () =>
      await this.apiService.peforacionesService.getAll()
        .then((r: ResponseTipoPerforaciones) => getAllParametrosTipoPerforacionesSuccess({perforaciones: r.data, perforacionesFiltro: r.data}))
        .catch(error => getAllParametrosTipoPerforacionesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosTipoPerforaciones$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTipoPerforaciones),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((peforaciones: TipoPerforaciones) =>  createModalParametrosTipoPerforacionesSuccess({edit: peforaciones})),
      catchError(error => of(createModalParametrosTipoPerforacionesFailure({edit, error})))
    ))));

  createModalParametrosTipoPerforacionesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTipoPerforacionesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.peforacionesService.post(edit)
        .then((r: ResponseTipoPerforacion) => postModalParametrosTipoPerforacionesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosTipoPerforacionesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosTipoPerforaciones$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTipoPerforaciones),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((peforaciones: TipoPerforaciones) =>  editModalParametrosTipoPerforacionesSuccess({edit: peforaciones})),
        catchError(error => of(editModalParametrosTipoPerforacionesFailure({error})))
      ))));

  editModalParametrosTipoPerforacionesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTipoPerforacionesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.peforacionesService.put(edit)
        .then((r: ResponseTipoPerforacion) => putModalParametrosTipoPerforacionesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosTipoPerforacionesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosTipoPerforaciones$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosTipoPerforaciones),
    concatMap(async ({edit}) =>
      await this.apiService.peforacionesService.delete(edit)
        .then((r: ResponseTipoPerforacion) => deleteParametrosTipoPerforacionesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosTipoPerforacionesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTipoPerforacionesSuccess,
        putModalParametrosTipoPerforacionesSuccess,
        deleteParametrosTipoPerforacionesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosTipoPerforacionesFailure,
        postModalParametrosTipoPerforacionesFailure,
        putModalParametrosTipoPerforacionesFailure,
        deleteParametrosTipoPerforacionesFailure,
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

  openModal(perforacion: TipoPerforaciones): Observable<TipoPerforaciones>{
    return from(this._openModal(perforacion));
  }

  async _openModal(perforacion: TipoPerforaciones): Promise<TipoPerforaciones> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.perforaciones = perforacion;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
