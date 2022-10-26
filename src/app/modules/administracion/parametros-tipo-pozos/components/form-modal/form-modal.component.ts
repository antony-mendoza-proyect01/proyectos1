import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TipoPozos } from 'src/app/data/models/tipo-pozos';

@Component({
  selector: 'app-modalid',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() tipopozo: TipoPozos;
  tipopozoForm: TipoPozoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.tipopozoForm = new TipoPozoForm(this.tipopozo);
  }

  get f() {return this.tipopozoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tipopozoForm.invalid) {
      return;
    }

    this.activeModal.close(this.tipopozoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class TipoPozoForm extends FormGroup {
  constructor(tipopozoS: TipoPozos) {
    super({
      codigo: new FormControl(tipopozoS.codigo,[Validators.required,
        Validators.minLength(0), Validators.maxLength(50)]),
      tipoPozo: new FormControl(tipopozoS.tipoPozo,
        [Validators.required,
          Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
