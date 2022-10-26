import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionLaboratorios,
  selectActionLaboratoriosEdit,
  selectListLaboratorios, selectListLaboratoriosFiltro,
  selectLoadingLaboratorios
} from '../../state/parametros-laboratorios.selectors';
import {Laboratorios} from '../../../../../data/models/laboratorios';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosLaboratorios, sortParametrosLaboratorios} from '../../state/parametros-laboratorios.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Laboratorios>();
  @Output() delete = new EventEmitter<Laboratorios>();
  laboratorios$: Observable<Laboratorios[]> = new Observable();
  laboratoriosAux$: Observable<Laboratorios[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  laboratorioEdit$: Laboratorios = new Laboratorios();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.laboratorios$ = this.store.select(selectListLaboratorios);// listado de la tabla
    this.laboratoriosAux$ = this.store.select(selectListLaboratoriosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingLaboratorios);// cargue true o false
    this.action$ = this.store.select(selectActionLaboratorios);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionLaboratoriosEdit).subscribe(x => {this.laboratorioEdit$ = x;});
  }

  _edit(Laboratorios: Laboratorios) {
    this.edit.emit(Laboratorios);
  }

  _delete(Laboratorios: Laboratorios) {
    this.delete.emit(Laboratorios);
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
      // this.Laboratorios$ = this.LaboratoriosAux$;
    } else {
      this.store.dispatch(sortParametrosLaboratorios({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosLaboratorios({paginator}));
  }
}
