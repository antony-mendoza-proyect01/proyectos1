import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosLaboratorios,
  createModalParametrosLaboratoriosFailure,
  createModalParametrosLaboratoriosSuccess,
  deleteParametrosLaboratorios,
  deleteParametrosLaboratoriosFailure,
  deleteParametrosLaboratoriosSuccess, editModalParametrosLaboratorios,
  editModalParametrosLaboratoriosFailure,
  editModalParametrosLaboratoriosSuccess,
  getAllParametrosLaboratorios,
  getAllParametrosLaboratoriosFailure,
  getAllParametrosLaboratoriosSuccess, postModalParametrosLaboratoriosFailure, postModalParametrosLaboratoriosSuccess,
  putModalParametrosLaboratoriosFailure,
  putModalParametrosLaboratoriosSuccess
} from './parametros-laboratorios.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import { Laboratorios, ResponseLaboratorio, ResponseLaboratorios } from 'src/app/data/models/laboratorios';


@Injectable()
export class ParametrosLaboratoriosEffects {
  getAllParametrosLaboratorios$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosLaboratorios),
    switchMap(async () =>
      await this.apiService.laboratoriosService.getAll()
        .then((r: ResponseLaboratorios) => getAllParametrosLaboratoriosSuccess({laboratorios: r.data, laboratoriosFiltro: r.data}))
        .catch(error => getAllParametrosLaboratoriosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosLaboratorios$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLaboratorios),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((laboratorios: Laboratorios) =>  createModalParametrosLaboratoriosSuccess({edit: laboratorios})),
      catchError(error => of(createModalParametrosLaboratoriosFailure({edit, error})))
    ))));

  createModalParametrosLaboratoriosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosLaboratoriosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.laboratoriosService.post(edit)
        .then((r: ResponseLaboratorio) => postModalParametrosLaboratoriosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosLaboratoriosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosLaboratorios$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLaboratorios),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((laboratorios: Laboratorios) =>  editModalParametrosLaboratoriosSuccess({edit: laboratorios})),
        catchError(error => of(editModalParametrosLaboratoriosFailure({error})))
      ))));

  editModalParametrosLaboratoriosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosLaboratoriosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.laboratoriosService.put(edit)
        .then((r: ResponseLaboratorio) => putModalParametrosLaboratoriosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosLaboratoriosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosLaboratorios$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosLaboratorios),
    concatMap(async ({edit}) =>
      await this.apiService.laboratoriosService.delete(edit)
        .then((r: ResponseLaboratorio) => deleteParametrosLaboratoriosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosLaboratoriosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosLaboratoriosSuccess,
        putModalParametrosLaboratoriosSuccess,
        deleteParametrosLaboratoriosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosLaboratoriosFailure,
        postModalParametrosLaboratoriosFailure,
        putModalParametrosLaboratoriosFailure,
        deleteParametrosLaboratoriosFailure,
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

  openModal(laboratorio: Laboratorios): Observable<Laboratorios>{
    return from(this._openModal(laboratorio));
  }

  async _openModal(laboratorio: Laboratorios): Promise<Laboratorios> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.laboratorio = laboratorio;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
