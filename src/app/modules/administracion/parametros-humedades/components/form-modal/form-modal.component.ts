import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Humedades} from '../../../../../data/models/Humedades';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() humedad: Humedades;
  humedadesForm: HumedadesForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.humedadesForm = new HumedadesForm(this.humedad);
  }

  get f() {return this.humedadesForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.humedadesForm.invalid) {
      return;
    }

    this.activeModal.close(this.humedadesForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class HumedadesForm extends FormGroup {
  constructor(humedades: Humedades) {
    super({
      codHumedad: new FormControl(humedades.codHumedad),
      humedad: new FormControl(humedades.humedad,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
