import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import {
  getAllByPozoDescripcionNucleos, getAllByPozoDescripcionNucleosFailure, getAllByPozoDescripcionNucleosSuccess
} from './descripcion-nucleos.actions';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../../../data/services/api.service';
import {ResponseGraficaDescripcionNucleo} from '../../../../data/models/grafica-descripcion-nucleos';

@Injectable()
export class DescripcionNucleosEffects {
  getAllByPozoDescripcionNucleos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllByPozoDescripcionNucleos),
    switchMap(async ({codPozo}) =>
      await this.apiService.graficasService.getAllByPozoDescripcionNucleos(codPozo)
        .then((r: ResponseGraficaDescripcionNucleo) => getAllByPozoDescripcionNucleosSuccess({grafica: r.data}))
        .catch(error => getAllByPozoDescripcionNucleosFailure({error}))
    )));


  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}


}
