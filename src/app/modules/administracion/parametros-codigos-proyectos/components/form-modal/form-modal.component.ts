
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CodigosProyectos } from 'src/app/data/models/codigos-proyectos';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() codigoproyecto: CodigosProyectos;
  codigoproyectoForm: CodigoproyectoForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.codigoproyectoForm = new CodigoproyectoForm(this.codigoproyecto);
  }

  get f() { return this.codigoproyectoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.codigoproyectoForm.invalid) {
      return;
    }

    this.activeModal.close(this.codigoproyectoForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class CodigoproyectoForm extends FormGroup {
  constructor(codigosproyectos : CodigosProyectos) {
    super({
      codProyecto: new FormControl(codigosproyectos.codProyecto,[Validators.required,
        Validators.minLength(1), Validators.maxLength(5)]),

    });
  }
}
