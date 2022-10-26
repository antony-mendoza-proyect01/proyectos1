import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosMateriales,
  createModalParametrosMaterialesFailure,
  createModalParametrosMaterialesSuccess,
  deleteParametrosMateriales,
  deleteParametrosMaterialesFailure,
  deleteParametrosMaterialesSuccess, editModalParametrosMateriales,
  editModalParametrosMaterialesFailure,
  editModalParametrosMaterialesSuccess,
  getAllParametrosMateriales,
  getAllParametrosMaterialesFailure,
  getAllParametrosMaterialesSuccess, postModalParametrosMaterialesFailure, postModalParametrosMaterialesSuccess,
  putModalParametrosMaterialesFailure,
  putModalParametrosMaterialesSuccess
} from './parametros-materiales.actions';

import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {Materiales, ResponseMaterial, ResponseMateriales} from 'src/app/data/models/materiales';


@Injectable()
export class ParametrosMaterialesEffects {
  getAllParametrosMateriales$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosMateriales),
    switchMap(async () =>
      await this.apiService.materialesService.getAll()
        .then((r: ResponseMateriales) => getAllParametrosMaterialesSuccess({materiales: r.data, materialesFiltro: r.data}))
        .catch(error => getAllParametrosMaterialesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosMateriales$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMateriales),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((materiales: Materiales) =>  createModalParametrosMaterialesSuccess({edit: materiales})),
      catchError(error => of(createModalParametrosMaterialesFailure({edit, error})))
    ))));

  createModalParametrosMaterialesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosMaterialesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.materialesService.post(edit)
        .then((r: ResponseMaterial) => postModalParametrosMaterialesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosMaterialesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosMateriales$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMateriales),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((materiales: Materiales) =>  editModalParametrosMaterialesSuccess({edit: materiales})),
      catchError(error => of(editModalParametrosMaterialesFailure({error})))
    ))));

  editModalParametrosMaterialesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosMaterialesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.materialesService.put(edit)
        .then((r: ResponseMaterial) => putModalParametrosMaterialesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosMaterialesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosMateriales$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosMateriales),
    concatMap(async ({edit}) =>
      await this.apiService.materialesService.delete(edit)
        .then((r: ResponseMaterial) => deleteParametrosMaterialesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosMaterialesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosMaterialesSuccess,
        putModalParametrosMaterialesSuccess,
        deleteParametrosMaterialesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosMaterialesFailure,
        putModalParametrosMaterialesFailure,
        deleteParametrosMaterialesFailure,
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

  openModal(material: Materiales): Observable<Materiales>{
    return from(this._openModal(material));
  }

  async _openModal(material: Materiales): Promise<Materiales> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent);
      refModal.componentInstance.material = material;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
