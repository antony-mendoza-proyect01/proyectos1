import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-modal-verificacion-pozo',
  templateUrl: './form-modal-verificacion-pozo.component.html',
  styleUrls: ['./form-modal-verificacion-pozo.component.scss']
})
export class FormModalVerificacionPozoComponent implements OnInit {
  pozoForm: PozoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.pozoForm = new PozoForm();
  }

  get f() {return this.pozoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.pozoForm.invalid) {
      return;
    }

    this.activeModal.close(this.pozoForm.getRawValue().pozo);
  }

}
// TODO: class para implementacion del formulario
export class PozoForm extends FormGroup {
  constructor() {
    super({
      pozo: new FormControl('', [Validators.required]),
    });
  }
}
