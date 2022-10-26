
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Tonos} from "../../../../../data/models/tono";


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() tono: Tonos;
  tonoForm: TonoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.tonoForm = new TonoForm(this.tono);
  }

  get f() { return this.tonoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tonoForm.invalid) {
      return;
    }

    this.activeModal.close(this.tonoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class TonoForm extends FormGroup {
  constructor(tonos : Tonos) {
    super({
      codTono: new FormControl(tonos.codTono,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      tono: new FormControl(tonos.tono, [Validators.required,
        Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
