import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosContratosRegistro,
  createModalParametrosContratosRegistroFailure,
  createModalParametrosContratosRegistroSuccess,
  createModalTarifaRegistroParametrosContratosRegistro,
  createModalTarifaRegistroParametrosContratosRegistroFailure,
  createModalTarifaRegistroParametrosContratosRegistroSuccess,
  deleteParametrosContratosRegistro,
  deleteParametrosContratosRegistroFailure,
  deleteParametrosContratosRegistroSuccess,
  deleteTarifaRegistroParametrosContratosRegistro, deleteTarifaRegistroParametrosContratosRegistroFailure,
  deleteTarifaRegistroParametrosContratosRegistroSuccess,
  editModalParametrosContratosRegistro,
  editModalParametrosContratosRegistroFailure,
  editModalParametrosContratosRegistroSuccess,
  editModalTarifaRegistroParametrosContratosRegistro,
  editModalTarifaRegistroParametrosContratosRegistroFailure,
  editModalTarifaRegistroParametrosContratosRegistroSuccess,
  getAllParametrosContratosRegistro,
  getAllParametrosContratosRegistroFailure,
  getAllParametrosContratosRegistroSuccess,
  getByCodContratoParametrosContratosRegistroFailure,
  getByCodContratoParametrosContratosRegistroRegistro,
  getByCodContratoParametrosContratosRegistroSuccess,
  postModalParametrosContratosRegistroFailure,
  postModalParametrosContratosRegistroSuccess,
  postModalTarifaRegistroParametrosContratosRegistroFailure,
  postModalTarifaRegistroParametrosContratosRegistroSuccess,
  putModalParametrosContratosRegistroFailure,
  putModalParametrosContratosRegistroSuccess,
  putModalTarifaRegistroParametrosContratosRegistroFailure,
  putModalTarifaRegistroParametrosContratosRegistroSuccess,

} from './parametros-contratos-registro.actions';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {
  ContratosRegistro,
  ResponseContratosRegistro,
  ResponseContratosRegistros
} from '../../../../data/models/contratos-registro';
import {
  ResponseTarifasRegistro,
  ResponseTarifasRegistros,
  TarifasRegistro
} from '../../../../data/models/tarifas-registro';
import {
  FormModalTarifasRegistrosComponent
} from '../components/form-modal-tarifas-registros/form-modal-tarifas-registros.component';

