import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, Observable, Subject} from 'rxjs';
import { ContratoPerforacionAjustesDesviacion } from 'src/app/data/models/ajustes-desviacion';
import {CategoriasAjuste} from '../../../../../data/models/categorias-ajuste';
import {
  selectActionContratoPerforacionAjustesDesviacionCategoriasAjustes
} from '../../state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';

@Component({
  selector: 'app-form-modal-ajustes-desviacion',
  templateUrl: './form-modal-ajutes-desviacion.component.html',
  styleUrls: ['./form-modal-ajutes-desviacion.component.scss']
})
export class FormModalAjutesDesviacionComponent implements OnInit {
  @Input() contratosAjutesDesviaciones: ContratoPerforacionAjustesDesviacion;
  contratosAjutesDesviacionesForm: ContratosAjutesDesviacionesForm;
  submitted = false;

  dangerMessage = '';
  private _danger = new Subject<string>();
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

//variable
  categoriasAjustes: Observable<CategoriasAjuste[]> = new Observable();

  constructor(
    private store: Store<AppState>,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.contratosAjutesDesviacionesForm = new ContratosAjutesDesviacionesForm(this.contratosAjutesDesviaciones);

    //select llamando
    this.categoriasAjustes = this.store.select(selectActionContratoPerforacionAjustesDesviacionCategoriasAjustes);

    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  get f() {return this.contratosAjutesDesviacionesForm.controls; }

  onSubmit() {
    this.submitted = true;

    if( this.f['distHorInicial'].value ===  this.f['distHorFinal'].value) {
      this.changeDangerMessage('Los valores de Rango Distancia Horizontal Inicial y Distancia Horizontal final no pueden ser iguales.');
      return;
    }

    if( this.f['profVertInicial'].value ==  this.f['profVertFinal'].value) {
      this.changeDangerMessage('Los valores de Rango Profundidad Vertical Inicial y Profundidad Vertical Final no pueden ser iguales.');
      return;
    }


    // stop here if form is invalid
    if (this.contratosAjutesDesviacionesForm.invalid) {
      return;
    }
    this.activeModal.close(this.contratosAjutesDesviacionesForm.getRawValue());
  }

  public changeDangerMessage(message) { this._danger.next(`${message}`); }


}
// TODO: class para implementacion del formulario
export class ContratosAjutesDesviacionesForm extends FormGroup {
  constructor(contratosAjutesDesviaciones: ContratoPerforacionAjustesDesviacion) {
    super({
      codigo: new FormControl(contratosAjutesDesviaciones.codigo),
      codContrato: new FormControl(contratosAjutesDesviaciones.codContrato, [Validators.required]),
      tipoPozo: new FormControl(contratosAjutesDesviaciones.tipoPozo, [Validators.required]),
      distHorInicial: new FormControl(contratosAjutesDesviaciones.distHorInicial, [Validators.required]),
      distHorFinal: new FormControl(contratosAjutesDesviaciones.distHorFinal, [Validators.required]),
      categoriaCodigo: new FormControl(contratosAjutesDesviaciones.categoriaCodigo, [Validators.required]),
      profVertInicial: new FormControl(contratosAjutesDesviaciones.profVertInicial, [Validators.required]),
      profVertFinal: new FormControl(contratosAjutesDesviaciones.profVertFinal, [Validators.required]),
      factorAjuste: new FormControl(contratosAjutesDesviaciones.factorAjuste, [Validators.required]),


    });
  }
}
