import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {
  CalibracionSondaSusceptibilidadMagnetica
} from "../../../data/models/calibracion-sonda-susceptibilidad-magnetica";
import {
  createModalCalibracionSondaSusceptibilidadMagnetica
} from "./state/calibracion-suceptibilidad-magnetica.actions";

@Component({
  selector: 'app-calibracion-sonda-cabeza-cable',
  templateUrl: './calibracion-suceptibilidad-magnetica.component.html',
  styleUrls: ['./calibracion-suceptibilidad-magnetica.component.scss']
})
export class CalibracionSuceptibilidadMagneticaComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
  }

  onCreate() {
    this.store.dispatch(createModalCalibracionSondaSusceptibilidadMagnetica({edit: new CalibracionSondaSusceptibilidadMagnetica()}));
  }
}
