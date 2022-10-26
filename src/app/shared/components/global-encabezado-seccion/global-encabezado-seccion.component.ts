import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-encabezado-seccion',
  templateUrl: './global-encabezado-seccion.component.html',
  styleUrls: ['./gloabl-encabezado-seccion.component.scss']
})
export class GlobalEncabezadoSeccionComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
