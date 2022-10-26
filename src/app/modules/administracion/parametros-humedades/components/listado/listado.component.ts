import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionHumedades,
  selectActionHumedadesEdit,
  selectListHumedades, selectListHumedadesFiltro,
  selectLoadingHumedades
} from '../../state/parametros-humedades.selectors';
import {Humedades} from '../../../../../data/models/humedades';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosHumedades, sortParametrosHumedades} from '../../state/parametros-humedades.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Humedades>();
  @Output() delete = new EventEmitter<Humedades>();
  humedades$: Observable<Humedades[]> = new Observable();
  humedadesAux$: Observable<Humedades[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  humedadEdit$: Humedades = new Humedades();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.humedades$ = this.store.select(selectListHumedades);// listado de la tabla
    this.humedadesAux$ = this.store.select(selectListHumedadesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingHumedades);// cargue true o false
    this.action$ = this.store.select(selectActionHumedades);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionHumedadesEdit).subscribe(x => {this.humedadEdit$ = x;});
  }

  _edit(Humedades: Humedades) {
    this.edit.emit(Humedades);
  }

  _delete(Humedades: Humedades) {
    this.delete.emit(Humedades);
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
      // this.Humedades$ = this.HumedadesAux$;
    } else {
      this.store.dispatch(sortParametrosHumedades({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosHumedades({paginator}));
  }
}
