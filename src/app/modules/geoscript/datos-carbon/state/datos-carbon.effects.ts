import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, switchMap, tap} from 'rxjs/operators';
import {
  getAllByPozoDatosCarbon,
  getAllByPozoDatosCarbonFailure,
  getAllByPozoDatosCarbonSuccess,
  getAllByPozoValidacionTipoPozoDatosCarbon,
} from './datos-carbon.actions';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../../../data/services/api.service';
import {ResponseGraficaDatosCarbone} from '../../../../data/models/grafica-datos-carbones';
import {LOCAL_STORAGE} from '../../../../core/const/localStorage.const';
import {TIPO_PERFORACION__ABIERTO, TIPO_PERFORACION__CORAZONADOS} from '../../../../core/const/verificacion.const';


@Injectable()
export class DatosCarbonEffects {
  toastApis$ = createEffect(() => this.actions$.pipe(
      ofType(getAllByPozoValidacionTipoPozoDatosCarbon),
      tap(x => {
        this.validacionTipoPozo(x.codPozo);
      })),{ dispatch: false });

  getAllByPozoDatosCarbon$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoDatosCarbon),
    switchMap(async ({codPozo, tipoPozo}) =>
      await this.apiService.graficasService.getAllByPozoDatosCarbones(codPozo, tipoPozo)
        .then((r: ResponseGraficaDatosCarbone) => getAllByPozoDatosCarbonSuccess({grafica: r.data}))
        .catch(error => getAllByPozoDatosCarbonFailure({error}))
    )));



  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  validacionTipoPozo(codPozo: string ) {
    const codTipoPerforacion = localStorage.getItem(LOCAL_STORAGE.codTipoPerforacion);

    if(!codTipoPerforacion) {
      this.store.dispatch(getAllByPozoDatosCarbon({codPozo, tipoPozo: 'mixto'}));
    }
    if(TIPO_PERFORACION__ABIERTO.find(item => item === codTipoPerforacion)) {
      this.store.dispatch(getAllByPozoDatosCarbon({codPozo, tipoPozo: 'abiertos'}));
    }
    if(TIPO_PERFORACION__CORAZONADOS.find(item => item === codTipoPerforacion)) {
      this.store.dispatch(getAllByPozoDatosCarbon({codPozo, tipoPozo: 'corazonados'}));
    }
  }

}
