import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Granos} from '../../../../../data/models/granos';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() grano: Granos;
  granoForm: GranoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.granoForm = new GranoForm(this.grano);
  }

  get f() {return this.granoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.granoForm.invalid) {
      return;
    }

    this.activeModal.close(this.granoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class GranoForm extends FormGroup {
  constructor(granos: Granos) {
    super({
      codGrano: new FormControl(granos.codGrano,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      grano: new FormControl(granos.grano,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(80)]),

    });
  }
}
