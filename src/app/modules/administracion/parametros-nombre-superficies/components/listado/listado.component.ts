import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionNombreSuperficies,
  selectActionNombreSuperficiesEdit,
  selectListNombreSuperficies, selectListNombreSuperficiesFiltro,
  selectLoadingNombreSuperficies
} from '../../state/parametros-nombre-superficies.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosNombreSuperficies, sortParametrosNombreSuperficies} from '../../state/parametros-nombre-superficies.actions';
import { NombreSuperficies } from 'src/app/data/models/nombre-superficies';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<NombreSuperficies>();
  @Output() delete = new EventEmitter<NombreSuperficies>();
  nombres$: Observable<NombreSuperficies[]> = new Observable();
  nombresAux$: Observable<NombreSuperficies[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  nombreEdit$: NombreSuperficies = new NombreSuperficies();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.nombres$ = this.store.select(selectListNombreSuperficies);// listado de la tabla
    this.nombresAux$ = this.store.select(selectListNombreSuperficiesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingNombreSuperficies);// cargue true o false
    this.action$ = this.store.select(selectActionNombreSuperficies);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionNombreSuperficiesEdit).subscribe(x => {this.nombreEdit$ = x;});
  }

  _edit(NombreSuperficies: NombreSuperficies) {
    this.edit.emit(NombreSuperficies);
  }

  _delete(NombreSuperficies: NombreSuperficies) {
    this.delete.emit(NombreSuperficies);
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
      // this.NombreSuperficies$ = this.NombreSuperficiesAux$;
    } else {
      this.store.dispatch(sortParametrosNombreSuperficies({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosNombreSuperficies({paginator}));
  }
}
