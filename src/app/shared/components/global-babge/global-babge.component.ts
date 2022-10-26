import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-babge',
  templateUrl: './global-babge.component.html',
  styleUrls: ['./global-babge.component.scss']
})
export class GlobalBabgeComponent implements OnInit {
  @Input() text: string = '';
  @Input() type: 'badge-success'|'badge-danger'|'badge-warming'|'badge-info' |'' = '';


  constructor() { }

  ngOnInit(): void {
  }

}
