import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {
  selectLoadingDescripcionNucleos, selectNucleoEditDescripcionNucleos
} from '../../state/descripcion-nucleos.selectors';
import {Store} from '@ngrx/store';
import {DescripcionNucleos} from '../../../../../data/models/descripcion-nucleos';
import {URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__LITOFACE} from '../../../../../core/const/navigation.const';
import {AppState} from '../../../../../app.state';

@Component({
  selector: 'app-info-detail-superficie',
  templateUrl: './info-detail-superficie.component.html',
  styleUrls: ['./info-detail-superficie.component.scss']
})
export class InfoDetailSuperficieComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  descripcionNucleosEdit$: Observable<DescripcionNucleos> = new Observable();
  urlDescripcionLitoface = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__LITOFACE;


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.descripcionNucleosEdit$ = this.store.select(selectNucleoEditDescripcionNucleos);
    this.loading$ = this.store.select(selectLoadingDescripcionNucleos);
  }

}
