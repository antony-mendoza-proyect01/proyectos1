import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../../../data/services/api.service';
import {
  getAllByPozoImpresionSeudopozos,
  getAllByPozoImpresionSeudopozosFailure,
  getAllByPozoImpresionSeudopozosSuccess
} from './impresion-seudopozos.actions';
import {SeudoPozoResponse} from '../../../../data/models/seudopozos';

@Injectable()
export class ImpresionSeudopozosEffects {
  getAllByPozoImpresionSeudopozos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoImpresionSeudopozos),
    switchMap(async ({codPozo}) =>
      await this.apiService.seudopozosService.getAllByPozo(codPozo)
        .then((r: SeudoPozoResponse) =>
          getAllByPozoImpresionSeudopozosSuccess({grafica: r.data}))
        .catch(error => getAllByPozoImpresionSeudopozosFailure({error}))
    )));


  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}


}
