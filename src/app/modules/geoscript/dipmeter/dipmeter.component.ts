import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {Dipmeter} from '../../../data/models/dipmeter';
import {
  createModalDipmeter,
  deleteDipmeter,
  editModalDipmeter,
  filterDipmeter,
  getAllByPozoDipmeter,
  initDipmeter
} from './state/dipmeter.actions';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';
import {PaginatorService} from "../../../shared/services/paginator.service";

@Component({
  selector: 'app-dipmeter',
  templateUrl: './dipmeter.component.html',
  styleUrls: ['./dipmeter.component.scss']
})
export class DipmeterComponent implements OnInit {
  pozo: string = '';
  profundidadExistente : number;


  constructor(private store: Store<AppState>,
              private paginatorService: PaginatorService) { }
  async ngOnInit() {
    this.pozo = localStorage.getItem(LOCAL_STORAGE.pozo);
    this.store.dispatch(initDipmeter());// init
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(getAllByPozoDipmeter({pozo: this.pozo}));// mandar a llamar la data
  }

  onCreate() {
     this.store.dispatch(createModalDipmeter({edit: new Dipmeter()}));
     this.paginatorService.initial();
  }

  onEdit(edit: Dipmeter) {
    this.store.dispatch(editModalDipmeter({edit, codPozo: this.pozo}));
  }

  onDelete(edit: Dipmeter) {
     this.store.dispatch(deleteDipmeter({edit}));
  }

  onFilter(filtro: string) {
     this.store.dispatch(filterDipmeter({filtro}));
     this.paginatorService.initial();
  }
}
