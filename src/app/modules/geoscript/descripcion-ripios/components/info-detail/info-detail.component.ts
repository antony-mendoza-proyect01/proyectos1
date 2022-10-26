import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {DescripcionRipios} from '../../../../../data/models/descripcion-ripios';
import {
  selectLoadingDescripcionRipios,
  selectNucleoEditDescripcionRipios
} from '../../state/descripcion-ripios.selectors';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  descripcionRipiosEdit$: Observable<DescripcionRipios> = new Observable();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.descripcionRipiosEdit$ = this.store.select(selectNucleoEditDescripcionRipios);
    this.loading$ = this.store.select(selectLoadingDescripcionRipios);
  }

}
