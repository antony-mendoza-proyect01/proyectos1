import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Parasecuencias} from '../../../../../data/models/parasecuencias';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() parasecuencia: Parasecuencias;
  parasecuenciaForm: ParasecuenciaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.parasecuenciaForm = new ParasecuenciaForm(this.parasecuencia);
  }

  get f() {return this.parasecuenciaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.parasecuenciaForm.invalid) {
      return;
    }

    this.activeModal.close(this.parasecuenciaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class ParasecuenciaForm extends FormGroup {
  constructor(parasecuencias: Parasecuencias) {
    super({
      codParasec: new FormControl(parasecuencias.codParasec,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(32)])
    });
  }
}
