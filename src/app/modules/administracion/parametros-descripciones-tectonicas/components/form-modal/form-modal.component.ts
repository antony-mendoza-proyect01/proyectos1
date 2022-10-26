
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { DescripcionTectonica } from 'src/app/data/models/descripcion-tectonica';



@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() descripcionTectonicas: DescripcionTectonica;
  descripcionTectonicasForm: DescripcionTectonicasForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.descripcionTectonicasForm = new DescripcionTectonicasForm(this.descripcionTectonicas);
  }

  get f() { return this.descripcionTectonicasForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.descripcionTectonicasForm.invalid) {
      return;
    }

    this.activeModal.close(this.descripcionTectonicasForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class DescripcionTectonicasForm extends FormGroup {
  constructor(descripciontectonicas : DescripcionTectonica) {
    super({
      codDesTec: new FormControl(descripciontectonicas.codDesTec,[Validators.required,
        Validators.minLength(0), Validators.maxLength(1)]),
      descripcion: new FormControl(descripciontectonicas.descripcion, [Validators.required]),
    });
  }
}
