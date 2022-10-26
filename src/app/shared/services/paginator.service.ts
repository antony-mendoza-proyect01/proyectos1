import { Injectable } from '@angular/core';
export let PAGESIZE = 10;
@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  page = 1;
  pageSize = PAGESIZE;

  constructor() {
    this.page = 1;
  }

  refreshPaginator( listado: any[], page: number = 0) {
    if(page !== 0) {
      this.page = 1;
    }
    return listado.map((e, i) => ({id: i + 1, ...e}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  initial() {
    this.page = 1;
  }

  modificarPageSize(page: number) {
    PAGESIZE = page;
  }
}
