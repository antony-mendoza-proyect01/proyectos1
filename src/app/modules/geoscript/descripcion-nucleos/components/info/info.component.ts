import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  selectFinalPozoDescripcionNucleos,
  selectIntervalosDescripcionNucleos,
  selectLoadingDescripcionNucleos, selectNucleoEditDescripcionNucleos, selectNucleosDescripcionNucleos,
  selectReglaLengthDescripcionNucleos, selectSuperficiesDescripcionNucleos,
} from '../../state/descripcion-nucleos.selectors';
import {
  descripcionNucleosEditDescripcionNucleos, pasarDescripcionNucleos,
} from '../../state/descripcion-nucleos.actions';
import {AppState} from '../../../../../app.state';
import {DescripcionNucleos, ReglaLength} from '../../../../../data/models/descripcion-nucleos';
import {
  URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__SEDIMENTARIAS,
  URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__TECTONICA
} from '../../../../../core/const/navigation.const';
import {IntervalosDescripcionNucleos} from '../../../../../data/models/grafica-descripcion-nucleos';
import {ID_LONGUITUD, ID_NUCLEOS} from '../../../../../shared/services/emit.service';
import {Superficies} from '../../../../../data/models/superficie';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  descripcionNucleos$: Observable<DescripcionNucleos[]> = new Observable();
  intervalos$: Observable<IntervalosDescripcionNucleos[]> = new Observable();
  superficies$: Observable<Superficies[]> = new Observable();
  reglaLength$: Observable<ReglaLength[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  descripcionNucleosEdit$: DescripcionNucleos = new DescripcionNucleos();
  finalNucleos$: Observable<number> = new Observable();

  urlCaracteristicasTectonicas = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__TECTONICA;
  urlCaracteristicasSedimentaria = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__SEDIMENTARIAS;

  ID_NUCLEOS = ID_NUCLEOS;
  ID_LONGUITUD = ID_LONGUITUD;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.descripcionNucleos$ = this.store.select(selectNucleosDescripcionNucleos);
    this.intervalos$ = this.store.select(selectIntervalosDescripcionNucleos);
    this.superficies$ = this.store.select(selectSuperficiesDescripcionNucleos);
    this.reglaLength$ = this.store.select(selectReglaLengthDescripcionNucleos);
    this.loading$ = this.store.select(selectLoadingDescripcionNucleos);
    this.finalNucleos$ = this.store.select(selectFinalPozoDescripcionNucleos);
    // acciones edit

    document.getElementById('grafica-container').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end"
    });

    this.store.select(selectNucleoEditDescripcionNucleos).subscribe(x => {this.descripcionNucleosEdit$ = x;});
  }

  selectDescripcion(descripcionNucleosEdit: DescripcionNucleos) {
    this.store.dispatch(descripcionNucleosEditDescripcionNucleos({descripcionNucleosEdit}));
  }

  previousAllPosicion() {
    this.posicion(1);
  }

  previousPosicion() {
    this.posicion(this.descripcionNucleosEdit$.posicion - 1);
  }

  nextPosicion() {
    this.posicion(this.descripcionNucleosEdit$.posicion + 1);
  }

  nextAllPosicion(ultimaPosicion) {
    this.posicion(ultimaPosicion);
  }

  posicion(posicion: number) {
    this.store.dispatch(pasarDescripcionNucleos({posicion}));
  }
}
