import { Component, OnInit } from '@angular/core';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {
  getAllByPozoImpresionSeudopozos,
  initImpresionSeudopozos,
  pdfImpresionSeudopozos
} from './state/impresion-seudopozos.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {
  selectSeudopozoInfoImpresionSeudopozos
} from './state/impresion-seudopozos.selectors';
import {Observable} from 'rxjs';
import {SeudopozoInfo} from '../../../data/models/seudopozos';

@Component({
  selector: 'app-impresion-seudopozos',
  templateUrl: './impresion-seudopozos.component.html',
  styleUrls: ['./impresion-seudopozos.component.scss']
})
export class ImpresionSeudopozosComponent implements OnInit {
  pozo: string = '';
  seudopozoInfo$: Observable<SeudopozoInfo> = new Observable();

  constructor(private store: Store<AppState>
  ) { }

  async ngOnInit() {
    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(initImpresionSeudopozos());// init
    this.store.dispatch(getAllByPozoImpresionSeudopozos({codPozo: this.pozo}));

    this.seudopozoInfo$ = this.store.select(selectSeudopozoInfoImpresionSeudopozos);
  }

  onImpresionSeudopozos() {
    this.store.dispatch(pdfImpresionSeudopozos({codPozo: this.pozo}));// init

  }

}
