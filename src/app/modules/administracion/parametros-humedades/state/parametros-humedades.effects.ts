import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosHumedades,
  createModalParametrosHumedadesFailure,
  createModalParametrosHumedadesSuccess,
  deleteParametrosHumedades,
  deleteParametrosHumedadesFailure,
  deleteParametrosHumedadesSuccess, editModalParametrosHumedades,
  editModalParametrosHumedadesFailure,
  editModalParametrosHumedadesSuccess,
  getAllParametrosHumedades,
  getAllParametrosHumedadesFailure,
  getAllParametrosHumedadesSuccess, postModalParametrosHumedadesFailure, postModalParametrosHumedadesSuccess,
  putModalParametrosHumedadesFailure,
  putModalParametrosHumedadesSuccess
} from './parametros-humedades.actions';
import {Humedades, ResponseHumedad,  ResponseHumedades} from '../../../../data/models/humedades';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosHumedadesEffects {
  getAllParametrosHumedades$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosHumedades),
    switchMap(async () =>
      await this.apiService.humedadesService.getAll()
        .then((r: ResponseHumedades) => getAllParametrosHumedadesSuccess({humedades: r.data, humedadesFiltro: r.data}))
        .catch(error => getAllParametrosHumedadesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosHumedades$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosHumedades),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((humedades: Humedades) =>  createModalParametrosHumedadesSuccess({edit: humedades})),
      catchError(error => of(createModalParametrosHumedadesFailure({edit, error})))
    ))));

  createModalParametrosHumedadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosHumedadesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.humedadesService.post(edit)
        .then((r: ResponseHumedad) => postModalParametrosHumedadesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosHumedadesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosHumedades$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosHumedades),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((humedades: Humedades) =>  editModalParametrosHumedadesSuccess({edit: humedades})),
        catchError(error => of(editModalParametrosHumedadesFailure({error})))
      ))));

  editModalParametrosHumedadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosHumedadesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.humedadesService.put(edit)
        .then((r: ResponseHumedad) => putModalParametrosHumedadesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosHumedadesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosHumedades$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosHumedades),
    concatMap(async ({edit}) =>
      await this.apiService.humedadesService.delete(edit)
        .then((r: ResponseHumedad) => deleteParametrosHumedadesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosHumedadesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosHumedadesSuccess,
        putModalParametrosHumedadesSuccess,
        deleteParametrosHumedadesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosHumedadesFailure,
        postModalParametrosHumedadesFailure,
        putModalParametrosHumedadesFailure,
        deleteParametrosHumedadesFailure,
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

  openModal(humedad: Humedades): Observable<Humedades>{
    return from(this._openModal(humedad));
  }

  async _openModal(humedad: Humedades): Promise<Humedades> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.humedad = humedad;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
