import {Component, Input, OnInit} from '@angular/core';
import {INavigation} from '../../../../data/interfaces/iNavigation';

@Component({
  selector: 'app-a-menu',
  templateUrl: './a-menu.component.html',
  styleUrls: ['./a-menu.component.scss']
})
export class AMenuComponent implements OnInit {
  @Input() navigation: INavigation;
  active = true;
  constructor() { }

  ngOnInit(): void {
  }

}
