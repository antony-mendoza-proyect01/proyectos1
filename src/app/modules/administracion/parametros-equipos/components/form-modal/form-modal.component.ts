import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Equipos} from '../../../../../data/models/equipos';

@Component({
  selector: 'app-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() equipo: Equipos;
  equipoForm: EquipoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.equipoForm = new EquipoForm(this.equipo);
  }

  get f() {return this.equipoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.equipoForm.invalid) {
      return;
    }

    this.activeModal.close(this.equipoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class EquipoForm extends FormGroup {
  constructor(equipos: Equipos) {
    super({
      codigo: new FormControl(equipos.codigo,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(3)]),
      equipo: new FormControl(equipos.equipo,
        [Validators.required,
          Validators.minLength(0), Validators.maxLength(50)]),
    });
  }
}
