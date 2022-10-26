import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionAUsarios, selectActionAUsariosEdit,
  selectListAUsarios,
  selectListAUsariosFiltro,
  selectLoadingAUsarios
} from '../../state/administracion-usuarios.selectors';
import {User} from '../../../../../data/models/user';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorAdministracionUsuarios, sortAdministracionUsuarios} from '../../state/administracion-usuarios.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<User>();
  users$: Observable<User[]> = new Observable();
  usersAux$: Observable<User[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  userEdit$: User = new User();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectListAUsarios);// listado de la tabla
    this.usersAux$ = this.store.select(selectListAUsariosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingAUsarios);// cargue true o false
    this.action$ = this.store.select(selectActionAUsarios);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionAUsariosEdit).subscribe(x => this.userEdit$ = x);
  }

  _edit(User: User) {
    this.edit.emit(User);
  }

  _delete(User: User) {
    this.delete.emit(User);
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
      // this.user$ = this.userAux$;
    } else {
      this.store.dispatch(sortAdministracionUsuarios({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorAdministracionUsuarios({paginator}));
  }
}