@Injectable()
export class ParametrosContratosRegistroEffects {
  getAllParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosContratosRegistro),
    switchMap(async () =>
      await this.apiService.contratosRegistroService.getAll()
        .then((r: ResponseContratosRegistros) => getAllParametrosContratosRegistroSuccess({contratosRegistro: r.data, contratosRegistroFiltro: r.data}))
        .catch(error => getAllParametrosContratosRegistroFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratosRegistro),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((contratosRegistro: ContratosRegistro) =>  createModalParametrosContratosRegistroSuccess({edit: contratosRegistro})),
      catchError(error => of(createModalParametrosContratosRegistroFailure({edit, error})))
    ))));

  createModalParametrosContratosRegistroSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosContratosRegistroSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.contratosRegistroService.post(edit)
        .then((r: ResponseContratosRegistro) => postModalParametrosContratosRegistroSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosContratosRegistroFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratosRegistro),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((contratosRegistro: ContratosRegistro) =>  editModalParametrosContratosRegistroSuccess({edit: contratosRegistro})),
        catchError(error => of(editModalParametrosContratosRegistroFailure({error})))
      ))));

  editModalParametrosContratosRegistroSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosContratosRegistroSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.contratosRegistroService.put(edit)
        .then((r: ResponseContratosRegistro) => putModalParametrosContratosRegistroSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosContratosRegistroFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosContratosRegistro),
    concatMap(async ({edit}) =>
      await this.apiService.contratosRegistroService.delete(edit)
        .then((r: ResponseContratosRegistro) => deleteParametrosContratosRegistroSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosContratosRegistroFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosContratosRegistroSuccess,
        putModalParametrosContratosRegistroSuccess,
        deleteParametrosContratosRegistroSuccess,
        postModalTarifaRegistroParametrosContratosRegistroSuccess,
        putModalTarifaRegistroParametrosContratosRegistroSuccess,
        deleteTarifaRegistroParametrosContratosRegistroSuccess
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosContratosRegistroFailure,
        postModalParametrosContratosRegistroFailure,
        putModalParametrosContratosRegistroFailure,
        deleteParametrosContratosRegistroFailure,
        postModalTarifaRegistroParametrosContratosRegistroFailure,
        putModalTarifaRegistroParametrosContratosRegistroFailure,
        deleteTarifaRegistroParametrosContratosRegistroFailure
      ),
      tap(action => {
        this.toastService.danger(null, action.error);
      })),{ dispatch: false });

  getByCodContratoParametrosContratosRegistroRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(getByCodContratoParametrosContratosRegistroRegistro),
    switchMap(async ({edit}) =>
      await this.apiService.tarifaRegistroService.getByCodContrato(edit.codigo)
        .then((r: ResponseTarifasRegistros) =>
          getByCodContratoParametrosContratosRegistroSuccess({tarifasRegistro: r.data, apiResponse: r}))
        .catch(error => getByCodContratoParametrosContratosRegistroFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalTarifaRegistroParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(createModalTarifaRegistroParametrosContratosRegistro),
    concatMap(({edit}) => this.openModalTarifaRegistro(edit).pipe(
      map((tarifasRegistro: TarifasRegistro) =>  createModalTarifaRegistroParametrosContratosRegistroSuccess({edit: tarifasRegistro})),
      catchError(error => of(createModalTarifaRegistroParametrosContratosRegistroFailure({edit, error})))
    ))));

  createModalTarifaRegistroParametrosContratosRegistroSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalTarifaRegistroParametrosContratosRegistroSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tarifaRegistroService.post(edit)
        .then((r: ResponseTarifasRegistro) => postModalTarifaRegistroParametrosContratosRegistroSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalTarifaRegistroParametrosContratosRegistroFailure({edit, error}))
    )));

  // run this code when a edit modal action is dispatched
  editModalTarifaRegistroParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(editModalTarifaRegistroParametrosContratosRegistro),
    concatMap(({edit}) => this.openModalTarifaRegistro(edit).pipe(
      map((tarifasRegistro: TarifasRegistro) =>  editModalTarifaRegistroParametrosContratosRegistroSuccess({edit: tarifasRegistro})),
      catchError(error => of(editModalTarifaRegistroParametrosContratosRegistroFailure({error})))
    ))
  ));

  editModalTarifaRegistroParametrosContratosRegistroSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalTarifaRegistroParametrosContratosRegistroSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.tarifaRegistroService.put(edit)
        .then((r: ResponseTarifasRegistro) => putModalTarifaRegistroParametrosContratosRegistroSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalTarifaRegistroParametrosContratosRegistroFailure({edit, error}))
    )));

  // run this code when a delete
  deleteTarifaRegistroParametrosContratosRegistro$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTarifaRegistroParametrosContratosRegistro),
    concatMap(async ({edit}) =>
      await this.apiService.tarifaRegistroService.delete(edit)
        .then((r: ResponseTarifasRegistro) => deleteTarifaRegistroParametrosContratosRegistroSuccess({edit, apiResponse: r }))
        .catch(error => deleteTarifaRegistroParametrosContratosRegistroFailure({ error}))
    )));

  constructor(
    private store: Store,
    private toastService: ToastService,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  openModal(area: ContratosRegistro): Observable<ContratosRegistro>{
    return from(this._openModal(area));
  }

  async _openModal(contratosRegistro: ContratosRegistro): Promise<ContratosRegistro> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.contratosRegistro = contratosRegistro;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }



  openModalTarifaRegistro(tarifasRegistro: TarifasRegistro): Observable<TarifasRegistro>{
    return from(this._openModalTarifaRegistro(tarifasRegistro));
  }

  async _openModalTarifaRegistro(tarifasRegistro: TarifasRegistro): Promise<TarifasRegistro> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalTarifasRegistrosComponent, { size: 'lg'});
      refModal.componentInstance.tarifasRegistro = tarifasRegistro;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
