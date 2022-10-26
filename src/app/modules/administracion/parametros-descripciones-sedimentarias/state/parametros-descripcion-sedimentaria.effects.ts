import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosDescripcionSedimentaria,
  createModalParametrosDescripcionSedimentariaFailure,
  createModalParametrosDescripcionSedimentariaSuccess,
  deleteParametrosDescripcionSedimentaria,
  deleteParametrosDescripcionSedimentariaFailure,
  deleteParametrosDescripcionSedimentariaSuccess, editModalParametrosDescripcionSedimentaria,
  editModalParametrosDescripcionSedimentariaFailure,
  editModalParametrosDescripcionSedimentariaSuccess,
  getAllParametrosDescripcionSedimentaria,
  getAllParametrosDescripcionSedimentariaFailure,
  getAllParametrosDescripcionSedimentariaSuccess, postModalParametrosDescripcionSedimentariaFailure, postModalParametrosDescripcionSedimentariaSuccess,
  putModalParametrosDescripcionSedimentariaFailure,
  putModalParametrosDescripcionSedimentariaSuccess
} from './parametros-descripcion-sedimentaria.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {
  DescripcionSedimentaria,
  ResponseDescipcionSedimentaria,
  ResponseDescipcionSedimentarias
} from 'src/app/data/models/descripcion-sedimentaria';


@Injectable()
export class ParametrosDescripcionSedimentariaEffects {
  getAllParametrosDescripcionSedimentaria$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosDescripcionSedimentaria),
    switchMap(async () =>
      await this.apiService.descripcionSedimentariaService.getAll()
        .then((r: ResponseDescipcionSedimentarias) => getAllParametrosDescripcionSedimentariaSuccess({descripcionSedimentarias: r.data, descripcionSedimentariasFiltro: r.data}))
        .catch(error => getAllParametrosDescripcionSedimentariaFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosDescripcionSedimentaria$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripcionSedimentaria),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((descripcionSedimentarias: DescripcionSedimentaria) =>  createModalParametrosDescripcionSedimentariaSuccess({edit: descripcionSedimentarias})),
      catchError(error => of(createModalParametrosDescripcionSedimentariaFailure({edit, error})))
    ))));

  createModalParametrosDescripcionSedimentariaSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripcionSedimentariaSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionSedimentariaService.post(edit)
        .then((r: ResponseDescipcionSedimentaria) => postModalParametrosDescripcionSedimentariaSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosDescripcionSedimentariaFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosDescripcionSedimentaria$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripcionSedimentaria),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((descripcionSedimentarias: DescripcionSedimentaria) =>  editModalParametrosDescripcionSedimentariaSuccess({edit: descripcionSedimentarias})),
      catchError(error => of(editModalParametrosDescripcionSedimentariaFailure({error})))
    ))));

  editModalParametrosDescripcionSedimentariaSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripcionSedimentariaSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionSedimentariaService.put(edit)
        .then((r: ResponseDescipcionSedimentaria) => putModalParametrosDescripcionSedimentariaSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosDescripcionSedimentariaFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosDescripcionSedimentaria$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosDescripcionSedimentaria),
    concatMap(async ({edit}) =>
      await this.apiService.descripcionSedimentariaService.delete(edit)
        .then((r: ResponseDescipcionSedimentaria) => deleteParametrosDescripcionSedimentariaSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosDescripcionSedimentariaFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosDescripcionSedimentariaSuccess,
        putModalParametrosDescripcionSedimentariaSuccess,
        deleteParametrosDescripcionSedimentariaSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosDescripcionSedimentariaFailure,
        postModalParametrosDescripcionSedimentariaFailure,
        putModalParametrosDescripcionSedimentariaFailure,
        deleteParametrosDescripcionSedimentariaFailure,
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

  openModal(descripcionSedimentaria: DescripcionSedimentaria): Observable<DescripcionSedimentaria>{
    return from(this._openModal(descripcionSedimentaria));
  }

  async _openModal(descripcionSedimentaria: DescripcionSedimentaria): Promise<DescripcionSedimentaria> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.descripcionSedimentaria = descripcionSedimentaria;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
