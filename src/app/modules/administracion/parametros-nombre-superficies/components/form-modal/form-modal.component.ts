import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NombreSuperficies} from "../../../../../data/models/nombre-superficies";


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() nombre: NombreSuperficies;
  nombreForm: NombreForm;
  submitted = false;
  color: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.nombreForm = new NombreForm(this.nombre);
    this.color = {a: '255', r: String(this.nombre.r), b: String(this.nombre.b), g: String(this.nombre.g)}
  }

  get f() { return this.nombreForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.nombreForm.invalid) {
      return;
    }

    this.activeModal.close(this.nombreForm.getRawValue());
  }

  changeComplete(event) {
    this.nombreForm.controls['r'].setValue(event.color.rgb.r);
    this.nombreForm.controls['g'].setValue(event.color.rgb.g);
    this.nombreForm.controls['b'].setValue(event.color.rgb.b);
  }

}
// TODO: class para implementacion del formulario
export class NombreForm extends FormGroup {
  constructor(nombres : NombreSuperficies) {
    super({
      codigo: new FormControl(nombres.codigo,[Validators.required,
        Validators.minLength(0), Validators.maxLength(15)]),
      nombre: new FormControl(nombres.nombre,[Validators.required,
        Validators.minLength(1), Validators.maxLength(15)]),
      r: new FormControl(nombres.r, [Validators.required]),
      g: new FormControl(nombres.g, [Validators.required]),
      b: new FormControl(nombres.b, [Validators.required]),
    });
  }
}
