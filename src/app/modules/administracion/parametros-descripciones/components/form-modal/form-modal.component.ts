import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Descripciones } from 'src/app/data/models/descripciones';



@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() descripcion: Descripciones;
  descripcionForm: DescripcionForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.descripcionForm = new DescripcionForm(this.descripcion);
  }

  get f() { return this.descripcionForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.descripcionForm.invalid) {
      return;
    }

    this.activeModal.close(this.descripcionForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class DescripcionForm extends FormGroup {
  constructor(descripciones: Descripciones) {
    super({
      codigo: new FormControl(descripciones.codigo, [Validators.required,
        Validators.minLength(0), Validators.maxLength(2)]),
      descripcion: new FormControl(descripciones.descripcion, [Validators.required,
        Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
