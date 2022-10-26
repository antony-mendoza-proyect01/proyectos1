import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {
  createModalParametrosCodigosProyectos,
  createModalParametrosCodigosProyectosFailure,
  createModalParametrosCodigosProyectosSuccess,
  deleteParametrosCodigosProyectos,
  deleteParametrosCodigosProyectosFailure,
  deleteParametrosCodigosProyectosSuccess,
  getAllParametrosCodigosProyectos,
  getAllParametrosCodigosProyectosFailure,
  getAllParametrosCodigosProyectosSuccess, postModalParametrosCodigosProyectosFailure, postModalParametrosCodigosProyectosSuccess,
  putModalParametrosCodigosProyectosFailure,
  putModalParametrosCodigosProyectosSuccess
} from './parametros-codigos-proyectos.actions';
import {
  CodigosProyectos,
  ResponseCodigoProyecto,
  ResponseCodigosProyectos
} from '../../../../data/models/codigos-proyectos';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {FormModalComponent} from "../components/form-modal/form-modal.component";


@Injectable()
export class ParametrosCodigosProyectosEffects {
  getAllParametrosCodigosProyectos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosCodigosProyectos),
    switchMap(async () =>
      await this.apiService.codigosProyectosService.getAll()
        .then((r: ResponseCodigosProyectos) => getAllParametrosCodigosProyectosSuccess({codigosproyectos: r.data, codigosproyectosFiltro: r.data}))
        .catch(error => getAllParametrosCodigosProyectosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosCodigosProyectos$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosCodigosProyectos),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((codigosproyectos: CodigosProyectos) =>  createModalParametrosCodigosProyectosSuccess({edit: codigosproyectos})),
      catchError(error => of(createModalParametrosCodigosProyectosFailure({edit, error})))
    ))));

  createModalParametrosCodigosProyectosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosCodigosProyectosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.codigosProyectosService.post(edit)
        .then((r: ResponseCodigoProyecto) => postModalParametrosCodigosProyectosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosCodigosProyectosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosCodigosProyectos$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosCodigosProyectos),
    concatMap(async ({edit}) =>
      await this.apiService.codigosProyectosService.delete(edit)
        .then((r: ResponseCodigoProyecto) => deleteParametrosCodigosProyectosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosCodigosProyectosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosCodigosProyectosSuccess,
        putModalParametrosCodigosProyectosSuccess,
        deleteParametrosCodigosProyectosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosCodigosProyectosFailure,
        putModalParametrosCodigosProyectosFailure,
        deleteParametrosCodigosProyectosFailure,
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

  openModal(codigoproyecto: CodigosProyectos): Observable<CodigosProyectos>{
    return from(this._openModal(codigoproyecto));
  }

  async _openModal(codigoproyecto: CodigosProyectos): Promise<CodigosProyectos> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.codigoproyecto = codigoproyecto;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
