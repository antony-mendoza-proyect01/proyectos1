import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionGraficaDatosPozo, selectListDatosPozoDatosPozo,
  selectLoadingGraficaDatosPozo
} from '../../state/datos-pozo.selectors';
import {NgbdSortableHeader} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {LOCAL_STORAGE} from "../../../../../core/const/localStorage.const";
import {ResultDatosPozo, TiposRegistro} from "../../../../../data/models/result-datos-pozo";
@Component({
  selector: 'app-listado-tipo-registro',
  templateUrl: './listado-tipo-registro.component.html',
  styleUrls: ['listado-tipo-registro.component.scss']
})
export class ListadoTipoRegistroComponent implements OnInit {
  @Output() edit = new EventEmitter<ResultDatosPozo>();
  @Output() delete = new EventEmitter<ResultDatosPozo>();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  graficaDatosPozoEdit$: ResultDatosPozo = new ResultDatosPozo();
  tipoPozo$: string = '';
  pozo: string = '';

  datosPozos$: Observable<ResultDatosPozo> = new Observable()



  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {


    this.datosPozos$ = this.store.select(selectListDatosPozoDatosPozo);

    this.action$ = this.store.select(selectActionGraficaDatosPozo);// acciones true o false
    // this.tiposDePozo = this.store.select(selectListGraficosDatosPozo);// acciones true o false


    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
  }


  // onCreate() {
  //   this.store.dispatch(createModalGraficaDatosPozo(
  //     {edit: new GraficaDatosPozo(null, this.tipoPozo$ )}));
  //   this.paginatorService.initial();
  // }

  // _edit(edit: GraficaDatosPozo) {
  //   this.store.dispatch(editModalGraficaDatosPozo({edit, codPozo: this.pozo}));
  // }

}
