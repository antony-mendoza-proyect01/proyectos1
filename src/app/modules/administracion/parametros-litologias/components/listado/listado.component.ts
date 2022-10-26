import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionLitologias,
  selectActionLitologiasEdit,
  selectListLitologias, selectListLitologiasFiltro,
  selectLoadingLitologias
} from '../../state/parametros-litologias.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosLitologias, sortParametrosLitologias} from '../../state/parametros-litologias.actions';
import {Litologias} from "../../../../../data/models/litologias";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Litologias>();
  @Output() delete = new EventEmitter<Litologias>();
  litologias$: Observable<Litologias[]> = new Observable();
  litologiasAux$: Observable<Litologias[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  litologiaEdit$: Litologias = new Litologias();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.litologias$ = this.store.select(selectListLitologias);// listado de la tabla
    this.litologiasAux$ = this.store.select(selectListLitologiasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingLitologias);// cargue true o false
    this.action$ = this.store.select(selectActionLitologias);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionLitologiasEdit).subscribe(x => {this.litologiaEdit$ = x;});
  }

  _edit(Litologias: Litologias) {
    this.edit.emit(Litologias);
  }

  _delete(Litologias: Litologias) {
    this.delete.emit(Litologias);
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
      // this.Litologias$ = this.LitologiasAux$;
    } else {
      this.store.dispatch(sortParametrosLitologias({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosLitologias({paginator}));
  }
}
