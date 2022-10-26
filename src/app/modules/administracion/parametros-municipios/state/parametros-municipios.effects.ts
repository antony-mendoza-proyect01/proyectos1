import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosMunicipios,
  createModalParametrosMunicipiosFailure,
  createModalParametrosMunicipiosSuccess,
  deleteParametrosMunicipios,
  deleteParametrosMunicipiosFailure,
  deleteParametrosMunicipiosSuccess, editModalParametrosMunicipios,
  editModalParametrosMunicipiosFailure,
  editModalParametrosMunicipiosSuccess,
  getAllParametrosMunicipios,
  getAllParametrosMunicipiosFailure,
  getAllParametrosMunicipiosSuccess, postModalParametrosMunicipiosFailure, postModalParametrosMunicipiosSuccess,
  putModalParametrosMunicipiosFailure,
  putModalParametrosMunicipiosSuccess
} from './parametros-municipios.actions';
import {Municipios, ResponseMunicipio,  ResponseMunicipios} from '../../../../data/models/municipios';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosMunicipiosEffects {
  getAllParametrosMunicipios$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosMunicipios),
    switchMap(async () =>
      await this.apiService.municipiosService.getAll()
        .then((r: ResponseMunicipios) => getAllParametrosMunicipiosSuccess({municipios: r.data, municipiosFiltro: r.data}))
        .catch(error => getAllParametrosMunicipiosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosMunicipios$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMunicipios),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((municipios: Municipios) =>  createModalParametrosMunicipiosSuccess({edit: municipios})),
      catchError(error => of(createModalParametrosMunicipiosFailure({edit, error})))
    ))));

  createModalParametrosMunicipiosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMunicipiosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.municipiosService.post(edit)
        .then((r: ResponseMunicipio) => postModalParametrosMunicipiosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosMunicipiosFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosMunicipios$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMunicipios),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((municipios: Municipios) =>  editModalParametrosMunicipiosSuccess({edit: municipios})),
        catchError(error => of(editModalParametrosMunicipiosFailure({error})))
      ))));

  editModalParametrosMunicipiosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMunicipiosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.municipiosService.put(edit)
        .then((r: ResponseMunicipio) => putModalParametrosMunicipiosSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosMunicipiosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosMunicipios$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosMunicipios),
    concatMap(async ({edit}) =>
      await this.apiService.municipiosService.delete(edit)
        .then((r: ResponseMunicipio) => deleteParametrosMunicipiosSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosMunicipiosFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosMunicipiosSuccess,
        putModalParametrosMunicipiosSuccess,
        deleteParametrosMunicipiosSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosMunicipiosFailure,
        postModalParametrosMunicipiosFailure,
        putModalParametrosMunicipiosFailure,
        deleteParametrosMunicipiosFailure,
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

  openModal(municipio: Municipios): Observable<Municipios>{
    return from(this._openModal(municipio));
  }

  async _openModal(municipio: Municipios): Promise<Municipios> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.municipio = municipio;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
