import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {Observable} from 'rxjs';
import {selectActionLogin, selectLoadingLogin} from '../../state/login.selectors';
import {initLogin, postVerificarLogin} from '../../state/login.actions';
import {Login} from '../../../../data/models/login';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() create = new EventEmitter<Login>();

  registerForm: RegisterForm;
  submitted = false;

  loading$: Observable<boolean> = new Observable<boolean>();
  action$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.registerForm = new RegisterForm(new Login());

    this.store.dispatch(initLogin());
    this.loading$ = this.store.select(selectLoadingLogin);// cargue true o false
    this.action$ = this.store.select(selectActionLogin);// acciones true o false
  }
  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }


    this.store.dispatch(postVerificarLogin({login: this.registerForm.getRawValue()}));
  }
}
// TODO: class para implementacion del formulario
export class RegisterForm extends FormGroup {
  constructor(login: Login) {
    super({
      username: new FormControl(login.username, [Validators.required]),
      password: new FormControl(login.password, [Validators.required]),
    });
  }
}
