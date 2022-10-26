import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionLitofacies,
  selectActionLitofaciesEdit,
  selectListLitofacies, selectListLitofaciesFiltro,
  selectLoadingLitofacies
} from '../../state/parametros-litofacies.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosLitofacies, sortParametrosLitofacies} from '../../state/parametros-litofacies.actions';
import { Litofacies } from 'src/app/data/models/litofacies';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Litofacies>();
  @Output() delete = new EventEmitter<Litofacies>();
  litofacies$: Observable<Litofacies[]> = new Observable();
  litofaciesAux$: Observable<Litofacies[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  litofacieEdit$: Litofacies = new Litofacies();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.litofacies$ = this.store.select(selectListLitofacies);// listado de la tabla
    this.litofaciesAux$ = this.store.select(selectListLitofaciesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingLitofacies);// cargue true o false
    this.action$ = this.store.select(selectActionLitofacies);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionLitofaciesEdit).subscribe(x => {this.litofacieEdit$ = x;});
  }

  _edit(Litofacies: Litofacies) {
    this.edit.emit(Litofacies);
  }

  _delete(Litofacies: Litofacies) {
    this.delete.emit(Litofacies);
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
      // this.Litofacies$ = this.LitofaciesAux$;
    } else {
      this.store.dispatch(sortParametrosLitofacies({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosLitofacies({paginator}));
  }
}
