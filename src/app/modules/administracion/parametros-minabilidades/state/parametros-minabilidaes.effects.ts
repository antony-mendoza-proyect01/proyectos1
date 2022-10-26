import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosMinabilidades,
  createModalParametrosMinabilidadesFailure,
  createModalParametrosMinabilidadesSuccess,
  deleteParametrosMinabilidades,
  deleteParametrosMinabilidadesFailure,
  deleteParametrosMinabilidadesSuccess, editModalParametrosMinabilidades,
  editModalParametrosMinabilidadesFailure,
  editModalParametrosMinabilidadesSuccess,
  getAllParametrosMinabilidades,
  getAllParametrosMinabilidadesFailure,
  getAllParametrosMinabilidadesSuccess, postModalParametrosMinabilidadesFailure, postModalParametrosMinabilidadesSuccess,
  putModalParametrosMinabilidadesFailure,
  putModalParametrosMinabilidadesSuccess
} from './parametros-minabilidaes.actions';
import {Minabilidades, ResponseMinabilidad, ResponseMinabilidades} from '../../../../data/models/minabilidades';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosMinabilidaesEffects {
  getAllParametrosMinabilidades$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosMinabilidades),
    switchMap(async () =>
      await this.apiService.minabilidadesService.getAll()
        .then((r: ResponseMinabilidades) => getAllParametrosMinabilidadesSuccess({minabilidades: r.data, minabilidadesFiltro: r.data}))
        .catch(error => getAllParametrosMinabilidadesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosMinabilidades$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMinabilidades),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((minabilidades: Minabilidades) =>  createModalParametrosMinabilidadesSuccess({edit: minabilidades})),
      catchError(error => of(createModalParametrosMinabilidadesFailure({edit, error})))
    ))));

  createModalParametrosMinabilidadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMinabilidadesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.minabilidadesService.post(edit)
        .then((r: ResponseMinabilidad) => postModalParametrosMinabilidadesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosMinabilidadesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosMinabilidades$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMinabilidades),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((minabilidades: Minabilidades) =>  editModalParametrosMinabilidadesSuccess({edit: minabilidades})),
        catchError(error => of(editModalParametrosMinabilidadesFailure({error})))
      ))));

  editModalParametrosMinabilidadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMinabilidadesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.minabilidadesService.put(edit)
        .then((r: ResponseMinabilidad) => putModalParametrosMinabilidadesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosMinabilidadesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosMinabilidades$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosMinabilidades),
    concatMap(async ({edit}) =>
      await this.apiService.minabilidadesService.delete(edit)
        .then((r: ResponseMinabilidad) => deleteParametrosMinabilidadesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosMinabilidadesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosMinabilidadesSuccess,
        putModalParametrosMinabilidadesSuccess,
        deleteParametrosMinabilidadesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosMinabilidadesFailure,
        postModalParametrosMinabilidadesFailure,
        putModalParametrosMinabilidadesFailure,
        deleteParametrosMinabilidadesFailure,
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

  openModal(minabilidad: Minabilidades): Observable<Minabilidades>{
    return from(this._openModal(minabilidad));
  }

  async _openModal(minabilidad: Minabilidades): Promise<Minabilidades> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.minabilidad = minabilidad;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
