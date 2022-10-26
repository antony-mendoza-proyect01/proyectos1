import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionProgramas,
  selectActionProgramasEdit,
  selectListProgramas, selectListProgramasFiltro,
  selectLoadingProgramas
} from '../../state/parametros-programas.selectors';
import {Programas} from '../../../../../data/models/programas';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosProgramas, sortParametrosProgramas} from '../../state/parametros-programas.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Programas>();
  @Output() delete = new EventEmitter<Programas>();
  programas$: Observable<Programas[]> = new Observable();
  programasAux$: Observable<Programas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  programaEdit$: Programas = new Programas();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.programas$ = this.store.select(selectListProgramas);// listado de la tabla
    this.programasAux$ = this.store.select(selectListProgramasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingProgramas);// cargue true o false
    this.action$ = this.store.select(selectActionProgramas);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionProgramasEdit).subscribe(x => {this.programaEdit$ = x;});
  }

  _edit(Programas: Programas) {
    this.edit.emit(Programas);
  }

  _delete(Programas: Programas) {
    this.delete.emit(Programas);
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
      // this.Programas$ = this.ProgramasAux$;
    } else {
      this.store.dispatch(sortParametrosProgramas({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosProgramas({paginator}));
  }
}
