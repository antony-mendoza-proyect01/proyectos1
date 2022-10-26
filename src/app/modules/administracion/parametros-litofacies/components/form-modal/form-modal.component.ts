import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Litofacies } from 'src/app/data/models/litofacies';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() litofacie: Litofacies;
  litofacieForm: LitofacieForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.litofacieForm = new LitofacieForm(this.litofacie);
  }

  get f() {return this.litofacieForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.litofacieForm.invalid) {
      return;
    }

    this.activeModal.close(this.litofacieForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class LitofacieForm extends FormGroup {
  constructor(litofacies: Litofacies) {
    super({
      codCar: new FormControl(litofacies.codCar),
      litofacie: new FormControl(litofacies.litofacie,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(1)]),
      grupo: new FormControl(litofacies.grupo,[Validators.required,
        Validators.minLength(1), Validators.maxLength(3)]),
      caracteristica: new FormControl(litofacies.caracteristica, [Validators.required,
        Validators.minLength(1), Validators.maxLength(100)]),
    });
  }
}
