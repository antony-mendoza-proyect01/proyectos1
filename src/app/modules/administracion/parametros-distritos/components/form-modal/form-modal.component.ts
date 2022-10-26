import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Distritos} from '../../../../../data/models/distritos';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() distrito: Distritos;
  distritoForm: DistritoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.distritoForm = new DistritoForm(this.distrito);
  }

  get f() {return this.distritoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.distritoForm.invalid) {
      return;
    }

    this.activeModal.close(this.distritoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class DistritoForm extends FormGroup {
  constructor(distritos: Distritos) {
    super({
      codDto: new FormControl(distritos.codDto,[Validators.required,
        Validators.minLength(1), Validators.maxLength(8)]),
      distrito: new FormControl(distritos.distrito,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(30)]),
    });
  }
}
