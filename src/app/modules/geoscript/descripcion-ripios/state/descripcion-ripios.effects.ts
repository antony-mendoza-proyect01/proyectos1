import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../../../data/services/api.service';
import {
  getAllByPozoDescripcionRipios,
  getAllByPozoDescripcionRipiosFailure,
  getAllByPozoDescripcionRipiosSuccess
} from './descripcion-ripios.actions';
import {ResponseGraficaDescipcionRipio} from '../../../../data/models/grafica-descripcion-ripios';

@Injectable()
export class DescripcionRipiosEffects {
  getAllByPozoDescripcionRipios$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoDescripcionRipios),
    switchMap(async ({codPozo}) =>
      await this.apiService.graficasService.getAllByPozoDescripcionRipios(codPozo)
        .then((r: ResponseGraficaDescipcionRipio) => getAllByPozoDescripcionRipiosSuccess({grafica: r.data}))
        .catch(error => getAllByPozoDescripcionRipiosFailure({error}))
    )));


  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}


}
