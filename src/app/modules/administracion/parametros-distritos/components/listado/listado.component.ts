import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionDistritos,
  selectActionDistritosEdit,
  selectListDistritos, selectListDistritosFiltro,
  selectLoadingDistritos
} from '../../state/parametros-distritos.selectors';
import {Distritos} from '../../../../../data/models/distritos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosDistritos, sortParametrosDistritos} from '../../state/parametros-distritos.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Distritos>();
  @Output() delete = new EventEmitter<Distritos>();
  distritos$: Observable<Distritos[]> = new Observable();
  distritosAux$: Observable<Distritos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  distritoEdit$: Distritos = new Distritos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.distritos$ = this.store.select(selectListDistritos);// listado de la tabla
    this.distritosAux$ = this.store.select(selectListDistritosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingDistritos);// cargue true o false
    this.action$ = this.store.select(selectActionDistritos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionDistritosEdit).subscribe(x => {this.distritoEdit$ = x;});
  }

  _edit(Distritos: Distritos) {
    this.edit.emit(Distritos);
  }

  _delete(Distritos: Distritos) {
    this.delete.emit(Distritos);
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
      // this.Distritos$ = this.DistritosAux$;
    } else {
      this.store.dispatch(sortParametrosDistritos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosDistritos({paginator}));
  }
}
