import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionLitofacieColores,
  selectActionLitofacieColoresEdit,
  selectListLitofacieColores, selectListLitofacieColoresFiltro,
  selectLoadingLitofacieColores
} from '../../state/parametros-litofacie-colores.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosLitofacieColores, sortParametrosLitofacieColores} from '../../state/parametros-litofacie-colores.actions';
import {LitofacieColores} from "../../../../../data/models/litofacie-colores";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<LitofacieColores>();
  @Output() delete = new EventEmitter<LitofacieColores>();
  litofacies$: Observable<LitofacieColores[]> = new Observable();
  litofaciesAux$: Observable<LitofacieColores[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  litofacieEdit$: LitofacieColores = new LitofacieColores();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.litofacies$ = this.store.select(selectListLitofacieColores);// listado de la tabla
    this.litofaciesAux$ = this.store.select(selectListLitofacieColoresFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingLitofacieColores);// cargue true o false
    this.action$ = this.store.select(selectActionLitofacieColores);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionLitofacieColoresEdit).subscribe(x => {this.litofacieEdit$ = x;});
  }

  _edit(LitofacieColores: LitofacieColores) {
    this.edit.emit(LitofacieColores);
  }

  _delete(LitofacieColores: LitofacieColores) {
    this.delete.emit(LitofacieColores);
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
      // this.LitofacieColores$ = this.LitofacieColoresAux$;
    } else {
      this.store.dispatch(sortParametrosLitofacieColores({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosLitofacieColores({paginator}));
  }
}
