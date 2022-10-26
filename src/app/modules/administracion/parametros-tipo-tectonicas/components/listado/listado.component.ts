import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectParametrosListTipoTectonicas,
  selectParametrosActionTipoTectonicas,
  selectParametrosLoadinTipoTectonicas,
  selectParametrosActionTipoTectonicasEdit, selectParametrosListTipoTectonicasFiltro
} from '../../state/parametros-tipo-tectonicas.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosTipoTectonicas, sortParametrosTipoTectonicas} from '../../state/parametros-tipo-tectonicas.actions';
import { TipoTectonicas } from 'src/app/data/models/tipo-tectonica';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<TipoTectonicas>();
  @Output() delete = new EventEmitter<TipoTectonicas>();
  tipoTectonicas$: Observable<TipoTectonicas[]> = new Observable();
  tipoTectonicasAux$: Observable<TipoTectonicas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  tipoTectonicaEdit$: TipoTectonicas = new TipoTectonicas();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.tipoTectonicas$ = this.store.select(selectParametrosListTipoTectonicas);// listado de la tabla
    this.tipoTectonicasAux$ = this.store.select(selectParametrosListTipoTectonicasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectParametrosLoadinTipoTectonicas);// cargue true o false
    this.action$ = this.store.select(selectParametrosActionTipoTectonicas);// acciones true o false
    // acciones edit
    this.store.select(selectParametrosActionTipoTectonicasEdit).subscribe(x => {this.tipoTectonicaEdit$ = x;});
  }

  _edit(TipoTectonicas: TipoTectonicas) {
    this.edit.emit(TipoTectonicas);
  }

  _delete(TipoTectonicas: TipoTectonicas) {
    this.delete.emit(TipoTectonicas);
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
      // this.areas$ = this.areasAux$;
    } else {
      this.store.dispatch(sortParametrosTipoTectonicas({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosTipoTectonicas({paginator}));
  }
}
