import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosDurezas,
  createModalParametrosDurezasFailure,
  createModalParametrosDurezasSuccess,
  deleteParametrosDurezas,
  deleteParametrosDurezasFailure,
  deleteParametrosDurezasSuccess, editModalParametrosDurezas,
  editModalParametrosDurezasFailure,
  editModalParametrosDurezasSuccess,
  getAllParametrosDurezas,
  getAllParametrosDurezasFailure,
  getAllParametrosDurezasSuccess, postModalParametrosDurezasFailure, postModalParametrosDurezasSuccess,
  putModalParametrosDurezasFailure,
  putModalParametrosDurezasSuccess
} from './parametros-durezas.actions';
import {Durezas, ResponseDureza, ResponseDurezas} from '../../../../data/models/durezas';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosDurezasEffects {
  getAllParametrosDurezas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosDurezas),
    switchMap(async () =>
      await this.apiService.durezasService.getAll()
        .then((r: ResponseDurezas) => getAllParametrosDurezasSuccess({durezas: r.data, durezasFiltro: r.data}))
        .catch(error => getAllParametrosDurezasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosDurezas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDurezas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((durezas: Durezas) =>  createModalParametrosDurezasSuccess({edit: durezas})),
      catchError(error => of(createModalParametrosDurezasFailure({edit, error})))
    ))));

  createModalParametrosDurezasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDurezasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.durezasService.post(edit)
        .then((r: ResponseDureza) => postModalParametrosDurezasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosDurezasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosDurezas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDurezas),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((durezas: Durezas) =>  editModalParametrosDurezasSuccess({edit: durezas})),
        catchError(error => of(editModalParametrosDurezasFailure({error})))
      ))));

  editModalParametrosDurezasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDurezasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.durezasService.put(edit)
        .then((r: ResponseDureza) => putModalParametrosDurezasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosDurezasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosDurezas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosDurezas),
    concatMap(async ({edit}) =>
      await this.apiService.durezasService.delete(edit)
        .then((r: ResponseDureza) => deleteParametrosDurezasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosDurezasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosDurezasSuccess,
        putModalParametrosDurezasSuccess,
        deleteParametrosDurezasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosDurezasFailure,
        postModalParametrosDurezasFailure,
        putModalParametrosDurezasFailure,
        deleteParametrosDurezasFailure,
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

  openModal(dureza: Durezas): Observable<Durezas>{
    return from(this._openModal(dureza));
  }

  async _openModal(dureza: Durezas): Promise<Durezas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.dureza = dureza;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
