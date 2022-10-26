import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionSuperficiePozo,
  selectActionSuperficiePozoEdit,
  selectListSuperficiePozo,
  selectLoadingSuperficiePozo
} from '../../state/state-superficie-pozo/superficie-pozo.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import { SuperficiePozo } from 'src/app/data/models/superficie-pozo';
import {
  createModalSuperficiePozo, deleteSuperficiePozo, editModalSuperficiePozo, getAllByPozoSuperficiePozo,
} from '../../state/state-superficie-pozo/superficie-pozo.actions';

import {PaginatorService} from "../../../../../shared/services/paginator.service";
import {URL_GEOSCRIPT_DATOS_CARBON} from "../../../../../core/const/navigation.const";
import {LOCAL_STORAGE} from "../../../../../core/const/localStorage.const";
@Component({
  selector: 'app-listado-superficie-pozo',
  templateUrl: './listado-superficie-pozo.component.html',
  styleUrls: ['./listado-superficie-pozo.component.scss']
})
export class ListadoSuperficiePozoComponent implements OnInit {
  @Output() edit = new EventEmitter<SuperficiePozo>();
  @Output() delete = new EventEmitter<SuperficiePozo>();
  superficiePozos$: Observable<SuperficiePozo[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  superficiePozoEdit$: SuperficiePozo = new SuperficiePozo();
  tipoPozo$: string = '';
  pozo: string = '';

  urlDatoscarbon = URL_GEOSCRIPT_DATOS_CARBON;


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
    private paginatorService: PaginatorService
  ) { }

  ngOnInit(): void {
    this.superficiePozos$ = this.store.select(selectListSuperficiePozo);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingSuperficiePozo);// cargue true o false
    this.action$ = this.store.select(selectActionSuperficiePozo);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionSuperficiePozoEdit).subscribe(x => {this.superficiePozoEdit$ = x;});

    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(getAllByPozoSuperficiePozo({pozo: this.pozo}));
  }


  onCreate() {
    this.store.dispatch(createModalSuperficiePozo(
      {edit: new SuperficiePozo(null, this.tipoPozo$ )}));
    this.paginatorService.initial();
  }

  _edit(edit: SuperficiePozo) {
    this.store.dispatch(editModalSuperficiePozo({edit, codPozo: this.pozo}));
  }

  _delete(edit: SuperficiePozo) {
    this.store.dispatch(deleteSuperficiePozo({edit}))
  }


}
