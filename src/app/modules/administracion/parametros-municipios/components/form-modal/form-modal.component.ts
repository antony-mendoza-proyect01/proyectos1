import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Municipios} from '../../../../../data/models/municipios';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() municipio: Municipios;
  municipioForm: MunicipioForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.municipioForm = new MunicipioForm(this.municipio);
  }

  get f() {return this.municipioForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.municipioForm.invalid) {
      return;
    }

    this.activeModal.close(this.municipioForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class MunicipioForm extends FormGroup {
  constructor(municipios: Municipios) {
    super({
      codigo: new FormControl(municipios.codigo),
      municipio: new FormControl(municipios.municipio,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
