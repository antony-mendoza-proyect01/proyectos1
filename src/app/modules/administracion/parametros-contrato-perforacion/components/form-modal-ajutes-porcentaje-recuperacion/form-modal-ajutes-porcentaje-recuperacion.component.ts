import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, Subject} from 'rxjs';
import {ContratoPerforacionAjustesRecuperacion} from "../../../../../data/models/ajustes-porcentaje-recuperacion";

@Component({
  selector: 'app-form-modal-ajustes-recuperacion',
  templateUrl: './form-modal-ajutes-porcentaje-recuperacion.component.html',
  styleUrls: ['./form-modal-ajutes-porcentaje-recuperacion.component.scss']
})
export class FormModalAjutesPorcentajeRecuperacionComponent implements OnInit {
  @Input() contratoPerforacionAjustesRecuperaciones: ContratoPerforacionAjustesRecuperacion;
  contratoPerforacionAjustesRecuperacionesForm: ContratoPerforacionAjustesRecuperacionesForm;
  submitted = false;

  dangerMessage = '';
  private _danger = new Subject<string>();
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.contratoPerforacionAjustesRecuperacionesForm = new ContratoPerforacionAjustesRecuperacionesForm(this.contratoPerforacionAjustesRecuperaciones);

    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  get f() {return this.contratoPerforacionAjustesRecuperacionesForm.controls; }

  onSubmit() {
    this.submitted = true;

    if( this.f['rinicial'].value ===  this.f['rfinal'].value) {
      this.changeDangerMessage('Los valores de Rango Inicial y Rango Final no pueden ser iguales.');
      return;
    }

    if( this.f['rfinal'].value >  this.f['rinicial'].value) {
      this.changeDangerMessage('Rango Final no puede ser mayor.');
      return;
    }

    // stop here if form is invalid
    if (this.contratoPerforacionAjustesRecuperacionesForm.invalid) {
      return;
    }
    this.activeModal.close(this.contratoPerforacionAjustesRecuperacionesForm.getRawValue());
  }

  public changeDangerMessage(message) { this._danger.next(`${message}`); }


}
// TODO: class para implementacion del formulario
export class ContratoPerforacionAjustesRecuperacionesForm extends FormGroup {
  constructor(contratoPerforacionAjustesRecuperaciones: ContratoPerforacionAjustesRecuperacion) {
    super({
      codigo: new FormControl(contratoPerforacionAjustesRecuperaciones.codigo),
      codContrato: new FormControl(contratoPerforacionAjustesRecuperaciones.codContrato, [Validators.required]),
      tipoPozo: new FormControl(contratoPerforacionAjustesRecuperaciones.tipoPozo, [Validators.required]),
      rinicial: new FormControl(contratoPerforacionAjustesRecuperaciones.rinicial, [Validators.required]),
      rfinal: new FormControl(contratoPerforacionAjustesRecuperaciones.rfinal, [Validators.required]),
      porcentaje: new FormControl(contratoPerforacionAjustesRecuperaciones.porcentaje, [Validators.required]),
    });
  }
}
