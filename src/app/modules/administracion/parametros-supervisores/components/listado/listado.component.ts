import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionPersonasRoles,
  selectActionPersonasRolesEdit,
  selectListPersonasRoles, selectListPersonasRolesFiltro,
  selectLoadinParametrosPersonasRoles
} from '../../state/parametros-supervisores.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosSupervisores, sortParametrosSupervisores} from '../../state/parametros-supervisores.actions';
import {PersonasRoles} from "../../../../../data/models/personas-roles";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<PersonasRoles>();
  @Output() delete = new EventEmitter<PersonasRoles>();
  supervisores$: Observable<PersonasRoles[]> = new Observable();
  supervisoresAux$: Observable<PersonasRoles[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  supervisorEdit$: PersonasRoles = new PersonasRoles();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.supervisores$ = this.store.select(selectListPersonasRoles);// listado de la tabla
    this.supervisoresAux$ = this.store.select(selectListPersonasRolesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinParametrosPersonasRoles);// cargue true o false
    this.action$ = this.store.select(selectActionPersonasRoles);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionPersonasRolesEdit).subscribe(x => {this.supervisorEdit$ = x;});
  }

  _edit(PersonasRoles: PersonasRoles) {
    this.edit.emit(PersonasRoles);
  }

  _delete(PersonasRoles: PersonasRoles) {
    this.delete.emit(PersonasRoles);
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
      // this.PersonasRoles$ = this.PersonasRolesAux$;
    } else {
      this.store.dispatch(sortParametrosSupervisores({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosSupervisores({paginator}));
  }
}
