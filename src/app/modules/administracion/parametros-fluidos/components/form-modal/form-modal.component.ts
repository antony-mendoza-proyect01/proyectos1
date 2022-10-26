
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Fluidos} from '../../../../../data/models/fluidos';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() fluido: Fluidos;
  fluidoForm: FluidoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.fluidoForm = new FluidoForm(this.fluido);
  }

  get f() { return this.fluidoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.fluidoForm.invalid) {
      return;
    }

    this.activeModal.close(this.fluidoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class FluidoForm extends FormGroup {
  constructor(fluidos : Fluidos) {
    super({
      codigo: new FormControl(fluidos.codigo,[Validators.required,
        Validators.minLength(1), Validators.maxLength(1)]),
      fluido: new FormControl(fluidos.fluido, [Validators.required,
        Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
