import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionNombresIntervalos,
  selectActionNombresIntervalosEdit,
  selectListNombresIntervalos,
  selectListNombresIntervalosFiltro, selectListNombresIntervalosPageSize,
  selectListNombresIntervalosPaginatorSize,
  selectLoadingNombresIntervalos
} from '../../state/parametros-nombres-intervalos.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {
  getAllPaginadoParametrosNombresIntervalos,
  sortParametrosNombresIntervalos
} from '../../state/parametros-nombres-intervalos.actions';
import {NombresIntervalos} from '../../../../../data/models/nombres-intervalos';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<NombresIntervalos>();
  @Output() delete = new EventEmitter<NombresIntervalos>();
  nombresIntervalos$: Observable<NombresIntervalos[]> = new Observable();
  nombresIntervalosAux$: Observable<NombresIntervalos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  nombresIntervalosEdit$: NombresIntervalos = new NombresIntervalos();
  // paginado
  page$: Observable<number> = new Observable();
  paginatorSize$: Observable<number> = new Observable();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.nombresIntervalos$ = this.store.select(selectListNombresIntervalos);// listado de la tabla
    this.nombresIntervalosAux$ = this.store.select(selectListNombresIntervalosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingNombresIntervalos);// cargue true o false
    this.action$ = this.store.select(selectActionNombresIntervalos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionNombresIntervalosEdit).subscribe(x => {this.nombresIntervalosEdit$ = x;});
    //paginado
    this.page$ = this.store.select(selectListNombresIntervalosPageSize);
    this.paginatorSize$ = this.store.select(selectListNombresIntervalosPaginatorSize);

  }

  _edit(NombresIntervalos: NombresIntervalos) {
    this.edit.emit(NombresIntervalos);
  }

  _delete(NombresIntervalos: NombresIntervalos) {
    this.delete.emit(NombresIntervalos);
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      // this.NombresIntervalos$ = this.NombresIntervalosAux$;
    } else {
      this.store.dispatch(sortParametrosNombresIntervalos({column, direction}));
    }
  }

  onEmitPage(page) {
    this.store.dispatch(getAllPaginadoParametrosNombresIntervalos({page}));
  }
}
