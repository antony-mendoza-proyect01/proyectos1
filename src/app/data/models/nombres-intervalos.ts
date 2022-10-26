import {ApiResponse} from './api-response';
// model
export class NombresIntervalos {
  nombre: string;

  constructor(nombre?: string) {
    this.nombre = nombre || '';
  }
}
export class NombresIntervalosPaginado {
  content: NombresIntervalos[];
  pageable: {
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: false;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;

  constructor() {
  }

}
// responses
export class ResponseNombresIntervalo extends ApiResponse {
  data: NombresIntervalos;

  constructor(data: NombresIntervalos) {
    super(data);
  }
}
export class ResponseNombresIntervalos extends ApiResponse {
  data: NombresIntervalosPaginado;

  constructor(data: NombresIntervalosPaginado[]) {
    super(data);
  }
}
