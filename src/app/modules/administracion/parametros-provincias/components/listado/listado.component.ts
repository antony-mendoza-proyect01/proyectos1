import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionProvincias,
  selectActionProvinciasEdit,
  selectListProvincias, selectListProvinciasFiltro,
  selectLoadingProvincias
} from '../../state/parametros-provincias.selectors';
import {Provincias} from '../../../../../data/models/provincias';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosProvincias, sortParametrosProvincias} from '../../state/parametros-provincias.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Provincias>();
  @Output() delete = new EventEmitter<Provincias>();
  provincias$: Observable<Provincias[]> = new Observable();
  provinciasAux$: Observable<Provincias[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  provinciaEdit$: Provincias = new Provincias();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.provincias$ = this.store.select(selectListProvincias);// listado de la tabla
    this.provinciasAux$ = this.store.select(selectListProvinciasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingProvincias);// cargue true o false
    this.action$ = this.store.select(selectActionProvincias);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionProvinciasEdit).subscribe(x => {this.provinciaEdit$ = x;});
  }

  _edit(Provincias: Provincias) {
    this.edit.emit(Provincias);
  }

  _delete(Provincias: Provincias) {
    this.delete.emit(Provincias);
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
      // this.Provincias$ = this.ProvinciasAux$;
    } else {
      this.store.dispatch(sortParametrosProvincias({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosProvincias({paginator}));
  }
}
