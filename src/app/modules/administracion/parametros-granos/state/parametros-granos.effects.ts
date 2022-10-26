import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosGranos,
  createModalParametrosGranosFailure,
  createModalParametrosGranosSuccess,
  deleteParametrosGranos,
  deleteParametrosGranosFailure,
  deleteParametrosGranosSuccess, editModalParametrosGranos,
  editModalParametrosGranosFailure,
  editModalParametrosGranosSuccess,
  getAllParametrosGranos,
  getAllParametrosGranosFailure,
  getAllParametrosGranosSuccess, postModalParametrosGranosFailure, postModalParametrosGranosSuccess,
  putModalParametrosGranosFailure,
  putModalParametrosGranosSuccess
} from './parametros-granos.actions';
import {Granos, ResponseGrano, ResponseGranos} from '../../../../data/models/granos';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosGranosEffects {
  getAllParametrosGranos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosGranos),
    switchMap(async () =>
      await this.apiService.granosService.getAll()
        .then((r: ResponseGranos) => getAllParametrosGranosSuccess({granos: r.data, granosFiltro: r.data}))
        .catch(error => getAllParametrosGranosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosGranos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosGranos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((granos: Granos) =>  createModalParametrosGranosSuccess({edit: granos})),
      catchError(error => of(createModalParametrosGranosFailure({edit, error})))
    ))));

  createModalParametrosGranosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosGranosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.granosService.post(edit)
        .then((r: ResponseGrano) => postModalParametrosGranosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosGranosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosGranos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosGranos),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((granos: Granos) =>  editModalParametrosGranosSuccess({edit: granos})),
        catchError(error => of(editModalParametrosGranosFailure({error})))
      ))));

  editModalParametrosGranosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosGranosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.granosService.put(edit)
        .then((r: ResponseGrano) => putModalParametrosGranosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosGranosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosGranos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosGranos),
    concatMap(async ({edit}) =>
      await this.apiService.granosService.delete(edit)
        .then((r: ResponseGrano) => deleteParametrosGranosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosGranosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosGranosSuccess,
        putModalParametrosGranosSuccess,
        deleteParametrosGranosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosGranosFailure,
        postModalParametrosGranosFailure,
        putModalParametrosGranosFailure,
        deleteParametrosGranosFailure,
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

  openModal(grano: Granos): Observable<Granos>{
    return from(this._openModal(grano));
  }

  async _openModal(grano: Granos): Promise<Granos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.grano = grano;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
