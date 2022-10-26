import {ApiResponse} from './api-response';
// model
export class Espaciamiento {
  codEspaciamiento: number;
  espaciamiento: string;

  constructor(codEspaciamiento?: number, espaciamiento?: string, ) {
    this.codEspaciamiento = codEspaciamiento || null ;
    this.espaciamiento = espaciamiento || '';
  }
}
// responses
export class ResponseEspaciamiento extends ApiResponse {
  data: Espaciamiento;

  constructor(data: Espaciamiento) {
    super(data);
  }
}
export class ResponseEspaciamientos extends ApiResponse {
  data: Espaciamiento[];

  constructor(data: Espaciamiento[]) {
    super(data);
  }
}
