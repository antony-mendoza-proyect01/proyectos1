import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {personaRolFK, PersonasRoles} from "../../../../../data/models/personas-roles";
import {PERSONAL_ROL__GEOLOGO, PERSONAL_ROL__SUPERVISOR} from "../../../../../core/const/variables.const";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() supervisor: PersonasRoles;
  supervisoresForm: PersonasRolForm;
  submitted = false;


  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.supervisoresForm = new PersonasRolForm(this.supervisor);
  }

  get f() {return this.supervisoresForm.controls; }
  get fpersonaRolPK() {return this.supervisoresForm.controls['personaRolPK']; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.supervisoresForm.invalid) {
      return;
    }

    const result =  this.supervisoresForm.getRawValue();
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
        rolCodigo: new FormControl(PERSONAL_ROL__SUPERVISOR),
      })
    });
  }
}
