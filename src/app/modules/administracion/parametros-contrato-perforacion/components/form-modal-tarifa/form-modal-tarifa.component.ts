import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Tarifas} from '../../../../../data/models/tarifas';
import {debounceTime, Subject} from 'rxjs';

@Component({
  selector: 'app-form-modal-tarifa',
  templateUrl: './form-modal-tarifa.component.html',
  styleUrls: ['./form-modal-tarifa.component.scss']
})
export class FormModalTarifaComponent implements OnInit {
  @Input() tarifa: Tarifas;
  tarifasForm: TarifasForm;
  submitted = false;

  dangerMessage = '';
  private _danger = new Subject<string>();
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.tarifasForm = new TarifasForm(this.tarifa);

    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  get f() {return this.tarifasForm.controls; }

  onSubmit() {
    this.submitted = true;

    if( this.f['tarifaDesde'].value ===  this.f['tarifaHasta'].value) {
      this.changeDangerMessage('Los valores desde y hasta no pueden ser iguales.');
      return;
    }

    if( this.f['tarifaDesde'].value >  this.f['tarifaHasta'].value) {
      this.changeDangerMessage('Tarifa Desde no puede ser mayor que Tarifa Hasta.');
      return;
    }

    // stop here if form is invalid
    if (this.tarifasForm.invalid) {
      return;
    }
    this.activeModal.close(this.tarifasForm.getRawValue());
  }

  public changeDangerMessage(message) { this._danger.next(`${message}`); }


}
// TODO: class para implementacion del formulario
export class TarifasForm extends FormGroup {
  constructor(tarifas: Tarifas) {
    super({
      codigoTarifa: new FormControl(tarifas.codigoTarifa),
      codContrato: new FormControl(tarifas.codContrato, [Validators.required]),
      tipoPozo: new FormControl(tarifas.tipoPozo, [Validators.required]),
      tarifaDesde: new FormControl(tarifas.tarifaDesde, [Validators.required]),
      tarifaHasta: new FormControl(tarifas.tarifaHasta, [Validators.required]),
      valor: new FormControl(tarifas.valor, [Validators.required]),
    });
  }
}
