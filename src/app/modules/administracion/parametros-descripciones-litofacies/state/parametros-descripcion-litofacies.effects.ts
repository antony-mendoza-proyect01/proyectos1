import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap} from 'rxjs/operators';
import {
  createModalParametrosDescripcionesLitofacies,
  createModalParametrosDescripcionesLitofaciesFailure,
  createModalParametrosDescripcionesLitofaciesSuccess,
  deleteParametrosDescripcionesLitofacies, deleteParametrosDescripcionesLitofaciesFailure,
  deleteParametrosDescripcionesLitofaciesSuccess,
  editModalParametrosDescripcionesLitofacies,
  editModalParametrosDescripcionesLitofaciesFailure,
  editModalParametrosDescripcionesLitofaciesSuccess,
  getAllParametrosDescripcionesLitofacies,
  getAllParametrosDescripcionesLitofaciesFailure,
  getAllParametrosDescripcionesLitofaciesSuccess,
  postModalParametrosDescripcionesLitofaciesFailure,
  postModalParametrosDescripcionesLitofaciesSuccess,
  putModalParametrosDescripcionesLitofaciesFailure,
  putModalParametrosDescripcionesLitofaciesSuccess,} from './parametros-descripcion-litofacies.actions';
import {catchError, from, map, Observable, of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../../../data/services/api.service';
import {
  ResponseDescripcionesLitofacie,
  ResponseDescripcionesLitofacies
} from '../../../../data/models/descripciones-litofacies';

@Injectable()
export class ParametrosDescripcionLitofaciesEffects {
  getAllParametrosDescripcionesLitofacies$ = createEffect(() => this.actions$.pipe(
    ofType(getAllParametrosDescripcionesLitofacies),
    switchMap(async () =>
      await this.apiService.descripcionesLitofaciesService.getAll()
        .then((r: ResponseDescripcionesLitofacies) => getAllParametrosDescripcionesLitofaciesSuccess({descripcionesLitofacies: r.data, descripcionesLitofaciesFiltro: r.data}))
        .catch(error => getAllParametrosDescripcionesLitofaciesFailure({error}))
    )));

  // run this code when a create modal action is dispatched
  // createModalParametrosDescripcionesLitofacies$ = createEffect(() => this.actions$.pipe(
  //   ofType(createModalParametrosDescripcionesLitofacies),
  //   concatMap(({edit}) => this.openModal(edit).pipe(
  //     map((descripcion: Descripciones) =>  createModalParametrosDescripcionesLitofaciesSuccess({edit: descripcion})),
  //     catchError(error => of(createModalParametrosDescripcionesLitofaciesFailure({edit, error})))
  //   ))));

  createModalParametrosDescripcionesLitofaciesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createModalParametrosDescripcionesLitofaciesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionesLitofaciesService.post(edit)
        .then((r: ResponseDescripcionesLitofacie) => postModalParametrosDescripcionesLitofaciesSuccess({edit: r.data}))
        .catch(error => postModalParametrosDescripcionesLitofaciesFailure({edit, error}))
    )));

  // run this code when a edit modal action is dispatched
  // editModalParametrosDescripcionesLitofacies$ = createEffect(() => this.actions$.pipe(
  //   ofType(editModalParametrosDescripcionesLitofacies),
  //   concatMap(({edit}) => this.openModal(edit).pipe(
  //       map((descripciones: Descripciones) =>  editModalParametrosDescripcionesLitofaciesSuccess({edit: descripciones})),
  //       catchError(error => of(editModalParametrosDescripcionesLitofaciesFailure({error})))
  //     ))));

  editModalParametrosDescripcionesLitofaciesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(editModalParametrosDescripcionesLitofaciesSuccess),
    switchMap(async ({edit}) =>
      await this.apiService.descripcionesLitofaciesService.put(edit)
        .then((r: ResponseDescripcionesLitofacie) => putModalParametrosDescripcionesLitofaciesSuccess({edit: r.data}))
        .catch(error => putModalParametrosDescripcionesLitofaciesFailure({edit, error}))
    )));

  // run this code when a delete
  deleteParametrosDescripcionesLitofacies$ = createEffect(() => this.actions$.pipe(
    ofType(deleteParametrosDescripcionesLitofacies),
    concatMap(async ({edit}) =>
      await this.apiService.descripcionesLitofaciesService.delete(edit)
        .then((response: ResponseDescripcionesLitofacie) => deleteParametrosDescripcionesLitofaciesSuccess({edit}))
        .catch(error => deleteParametrosDescripcionesLitofaciesFailure({ error}))
    )));


  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  // openModal(descripcion: Descripciones): Observable<Descripciones>{
  //   return from(this._openModal(descripcion));
  // }
  //
  // async _openModal(descripcion: Descripciones): Promise<Descripciones> {
  //   try {// refModal = referencias que estan en el modal
  //     const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
  //     refModal.componentInstance.descripcion = descripcion;
  //
  //     return refModal.result;
  //   }catch (e) {
  //     throw(e);
  //   }
  // }

}
