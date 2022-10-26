import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Materiales } from 'src/app/data/models/materiales';


@Component({
  selector: 'app-modalid',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() material: Materiales;
  materialForm: MaterialForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.materialForm = new MaterialForm(this.material);
  }

  get f() { return this.materialForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.materialForm.invalid) {
      return;
    }

    this.activeModal.close(this.materialForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class MaterialForm extends FormGroup {
  constructor(materiales: Materiales) {
    super({
      codigo: new FormControl(materiales.codigo, [Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      material: new FormControl(materiales.material, [Validators.required,
        Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
