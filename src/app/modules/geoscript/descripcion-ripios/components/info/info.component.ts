import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  selectLoadingDescripcionRipios,
  selectNucleoEditDescripcionRipios,  selectReglaLengthDescripcionRipios,
  selectRipiosDescripcionRipios, selectSuperficiesDescripcionRipios,
} from '../../state/descripcion-ripios.selectors';
import {
  descripcionRipiosEditDescripcionRipios,
  pasarDescripcionRipios,
} from '../../state/descripcion-ripios.actions';
import {AppState} from '../../../../../app.state';
import {ReglaLength} from '../../../../../data/models/descripcion-nucleos';
import {ID_LONGUITUD, ID_RIPIOS} from '../../../../../shared/services/emit.service';
import {Superficies} from '../../../../../data/models/superficie';
import {DescripcionRipios} from '../../../../../data/models/descripcion-ripios';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() profundidadRegistro$: Observable<number> = new Observable();
  descripcionRipios$: Observable<DescripcionRipios[]> = new Observable();
  superficies$: Observable<Superficies[]> = new Observable();
  reglaLength$: Observable<ReglaLength[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  descripcionRipiosEdit$: DescripcionRipios = new DescripcionRipios();


  ID_RIPIOS = ID_RIPIOS;
  ID_LONGUITUD = ID_LONGUITUD;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.descripcionRipios$ = this.store.select(selectRipiosDescripcionRipios);
    this.superficies$ = this.store.select(selectSuperficiesDescripcionRipios);
    this.reglaLength$ = this.store.select(selectReglaLengthDescripcionRipios);
    this.loading$ = this.store.select(selectLoadingDescripcionRipios);
    // acciones edit

    document.getElementById('grafica-container').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end"
    });

    this.store.select(selectNucleoEditDescripcionRipios).subscribe(x => {this.descripcionRipiosEdit$ = x;});
  }

  selectDescripcion(descripcionRipiosEdit: DescripcionRipios) {
    this.store.dispatch(descripcionRipiosEditDescripcionRipios({descripcionRipiosEdit}));
  }

  previousAllPosicion() {
    this.posicion(1);
  }

  previousPosicion() {
    this.posicion(this.descripcionRipiosEdit$.posicion - 1);
  }

  nextPosicion() {
    this.posicion(this.descripcionRipiosEdit$.posicion + 1);
  }

  nextAllPosicion(ultimaPosicion) {
    this.posicion(ultimaPosicion);
  }

  posicion(posicion: number) {
    this.store.dispatch(pasarDescripcionRipios({posicion}));
  }
}
