import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionCaudales,
  selectActionCaudalesEdit,
  selectListCaudales, selectListCaudalesFiltro,
  selectLoadingCaudales
} from '../../state/parametros-caudales.selectors';
import {Caudales} from '../../../../../data/models/caudales';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosCaudales, sortParametrosCaudales} from '../../state/parametros-caudales.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Caudales>();
  @Output() delete = new EventEmitter<Caudales>();
  caudales$: Observable<Caudales[]> = new Observable();
  caudalesAux$: Observable<Caudales[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  caudalEdit$: Caudales = new Caudales();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.caudales$ = this.store.select(selectListCaudales);// listado de la tabla
    this.caudalesAux$ = this.store.select(selectListCaudalesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingCaudales);// cargue true o false
    this.action$ = this.store.select(selectActionCaudales);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionCaudalesEdit).subscribe(x => {this.caudalEdit$ = x;});
  }

  _edit(Caudales: Caudales) {
    this.edit.emit(Caudales);
  }

  _delete(Caudales: Caudales) {
    this.delete.emit(Caudales);
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
      this.store.dispatch(sortParametrosCaudales({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosCaudales({paginator}));
  }
}
