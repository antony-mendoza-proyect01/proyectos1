import {Component, Input, OnInit} from '@angular/core';
import {INavigation} from '../../../../data/interfaces/iNavigation';

@Component({
  selector: 'app-a-not-menu',
  templateUrl: './a-not-menu.component.html',
  styleUrls: ['./a-not-menu.component.scss']
})
export class ANotMenuComponent implements OnInit {
  @Input() navigation: INavigation;
  constructor() { }

  ngOnInit(): void {
  }

}
