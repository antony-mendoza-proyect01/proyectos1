import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-filter-table',
  templateUrl: './form-filter-table.component.html',
  styleUrls: ['./form-filter-table.component.scss']
})
export class FormFilterTableComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  _onKeyBuscar(event: any) {
    this.filter.emit(event.target.value);
  }
}
