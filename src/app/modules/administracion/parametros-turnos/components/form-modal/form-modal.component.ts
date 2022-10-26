
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Turnos} from "../../../../../data/models/turnos";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() turno: Turnos;
  turnoForm: TurnoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.turnoForm = new TurnoForm(this.turno);
  }

  get f() { return this.turnoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.turnoForm.invalid) {
      return;
    }

    this.activeModal.close(this.turnoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class TurnoForm extends FormGroup {
  constructor(turnos : Turnos) {
    super({
      codigo: new FormControl(turnos.codigo,[Validators.required,
        Validators.minLength(1), Validators.maxLength(1)]),
      turno: new FormControl(turnos.turno, [Validators.required,
        Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
