import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Areas} from '../../../../../data/models/areas';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() area: Areas;
  areaForm: AreaForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.areaForm = new AreaForm(this.area);
  }

  get f() {return this.areaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.areaForm.invalid) {
      return;
    }

    this.activeModal.close(this.areaForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class AreaForm extends FormGroup {
  constructor(areas: Areas) {
    super({
      codigo: new FormControl(areas.codigo),
      area: new FormControl(areas.area,
        [Validators.required,
        Validators.minLength(0), Validators.maxLength(50)]),
      codigoGdb: new FormControl(areas.codigoGdb),
      buzamientoPromedio: new FormControl(areas.buzamientoPromedio, [Validators.required]),
      pozoDesviado: new FormControl(areas.pozoDesviado, [Validators.required]),
    });
  }
}
