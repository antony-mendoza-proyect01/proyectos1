
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LitofacieColores } from 'src/app/data/models/litofacie-colores';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() litofacie: LitofacieColores;
  litofaciesForm: LitofaciesForm;
  submitted = false;
  color: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.litofaciesForm = new LitofaciesForm(this.litofacie);
    this.color = {a: '255', r: String(this.litofacie.r), b: String(this.litofacie.b), g: String(this.litofacie.g)}
  }

  get f() { return this.litofaciesForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.litofaciesForm.invalid) {
      return;
    }

    this.activeModal.close(this.litofaciesForm.getRawValue());
  }

  changeComplete(event) {
    this.litofaciesForm.controls['r'].setValue(event.color.rgb.r);
    this.litofaciesForm.controls['g'].setValue(event.color.rgb.g);
    this.litofaciesForm.controls['b'].setValue(event.color.rgb.b);
  }

}
// TODO: class para implementacion del formulario
export class LitofaciesForm extends FormGroup {
  constructor(litofacies : LitofacieColores) {
    super({
      litofacie: new FormControl(litofacies.litofacie,[Validators.required,
        Validators.minLength(0), Validators.maxLength(1)]),
      r: new FormControl(litofacies.r, [Validators.required]),
      g: new FormControl(litofacies.g, [Validators.required]),
      b: new FormControl(litofacies.b, [Validators.required]),
    });
  }
}
