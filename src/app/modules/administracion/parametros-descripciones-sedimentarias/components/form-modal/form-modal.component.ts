import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { DescripcionSedimentaria } from 'src/app/data/models/descripcion-sedimentaria';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() descripcionSedimentaria: DescripcionSedimentaria;
  descripcionSedimentariaForm: DescripcionSedimentariaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.descripcionSedimentariaForm = new DescripcionSedimentariaForm(this.descripcionSedimentaria);
  }

  get f() {return this.descripcionSedimentariaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.descripcionSedimentariaForm.invalid) {
      return;
    }

    this.activeModal.close(this.descripcionSedimentariaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class DescripcionSedimentariaForm extends FormGroup {
  constructor(descripcionSedimentarias: DescripcionSedimentaria) {
    super({
      codDesSed: new FormControl(descripcionSedimentarias.codDesSed),
      descripcion: new FormControl(descripcionSedimentarias.descripcion,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
