import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Laboratorios} from '../../../../../data/models/laboratorios';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() laboratorio: Laboratorios;
  laboratorioForm: LaboratorioForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.laboratorioForm = new LaboratorioForm(this.laboratorio);
  }

  get f() {return this.laboratorioForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.laboratorioForm.invalid) {
      return;
    }

    this.activeModal.close(this.laboratorioForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class LaboratorioForm extends FormGroup {
  constructor(laboratorios: Laboratorios) {
    super({
      codLab: new FormControl(laboratorios.codLab,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      laboratorio: new FormControl(laboratorios.laboratorio,
        [Validators.required,
          Validators.minLength(1), Validators.maxLength(100)]),
    });
  }
}
