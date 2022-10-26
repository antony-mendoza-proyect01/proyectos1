import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {CalibracionSondaCabezaCable} from '../../../data/models/calibracion-sonda-cabeza-cable';
import {createModalCalibracionDatosPozoRegistrado} from "./state/calibracion-datos-pozo-registrado.actions";
import {CalibracionDatosPozoRegistrado} from "../../../data/models/calibracion-datos-pozo-registrado";

@Component({
  selector: 'app-calibracion-sonda-cabeza-cable',
  templateUrl: './calibracion-datos-pozo-registrado.component.html',
  styleUrls: ['./calibracion-datos-pozo-registrado.component.scss']
})
export class CalibracionDatosPozoRegistradoComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
  }

  onCreate() {
    this.store.dispatch(createModalCalibracionDatosPozoRegistrado({edit: new CalibracionDatosPozoRegistrado()}));
  }
}
