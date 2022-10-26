import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosCalificadores,
  createModalParametrosCalificadoresFailure,
  createModalParametrosCalificadoresSuccess,
  deleteParametrosCalificadores,
  deleteParametrosCalificadoresFailure,
  deleteParametrosCalificadoresSuccess, editModalParametrosCalificadores,
  editModalParametrosCalificadoresFailure,
  editModalParametrosCalificadoresSuccess,
  getAllParametrosCalificadores,
  getAllParametrosCalificadoresFailure,
  getAllParametrosCalificadoresSuccess, postModalParametrosCalificadoresFailure, postModalParametrosCalificadoresSuccess,
  putModalParametrosCalificadoresFailure,
  putModalParametrosCalificadoresSuccess
} from './parametros-calificadores.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {Calificadores, ResponseCalificador, ResponseCalificadores} from 'src/app/data/models/calificadores';


@Injectable()
export class ParametrosCalificadoresEffects {
  getAllParametrosCalificadores$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosCalificadores),
    switchMap(async () =>
      await this.apiService.calificadoresService.getAll()
        .then((r: ResponseCalificadores) => getAllParametrosCalificadoresSuccess({calificadores: r.data, calificadoresFiltro: r.data}))
        .catch(error => getAllParametrosCalificadoresFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosCalificadores$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosCalificadores),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((calificadores: Calificadores) =>  createModalParametrosCalificadoresSuccess({edit: calificadores})),
      catchError(error => of(createModalParametrosCalificadoresFailure({edit, error})))
    ))));

  createModalParametrosCalificadoresSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosCalificadoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calificadoresService.post(edit)
        .then((r: ResponseCalificador) => postModalParametrosCalificadoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosCalificadoresFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosCalificadores$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosCalificadores),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((calificadores: Calificadores) =>  editModalParametrosCalificadoresSuccess({edit: calificadores})),
        catchError(error => of(editModalParametrosCalificadoresFailure({error})))
      ))));

  editModalParametrosCalificadoresSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosCalificadoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.calificadoresService.put(edit)
        .then((r: ResponseCalificador) => putModalParametrosCalificadoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosCalificadoresFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosCalificadores$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosCalificadores),
    concatMap(async ({edit}) =>
      await this.apiService.calificadoresService.delete(edit)
        .then((r: ResponseCalificador) => deleteParametrosCalificadoresSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosCalificadoresFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosCalificadoresSuccess,
        putModalParametrosCalificadoresSuccess,
        deleteParametrosCalificadoresSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosCalificadoresFailure,
        putModalParametrosCalificadoresFailure,
        deleteParametrosCalificadoresFailure,
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

  openModal(calificador: Calificadores): Observable<Calificadores>{
    return from(this._openModal(calificador));
  }

  async _openModal(calificador: Calificadores): Promise<Calificadores> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.calificador = calificador;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
