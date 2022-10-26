import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosMeteorizaciones,
  createModalParametrosMeteorizacionesFailure,
  createModalParametrosMeteorizacionesSuccess,
  deleteParametrosMeteorizaciones,
  deleteParametrosMeteorizacionesFailure,
  deleteParametrosMeteorizacionesSuccess, editModalParametrosMeteorizaciones,
  editModalParametrosMeteorizacionesFailure,
  editModalParametrosMeteorizacionesSuccess,
  getAllParametrosMeteorizaciones,
  getAllParametrosMeteorizacionesFailure,
  getAllParametrosMeteorizacionesSuccess, postModalParametrosMeteorizacionesFailure, postModalParametrosMeteorizacionesSuccess,
  putModalParametrosMeteorizacionesFailure,
  putModalParametrosMeteorizacionesSuccess
} from './parametros-meteorizaciones.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {Meteorizaciones, ResponseMeteorizacion, ResponseMeteorizaciones } from 'src/app/data/models/meterorizaciones';


@Injectable()
export class ParametrosMeteorizacionesEffects {
  getAllParametrosMeteorizaciones$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosMeteorizaciones),
    switchMap(async () =>
      await this.apiService.meteorizacionesService.getAll()
        .then((r: ResponseMeteorizaciones) => getAllParametrosMeteorizacionesSuccess({meteorizaciones: r.data, meteorizacionesFiltro: r.data}))
        .catch(error => getAllParametrosMeteorizacionesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosMeteorizaciones$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMeteorizaciones),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((meteorizaciones: Meteorizaciones) =>  createModalParametrosMeteorizacionesSuccess({edit: meteorizaciones})),
      catchError(error => of(createModalParametrosMeteorizacionesFailure({edit, error})))
    ))));

  createModalParametrosMeteorizacionesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMeteorizacionesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.meteorizacionesService.post(edit)
        .then((r: ResponseMeteorizacion) => postModalParametrosMeteorizacionesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosMeteorizacionesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosMeteorizaciones$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMeteorizaciones),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((meteorizaciones: Meteorizaciones) =>  editModalParametrosMeteorizacionesSuccess({edit: meteorizaciones})),
        catchError(error => of(editModalParametrosMeteorizacionesFailure({error})))
      ))));

  editModalParametrosMeteorizacionesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMeteorizacionesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.meteorizacionesService.put(edit)
        .then((r: ResponseMeteorizacion) => putModalParametrosMeteorizacionesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosMeteorizacionesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosMeteorizaciones$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosMeteorizaciones),
    concatMap(async ({edit}) =>
      await this.apiService.meteorizacionesService.delete(edit)
        .then((r: ResponseMeteorizacion) => deleteParametrosMeteorizacionesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosMeteorizacionesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosMeteorizacionesSuccess,
        putModalParametrosMeteorizacionesSuccess,
        deleteParametrosMeteorizacionesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosMeteorizacionesFailure,
        postModalParametrosMeteorizacionesFailure,
        putModalParametrosMeteorizacionesFailure,
        deleteParametrosMeteorizacionesFailure,
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

  openModal(meteorizacion: Meteorizaciones): Observable<Meteorizaciones>{
    return from(this._openModal(meteorizacion));
  }

  async _openModal(meteorizacion: Meteorizaciones): Promise<Meteorizaciones> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.meteorizacion = meteorizacion;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
