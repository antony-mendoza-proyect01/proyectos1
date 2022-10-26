import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Patron} from '../../../../../data/models/Patron';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() patron: Patron;
  patronesForm: PatronesForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.patronesForm = new PatronesForm(this.patron);
  }

  get f() {return this.patronesForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.patronesForm.invalid) {
      return;
    }

    this.activeModal.close(this.patronesForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class PatronesForm extends FormGroup {
  constructor(patrones: Patron) {
    super({
      codPatron: new FormControl(patrones.codPatron),
      codigo: new FormControl(patrones.codigo,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(15)]),
      patron: new FormControl(patrones.patron,
        [Validators.required,
          Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
