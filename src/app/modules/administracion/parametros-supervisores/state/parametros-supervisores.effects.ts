import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalParametrosSupervisores,
  createModalParametrosSupervisoresFailure,
  createModalParametrosSupervisoresSuccess,
  deleteParametrosSupervisores,
  deleteParametrosSupervisoresFailure,
  deleteParametrosSupervisoresSuccess, editModalParametrosSupervisores,
  editModalParametrosSupervisoresFailure,
  editModalParametrosSupervisoresSuccess,
  getAllParametrosSupervisores,
  getAllParametrosSupervisoresFailure,
  getAllParametrosSupervisoresSuccess, postModalParametrosSupervisoresFailure, postModalParametrosSupervisoresSuccess,
  putModalParametrosSupervisoresFailure,
  putModalParametrosSupervisoresSuccess
} from './parametros-supervisores.actions';
import {
  PersonasRoles,
  ResponsepersonasRol, ResponsepersonasRoles,
} from '../../../../data/models/personas-roles';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {
  PERSONAL_ROL__SUPERVISOR,
  PERSONAL_ROL__SUPERVISOR_URL
} from '../../../../core/const/variables.const';
import {FormModalComponent} from "../components/form-modal/form-modal.component";


@Injectable()
export class ParametrosSupervisoresEffects {
  getAllParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosSupervisores),
    switchMap(async () =>
      await this.apiService.personasRolesService.getAll(PERSONAL_ROL__SUPERVISOR_URL)
        .then((r: ResponsepersonasRoles) => getAllParametrosSupervisoresSuccess({supervisores: r.data, supervisoresFiltro: r.data}))
        .catch(error => getAllParametrosSupervisoresFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosSupervisores),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((supervisores: PersonasRoles) =>  createModalParametrosSupervisoresSuccess({edit: supervisores})),
      catchError(error => of(createModalParametrosSupervisoresFailure({edit, error})))
    ))));

  createModalParametrosPersonasRolesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosSupervisoresSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.personasRolesService.post(edit)
        .then((r: ResponsepersonasRol) => postModalParametrosSupervisoresSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosSupervisoresFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosSupervisores),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((supervisores: PersonasRoles) =>  editModalParametrosSupervisoresSuccess({edit: supervisores, editModal: edit})),
      catchError(error => of(editModalParametrosSupervisoresFailure({error})))
    ))));

  editModalParametrosPersonasRolesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosSupervisoresSuccess),
    switchMap(async ({edit, editModal}) =>
      await this.apiService.personasRolesService.put(edit, editModal, PERSONAL_ROL__SUPERVISOR)
        .then((r: ResponsepersonasRol) => putModalParametrosSupervisoresSuccess({edit: r.data, apiResponse: r, editModal  }))
        .catch(error => putModalParametrosSupervisoresFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosSupervisores),
    concatMap(async ({edit}) =>
      await this.apiService.personasRolesService.delete(edit)
        .then((r: ResponsepersonasRol) => deleteParametrosSupervisoresSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosSupervisoresFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosSupervisoresSuccess,
        putModalParametrosSupervisoresSuccess,
        deleteParametrosSupervisoresSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosSupervisoresFailure,
        postModalParametrosSupervisoresFailure,
        putModalParametrosSupervisoresFailure,
        deleteParametrosSupervisoresFailure,
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

  openModal(supervisor: PersonasRoles): Observable<PersonasRoles>{
    return from(this._openModal(supervisor));
  }

  async _openModal(supervisor: PersonasRoles): Promise<PersonasRoles> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.supervisor = supervisor;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
