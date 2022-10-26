import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Meteorizaciones} from "../../../../../data/models/meterorizaciones";
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() meteorizacion: Meteorizaciones;
  meteorizacionForm: MeteorizacionForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.meteorizacionForm = new MeteorizacionForm(this.meteorizacion);
  }

  get f() {return this.meteorizacionForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.meteorizacionForm.invalid) {
      return;
    }

    this.activeModal.close(this.meteorizacionForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class MeteorizacionForm extends FormGroup {
  constructor(meteorizaciones: Meteorizaciones) {
    super({
      codMeteorizacion: new FormControl(meteorizaciones.codMeteorizacion,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      meteorizacion: new FormControl(meteorizaciones.meteorizacion,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
