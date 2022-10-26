import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosColores,
  createModalParametrosColoresFailure,
  createModalParametrosColoresSuccess,
  deleteParametrosColores,
  deleteParametrosColoresFailure,
  deleteParametrosColoresSuccess, editModalParametrosColores,
  editModalParametrosColoresFailure,
  editModalParametrosColoresSuccess,
  getAllParametrosColores,
  getAllParametrosColoresFailure,
  getAllParametrosColoresSuccess, postModalParametrosColoresFailure, postModalParametrosColoresSuccess,
  putModalParametrosColoresFailure,
  putModalParametrosColoresSuccess
} from './parametros-colores.actions';
import {Colores, ResponseColor, ResponseColores} from '../../../../data/models/colores';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosColoresEffects {
  getAllParametrosColores$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosColores),
    switchMap(async () =>
      await this.apiService.coloresService.getAll()
        .then((r: ResponseColores) => getAllParametrosColoresSuccess({colores: r.data, coloresFiltro: r.data}))
        .catch(error => getAllParametrosColoresFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosColores$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosColores),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((colores: Colores) =>  createModalParametrosColoresSuccess({edit: colores})),
      catchError(error => of(createModalParametrosColoresFailure({edit, error})))
    ))));

  createModalParametrosColoresSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosColoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.coloresService.post(edit)
        .then((r: ResponseColor) => postModalParametrosColoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosColoresFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosColores$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosColores),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((colores: Colores) =>  editModalParametrosColoresSuccess({edit: colores})),
        catchError(error => of(editModalParametrosColoresFailure({error})))
      ))));

  editModalParametrosColoresSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosColoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.coloresService.put(edit)
        .then((r: ResponseColor) => putModalParametrosColoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosColoresFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosColores$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosColores),
    concatMap(async ({edit}) =>
      await this.apiService.coloresService.delete(edit)
        .then((r: ResponseColor) => deleteParametrosColoresSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosColoresFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosColoresSuccess,
        putModalParametrosColoresSuccess,
        deleteParametrosColoresSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosColoresFailure,
        putModalParametrosColoresFailure,
        deleteParametrosColoresFailure,
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

  openModal(color: Colores): Observable<Colores>{
    return from(this._openModal(color));
  }

  async _openModal(color: Colores): Promise<Colores> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.color = color;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
