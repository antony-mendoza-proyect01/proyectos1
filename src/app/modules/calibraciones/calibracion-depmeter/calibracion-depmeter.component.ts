import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { CalibracionDipmeter } from 'src/app/data/models/calibraciom-dipmeter';
import {AppState} from '../../../app.state';
import {CalibracionSondaCabezaCable} from '../../../data/models/calibracion-sonda-cabeza-cable';
import {createModalCalibracionDipmeter} from "./state/calibracion-depmeter.actions";

@Component({
  selector: 'app-calibracion-sonda-cabeza-cable',
  templateUrl: './calibracion-depmeter.component.html',
  styleUrls: ['./calibracion-depmeter.component.scss']
})
export class CalibracionDepmeterComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
  }

  onCreate() {
    this.store.dispatch(createModalCalibracionDipmeter({edit: new CalibracionDipmeter()}));
  }
}
