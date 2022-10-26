import {Component, EventEmitter,  OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionContratosRegistroEdit, selectEditTarifasRegistro, selectEditTarifasRegistroContratosRegistro,
  selectLoadingTarifasRegistro, selectTarifasRegistro
} from '../../state/parametros-contratos-registro.selectors';
import {AppState} from '../../../../../app.state';
import {ContratosRegistro} from '../../../../../data/models/contratos-registro';
import {TarifasRegistro, TarifasRegistroFK} from '../../../../../data/models/tarifas-registro';
import {
  createModalTarifaRegistroParametrosContratosRegistro, deleteTarifaRegistroParametrosContratosRegistro,
  editModalParametrosContratosRegistro,
  editModalTarifaRegistroParametrosContratosRegistro
} from '../../state/parametros-contratos-registro.actions';
import {selectListSondasFiltro} from '../../../parametros-sondas/state/parametros-sondas.selectors';
import {Sondas} from '../../../../../data/models/sondas';


@Component({
  selector: 'app-listado-tipo-registro',
  templateUrl: './listado-tipo-registro.component.html',
  styleUrls: ['./listado-tipo-registro.component.scss']
})
export class ListadoTipoRegistroComponent implements OnInit {
  @Output() edit = new EventEmitter<TarifasRegistro>();
  @Output() delete = new EventEmitter<TarifasRegistro>();
  tarifasRegistro$: Observable<TarifasRegistro[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  tarifasRegistroEdit$: TarifasRegistro = new TarifasRegistro();
  editTarifasRegistroContratosRegistro$: ContratosRegistro = new ContratosRegistro();

  sondas$: Observable<Sondas[]> = new Observable();
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.tarifasRegistro$ = this.store.select(selectTarifasRegistro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingTarifasRegistro);// cargue true o false
    this.store.select(selectEditTarifasRegistro).subscribe(x => {this.tarifasRegistroEdit$ = x;});
    this.store.select(selectEditTarifasRegistroContratosRegistro).subscribe(x => {this.editTarifasRegistroContratosRegistro$ = x;});

    this.sondas$ = this.store.select(selectListSondasFiltro);
  }

  onCreate() {
    this.store.dispatch(createModalTarifaRegistroParametrosContratosRegistro(
      {edit: new TarifasRegistro(new TarifasRegistroFK(this.editTarifasRegistroContratosRegistro$.codigo))}));
  }

  onEdit(edit: TarifasRegistro) {
    this.store.dispatch(editModalTarifaRegistroParametrosContratosRegistro({edit}));
  }

  onDelete(edit: TarifasRegistro) {
    this.store.dispatch(deleteTarifaRegistroParametrosContratosRegistro({edit}));
  }

  filterSonda(sonda: string, sondas: Sondas[]) {
    return sondas.find(e => e.id === sonda).nombre;
  }
}
