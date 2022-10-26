import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ContratosRegistro} from '../../../../../data/models/contratos-registro';
import {FormatService} from '../../../../../shared/services/format.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() contratosRegistro: ContratosRegistro;
  contratosRegistroForm: ContratosRegistroForm;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    public formatService: FormatService,
              ) { }

  ngOnInit(): void {
    this.contratosRegistroForm = new ContratosRegistroForm(this.contratosRegistro);
  }

  get f() {return this.contratosRegistroForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contratosRegistroForm.invalid) {
      return;
    }

    const result =  this.contratosRegistroForm.getRawValue();
    result.fechaCreacion = this.formatService.formatFecha(this.contratosRegistroForm.getRawValue().fechaCreacion);

    this.activeModal.close(result);
  }

}
// TODO: class para implementacion del formulario
export class ContratosRegistroForm extends FormGroup {
  constructor(contratosRegistro: ContratosRegistro) {
    super({
      codigo: new FormControl(contratosRegistro.codigo, [Validators.required,
        Validators.minLength(0), Validators.maxLength(15)]),
      descripcion: new FormControl(contratosRegistro.descripcion,
        [Validators.required,
        Validators.minLength(0), Validators.maxLength(250)]),
      fechaCreacion: new FormControl(
        {
          "year": Number(contratosRegistro.fechaCreacion.slice(0, 4)),
          "month":  Number(contratosRegistro.fechaCreacion.slice(5, 7)),
          "day": Number(contratosRegistro.fechaCreacion.slice(8, 10))
        }
        , [Validators.required]),
      cargoBasico: new FormControl(contratosRegistro.cargoBasico, [Validators.required]),
    });
  }
}
