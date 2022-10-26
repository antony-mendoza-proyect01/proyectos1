import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosLitologias,
  createModalParametrosLitologiasFailure,
  createModalParametrosLitologiasSuccess,
  deleteParametrosLitologias,
  deleteParametrosLitologiasFailure,
  deleteParametrosLitologiasSuccess, editModalParametrosLitologias,
  editModalParametrosLitologiasFailure,
  editModalParametrosLitologiasSuccess,
  getAllParametrosLitologias,
  getAllParametrosLitologiasFailure,
  getAllParametrosLitologiasSuccess, postModalParametrosLitologiasFailure, postModalParametrosLitologiasSuccess,
  putModalParametrosLitologiasFailure,
  putModalParametrosLitologiasSuccess
} from './parametros-litologias.actions';
import {Litologias, ResponseLitologia,  ResponseLitologias} from '../../../../data/models/litologias';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosLitologiasEffects {
  getAllParametrosLitologias$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosLitologias),
    switchMap(async () =>
      await this.apiService.litologiasService.getAll()
        .then((r: ResponseLitologias) => getAllParametrosLitologiasSuccess({litologias: r.data, litologiasFiltro: r.data}))
        .catch(error => getAllParametrosLitologiasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosLitologias$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLitologias),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((litologias: Litologias) =>  createModalParametrosLitologiasSuccess({edit: litologias})),
      catchError(error => of(createModalParametrosLitologiasFailure({edit, error})))
    ))));

  createModalParametrosLitologiasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLitologiasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.litologiasService.post(edit)
        .then((r: ResponseLitologia) => postModalParametrosLitologiasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosLitologiasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosLitologias$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLitologias),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((litologias: Litologias) =>  editModalParametrosLitologiasSuccess({edit: litologias})),
        catchError(error => of(editModalParametrosLitologiasFailure({error})))
      ))));

  editModalParametrosLitologiasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLitologiasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.litologiasService.put(edit)
        .then((r: ResponseLitologia) => putModalParametrosLitologiasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosLitologiasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosLitologias$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosLitologias),
    concatMap(async ({edit}) =>
      await this.apiService.litologiasService.delete(edit)
        .then((r: ResponseLitologia) => deleteParametrosLitologiasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosLitologiasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosLitologiasSuccess,
        putModalParametrosLitologiasSuccess,
        deleteParametrosLitologiasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosLitologiasFailure,
        postModalParametrosLitologiasFailure,
        putModalParametrosLitologiasFailure,
        deleteParametrosLitologiasFailure,
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

  openModal(litologia: Litologias): Observable<Litologias>{
    return from(this._openModal(litologia));
  }

  async _openModal(litologia: Litologias): Promise<Litologias> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.litologia = litologia;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
