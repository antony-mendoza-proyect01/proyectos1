
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Visibilidades} from '../../../../../data/models/visibilidades';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() visibilidad: Visibilidades;
  visibilidadForm: VisibilidadForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.visibilidadForm = new VisibilidadForm(this.visibilidad);
  }

  get f() { return this.visibilidadForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.visibilidadForm.invalid) {
      return;
    }

    this.activeModal.close(this.visibilidadForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class VisibilidadForm extends FormGroup {
  constructor(visibilidades : Visibilidades) {
    super({
      codVisibilidad: new FormControl(visibilidades.codVisibilidad,[Validators.required,
        Validators.minLength(1), Validators.maxLength(32)]),
      visibilidad: new FormControl(visibilidades.visibilidad, [Validators.required,
        Validators.minLength(1), Validators.maxLength(50)]),
    });
  }
}
