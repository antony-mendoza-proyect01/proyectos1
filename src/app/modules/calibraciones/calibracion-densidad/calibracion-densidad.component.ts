import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {createModalCalibracionDensidad} from "./state/calibracion-densidad.actions";
import { CalibracionDensidad } from 'src/app/data/models/calibracion-densidad';

@Component({
  selector: 'app-calibracion-densidad',
  templateUrl: './calibracion-densidad.component.html',
  styleUrls: ['./calibracion-densidad.component.scss']
})
export class CalibracionDensidadComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
  }

  onCreate() {
    this.store.dispatch(createModalCalibracionDensidad({edit: new CalibracionDensidad()}));
  }
}
