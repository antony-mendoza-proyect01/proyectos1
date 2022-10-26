import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosTipoTectonicas,
  createModalParametrosTipoTectonicasFailure,
  createModalParametrosTipoTectonicasSuccess,
  deleteParametrosTipoTectonicas,
  deleteParametrosTipoTectonicasFailure,
  deleteParametrosTipoTectonicasSuccess, editModalParametrosTipoTectonicas,
  editModalParametrosTipoTectonicasFailure,
  editModalParametrosTipoTectonicasSuccess,
  getAllParametrosTipoTectonicas,
  getAllParametrosTipoTectonicasFailure,
  getAllParametrosTipoTectonicasSuccess, postModalParametrosTipoTectonicasFailure, postModalParametrosTipoTectonicasSuccess,
  putModalParametrosTipoTectonicasFailure,
  putModalParametrosTipoTectonicasSuccess
} from './parametros-tipo-tectonicas.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {
  ResponseTipoTectonica,
  ResponseTipoTectonicas,

  TipoTectonicas
} from 'src/app/data/models/tipo-tectonica';


@Injectable()
export class ParametrosTipoTectonicasEffects {
  getAllParametrosTipoTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosTipoTectonicas),
    switchMap(async () =>
      await this.apiService.tipotecnonicasService.getAll()
        .then((r: ResponseTipoTectonicas) => getAllParametrosTipoTectonicasSuccess({tipoTectonicas: r.data, tipoTectonicasFiltro: r.data}))
        .catch(error => getAllParametrosTipoTectonicasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosTipoTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTipoTectonicas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((tipoTectonicas: TipoTectonicas) =>  createModalParametrosTipoTectonicasSuccess({edit: tipoTectonicas})),
      catchError(error => of(createModalParametrosTipoTectonicasFailure({edit, error})))
    ))));

  createModalParametrosTipoTectonicasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosTipoTectonicasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tipotecnonicasService.post(edit)
        .then((r: ResponseTipoTectonica) => postModalParametrosTipoTectonicasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosTipoTectonicasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosTipoTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTipoTectonicas),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((tipoTectonicas: TipoTectonicas) =>  editModalParametrosTipoTectonicasSuccess({edit: tipoTectonicas})),
        catchError(error => of(editModalParametrosTipoTectonicasFailure({error})))
      ))));

  editModalParametrosTipoTectonicasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosTipoTectonicasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tipotecnonicasService.put(edit)
        .then((r: ResponseTipoTectonica) => putModalParametrosTipoTectonicasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosTipoTectonicasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosTipoTectonicas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosTipoTectonicas),
    concatMap(async ({edit}) =>
      await this.apiService.tipotecnonicasService.delete(edit)
        .then((r: ResponseTipoTectonica) => deleteParametrosTipoTectonicasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosTipoTectonicasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosTipoTectonicasSuccess,
        putModalParametrosTipoTectonicasSuccess,
        deleteParametrosTipoTectonicasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosTipoTectonicasFailure,
        postModalParametrosTipoTectonicasFailure,
        putModalParametrosTipoTectonicasFailure,
        deleteParametrosTipoTectonicasFailure,
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

  openModal(tipoTectonica: TipoTectonicas): Observable<TipoTectonicas>{
    return from(this._openModal(tipoTectonica));
  }

  async _openModal(tipoTectonica: TipoTectonicas): Promise<TipoTectonicas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.tipoTectonicas = tipoTectonica;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
