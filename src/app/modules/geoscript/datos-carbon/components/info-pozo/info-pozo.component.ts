import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import { ReglaLength} from '../../../../../data/models/descripcion-nucleos';
import {DatosCarbon} from '../../../../../data/models/datos-carbon';
import {
  selectIntervalosDatosCarbon, selectIntevalosEditDatosCarbon,
  selectLoadingDatosCarbon, selectNucleosDatosCarbon, selectProfundidadRegistroDatosCarbon,
  selectReglaLengthDatosCarbon, selectRipiosDatosCarbon, selectSuperficiesDatosCarbon
} from '../../state/datos-carbon.selectors';
import {NucleosDatosCarbones} from '../../../../../data/models/grafica-datos-carbones';
import {datosCarbonEditDatosCarbon, pasarDatosCarbon} from '../../state/datos-carbon.actions';
import {ID_CARBON, ID_LONGUITUD, scrollIntoView} from '../../../../../shared/services/emit.service';
import {Superficies} from '../../../../../data/models/superficie';

@Component({
  selector: 'app-info-pozo',
  templateUrl: './info-pozo.component.html',
  styleUrls: ['./info-pozo.component.scss']
})
export class InfoPozoComponent implements OnInit {
  @Input()profundidadRegistro$: Observable<number> = new Observable();
  ripios$: Observable<NucleosDatosCarbones[]> = new Observable();
  descripcionNucleos$: Observable<NucleosDatosCarbones[]> = new Observable();
  intervalos$: Observable<DatosCarbon[]> = new Observable();
  superficies$: Observable<Superficies[]> = new Observable();
  reglaLength$: Observable<ReglaLength[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  datosCarbonEdit$: DatosCarbon = new DatosCarbon();

  ID_CARBON = ID_CARBON;
  ID_LONGUITUD = ID_LONGUITUD;


  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.descripcionNucleos$ = this.store.select(selectNucleosDatosCarbon);
    this.intervalos$ = this.store.select(selectIntervalosDatosCarbon);
    this.superficies$ = this.store.select(selectSuperficiesDatosCarbon);
    this.reglaLength$ = this.store.select(selectReglaLengthDatosCarbon);
    this.loading$ = this.store.select(selectLoadingDatosCarbon);
    this.ripios$ = this.store.select(selectRipiosDatosCarbon);
    // acciones edit
    this.store.select(selectIntevalosEditDatosCarbon).subscribe(x => {
      this.datosCarbonEdit$ = x;
      if(x) {
        scrollIntoView(String(this.ID_CARBON + x.nombre));
      }
    });
  }

  select(datosCarbonEdit: DatosCarbon) {
    this.store.dispatch(datosCarbonEditDatosCarbon({datosCarbonEdit}));
  }

  previousAllPosicion() {
    this.posicion(1);
  }

  previousPosicion() {
    this.posicion(this.datosCarbonEdit$.posicion - 1);
  }

  nextPosicion() {
    this.posicion(this.datosCarbonEdit$.posicion + 1);
  }

  nextAllPosicion(ultimaPosicion) {
    this.posicion(ultimaPosicion);
  }

  posicion(posicion: number) {
    this.store.dispatch(pasarDatosCarbon({posicion}));
  }
}
