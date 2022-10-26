import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosEmpresas,
  createModalParametrosEmpresasFailure,
  createModalParametrosEmpresasSuccess,
  deleteParametrosEmpresas,
  deleteParametrosEmpresasFailure,
  deleteParametrosEmpresasSuccess, editModalParametrosEmpresas,
  editModalParametrosEmpresasFailure,
  editModalParametrosEmpresasSuccess,
  getAllParametrosEmpresas,
  getAllParametrosEmpresasFailure,
  getAllParametrosEmpresasSuccess, postModalParametrosEmpresasFailure, postModalParametrosEmpresasSuccess,
  putModalParametrosEmpresasFailure,
  putModalParametrosEmpresasSuccess
} from './parametros-empresas.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import { Empresas, ResponseEmpresa, ResponseEmpresas } from 'src/app/data/models/empresas';


@Injectable()
export class ParametrosEmpresasEffects {
  getAllParametrosEmpresas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosEmpresas),
    switchMap(async () =>
      await this.apiService.empresasService.getAll()
        .then((r: ResponseEmpresas) => getAllParametrosEmpresasSuccess({empresas: r.data, empresasFiltro: r.data}))
        .catch(error => getAllParametrosEmpresasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosEmpresas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosEmpresas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((empresas: Empresas) =>  createModalParametrosEmpresasSuccess({edit: empresas})),
      catchError(error => of(createModalParametrosEmpresasFailure({edit, error})))
    ))));

  createModalParametrosEmpresasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosEmpresasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.empresasService.post(edit)
        .then((r: ResponseEmpresa) => postModalParametrosEmpresasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosEmpresasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosEmpresas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosEmpresas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((empresas: Empresas) =>  editModalParametrosEmpresasSuccess({edit: empresas})),
      catchError(error => of(editModalParametrosEmpresasFailure({error})))
    ))));

  editModalParametrosEmpresasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosEmpresasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.empresasService.put(edit)
        .then((r: ResponseEmpresa) => putModalParametrosEmpresasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosEmpresasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosEmpresas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosEmpresas),
    concatMap(async ({edit}) =>
      await this.apiService.empresasService.delete(edit)
        .then((r: ResponseEmpresa) => deleteParametrosEmpresasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosEmpresasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosEmpresasSuccess,
        putModalParametrosEmpresasSuccess,
        deleteParametrosEmpresasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosEmpresasFailure,
        putModalParametrosEmpresasFailure,
        deleteParametrosEmpresasFailure,
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

  openModal(empresa: Empresas): Observable<Empresas>{
    return from(this._openModal(empresa));
  }

  async _openModal(empresa: Empresas): Promise<Empresas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.empresa = empresa;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
