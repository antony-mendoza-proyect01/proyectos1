import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse } from 'src/app/data/models/api-response';
import { ToastService } from 'src/app/shared/services/toast.service';
import {
  getAllByPozoGraficaDatosPozo,
  getAllByPozoGraficaDatosPozoFailure,
  getAllByPozoGraficaDatosPozoSuccess,
  putGraficaDatosPozo, putGraficaDatosPozoFailure, putGraficaDatosPozoSuccess,
} from "./datos-pozo.actions";
import { ApiService } from 'src/app/data/services/api.service';
import {ResponseDatosDelPozo} from '../../../../data/models/result-datos-pozo';



@Injectable()
export class DatosPozoEffects {
  getAllByPozoGraficaDatosPozo$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoGraficaDatosPozo),
    switchMap(async ({codPozo}) =>
      await this.apiService.datosPozoService.getByPozo(codPozo)
        .then((r: ResponseDatosDelPozo) =>
          getAllByPozoGraficaDatosPozoSuccess({datosPozo: r.data}))
        .catch(error => getAllByPozoGraficaDatosPozoFailure({error}))
    )));


  putGraficaDatosPozo$ = createEffect(() => this.actions$.pipe(
    ofType(putGraficaDatosPozo),
    switchMap(async ({edit, codPozo}) =>
      await this.apiService.datosPozoService.put(edit)
        .then((r: any) =>
          putGraficaDatosPozoSuccess({datosPozo: r.data}))
        .catch(error => putGraficaDatosPozoFailure({error}))
    )));





  // manejo de los toast
  toastApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllByPozoGraficaDatosPozo,
      ),
      tap(action => {
        // this.toast(new ApiResponse('', 'mensaje'));
        // this.toast(new ApiResponse('', 'mensaje'));

      })),{ dispatch: false });

  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getAllByPozoGraficaDatosPozoFailure,
        // postModalGraficaDatosPozoFailure,
        // putGraficaDatosPozoFailure,
        // deleteGraficaDatosPozoFailure,
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


  toast(apiResponse: ApiResponse) {
    if(apiResponse.valido){
      this.toastService.success(null, apiResponse.message);
    }
    if(!apiResponse.valido){
      this.toastService.danger(null, apiResponse.message);
    }
  }
}
