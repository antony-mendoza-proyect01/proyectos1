import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Calificadores } from 'src/app/data/models/calificadores';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() calificador: Calificadores;
  calificadorForm: CalificadorForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.calificadorForm = new CalificadorForm(this.calificador);
  }

  get f() {return this.calificadorForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.calificadorForm.invalid) {
      return;
    }

    this.activeModal.close(this.calificadorForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class CalificadorForm extends FormGroup {
  constructor(calificadores: Calificadores) {
    super({
      codCalificador: new FormControl(calificadores.codCalificador,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      calificador: new FormControl(calificadores.calificador,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
  })
}
}
