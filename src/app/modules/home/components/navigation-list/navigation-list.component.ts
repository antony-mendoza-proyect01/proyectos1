import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INavigation} from '../../../../data/interfaces/iNavigation';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {
  @Input() navigations: INavigation[];
  @Output() activeEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  _active() {
    this.activeEvent.emit(true);
  }
}
