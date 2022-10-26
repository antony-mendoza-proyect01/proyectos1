import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosTurnos,
  createModalParametrosTurnosFailure,
  createModalParametrosTurnosSuccess,
  deleteParametrosTurnos,
  deleteParametrosTurnosFailure,
  deleteParametrosTurnosSuccess, editModalParametrosTurnos,
  editModalParametrosTurnosFailure,
  editModalParametrosTurnosSuccess,
  getAllParametrosTurnos,
  getAllParametrosTurnosFailure,
  getAllParametrosTurnosSuccess, postModalParametrosTurnosFailure, postModalParametrosTurnosSuccess,
  putModalParametrosTurnosFailure,
  putModalParametrosTurnosSuccess
} from './parametros-turnos.actions';
import {Turnos,  ResponseTurnos, ResponseTurno} from '../../../../data/models/turnos';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosTurnosEffects {
  getAllParametrosTurnos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosTurnos),
    switchMap(async () =>
      await this.apiService.turnosService.getAll()
        .then((r: ResponseTurnos) => getAllParametrosTurnosSuccess({turnos: r.data, turnosFiltro: r.data}))
        .catch(error => getAllParametrosTurnosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosTurnos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTurnos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((turnos: Turnos) =>  createModalParametrosTurnosSuccess({edit: turnos})),
      catchError(error => of(createModalParametrosTurnosFailure({edit, error})))
    ))));

  createModalParametrosTurnosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTurnosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.turnosService.post(edit)
        .then((r: ResponseTurno) => postModalParametrosTurnosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosTurnosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosTurnos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTurnos),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((turnos: Turnos) =>  editModalParametrosTurnosSuccess({edit: turnos})),
        catchError(error => of(editModalParametrosTurnosFailure({error})))
      ))));

  editModalParametrosTurnosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTurnosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.turnosService.put(edit)
        .then((r: ResponseTurno) => putModalParametrosTurnosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosTurnosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosTurnos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosTurnos),
    concatMap(async ({edit}) =>
      await this.apiService.turnosService.delete(edit)
        .then((r: ResponseTurno) => deleteParametrosTurnosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosTurnosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTurnosSuccess,
        putModalParametrosTurnosSuccess,
        deleteParametrosTurnosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTurnosFailure,
        putModalParametrosTurnosFailure,
        deleteParametrosTurnosFailure,
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

  openModal(turno: Turnos): Observable<Turnos>{
    return from(this._openModal(turno));
  }

  async _openModal(turno: Turnos): Promise<Turnos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.turno = turno;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
