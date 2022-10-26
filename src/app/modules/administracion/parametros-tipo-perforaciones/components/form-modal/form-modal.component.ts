
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TipoPerforaciones} from "../../../../../data/models/tipo-perforaciones";


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() perforaciones: TipoPerforaciones;
  perforacionesForm: PerforacionesForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.perforacionesForm = new PerforacionesForm(this.perforaciones);
  }

  get f() { return this.perforacionesForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.perforacionesForm.invalid) {
      return;
    }

    this.activeModal.close(this.perforacionesForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class PerforacionesForm extends FormGroup {
  constructor(perforaciones : TipoPerforaciones) {
    super({
      codTipoPerforacion: new FormControl(perforaciones.codTipoPerforacion,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      perforacion: new FormControl(perforaciones.perforacion, [Validators.required,
        Validators.minLength(1), Validators.maxLength(100)]),
    });
  }
}
