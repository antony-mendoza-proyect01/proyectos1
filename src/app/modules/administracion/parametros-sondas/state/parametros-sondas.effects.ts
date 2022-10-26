import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosSondas,
  createModalParametrosSondasFailure,
  createModalParametrosSondasSuccess,
  deleteParametrosSondas,
  deleteParametrosSondasFailure,
  deleteParametrosSondasSuccess, editModalParametrosSondas,
  editModalParametrosSondasFailure,
  editModalParametrosSondasSuccess,
  getAllParametrosSondas,
  getAllParametrosSondasFailure,
  getAllParametrosSondasSuccess, postModalParametrosSondasFailure, postModalParametrosSondasSuccess,
  putModalParametrosSondasFailure,
  putModalParametrosSondasSuccess
} from './parametros-sondas.actions';
import {Sondas,  ResponseSondas, ResponseSonda} from '../../../../data/models/sondas';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosSondasEffects {
  getAllParametrosSondas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosSondas),
    switchMap(async () =>
      await this.apiService.sondasService.getAll()
        .then((r: ResponseSondas) => getAllParametrosSondasSuccess({sondas: r.data, sondasFiltro: r.data}))
        .catch(error => getAllParametrosSondasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosSondas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosSondas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((sondas: Sondas) =>  createModalParametrosSondasSuccess({edit: sondas})),
      catchError(error => of(createModalParametrosSondasFailure({edit, error})))
    ))));

  createModalParametrosSondasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosSondasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.sondasService.post(edit)
        .then((r: ResponseSonda) => postModalParametrosSondasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosSondasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosSondas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosSondas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((sondas: Sondas) =>  editModalParametrosSondasSuccess({edit: sondas})),
      catchError(error => of(editModalParametrosSondasFailure({error})))
    ))));

  editModalParametrosSondasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosSondasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.sondasService.put(edit)
        .then((r: ResponseSonda) => putModalParametrosSondasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosSondasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosSondas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosSondas),
    concatMap(async ({edit}) =>
      await this.apiService.sondasService.delete(edit)
        .then((r: ResponseSonda) => deleteParametrosSondasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosSondasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosSondasSuccess,
        putModalParametrosSondasSuccess,
        deleteParametrosSondasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosSondasFailure,
        putModalParametrosSondasFailure,
        deleteParametrosSondasFailure,
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

  openModal(sonda: Sondas): Observable<Sondas>{
    return from(this._openModal(sonda));
  }

  async _openModal(sonda: Sondas): Promise<Sondas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.sonda = sonda;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
