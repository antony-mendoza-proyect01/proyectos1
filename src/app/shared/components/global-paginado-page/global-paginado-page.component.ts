import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginado-page',
  templateUrl: './global-paginado-page.component.html',
  styleUrls: ['./global-paginado-page.component.scss']
})
export class GlobalPaginadoPageComponent implements OnInit {
  @Output() emitPage = new EventEmitter<number>();
  @Input() page: number;
  @Input() collectionSize: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  _emitPage() {
    this.emitPage.emit(this.page -1);
  }
}
