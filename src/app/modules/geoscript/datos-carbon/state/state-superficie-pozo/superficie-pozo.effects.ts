import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalSuperficiePozo,
  createModalSuperficiePozoFailure,
  createModalSuperficiePozoSuccess,
  deleteSuperficiePozo,
  deleteSuperficiePozoFailure,
  deleteSuperficiePozoSuccess, editModalSuperficiePozo,
  editModalSuperficiePozoFailure,
  editModalSuperficiePozoSuccess,
  getAllByPozoSuperficiePozo,
  getAllByPozoSuperficiePozoFailure,
  getAllByPozoSuperficiePozoSuccess,
  postModalSuperficiePozoFailure, postModalSuperficiePozoSuccess,
  putModalSuperficiePozoFailure,
  putModalSuperficiePozoSuccess
} from './superficie-pozo.actions';
import {
  ResponseSuperficiePozo, ResponseSuperficiePozoDetail,
  ResponseSuperficiePozoDetailRGB,
  ResponseSuperficiePozos,
  SuperficiePozo
} from 'src/app/data/models/superficie-pozo';
import { ApiResponse } from 'src/app/data/models/api-response';
import {ApiService} from "../../../../../data/services/api.service";
import { ToastService } from 'src/app/shared/services/toast.service';
import {FormSuperficiePozoComponent} from "../../components/form-superficie-pozo/form-superficie-pozo.component";
import {
  getAllParametrosNombreSuperficies
} from "../../../../administracion/parametros-nombre-superficies/state/parametros-nombre-superficies.actions";



@Injectable()
export class SuperficiePozoEffects {
  getAllByPozoSuperficiePozo$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoSuperficiePozo),
    switchMap(async ({pozo}) =>
      await this.apiService.superficiePozoService.getByPozo(pozo)
        .then((r: ResponseSuperficiePozos) => getAllByPozoSuperficiePozoSuccess({superficiePozos: r.data }))
        .catch(error => getAllByPozoSuperficiePozoFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalSuperficiePozo$ = createEffect(() => this.actions$.pipe(
    ofType(createModalSuperficiePozo),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((superficiePozos: SuperficiePozo) =>  createModalSuperficiePozoSuccess({edit: superficiePozos})),
      catchError(error => of(createModalSuperficiePozoFailure({edit, error})))
    ))));

  createModalSuperficiePozoSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalSuperficiePozoSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.superficiePozoService.post(edit)
        .then((r: ResponseSuperficiePozoDetail) => postModalSuperficiePozoSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalSuperficiePozoFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalSuperficiePozo$ = createEffect(() => this.actions$.pipe(
    ofType(editModalSuperficiePozo),
    concatMap(({edit, codPozo}) => this.openModal(edit).pipe(
      map((superficiePozos: SuperficiePozo) =>  editModalSuperficiePozoSuccess({edit: superficiePozos, codPozo})),
      catchError(error => of(editModalSuperficiePozoFailure({error})))
    ))));

  editModalSuperficiePozoSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalSuperficiePozoSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.superficiePozoService.put(edit)
        .then((r: ResponseSuperficiePozo) => putModalSuperficiePozoSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalSuperficiePozoFailure({edit, error}))
    )));

  // run this code when a delete
  deleteSuperficiePozo$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSuperficiePozo),
    concatMap(async ({edit}) =>
      await this.apiService.superficiePozoService.delete(edit)
        .then((r: ResponseSuperficiePozo) => deleteSuperficiePozoSuccess({edit, apiResponse: r }))
        .catch(error => deleteSuperficiePozoFailure({ error}))
    )));


  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalSuperficiePozoSuccess,
        putModalSuperficiePozoSuccess,
        deleteSuperficiePozoSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllByPozoSuperficiePozoFailure,
        postModalSuperficiePozoFailure,
        putModalSuperficiePozoFailure,
        deleteSuperficiePozoFailure,
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

  openModal(superficiePozos: SuperficiePozo): Observable<SuperficiePozo>{
    return from(this._openModal(superficiePozos));
  }

  async _openModal(superficiePozos: SuperficiePozo): Promise<SuperficiePozo> {
    try {// refModal = referencias que estan en el modal
      this.store.dispatch(getAllParametrosNombreSuperficies());
      const refModal = this.ngbModal.open(FormSuperficiePozoComponent, { size: 'lg'});
      refModal.componentInstance.superficiesPozos = superficiePozos;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
