import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosNombresIntervalos,
  createModalParametrosNombresIntervalosFailure,
  createModalParametrosNombresIntervalosSuccess,
  deleteParametrosNombresIntervalos,
  deleteParametrosNombresIntervalosFailure,
  deleteParametrosNombresIntervalosSuccess,
  editModalParametrosNombresIntervalos,
  editModalParametrosNombresIntervalosFailure,
  editModalParametrosNombresIntervalosSuccess,
  getAllPaginadoParametrosNombresIntervalos,
  getAllPaginadoParametrosNombresIntervalosFailure,
  getAllPaginadoParametrosNombresIntervalosSuccess,
  getAllParametrosNombresIntervalosFailure,
  getByNombrePaginadoParametrosNombresIntervalos, getByNombrePaginadoParametrosNombresIntervalosFailure,
  getByNombrePaginadoParametrosNombresIntervalosSuccess,
  postModalParametrosNombresIntervalosFailure,
  postModalParametrosNombresIntervalosSuccess,
  putModalParametrosNombresIntervalosFailure,
  putModalParametrosNombresIntervalosSuccess
} from './parametros-nombres-intervalos.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {
  NombresIntervalos,
  ResponseNombresIntervalo,
  ResponseNombresIntervalos
} from '../../../../data/models/nombres-intervalos';


@Injectable()
export class ParametrosNombresIntervalosEffects {
  getAllPaginadoParametrosNombresIntervalos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllPaginadoParametrosNombresIntervalos),
    switchMap(async ({page}) =>
      await this.apiService.nombresIntervalosService.getAllPaginado(page)
        .then((r: ResponseNombresIntervalos) => getAllPaginadoParametrosNombresIntervalosSuccess(
          {nombresIntervalos: r.data.content, paginatorSize: r.data.totalElements}))
        .catch(error => getAllPaginadoParametrosNombresIntervalosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosNombresIntervalos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosNombresIntervalos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((NombresIntervalos: NombresIntervalos) =>  createModalParametrosNombresIntervalosSuccess({edit: NombresIntervalos})),
      catchError(error => of(createModalParametrosNombresIntervalosFailure({edit, error})))
    ))));

  createModalParametrosNombresIntervalosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosNombresIntervalosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.nombresIntervalosService.post(edit)
        .then((r: ResponseNombresIntervalo) => postModalParametrosNombresIntervalosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosNombresIntervalosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosNombresIntervalos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosNombresIntervalos),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((NombresIntervalos: NombresIntervalos) =>  editModalParametrosNombresIntervalosSuccess({edit: NombresIntervalos, editModal: edit})),
        catchError(error => of(editModalParametrosNombresIntervalosFailure({error})))
      ))));

  editModalParametrosNombresIntervalosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosNombresIntervalosSuccess),
    switchMap(async ({edit, editModal}) =>
      await this.apiService.nombresIntervalosService.put(edit, editModal)
        .then((r: ResponseNombresIntervalo) => putModalParametrosNombresIntervalosSuccess({edit: r.data, editModal, apiResponse: r }))
        .catch(error => putModalParametrosNombresIntervalosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosNombresIntervalos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosNombresIntervalos),
    concatMap(async ({edit}) =>
      await this.apiService.nombresIntervalosService.delete(edit)
        .then((r: ResponseNombresIntervalo) => deleteParametrosNombresIntervalosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosNombresIntervalosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosNombresIntervalosSuccess,
        putModalParametrosNombresIntervalosSuccess,
        deleteParametrosNombresIntervalosSuccess,
        getByNombrePaginadoParametrosNombresIntervalosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosNombresIntervalosFailure,
        postModalParametrosNombresIntervalosFailure,
        putModalParametrosNombresIntervalosFailure,
        deleteParametrosNombresIntervalosFailure,
      ),
      tap(action => {
        this.toastService.danger(null, action.error);
      })),{ dispatch: false });

  //
  getByNombrePaginadoParametrosNombresIntervalos$ = createEffect(() => this.actions$.pipe(
    ofType(getByNombrePaginadoParametrosNombresIntervalos),
    switchMap(async ({nombre}) =>
      await this.apiService.nombresIntervalosService.getByNombre(nombre)
        .then((r: ResponseNombresIntervalo) =>
          getByNombrePaginadoParametrosNombresIntervalosSuccess({edit: r.data, apiResponse: r}))
        .catch(error => getByNombrePaginadoParametrosNombresIntervalosFailure({error}))
    )));

  getByNombrePaginadoParametrosNombresIntervalosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(getByNombrePaginadoParametrosNombresIntervalosSuccess),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((NombresIntervalos: NombresIntervalos) =>  editModalParametrosNombresIntervalosSuccess({edit: NombresIntervalos, editModal: edit})),
      catchError(error => of(editModalParametrosNombresIntervalosFailure({error})))
    ))));

  constructor(
    private store: Store,
    private toastService: ToastService,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  openModal(nombresIntervalos: NombresIntervalos): Observable<NombresIntervalos>{
    return from(this._openModal(nombresIntervalos));
  }

  async _openModal(nombresIntervalos: NombresIntervalos): Promise<NombresIntervalos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent);
      refModal.componentInstance.nombresIntervalos = nombresIntervalos;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
