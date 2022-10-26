import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionMunicipios,
  selectActionMunicipiosEdit,
  selectListMunicipios, selectListMunicipiosFiltro,
  selectLoadingMunicipios
} from '../../state/parametros-municipios.selectors';
import {Municipios} from '../../../../../data/models/municipios';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosMunicipios, sortParametrosMunicipios} from '../../state/parametros-municipios.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Municipios>();
  @Output() delete = new EventEmitter<Municipios>();
  municipios$: Observable<Municipios[]> = new Observable();
  municipiosAux$: Observable<Municipios[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  municipioEdit$: Municipios = new Municipios();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.municipios$ = this.store.select(selectListMunicipios);// listado de la tabla
    this.municipiosAux$ = this.store.select(selectListMunicipiosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingMunicipios);// cargue true o false
    this.action$ = this.store.select(selectActionMunicipios);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionMunicipiosEdit).subscribe(x => {this.municipioEdit$ = x;});
  }

  _edit(Municipios: Municipios) {
    this.edit.emit(Municipios);
  }

  _delete(Municipios: Municipios) {
    this.delete.emit(Municipios);
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
      // this.Municipios$ = this.MunicipiosAux$;
    } else {
      this.store.dispatch(sortParametrosMunicipios({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosMunicipios({paginator}));
  }
}
