import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosVisibilidades,
  createModalParametrosVisibilidadesFailure,
  createModalParametrosVisibilidadesSuccess,
  deleteParametrosVisibilidades,
  deleteParametrosVisibilidadesFailure,
  deleteParametrosVisibilidadesSuccess, editModalParametrosVisibilidades,
  editModalParametrosVisibilidadesFailure,
  editModalParametrosVisibilidadesSuccess,
  getAllParametrosVisibilidades,
  getAllParametrosVisibilidadesFailure,
  getAllParametrosVisibilidadesSuccess, postModalParametrosVisibilidadesFailure, postModalParametrosVisibilidadesSuccess,
  putModalParametrosVisibilidadesFailure,
  putModalParametrosVisibilidadesSuccess
} from './parametros-visibilidades.actions';
import {Visibilidades, ResponseVisibilidades, ResponseVisibilidad} from '../../../../data/models/visibilidades';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosVisibilidadesEffects {
  getAllParametrosVisibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosVisibilidades),
    switchMap(async () =>
      await this.apiService.visibilidadesService.getAll()
        .then((r: ResponseVisibilidades) => getAllParametrosVisibilidadesSuccess({visibilidades: r.data, visibilidadesFiltro: r.data}))
        .catch(error => getAllParametrosVisibilidadesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosVisibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosVisibilidades),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((visibilidades: Visibilidades) =>  createModalParametrosVisibilidadesSuccess({edit: visibilidades})),
      catchError(error => of(createModalParametrosVisibilidadesFailure({edit, error})))
    ))));

  createModalParametrosVisibilidadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosVisibilidadesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.visibilidadesService.post(edit)
        .then((r: ResponseVisibilidad) => postModalParametrosVisibilidadesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosVisibilidadesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosVisibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosVisibilidades),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((visibilidades: Visibilidades) =>  editModalParametrosVisibilidadesSuccess({edit: visibilidades})),
        catchError(error => of(editModalParametrosVisibilidadesFailure({error})))
      ))));

  editModalParametrosVisibilidadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosVisibilidadesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.visibilidadesService.put(edit)
        .then((r: ResponseVisibilidad) => putModalParametrosVisibilidadesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosVisibilidadesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosVisibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosVisibilidades),
    concatMap(async ({edit}) =>
      await this.apiService.visibilidadesService.delete(edit)
        .then((r: ResponseVisibilidad) => deleteParametrosVisibilidadesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosVisibilidadesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosVisibilidadesSuccess,
        putModalParametrosVisibilidadesSuccess,
        deleteParametrosVisibilidadesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosVisibilidadesFailure,
        postModalParametrosVisibilidadesFailure,
        putModalParametrosVisibilidadesFailure,
        deleteParametrosVisibilidadesFailure,
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

  openModal(visibilidad: Visibilidades): Observable<Visibilidades>{
    return from(this._openModal(visibilidad));
  }

  async _openModal(visibilidad: Visibilidades): Promise<Visibilidades> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.visibilidad = visibilidad;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
