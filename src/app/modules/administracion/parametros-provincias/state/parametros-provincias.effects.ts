import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosProvincias,
  createModalParametrosProvinciasFailure,
  createModalParametrosProvinciasSuccess,
  deleteParametrosProvincias,
  deleteParametrosProvinciasFailure,
  deleteParametrosProvinciasSuccess, editModalParametrosProvincias,
  editModalParametrosProvinciasFailure,
  editModalParametrosProvinciasSuccess,
  getAllParametrosProvincias,
  getAllParametrosProvinciasFailure,
  getAllParametrosProvinciasSuccess, postModalParametrosProvinciasFailure, postModalParametrosProvinciasSuccess,
  putModalParametrosProvinciasFailure,
  putModalParametrosProvinciasSuccess
} from './parametros-provincias.actions';
import {Provincias,ResponseProvincia, ResponseProvincias} from '../../../../data/models/provincias';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosProvinciasEffects {
  getAllParametrosProvincias$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosProvincias),
    switchMap(async () =>
      await this.apiService.provinciasService.getAll()
        .then((r: ResponseProvincias) => getAllParametrosProvinciasSuccess({provincias: r.data, provinciasFiltro: r.data}))
        .catch(error => getAllParametrosProvinciasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosProvincias$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosProvincias),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((provincias: Provincias) =>  createModalParametrosProvinciasSuccess({edit: provincias})),
      catchError(error => of(createModalParametrosProvinciasFailure({edit, error})))
    ))));

  createModalParametrosProvinciasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosProvinciasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.provinciasService.post(edit)
        .then((r: ResponseProvincia) => postModalParametrosProvinciasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosProvinciasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosProvincias$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosProvincias),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((provincias: Provincias) =>  editModalParametrosProvinciasSuccess({edit: provincias})),
        catchError(error => of(editModalParametrosProvinciasFailure({error})))
      ))));

  editModalParametrosProvinciasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosProvinciasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.provinciasService.put(edit)
        .then((r: ResponseProvincia) => putModalParametrosProvinciasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosProvinciasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosProvincias$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosProvincias),
    concatMap(async ({edit}) =>
      await this.apiService.provinciasService.delete(edit)
        .then((r: ResponseProvincia) => deleteParametrosProvinciasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosProvinciasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosProvinciasSuccess,
        putModalParametrosProvinciasSuccess,
        deleteParametrosProvinciasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosProvinciasFailure,
        postModalParametrosProvinciasFailure,
        putModalParametrosProvinciasFailure,
        deleteParametrosProvinciasFailure,
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

  openModal(provincia: Provincias): Observable<Provincias>{
    return from(this._openModal(provincia));
  }

  async _openModal(provincia: Provincias): Promise<Provincias> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.provincia = provincia;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
