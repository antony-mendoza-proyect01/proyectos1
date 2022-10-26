import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NombresIntervalos} from '../../../../../data/models/nombres-intervalos';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() nombresIntervalos: NombresIntervalos;
  nombresIntervalosForm: NombresIntervalosForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.nombresIntervalosForm = new NombresIntervalosForm(this.nombresIntervalos);
  }

  get f() {return this.nombresIntervalosForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.nombresIntervalosForm.invalid) {
      return;
    }

    this.activeModal.close(this.nombresIntervalosForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class NombresIntervalosForm extends FormGroup {
  constructor(nombresIntervalos: NombresIntervalos) {
    super({
      nombre: new FormControl(nombresIntervalos.nombre,[Validators.required,
        Validators.minLength(1), Validators.maxLength(10)]),
    });
  }
}
