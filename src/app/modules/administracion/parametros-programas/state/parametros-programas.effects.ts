import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalParametrosProgramas,
  createModalParametrosProgramasFailure,
  createModalParametrosProgramasSuccess,
  deleteParametrosProgramas,
  deleteParametrosProgramasFailure,
  deleteParametrosProgramasSuccess, editModalParametrosProgramas,
  editModalParametrosProgramasFailure,
  editModalParametrosProgramasSuccess,
  getAllParametrosProgramas,
  getAllParametrosProgramasFailure,
  getAllParametrosProgramasSuccess, postModalParametrosProgramasFailure, postModalParametrosProgramasSuccess,
  putModalParametrosProgramasFailure,
  putModalParametrosProgramasSuccess
} from './parametros-programas.actions';
import {Programas, ResponsePrograma, ResponseProgramas} from '../../../../data/models/programas';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class ParametrosProgramasEffects {
  getAllParametrosProgramas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosProgramas),
    switchMap(async () =>
      await this.apiService.programasService.getAll()
        .then((r: ResponseProgramas) => getAllParametrosProgramasSuccess({programas: r.data, programasFiltro: r.data}))
        .catch(error => getAllParametrosProgramasFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosProgramas$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosProgramas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((programas: Programas) =>  createModalParametrosProgramasSuccess({edit: programas})),
      catchError(error => of(createModalParametrosProgramasFailure({edit, error})))
    ))));

  createModalParametrosProgramasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosProgramasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.programasService.post(edit)
        .then((r: ResponsePrograma) => postModalParametrosProgramasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosProgramasFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosProgramas$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosProgramas),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((programas: Programas) =>  editModalParametrosProgramasSuccess({edit: programas})),
      catchError(error => of(editModalParametrosProgramasFailure({error})))
    ))));

  editModalParametrosProgramasSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosProgramasSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.programasService.put(edit)
        .then((r: ResponsePrograma) => putModalParametrosProgramasSuccess({edit: r.data, apiResponse: r }))
        .catch(error => putModalParametrosProgramasFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosProgramas$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosProgramas),
    concatMap(async ({edit}) =>
      await this.apiService.programasService.delete(edit)
        .then((r: ResponsePrograma) => deleteParametrosProgramasSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosProgramasFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosProgramasSuccess,
        putModalParametrosProgramasSuccess,
        deleteParametrosProgramasSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosProgramasFailure,
        putModalParametrosProgramasFailure,
        deleteParametrosProgramasFailure,
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

  openModal(programa: Programas): Observable<Programas>{
    return from(this._openModal(programa));
  }

  async _openModal(programa: Programas): Promise<Programas> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.programa = programa;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
