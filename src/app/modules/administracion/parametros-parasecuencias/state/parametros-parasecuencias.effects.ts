import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosParasecuencias,
  createModalParametrosParasecuenciasFailure,
  createModalParametrosParasecuenciasSuccess,
  deleteParametrosParasecuencias,
  deleteParametrosParasecuenciasFailure,
  deleteParametrosParasecuenciasSuccess,
  getAllParametrosParasecuencias,
  getAllParametrosParasecuenciasFailure,
  getAllParametrosParasecuenciasSuccess, postModalParametrosParasecuenciasFailure, postModalParametrosParasecuenciasSuccess,
  putModalParametrosParasecuenciasFailure,
  putModalParametrosParasecuenciasSuccess
} from './parametros-parasecuencias.actions';
import {Parasecuencias, ResponseParasecuencia, ResponseParasecuencias} from '../../../../data/models/parasecuencias';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosParasecuenciasEffects {
  getAllParametrosParasecuencias$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosParasecuencias),
    switchMap(async () =>
      await this.apiService.paresecuenciasService.getAll()
        .then((r: ResponseParasecuencias) => getAllParametrosParasecuenciasSuccess({parasecuencias: r.data, parasecuenciasFiltro: r.data}))
        .catch(error => getAllParametrosParasecuenciasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosParasecuencias$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosParasecuencias),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((paresecuencias: Parasecuencias) =>  createModalParametrosParasecuenciasSuccess({edit: paresecuencias})),
      catchError(error => of(createModalParametrosParasecuenciasFailure({edit, error})))
    ))));

  createModalParametrosParasecuenciasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosParasecuenciasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.paresecuenciasService.post(edit)
        .then((r: ResponseParasecuencia) => postModalParametrosParasecuenciasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosParasecuenciasFailure({edit, error}))
    )));



  // run this code when a delete
  deleteParametrosParasecuencias$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosParasecuencias),
    concatMap(async ({edit}) =>
      await this.apiService.paresecuenciasService.delete(edit)
        .then((r: ResponseParasecuencia) => deleteParametrosParasecuenciasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosParasecuenciasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosParasecuenciasSuccess,
        putModalParametrosParasecuenciasSuccess,
        deleteParametrosParasecuenciasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosParasecuenciasFailure,
        postModalParametrosParasecuenciasFailure,
        putModalParametrosParasecuenciasFailure,
        deleteParametrosParasecuenciasFailure,
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

  openModal(paresecuencia: Parasecuencias): Observable<Parasecuencias>{
    return from(this._openModal(paresecuencia));
  }

  async _openModal(parasecuencia: Parasecuencias): Promise<Parasecuencias> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
        refModal.componentInstance.parasecuencia = parasecuencia;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
