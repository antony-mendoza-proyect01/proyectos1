import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {
  createModalCalibracionSondaRuedaContadora
} from './state/calibracion-sonda-rueda-contadora.actions';
import {CalibracionSondaCabezaCable} from '../../../data/models/calibracion-sonda-cabeza-cable';
import {CalibracionSondaRuedaContadora} from "../../../data/models/calibracion-sonda-rueda-contadora";

@Component({
  selector: 'app-calibracion-sonda-cabeza-cable',
  templateUrl: './calibracion-sonda-rueda-contadora.component.html',
  styleUrls: ['./calibracion-sonda-rueda-contadora.component.scss']
})
export class CalibracionSondaRuedaContadoraComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
  }

  onCreate() {
    this.store.dispatch(createModalCalibracionSondaRuedaContadora({edit: new CalibracionSondaRuedaContadora()}));
  }
}
