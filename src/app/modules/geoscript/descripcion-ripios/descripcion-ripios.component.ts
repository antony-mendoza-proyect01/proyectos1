import {
  Component,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  getAllByPozoDescripcionRipios, initDescripcionRipios
} from './state/descripcion-ripios.actions';
import {AppState} from '../../../app.state';
import {
  URL_GEOSCRIPT_DESCRIPCION_NUCLEOS
} from '../../../core/const/navigation.const';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {
  selectProfundidadRegistroDescripcionRipios
} from './state/descripcion-ripios.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-descripcion-nucleos',
  templateUrl: './descripcion-ripios.component.html',
  styleUrls: ['./descripcion-ripios.component.scss']
})
export class DescripcionRipiosComponent implements OnInit {
  pozo: string = '';
  profundidadRegistro$: Observable<number> = new Observable();
  urlDescripcionNucleos = URL_GEOSCRIPT_DESCRIPCION_NUCLEOS;

  constructor(
    private store: Store<AppState>
  ) {
  }

  async ngOnInit() {
    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(initDescripcionRipios());// init
    this.onLoadData();
    this.profundidadRegistro$ = this.store.select(selectProfundidadRegistroDescripcionRipios);
  }

  onLoadData() {
    this.store.dispatch(getAllByPozoDescripcionRipios({codPozo: this.pozo }));// mandar a llamar la data
  }

}
