
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Caudales} from '../../../../../data/models/caudales';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() caudal: Caudales;
  caudalForm: CaudalForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.caudalForm = new CaudalForm(this.caudal);
  }

  get f() { return this.caudalForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.caudalForm.invalid) {
      return;
    }

    this.activeModal.close(this.caudalForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class CaudalForm extends FormGroup {
  constructor(caudales : Caudales) {
    super({
      codigo: new FormControl(caudales.codigo,[Validators.required,
        Validators.minLength(0), Validators.maxLength(1)]),
      caudal: new FormControl(caudales.caudal, [Validators.required]),
    });
  }
}
