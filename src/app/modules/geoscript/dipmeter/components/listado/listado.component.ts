import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionDipmeter,
  selectActionDipmeterEdit,
  selectListDipmeter, selectListDipmeterFiltro,
  selectLoadingDipmeter
} from '../../state/dipmeter.selectors';
import {Dipmeter} from '../../../../../data/models/dipmeter';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorDipmeter, sortDipmeter} from '../../state/dipmeter.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Dipmeter>();
  @Output() delete = new EventEmitter<Dipmeter>();
  dipmeters$: Observable<Dipmeter[]> = new Observable();
  dipmetersAux$: Observable<Dipmeter[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  dipmeterEdit$: Dipmeter = new Dipmeter();



  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {

    this.dipmeters$ = this.store.select(selectListDipmeter);// listado de la tabla
    this.dipmetersAux$ = this.store.select(selectListDipmeterFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingDipmeter);// cargue true o false
    this.action$ = this.store.select(selectActionDipmeter);// acciones true o false

    // acciones edit personal
    this.store.select(selectActionDipmeterEdit).subscribe(x => {this.dipmeterEdit$ = x;});
  }

  _edit(Dipmeter: Dipmeter) {
    this.edit.emit(Dipmeter);
  }

  _delete(Dipmeter: Dipmeter) {
    this.delete.emit(Dipmeter);
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
      // this.Dipmeter$ = this.DipmeterAux$;
    } else {
      this.store.dispatch(sortDipmeter({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorDipmeter({paginator}));
  }
}
