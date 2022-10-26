import {
  Component,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  getAllByPozoDescripcionNucleos,
  initDescripcionNucleos
} from './state/descripcion-nucleos.actions';
import {AppState} from '../../../app.state';
import {
  URL_GEOSCRIPT_DESCRIPCION_NUCLEOS
} from '../../../core/const/navigation.const';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {
  selectProfundidadRegistroDescripcionNucleos
} from './state/descripcion-nucleos.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-descripcion-nucleos',
  templateUrl: './descripcion-nucleos.component.html',
  styleUrls: ['./descripcion-nucleos.component.scss']
})
export class DescripcionNucleosComponent implements OnInit {
  pozo: string = '';
  profundidadRegistro$: Observable<number> = new Observable();
  urlDescripcionNucleos = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS;

  constructor(
    private store: Store<AppState>
  ) {
  }

  async ngOnInit() {
    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(initDescripcionNucleos());// init
    this.onLoadData();
    this.profundidadRegistro$ = this.store.select(selectProfundidadRegistroDescripcionNucleos);
  }

  onLoadData() {
    this.store.dispatch(getAllByPozoDescripcionNucleos({codPozo: this.pozo }));// mandar a llamar la data
  }

}
