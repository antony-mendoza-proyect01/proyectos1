import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CONFIRMACION, ESTADOS} from '../../../../../core/const/variables.const';
import {User} from '../../../../../data/models/user';

@Component({
  selector: 'app-modalid',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() usuario: User;
  usuarioForm: UsuarioForm;
  submitted = false;
  estados = ESTADOS;
  confirmacion = CONFIRMACION;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.usuarioForm = new UsuarioForm(this.usuario);
  }

  get f() { return this.usuarioForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.usuarioForm.invalid) {
      return;
    }

    this.activeModal.close(this.usuarioForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class UsuarioForm extends FormGroup {
  constructor(item: User) {
    super({
      username: new FormControl(item.username, [Validators.required]),
      password: new FormControl(item.password, [Validators.required]),
      nombres: new FormControl(item.nombres, [Validators.required]),
      apellidos: new FormControl(item.apellidos, [Validators.required]),
      estado: new FormControl(item.estado, [Validators.required]),
    });
  }
}
