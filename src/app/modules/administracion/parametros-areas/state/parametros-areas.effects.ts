import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosAreas,
  createModalParametrosAreasFailure,
  createModalParametrosAreasSuccess,
  deleteParametrosAreas,
  deleteParametrosAreasFailure,
  deleteParametrosAreasSuccess, editModalParametrosAreas,
  editModalParametrosAreasFailure,
  editModalParametrosAreasSuccess,
  getAllParametrosAreas,
  getAllParametrosAreasFailure,
  getAllParametrosAreasSuccess, postModalParametrosAreasFailure, postModalParametrosAreasSuccess,
  putModalParametrosAreasFailure,
  putModalParametrosAreasSuccess
} from './parametros-areas.actions';
import {Areas, ResponseArea, ResponseAreas} from '../../../../data/models/areas';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';


@Injectable()
export class ParametrosAreasEffects {
  getAllParametrosAreas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosAreas),
    switchMap(async () =>
      await this.apiService.areasService.getAll()
        .then((r: ResponseAreas) => getAllParametrosAreasSuccess({areas: r.data, areasFiltro: r.data}))
        .catch(error => getAllParametrosAreasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosAreas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosAreas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((areas: Areas) =>  createModalParametrosAreasSuccess({edit: areas})),
      catchError(error => of(createModalParametrosAreasFailure({edit, error})))
    ))));

  createModalParametrosAreasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosAreasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.areasService.post(edit)
        .then((r: ResponseArea) => postModalParametrosAreasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosAreasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosAreas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosAreas),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((areas: Areas) =>  editModalParametrosAreasSuccess({edit: areas})),
        catchError(error => of(editModalParametrosAreasFailure({error})))
      ))));

  editModalParametrosAreasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosAreasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.areasService.put(edit)
        .then((r: ResponseArea) => putModalParametrosAreasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosAreasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosAreas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosAreas),
    concatMap(async ({edit}) =>
      await this.apiService.areasService.delete(edit)
        .then((r: ResponseArea) => deleteParametrosAreasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosAreasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosAreasSuccess,
        putModalParametrosAreasSuccess,
        deleteParametrosAreasSuccess,
      ),
    tap(action => {
      this.toastService.toastApiResponse(action.apiResponse);
    })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosAreasFailure,
        postModalParametrosAreasFailure,
        putModalParametrosAreasFailure,
        deleteParametrosAreasFailure,
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

  openModal(area: Areas): Observable<Areas>{
    return from(this._openModal(area));
  }

  async _openModal(area: Areas): Promise<Areas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.area = area;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
