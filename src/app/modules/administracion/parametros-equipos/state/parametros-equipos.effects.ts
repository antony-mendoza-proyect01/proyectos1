import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosEquipos,
  createModalParametrosEquiposFailure,
  createModalParametrosEquiposSuccess,
  deleteParametrosEquipos,
  deleteParametrosEquiposFailure,
  deleteParametrosEquiposSuccess, editModalParametrosEquipos,
  editModalParametrosEquiposFailure,
  editModalParametrosEquiposSuccess,
  getAllParametrosEquipos,
  getAllParametrosEquiposFailure,
  getAllParametrosEquiposSuccess, postModalParametrosEquiposFailure, postModalParametrosEquiposSuccess,
  putModalParametrosEquiposFailure,
  putModalParametrosEquiposSuccess
} from './parametros-equipos.actions';
import {Equipos, ResponseEquipo, ResponseEquipos} from '../../../../data/models/equipos';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosEquiposEffects {
  getAllParametrosEquipos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosEquipos),
    switchMap(async () =>
      await this.apiService.equiposService.getAll()
        .then((r: ResponseEquipos) => getAllParametrosEquiposSuccess({equipos: r.data, equiposFiltro: r.data}))
        .catch(error => getAllParametrosEquiposFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosEquipos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosEquipos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((equipos: Equipos) =>  createModalParametrosEquiposSuccess({edit: equipos})),
      catchError(error => of(createModalParametrosEquiposFailure({edit, error})))
    ))));

  createModalParametrosEquiposSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosEquiposSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.equiposService.post(edit)
        .then((r: ResponseEquipo) => postModalParametrosEquiposSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosEquiposFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosEquipos$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosEquipos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((equipos: Equipos) =>  editModalParametrosEquiposSuccess({edit: equipos})),
      catchError(error => of(editModalParametrosEquiposFailure({error})))
    ))));

  editModalParametrosEquiposSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosEquiposSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.equiposService.put(edit)
        .then((r: ResponseEquipo) => putModalParametrosEquiposSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosEquiposFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosEquipos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosEquipos),
    concatMap(async ({edit}) =>
      await this.apiService.equiposService.delete(edit)
        .then((r: ResponseEquipo) => deleteParametrosEquiposSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosEquiposFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosEquiposSuccess,
        putModalParametrosEquiposSuccess,
        deleteParametrosEquiposSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosEquiposFailure,
        putModalParametrosEquiposFailure,
        deleteParametrosEquiposFailure,
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

  openModal(equipo: Equipos): Observable<Equipos>{
    return from(this._openModal(equipo));
  }

  async _openModal(equipo: Equipos): Promise<Equipos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.equipo = equipo;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
