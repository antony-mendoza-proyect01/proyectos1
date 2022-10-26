import {ApiResponse} from './api-response';
// model
export class Descripciones {
  id?: number;
  codigo: string;
  descripcion: string;


  constructor(codigo?: string, descripcion?: string, ) {
    this.codigo = codigo || '' ;
    this.descripcion = descripcion || '';

  }
}
// responses
export class ResponseDescripcion extends ApiResponse {
  data: Descripciones;

  constructor(data: Descripciones) {
    super(data);
  }
}
export class ResponseDescripciones extends ApiResponse {
  data: Descripciones[];

  constructor(data: Descripciones[]) {
    super(data);
  }
}
