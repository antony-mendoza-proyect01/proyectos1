import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormatService} from '../../../../../shared/services/format.service';
import {Contratos} from "../../../../../data/models/contratos";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() contratosPerforacion: Contratos;
  contratosPerforacionForm: ContratosPerforacionForm;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    public formatService: FormatService,
  ) { }

  ngOnInit(): void {
    this.contratosPerforacionForm = new ContratosPerforacionForm(this.contratosPerforacion);
  }

  get f() {return this.contratosPerforacionForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contratosPerforacionForm.invalid) {
      return;
    }

    const result =  this.contratosPerforacionForm.getRawValue();
    result.fechaCreacion = this.formatService.formatFecha(this.contratosPerforacionForm.getRawValue().fechaCreacion);

    this.activeModal.close(result);
  }

}
// TODO: class para implementacion del formulario
export class ContratosPerforacionForm extends FormGroup {
  constructor(contratosPerforaciones: Contratos) {
    super({
      codigo: new FormControl(contratosPerforaciones.codigo, [Validators.required,
        Validators.minLength(0), Validators.maxLength(15)]),
      descripcion: new FormControl(contratosPerforaciones.descripcion,
        [Validators.required,
          Validators.minLength(0), Validators.maxLength(250)]),
      fechaCreacion: new FormControl(
        {
          "year": Number(contratosPerforaciones.fechaCreacion.slice(0, 4)),
          "month":  Number(contratosPerforaciones.fechaCreacion.slice(5, 7)),
          "day": Number(contratosPerforaciones.fechaCreacion.slice(8, 10))
        },[Validators.required]),
    });
  }
}
