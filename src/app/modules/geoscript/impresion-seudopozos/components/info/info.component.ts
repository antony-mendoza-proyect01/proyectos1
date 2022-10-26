import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {ReglaLength} from '../../../../../data/models/descripcion-nucleos';
import {ID_GRAFICA, ID_SEUDOPOZO, ID_SEUDOPOZO_LONGUITUD} from '../../../../../shared/services/emit.service';
import {Seudopozo} from '../../../../../data/models/seudopozos';
import {
  selectFinalSeudopozoImpresionSeudopozos,
  selectLoadingImpresionSeudopozos,
  selectReglaLengthImpresionSeudopozos, selectSeudopozoEditImpresionSeudopozos,
  selectSeudopozoListImpresionSeudopozos
} from '../../state/impresion-seudopozos.selectors';
import {
  pasarImpresionSeudopozos,
  seudopozosEditImpresionSeudopozos
} from '../../state/impresion-seudopozos.actions';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  seudopozoList$: Observable<Seudopozo[]> = new Observable();
  reglaLength$: Observable<ReglaLength[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  seudopozoEdit$: Seudopozo = new Seudopozo();
  finalNucleos$: Observable<number> = new Observable();

  ID_GRAFICA = ID_GRAFICA;
  ID_SEUDOPOZO = ID_SEUDOPOZO;
  ID_SEUDOPOZO_LONGUITUD = ID_SEUDOPOZO_LONGUITUD;


  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.seudopozoList$ = this.store.select(selectSeudopozoListImpresionSeudopozos);
    this.reglaLength$ = this.store.select(selectReglaLengthImpresionSeudopozos);
    this.loading$ = this.store.select(selectLoadingImpresionSeudopozos);
    this.finalNucleos$ = this.store.select(selectFinalSeudopozoImpresionSeudopozos);
    // // acciones edit

    let id = document.getElementById(ID_GRAFICA);
    if (id) {
      id.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end"
      });
    }


    this.store.select(selectSeudopozoEditImpresionSeudopozos).subscribe(x => {this.seudopozoEdit$ = x;});

  }

  select(seudopozoEdit: Seudopozo) {
    this.store.dispatch(seudopozosEditImpresionSeudopozos({seudopozoEdit}));
  }

  previousAllPosicion() {
    this.posicion(1);
  }

  previousPosicion() {
    this.posicion(this.seudopozoEdit$.posicion - 1);
  }

  nextPosicion() {
    this.posicion(this.seudopozoEdit$.posicion + 1);
  }

  nextAllPosicion(ultimaPosicion) {
    this.posicion(ultimaPosicion);
  }

  posicion(posicion: number) {
    this.store.dispatch(pasarImpresionSeudopozos({posicion}));
  }
}
