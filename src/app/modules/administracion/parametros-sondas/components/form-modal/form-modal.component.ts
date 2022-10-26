import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Sondas } from 'src/app/data/models/sondas';

@Component({
  selector: 'app-from-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() sonda: Sondas;
  sondaForm: SondaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.sondaForm = new SondaForm(this.sonda);
  }

  get f() {return this.sondaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.sondaForm.invalid) {
      return;
    }

    this.activeModal.close(this.sondaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class SondaForm extends FormGroup {
  constructor(sondas: Sondas) {
    super({
      id: new FormControl(sondas.id, [Validators.required]),
      nombre: new FormControl(sondas.nombre,
        [Validators.required,
          Validators.minLength(0), Validators.maxLength(50)]),
      archivoOrigen: new FormControl(sondas.archivoOrigen,[Validators.required,
        Validators.minLength(0), Validators.maxLength(5)]),
      constante: new FormControl(sondas.constante, [Validators.required]),
      cierre: new FormControl(sondas.cierre, [Validators.required]),
      cverticalidad: new FormControl(sondas.cverticalidad, [Validators.required]),
    });
  }
}
