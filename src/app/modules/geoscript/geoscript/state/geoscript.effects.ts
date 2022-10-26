import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../../shared/services/toast.service';
import {ApiService} from '../../../../data/services/api.service';
import {ApiResponse} from '../../../../data/models/api-response';


@Injectable()
export class GeoscriptEffects {

  // run this code when a create modal action is dispatched
  // createModalParametrosAreas$ = createEffect(() => this.actions$.pipe(
  //   ofType(createModalParametrosAreas),
  //   concatMap(({edit}) => this.openModal(edit).pipe(
  //     map((areas: Areas) =>  createModalParametrosAreasSuccess({edit: areas})),
  //     catchError(error => of(createModalParametrosAreasFailure({edit, error})))
  //   ))));
  //
  // createModalParametrosAreasSuccess$ = createEffect(() => this.actions$.pipe(
  //   ofType(createModalParametrosAreasSuccess),
  //   switchMap(async ({edit}) =>
  //     await this.apiService.areasService.post(edit)
  //       .then((r: ResponseArea) => postModalParametrosAreasSuccess({edit: r.data, apiResponse: r }))
  //       .catch(error => postModalParametrosAreasFailure({edit, error}))
  //   )));


  constructor(
    private store: Store,
    private toastService: ToastService,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  // openModal(area: Areas): Observable<Areas>{
  //   return from(this._openModal(area));
  // }
  //
  // async _openModal(area: Areas): Promise<Areas> {
  //   try {// refModal = referencias que estan en el modal
  //     const refModal = this.ngbModal.open(FormModalComponent, { size: 'lg'});
  //     refModal.componentInstance.area = area;
  //
  //     return refModal.result;
  //   }catch (e) {
  //     throw(e);
  //   }
  // }

  toast(apiResponse: ApiResponse) {
    if(apiResponse.valido){
      this.toastService.success(null, apiResponse.message);
    }
    if(!apiResponse.valido){
      this.toastService.danger(null, apiResponse.message);
    }
  }
}
