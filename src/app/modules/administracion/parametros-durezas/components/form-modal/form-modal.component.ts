import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Durezas} from '../../../../../data/models/Durezas';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() dureza: Durezas;
  durezaForm: DurezaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.durezaForm = new DurezaForm(this.dureza);
  }

  get f() {return this.durezaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.durezaForm.invalid) {
      return;
    }

    this.activeModal.close(this.durezaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class DurezaForm extends FormGroup {
  constructor(durezas: Durezas) {
    super({
      codDureza: new FormControl(durezas.codDureza),
      dureza: new FormControl(durezas.dureza,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
