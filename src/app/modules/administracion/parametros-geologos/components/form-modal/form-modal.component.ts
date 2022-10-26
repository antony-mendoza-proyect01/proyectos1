import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PersonasRoles} from "../../../../../data/models/personas-roles";
import {PERSONAL_ROL__GEOLOGO} from "../../../../../core/const/variables.const";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() personasRol: PersonasRoles;
  personasRolForm: PersonasRolForm;
  submitted = false;


  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.personasRolForm = new PersonasRolForm(this.personasRol);
  }

  get f() {return this.personasRolForm.controls; }
  get fpersonaRolPK() {return this.personasRolForm.controls['personaRolPK']; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.personasRolForm.invalid) {
      return;
    }

    const result =  this.personasRolForm.getRawValue();
    this.activeModal.close(result);
  }

}
// TODO: class para implementacion del formulario
export class PersonasRolForm extends FormGroup {
  constructor(personasRol: PersonasRoles) {
    super({
      personaRolPK: new FormGroup({
      personaCodigo: new FormControl(personasRol.personaRolPK.personaCodigo, [Validators.required,
        Validators.minLength(1), Validators.maxLength(50)]),
      rolCodigo: new FormControl(PERSONAL_ROL__GEOLOGO),
    })
    });
    }
}
