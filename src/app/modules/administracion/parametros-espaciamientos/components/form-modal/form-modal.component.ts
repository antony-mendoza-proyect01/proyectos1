import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Espaciamiento} from '../../../../../data/models/Espaciamiento';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() espaciamiento: Espaciamiento;
  espaciamientoForm: EspaciamientoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.espaciamientoForm = new EspaciamientoForm(this.espaciamiento);
  }

  get f() {return this.espaciamientoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.espaciamientoForm.invalid) {
      return;
    }

    this.activeModal.close(this.espaciamientoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class EspaciamientoForm extends FormGroup {
  constructor(espaciamientos: Espaciamiento) {
    super({
      codEspaciamiento: new FormControl(espaciamientos.codEspaciamiento),
      espaciamiento: new FormControl(espaciamientos.espaciamiento,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
