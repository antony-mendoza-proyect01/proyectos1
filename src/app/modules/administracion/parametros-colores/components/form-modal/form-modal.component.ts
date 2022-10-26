import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {Colores} from "../../../../../data/models/colores";
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() color: Colores;
  colorForm: ColorForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.colorForm = new ColorForm(this.color);
  }

  get f() {return this.colorForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.colorForm.invalid) {
      return;
    }

    this.activeModal.close(this.colorForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class ColorForm extends FormGroup {
  constructor(colores: Colores) {
    super({
      codColor: new FormControl(colores.codColor,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      color: new FormControl(colores.color,
        [Validators.required,
          Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
