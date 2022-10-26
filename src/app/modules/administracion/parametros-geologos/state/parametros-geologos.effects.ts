import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  createModalParametrosPersonasRoles,
  createModalParametrosPersonasRolesFailure,
  createModalParametrosPersonasRolesSuccess,
  deleteParametrosPersonasRoles,
  deleteParametrosPersonasRolesFailure,
  deleteParametrosPersonasRolesSuccess, editModalParametrosPersonasRoles,
  editModalParametrosPersonasRolesFailure,
  editModalParametrosPersonasRolesSuccess,
  getAllParametrosPersonasRoles,
  getAllParametrosPersonasRolesFailure,
  getAllParametrosPersonasRolesSuccess, postModalParametrosPersonasRolesFailure, postModalParametrosPersonasRolesSuccess,
  putModalParametrosPersonasRolesFailure,
  putModalParametrosPersonasRolesSuccess
} from './parametros-geologos.actions';
import {
  PersonasRoles,
  ResponsepersonasRol, ResponsepersonasRoles,
} from '../../../../data/models/personas-roles';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';
import {PERSONAL_ROL__GEOLOGO, PERSONAL_ROL__GEOLOGO_URL} from '../../../../core/const/variables.const';
import {FormModalComponent} from "../components/form-modal/form-modal.component";


@Injectable()
export class ParametrosGeologosEffects {
  getAllParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosPersonasRoles),
    switchMap(async () =>
      await this.apiService.personasRolesService.getAll(PERSONAL_ROL__GEOLOGO_URL)
        .then((r: ResponsepersonasRoles) => getAllParametrosPersonasRolesSuccess({personasRoles: r.data, personasRolesFiltro: r.data}))
        .catch(error => getAllParametrosPersonasRolesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosPersonasRoles),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((personasRoles: PersonasRoles) =>  createModalParametrosPersonasRolesSuccess({edit: personasRoles})),
      catchError(error => of(createModalParametrosPersonasRolesFailure({edit, error})))
    ))));

  createModalParametrosPersonasRolesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosPersonasRolesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.personasRolesService.post(edit)
        .then((r: ResponsepersonasRol) => postModalParametrosPersonasRolesSuccess({edit: r.data, apiResponse: r }))
        .catch(error => postModalParametrosPersonasRolesFailure({edit, error}))
    )));


  // run this code when a edit modal action is dispatched
  editModalParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosPersonasRoles),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((personasRoles: PersonasRoles) =>  editModalParametrosPersonasRolesSuccess({edit: personasRoles, editModal: edit})),
        catchError(error => of(editModalParametrosPersonasRolesFailure({error})))
      ))));

  editModalParametrosPersonasRolesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosPersonasRolesSuccess),
    switchMap(async ({edit, editModal}) =>
      await this.apiService.personasRolesService.put(edit, editModal, PERSONAL_ROL__GEOLOGO)
        .then((r: ResponsepersonasRol) => putModalParametrosPersonasRolesSuccess({edit: r.data, apiResponse: r, editModal }))
        .catch(error => putModalParametrosPersonasRolesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosPersonasRoles$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosPersonasRoles),
    concatMap(async ({edit}) =>
      await this.apiService.personasRolesService.delete(edit)
        .then((r: ResponsepersonasRol) => deleteParametrosPersonasRolesSuccess({edit, apiResponse: r }))
        .catch(error => deleteParametrosPersonasRolesFailure({ error}))
    )));

  //manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postModalParametrosPersonasRolesSuccess,
        putModalParametrosPersonasRolesSuccess,
        deleteParametrosPersonasRolesSuccess,
      ),
      tap(action => {
        this.toastService.toastApiResponse(action.apiResponse);
      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllParametrosPersonasRolesFailure,
        postModalParametrosPersonasRolesFailure,
        putModalParametrosPersonasRolesFailure,
        deleteParametrosPersonasRolesFailure,
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

  openModal(personasRol: PersonasRoles): Observable<PersonasRoles>{
    return from(this._openModal(personasRol));
  }

  async _openModal(personasRol: PersonasRoles): Promise<PersonasRoles> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent );
      refModal.componentInstance.personasRol = personasRol;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }


}
