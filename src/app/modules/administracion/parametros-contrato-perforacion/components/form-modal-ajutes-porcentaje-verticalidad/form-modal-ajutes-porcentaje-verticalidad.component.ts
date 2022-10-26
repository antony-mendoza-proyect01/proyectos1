import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, Subject} from 'rxjs';
import { ContratoPerforacionAjustesRegistro } from 'src/app/data/models/ajustes-porcentaje-verticalidad';

@Component({
  selector: 'app-form-modal-ajustes-porcentaje-verticalidad',
  templateUrl: './form-modal-ajutes-porcentaje-verticalidad.component.html',
  styleUrls: ['./form-modal-ajutes-porcentaje-verticalidad.component.scss']
})
export class FormModalAjutesPorcentajeVerticalidadComponent implements OnInit {
  @Input() contratosRegistros: ContratoPerforacionAjustesRegistro;
  contratosRegistrosForm: ContratosRegistrosForm;
  submitted = false;

  dangerMessage = '';
  private _danger = new Subject<string>();
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.contratosRegistrosForm = new ContratosRegistrosForm(this.contratosRegistros);

    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  get f() {return this.contratosRegistrosForm.controls; }

  onSubmit() {
    this.submitted = true;

    if( this.f['rinicial'].value ===  this.f['rfinal'].value) {
      this.changeDangerMessage('Los valores de Rango Inicial y Rango Final no pueden ser iguales.');
      return;
    }

    if( this.f['rfinal'].value >  this.f['rinicial'].value) {
      this.changeDangerMessage(' El valor de Rango Inicial debe ser menor que el valor del Rango Final.');
      return;
    }

    // stop here if form is invalid
    if (this.contratosRegistrosForm.invalid) {
      return;
    }
    this.activeModal.close(this.contratosRegistrosForm.getRawValue());
  }

  public changeDangerMessage(message) { this._danger.next(`${message}`); }


}
// TODO: class para implementacion del formulario
export class ContratosRegistrosForm extends FormGroup {
  constructor(contratosRegistros: ContratoPerforacionAjustesRegistro) {
    super({
      codigo: new FormControl(contratosRegistros.codigo),
      codContrato: new FormControl(contratosRegistros.codContrato, [Validators.required]),
      tipoPozo: new FormControl(contratosRegistros.tipoPozo, [Validators.required]),
      rinicial: new FormControl(contratosRegistros.rinicial, [Validators.required]),
      rfinal: new FormControl(contratosRegistros.rfinal, [Validators.required]),
      porcentaje: new FormControl(contratosRegistros.porcentaje, [Validators.required]),
    });
  }
}
