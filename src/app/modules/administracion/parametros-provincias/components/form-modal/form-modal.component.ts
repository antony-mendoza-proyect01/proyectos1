import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Provincias} from '../../../../../data/models/provincias';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() provincia: Provincias;
  provinciaForm: ProvinciaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.provinciaForm = new ProvinciaForm(this.provincia);
  }

  get f() { return this.provinciaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.provinciaForm.invalid) {
      return;
    }

    this.activeModal.close(this.provinciaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class ProvinciaForm extends FormGroup {
  constructor(provincias : Provincias) {
    super({
      codProv: new FormControl(provincias.codProv,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      provincia: new FormControl(provincias.provincia, [Validators.required,
        Validators.minLength(1), Validators.maxLength(30)]),
    });
  }
}
