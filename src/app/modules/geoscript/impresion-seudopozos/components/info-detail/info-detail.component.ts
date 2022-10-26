import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {
  selectLoadingImpresionSeudopozos,
  selectSeudopozoEditImpresionSeudopozos
} from '../../state/impresion-seudopozos.selectors';
import {Seudopozo} from '../../../../../data/models/seudopozos';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  seudopozoInfoEdit$: Observable<Seudopozo> = new Observable();


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.seudopozoInfoEdit$ = this.store.select(selectSeudopozoEditImpresionSeudopozos);
    this.loading$ = this.store.select(selectLoadingImpresionSeudopozos);
  }

}
