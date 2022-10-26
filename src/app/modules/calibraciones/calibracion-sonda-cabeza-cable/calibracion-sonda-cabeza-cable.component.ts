import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {createModalCalibracionSondaCabezaCable} from './state/calibracion-sonda-cabeza-cable.actions';
import {CalibracionSondaCabezaCable} from '../../../data/models/calibracion-sonda-cabeza-cable';

@Component({
  selector: 'app-calibracion-sonda-cabeza-cable',
  templateUrl: './calibracion-sonda-cabeza-cable.component.html',
  styleUrls: ['./calibracion-sonda-cabeza-cable.component.scss']
})
export class CalibracionSondaCabezaCableComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
  }

  onCreate() {
    this.store.dispatch(createModalCalibracionSondaCabezaCable({edit: new CalibracionSondaCabezaCable()}));
  }
}
