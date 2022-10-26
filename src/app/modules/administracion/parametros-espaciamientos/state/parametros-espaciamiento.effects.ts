import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosEspaciamiento,
  createModalParametrosEspaciamientoFailure,
  createModalParametrosEspaciamientoSuccess,
  deleteParametrosEspaciamiento,
  deleteParametrosEspaciamientoFailure,
  deleteParametrosEspaciamientoSuccess, editModalParametrosEspaciamiento,
  editModalParametrosEspaciamientoFailure,
  editModalParametrosEspaciamientoSuccess,
  getAllParametrosEspaciamiento,
  getAllParametrosEspaciamientoFailure,
  getAllParametrosEspaciamientoSuccess, postModalParametrosEspaciamientoFailure, postModalParametrosEspaciamientoSuccess,
  putModalParametrosEspaciamientoFailure,
  putModalParametrosEspaciamientoSuccess
} from './parametros-espaciamiento.actions';
import {Espaciamiento, ResponseEspaciamiento, ResponseEspaciamientos} from '../../../../data/models/espaciamiento';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosEspaciamientoEffects {
  getAllParametrosEspaciamiento$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosEspaciamiento),
    switchMap(async () =>
      await this.apiService.espaciamientoService.getAll()
        .then((r: ResponseEspaciamientos) => getAllParametrosEspaciamientoSuccess({espaciamientos: r.data, espaciamientosFiltro: r.data}))
        .catch(error => getAllParametrosEspaciamientoFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosEspaciamiento$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosEspaciamiento),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((espaciamiento: Espaciamiento) =>  createModalParametrosEspaciamientoSuccess({edit: espaciamiento})),
      catchError(error => of(createModalParametrosEspaciamientoFailure({edit, error})))
    ))));

  createModalParametrosEspaciamientoSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosEspaciamientoSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.espaciamientoService.post(edit)
        .then((r: ResponseEspaciamiento) => postModalParametrosEspaciamientoSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosEspaciamientoFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosEspaciamiento$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosEspaciamiento),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((espaciamiento: Espaciamiento) =>  editModalParametrosEspaciamientoSuccess({edit: espaciamiento})),
      catchError(error => of(editModalParametrosEspaciamientoFailure({error})))
    ))));

  editModalParametrosEspaciamientoSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosEspaciamientoSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.espaciamientoService.put(edit)
        .then((r: ResponseEspaciamiento) => putModalParametrosEspaciamientoSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosEspaciamientoFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosEspaciamiento$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosEspaciamiento),
    concatMap(async ({edit}) =>
      await this.apiService.espaciamientoService.delete(edit)
        .then((r: ResponseEspaciamiento) => deleteParametrosEspaciamientoSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosEspaciamientoFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosEspaciamientoSuccess,
        putModalParametrosEspaciamientoSuccess,
        deleteParametrosEspaciamientoSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosEspaciamientoFailure,
        postModalParametrosEspaciamientoFailure,
        putModalParametrosEspaciamientoFailure,
        deleteParametrosEspaciamientoFailure,
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

  openModal(espaciamiento: Espaciamiento): Observable<Espaciamiento>{
    return from(this._openModal(espaciamiento));
  }

  async _openModal(espaciamiento: Espaciamiento): Promise<Espaciamiento> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.espaciamiento = espaciamiento;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
