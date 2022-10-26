import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap} from 'rxjs/operators';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {
  createModalAdministracionUsuarios,
  createModalAdministracionUsuariosFailure,
  createModalAdministracionUsuariosSuccess, deleteAdministracionUsuarios, deleteAdministracionUsuariosFailure, deleteAdministracionUsuariosSuccess,
  editModalAdministracionUsuarios, editModalAdministracionUsuariosFailure,
  editModalAdministracionUsuariosSuccess,
  getAllAdministracionUsuarios,
  getAllAdministracionUsuariosFailure,
  getAllAdministracionUsuariosSuccess,
  postModalAdministracionUsuariosFailure,
  postModalAdministracionUsuariosSuccess, putModalAdministracionUsuariosFailure, putModalAdministracionUsuariosSuccess
} from './administracion-usuarios.actions';
import {ResponseUser, ResponseUsers, User} from '../../../../data/models/user';
import {ApiService} from '../../../../data/services/api.service';


@Injectable()
export class AdministracionUsuariosEffects {
  getAllAdministracionUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(getAllAdministracionUsuarios),
    switchMap(async () =>
      await this.apiService.userService.getAll()
        .then((r: ResponseUsers) => getAllAdministracionUsuariosSuccess({usuarios: r.data, usuariosFiltro: r.data}))
        .catch(error => getAllAdministracionUsuariosFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  createModalAdministracionUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(createModalAdministracionUsuarios),
    concatMap(({edit}) => this.openModal(edit).pipe(
      map((usuarios: User) =>  createModalAdministracionUsuariosSuccess({edit: usuarios})),
      catchError(error => of(createModalAdministracionUsuariosFailure({edit, error})))
    ))));

  createModalAdministracionUsuariosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalAdministracionUsuariosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.userService.post(edit)
        .then((r: ResponseUser) => postModalAdministracionUsuariosSuccess({edit: r.data}))
        .catch(error => postModalAdministracionUsuariosFailure({edit, error}))
    )));

  // run this code when a edit modal action is dispatched
  editModalAdministracionUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(editModalAdministracionUsuarios),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((usuarios: User) =>  editModalAdministracionUsuariosSuccess({edit: usuarios})),
        catchError(error => of(editModalAdministracionUsuariosFailure({error})))
      ))));

  editModalAdministracionUsuariosSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalAdministracionUsuariosSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.userService.put(edit)
        .then((r: ResponseUser) => putModalAdministracionUsuariosSuccess({edit: r.data}))
        .catch(error => putModalAdministracionUsuariosFailure({edit, error}))
    )));

  // run this code when a delete
  deleteAdministracionUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(deleteAdministracionUsuarios),
    concatMap(async ({edit}) =>
      await this.apiService.userService.delete(edit)
        .then((r: ResponseUser) => deleteAdministracionUsuariosSuccess({edit}))
        .catch(error => deleteAdministracionUsuariosFailure({ error}))
    )));


  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  openModal(item: User): Observable<User>{
    return from(this._openModal(item));
  }

  async _openModal(item: User): Promise<User> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
      refModal.componentInstance.usuario = item;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

}
