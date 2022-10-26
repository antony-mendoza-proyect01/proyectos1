import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosNombreSuperficies,
  createModalParametrosNombreSuperficiesFailure,
  createModalParametrosNombreSuperficiesSuccess,
  deleteParametrosNombreSuperficies,
  deleteParametrosNombreSuperficiesFailure,
  deleteParametrosNombreSuperficiesSuccess, editModalParametrosNombreSuperficies,
  editModalParametrosNombreSuperficiesFailure,
  editModalParametrosNombreSuperficiesSuccess,
  getAllParametrosNombreSuperficies,
  getAllParametrosNombreSuperficiesFailure,
  getAllParametrosNombreSuperficiesSuccess, postModalParametrosNombreSuperficiesFailure, postModalParametrosNombreSuperficiesSuccess,
  putModalParametrosNombreSuperficiesFailure,
  putModalParametrosNombreSuperficiesSuccess
} from './parametros-nombre-superficies.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {ResponseNombreSuperficie,ResponseNombreSuperficies,NombreSuperficies} from "../../../../data/models/nombre-superficies";


@Injectable()
export class ParametrosNombreSuperficiesEffects {
  getAllParametrosNombreSuperficies$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosNombreSuperficies),
    switchMap(async () =>
      await this.apiService.nombresuperficiesService.getAll()
        .then((r: ResponseNombreSuperficies) => getAllParametrosNombreSuperficiesSuccess({nombres: r.data, nombresFiltro: r.data}))
        .catch(error => getAllParametrosNombreSuperficiesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosNombreSuperficies$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosNombreSuperficies),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((nombres: NombreSuperficies) =>  createModalParametrosNombreSuperficiesSuccess({edit: nombres})),
      catchError(error => of(createModalParametrosNombreSuperficiesFailure({edit, error})))
    ))));

  createModalParametrosNombreSuperficiesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosNombreSuperficiesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.nombresuperficiesService.post(edit)
        .then((r: ResponseNombreSuperficie) => postModalParametrosNombreSuperficiesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosNombreSuperficiesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosNombreSuperficies$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosNombreSuperficies),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((nombres: NombreSuperficies) =>  editModalParametrosNombreSuperficiesSuccess({edit: nombres})),
        catchError(error => of(editModalParametrosNombreSuperficiesFailure({error})))
      ))));

  editModalParametrosNombreSuperficiesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosNombreSuperficiesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.nombresuperficiesService.put(edit)
        .then((r: ResponseNombreSuperficie) => putModalParametrosNombreSuperficiesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosNombreSuperficiesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosNombreSuperficies$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosNombreSuperficies),
    concatMap(async ({edit}) =>
      await this.apiService.nombresuperficiesService.delete(edit)
        .then((r: ResponseNombreSuperficie) => deleteParametrosNombreSuperficiesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosNombreSuperficiesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosNombreSuperficiesSuccess,
        putModalParametrosNombreSuperficiesSuccess,
        deleteParametrosNombreSuperficiesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosNombreSuperficiesFailure,
        postModalParametrosNombreSuperficiesFailure,
        putModalParametrosNombreSuperficiesFailure,
        deleteParametrosNombreSuperficiesFailure,
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

  openModal(nombre: NombreSuperficies): Observable<NombreSuperficies>{
    return from(this._openModal(nombre));
  }

  async _openModal(nombre: NombreSuperficies): Promise<NombreSuperficies> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.nombre = nombre;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
