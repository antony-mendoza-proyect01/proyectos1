import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';

import {
  selectActionEmpresas,
  selectActionEmpresasEdit,
  selectListEmpresas, selectListEmpresasFiltro,
  selectLoadingEmpresas
} from '../../state/parametros-empresas.selectors';
import { Empresas } from 'src/app/data/models/empresas';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosEmpresas, sortParametrosEmpresas} from '../../state/parametros-empresas.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Empresas>();
  @Output() delete = new EventEmitter<Empresas>();
  empresas$: Observable<Empresas[]> = new Observable();
  empresasAux$: Observable<Empresas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  empresaEdit$: Empresas = new Empresas();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.empresas$ = this.store.select(selectListEmpresas);// listado de la tabla
    this.empresasAux$ = this.store.select(selectListEmpresasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingEmpresas);// cargue true o false
    this.action$ = this.store.select(selectActionEmpresas);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionEmpresasEdit).subscribe(x => {this.empresaEdit$ = x;});
  }

  _edit(Empresas: Empresas) {
    this.edit.emit(Empresas);
  }

  _delete(Empresas: Empresas) {
    this.delete.emit(Empresas);
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
      // this.Empresas$ = this.EmpresasAux$;
    } else {
      this.store.dispatch(sortParametrosEmpresas({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosEmpresas({paginator}));
  }
}
