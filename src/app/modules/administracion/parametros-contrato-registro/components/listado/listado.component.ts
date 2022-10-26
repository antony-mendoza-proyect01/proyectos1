import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionContratosRegistro,
  selectActionContratosRegistroEdit, selectEditTarifasRegistroContratosRegistro, selectListContratosRegistro
  , selectListContratosRegistroFiltro,
  selectLoadingContratosRegistro
} from '../../state/parametros-contratos-registro.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {ContratosRegistro} from '../../../../../data/models/contratos-registro';
import {
  getByCodContratoParametrosContratosRegistroRegistro,
  paginatorParametrosContratosRegistro,
  sortParametrosContratosRegistro
} from '../../state/parametros-contratos-registro.actions';
import {getAllParametrosSondas} from '../../../parametros-sondas/state/parametros-sondas.actions';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<ContratosRegistro>();
  @Output() delete = new EventEmitter<ContratosRegistro>();
  contratosRegistro$: Observable<ContratosRegistro[]> = new Observable();
  contratosRegistroAux$: Observable<ContratosRegistro[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  contratosRegistroEdit$: ContratosRegistro = new ContratosRegistro();
  editTarifasRegistroContratosRegistro$: ContratosRegistro = new ContratosRegistro();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.contratosRegistro$ = this.store.select(selectListContratosRegistro);// listado de la tabla
    this.contratosRegistroAux$ = this.store.select(selectListContratosRegistroFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingContratosRegistro);// cargue true o false
    this.action$ = this.store.select(selectActionContratosRegistro);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionContratosRegistroEdit).subscribe(x => {this.contratosRegistroEdit$ = x;});
    this.store.select(selectEditTarifasRegistroContratosRegistro).subscribe(x => {this.editTarifasRegistroContratosRegistro$ = x;});

    this.store.dispatch(getAllParametrosSondas());

  }

  _edit(contratosRegistro: ContratosRegistro) {
    this.edit.emit(contratosRegistro);
  }

  _delete(contratosRegistro: ContratosRegistro) {
    this.delete.emit(contratosRegistro);
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
      // this.ContratosRegistro$ = this.ContratosRegistroAux$;
    } else {
      this.store.dispatch(sortParametrosContratosRegistro({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosContratosRegistro({paginator}));
  }

  onTarifaRegistro(edit: ContratosRegistro) {
    this.store.dispatch(getByCodContratoParametrosContratosRegistroRegistro({edit}));
  }
}
