import { Component, OnInit } from '@angular/core';
import {NOMBRE_APP} from '../../core/const/variables.const';
import {ROUTES_IMAGE} from '../../core/const/image.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nombreApp = NOMBRE_APP;
  logo = ROUTES_IMAGE.logo;

  constructor(
  ) { }

  ngOnInit(): void {
  }



}

