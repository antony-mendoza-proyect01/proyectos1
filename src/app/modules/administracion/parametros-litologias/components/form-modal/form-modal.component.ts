
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Litologias } from 'src/app/data/models/litologias';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class  FormModalComponent implements OnInit {
  @Input() litologia: Litologias;
  litologiaForm: LitologiaForm;
  submitted = false;
  color: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.litologiaForm = new LitologiaForm(this.litologia);
    this.color = {a: '255', r: String(this.litologia.r), b: String(this.litologia.b), g: String(this.litologia.g)}
  }

  get f() { return this.litologiaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.litologiaForm.invalid) {
      return;
    }

    this.activeModal.close(this.litologiaForm.getRawValue());
  }

  changeComplete(event) {
    this.litologiaForm.controls['r'].setValue(event.color.rgb.r);
    this.litologiaForm.controls['g'].setValue(event.color.rgb.g);
    this.litologiaForm.controls['b'].setValue(event.color.rgb.b);
  }

}
// TODO: class para implementacion del formulario
export class LitologiaForm extends FormGroup {
  constructor(litologias : Litologias) {
    super({
      codLitologia: new FormControl(litologias.codLitologia,[Validators.required,
        Validators.minLength(1), Validators.maxLength(2)]),
      litologia: new FormControl(litologias.litologia,[Validators.required,
        Validators.minLength(1), Validators.maxLength(50)]),
      r: new FormControl(litologias.r, [Validators.required]),
      g: new FormControl(litologias.g, [Validators.required]),
      b: new FormControl(litologias.b, [Validators.required]),
    });
  }
}
