
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TipoTectonicas} from "../../../../../data/models/tipo-tectonica";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() tipoTectonicas: TipoTectonicas;
  tipoTectonicasForm: TipoTectonicasForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.tipoTectonicasForm = new TipoTectonicasForm(this.tipoTectonicas);
  }

  get f() { return this.tipoTectonicasForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tipoTectonicasForm.invalid) {
      return;
    }

    this.activeModal.close(this.tipoTectonicasForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class TipoTectonicasForm extends FormGroup {
  constructor(tipoTectonicas : TipoTectonicas) {
    super({
      codTecTipo: new FormControl(tipoTectonicas.codTecTipo,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      tipo: new FormControl(tipoTectonicas.tipo,[Validators.required,
        Validators.minLength(0), Validators.maxLength(50)]),

    });
  }
}
