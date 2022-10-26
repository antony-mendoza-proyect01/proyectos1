import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
