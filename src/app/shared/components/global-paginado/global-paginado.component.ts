import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginatorService} from '../../services/paginator.service';

@Component({
  selector: 'app-paginado',
  templateUrl: './global-paginado.component.html',
  styleUrls: ['./global-paginado.component.scss']
})
export class GlobalPaginadoComponent implements OnInit {
  @Output() itemsPaginado = new EventEmitter<number>();
  @Input() items = [];
  @Input() itemsAux = [];
  @Input() paginator: number;

  constructor(public paginatorService: PaginatorService) {
  }

  ngOnInit(): void {
  }

  _refreshPaginator() {
    this.itemsPaginado.emit(this.paginatorService.page);
  }
}
