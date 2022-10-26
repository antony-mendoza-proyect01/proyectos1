import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionAreas,
  selectActionAreasEdit,
  selectListAreas, selectListAreasFiltro,
  selectLoadinParametrosAreas
} from '../../state/parametros-areas.selectors';
import {Areas} from '../../../../../data/models/areas';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosAreas, sortParametrosAreas} from '../../state/parametros-areas.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Areas>();
  @Output() delete = new EventEmitter<Areas>();
  areas$: Observable<Areas[]> = new Observable();
  areasAux$: Observable<Areas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  areaEdit$: Areas = new Areas();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.areas$ = this.store.select(selectListAreas);// listado de la tabla
    this.areasAux$ = this.store.select(selectListAreasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinParametrosAreas);// cargue true o false
    this.action$ = this.store.select(selectActionAreas);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionAreasEdit).subscribe(x => {this.areaEdit$ = x;});
  }

  _edit(Areas: Areas) {
    this.edit.emit(Areas);
  }

  _delete(Areas: Areas) {
    this.delete.emit(Areas);
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
      // this.areas$ = this.areasAux$;
    } else {
      this.store.dispatch(sortParametrosAreas({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosAreas({paginator}));
  }
}
