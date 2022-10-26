import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { OrigenDatos } from 'src/app/data/models/origen-datos';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() origendato: OrigenDatos;
  origendatoForm: OrigendatoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.origendatoForm = new OrigendatoForm(this.origendato);
  }

  get f() {return this.origendatoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.origendatoForm.invalid) {
      return;
    }

    this.activeModal.close(this.origendatoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class OrigendatoForm extends FormGroup {
  constructor(origendatos: OrigenDatos) {
    super({
      codOrigen: new FormControl(origendatos.codOrigen,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      origen: new FormControl(origendatos.origen,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
