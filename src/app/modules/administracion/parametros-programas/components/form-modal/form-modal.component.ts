import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {Programas} from "../../../../../data/models/programas";
@Component({
  selector: 'app-modalid',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() programa: Programas;
  programaForm: ProgramaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.programaForm = new ProgramaForm(this.programa);
  }

  get f() {return this.programaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.programaForm.invalid) {
      return;
    }

    this.activeModal.close(this.programaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class ProgramaForm extends FormGroup {
  constructor(programas: Programas) {
    super({
      codigo: new FormControl(programas.codigo),
      programa: new FormControl(programas.programa),

    });
  }
}
