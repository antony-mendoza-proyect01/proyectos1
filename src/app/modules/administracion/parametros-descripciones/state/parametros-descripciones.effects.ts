import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosDescripciones,
  createModalParametrosDescripcionesFailure,
  createModalParametrosDescripcionesSuccess,
  deleteParametrosDescripciones,
  deleteParametrosDescripcionesFailure,
  deleteParametrosDescripcionesSuccess, editModalParametrosDescripciones,
  editModalParametrosDescripcionesFailure,
  editModalParametrosDescripcionesSuccess,
  getAllParametrosDescripciones,
  getAllParametrosDescripcionesFailure,
  getAllParametrosDescripcionesSuccess, postModalParametrosDescripcionesFailure, postModalParametrosDescripcionesSuccess,
  putModalParametrosDescripcionesFailure,
  putModalParametrosDescripcionesSuccess
} from './parametros-descripciones.actions';
import {Descripciones, ResponseDescripcion, ResponseDescripciones} from '../../../../data/models/descripciones';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosDescripcionesEffects {
  getAllParametrosDescripciones$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosDescripciones),
    switchMap(async () =>
      await this.apiService.descripcionesService.getAll()
        .then((r: ResponseDescripciones) => getAllParametrosDescripcionesSuccess({descripciones: r.data, descripcionesFiltro: r.data}))
        .catch(error => getAllParametrosDescripcionesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosDescripciones$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripciones),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((descripciones: Descripciones) =>  createModalParametrosDescripcionesSuccess({edit: descripciones})),
      catchError(error => of(createModalParametrosDescripcionesFailure({edit, error})))
    ))));

  createModalParametrosDescripcionesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripcionesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionesService.post(edit)
        .then((r: ResponseDescripcion) => postModalParametrosDescripcionesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosDescripcionesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosDescripciones$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripciones),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((descripciones: Descripciones) =>  editModalParametrosDescripcionesSuccess({edit: descripciones})),
      catchError(error => of(editModalParametrosDescripcionesFailure({error})))
    ))));

  editModalParametrosDescripcionesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripcionesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionesService.put(edit)
        .then((r: ResponseDescripcion) => putModalParametrosDescripcionesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosDescripcionesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosDescripciones$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosDescripciones),
    concatMap(async ({edit}) =>
      await this.apiService.descripcionesService.delete(edit)
        .then((r: ResponseDescripcion) => deleteParametrosDescripcionesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosDescripcionesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosDescripcionesSuccess,
        putModalParametrosDescripcionesSuccess,
        deleteParametrosDescripcionesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosDescripcionesFailure,
        putModalParametrosDescripcionesFailure,
        deleteParametrosDescripcionesFailure,
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

  openModal(descripcion: Descripciones): Observable<Descripciones>{
    return from(this._openModal(descripcion));
  }

  async _openModal(descripcion: Descripciones): Promise<Descripciones> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.descripcion = descripcion;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
