import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosContratosPerforacion,
  createModalParametrosContratosPerforacionFailure,
  createModalParametrosContratosPerforacionSuccess,
  deleteParametrosContratosPerforacion,
  deleteParametrosContratosPerforacionFailure,
  deleteParametrosContratosPerforacionSuccess,
  editModalParametrosContratosPerforacion,
  editModalParametrosContratosPerforacionFailure,
  editModalParametrosContratosPerforacionSuccess,
  getAllParametrosContratosPerforacion,
  getAllParametrosContratosPerforacionFailure,
  getAllParametrosContratosPerforacionSuccess,
  postModalParametrosContratosPerforacionFailure,
  postModalParametrosContratosPerforacionSuccess,
  putModalParametrosContratosPerforacionFailure,
  putModalParametrosContratosPerforacionSuccess,

} from './parametros-contratos-perforacion.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {Contratos, ResponseContrato, ResponseContratos} from '../../../../data/models/contratos';

@Injectable()
export class ParametrosContratosPerforacionEffects {
  getAllParametrosContratosPerforacion$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosContratosPerforacion),
    switchMap(async () =>
      await this.apiService.contratosService.getAll()
        .then((r: ResponseContratos) => getAllParametrosContratosPerforacionSuccess({contratosPerforacion: r.data, contratosPerforacionFiltro: r.data}))
        .catch(error => getAllParametrosContratosPerforacionFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosContratosPerforacion$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratosPerforacion),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contrato: Contratos) =>  createModalParametrosContratosPerforacionSuccess({edit: contrato})),
      catchError(error => of(createModalParametrosContratosPerforacionFailure({edit, error})))
    ))));

  createModalParametrosContratosPerforacionSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratosPerforacionSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.contratosService.post(edit)
        .then((r: ResponseContrato) => postModalParametrosContratosPerforacionSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosContratosPerforacionFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosContratosPerforacion$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratosPerforacion),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((contrato: Contratos) =>  editModalParametrosContratosPerforacionSuccess({edit: contrato})),
        catchError(error => of(editModalParametrosContratosPerforacionFailure({error})))
      ))));

  editModalParametrosContratosPerforacionSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratosPerforacionSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.contratosService.put(edit)
        .then((r: ResponseContrato) => putModalParametrosContratosPerforacionSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosContratosPerforacionFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosContratosPerforacion$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosContratosPerforacion),
    concatMap(async ({edit}) =>
      await this.apiService.contratosService.delete(edit)
        .then((r: ResponseContrato) => deleteParametrosContratosPerforacionSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosContratosPerforacionFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosContratosPerforacionSuccess,
        putModalParametrosContratosPerforacionSuccess,
        deleteParametrosContratosPerforacionSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosContratosPerforacionFailure,
        postModalParametrosContratosPerforacionFailure,
        putModalParametrosContratosPerforacionFailure,
        deleteParametrosContratosPerforacionFailure,
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

  openModal(data: Contratos): Observable<Contratos>{
    return from(this._openModal(data));
  }

  async _openModal(data: Contratos): Promise<Contratos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.contratosPerforacion = data;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
