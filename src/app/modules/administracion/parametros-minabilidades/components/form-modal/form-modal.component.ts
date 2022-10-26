import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Minabilidades} from '../../../../../data/models/minabilidades';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() minabilidad: Minabilidades;
  minabilidadForm: MinabilidadForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.minabilidadForm = new MinabilidadForm(this.minabilidad);
  }

  get f() {return this.minabilidadForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.minabilidadForm.invalid) {
      return;
    }

    this.activeModal.close(this.minabilidadForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class MinabilidadForm extends FormGroup {
  constructor(minabilidades: Minabilidades) {
    super({
      codMinabilidad: new FormControl(minabilidades.codMinabilidad,),
      minabilidad: new FormControl(minabilidades.minabilidad,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
