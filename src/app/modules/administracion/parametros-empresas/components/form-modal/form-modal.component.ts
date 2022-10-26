import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CONFIRMACION } from 'src/app/core/const/variables.const';
import { Empresas } from 'src/app/data/models/empresas';


@Component({
  selector: 'app-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() empresa: Empresas;
  empresaForm: EmpresaForm;
  confirmaciones =  CONFIRMACION;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.empresaForm = new EmpresaForm(this.empresa);
  }

  get f() {return this.empresaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.empresaForm.invalid) {
      return;
    }

    this.activeModal.close(this.empresaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class EmpresaForm extends FormGroup {
  constructor(empresas: Empresas) {
    super({
      codigo: new FormControl(empresas.codigo),
      nombre: new FormControl(empresas.nombre,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(100)]),
      descripcion: new FormControl(empresas.descripcion, [Validators.required,
        Validators.minLength(0), Validators.maxLength(500)]),
      facturable: new FormControl(empresas.facturable, [Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      perforadora: new FormControl(empresas.perforadora, [Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      codigoGdb: new FormControl(empresas.codigoGdb, [Validators.required,
        Validators.minLength(0), Validators.maxLength(15)]),
    });
  }
}
