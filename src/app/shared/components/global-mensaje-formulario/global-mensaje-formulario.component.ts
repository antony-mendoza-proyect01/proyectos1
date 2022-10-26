import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-global-mensaje-formulario',
  templateUrl: './global-mensaje-formulario.component.html',})
export class GlobalMensajeFormulario implements OnInit {

  @Input() title: string;
  @Input() control: any;
  @Input() submitted: boolean;
  @Input() formulario: FormGroup;

  ngOnInit(): void {
  }

  get f() {return this.formulario.controls; }
}
