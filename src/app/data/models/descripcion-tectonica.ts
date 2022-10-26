import {ApiResponse} from './api-response';
// model
export class DescripcionTectonica {

  codDesTec: string;
  descripcion: string;


  constructor(codDesTec?: string, descripcion?: string) {

    this.codDesTec = codDesTec || '';
    this.descripcion = descripcion || '';


  }
}
// responses
export class ResponseDescipcionTectonica extends ApiResponse {
  data: DescripcionTectonica;

  constructor(data: DescripcionTectonica) {
    super(data);
  }
}
export class ResponseDescipcionTectonicas extends ApiResponse {
  data: DescripcionTectonica[];

  constructor(data: DescripcionTectonica[]) {
    super(data);
  }
}
