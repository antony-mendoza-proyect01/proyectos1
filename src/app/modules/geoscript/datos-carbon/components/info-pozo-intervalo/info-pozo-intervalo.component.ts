import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {selectIntevalosEditDatosCarbon, selectLoadingDatosCarbon} from '../../state/datos-carbon.selectors';
import {DatosCarbon} from '../../../../../data/models/datos-carbon';

@Component({
  selector: 'app-info-pozo-intervalo',
  templateUrl: './info-pozo-intervalo.component.html',
  styleUrls: ['./info-pozo-intervalo.component.scss']
})
export class InfoDetailSuperficieComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  datosCarbonEdit$: Observable<DatosCarbon> = new Observable();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.datosCarbonEdit$ = this.store.select(selectIntevalosEditDatosCarbon);
    this.loading$ = this.store.select(selectLoadingDatosCarbon);
  }

}
