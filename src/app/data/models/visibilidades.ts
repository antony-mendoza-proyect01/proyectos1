import {ApiResponse} from './api-response';
// model
export class Visibilidades {

  codVisibilidad: number;
  visibilidad: string;


  constructor(codVisibilidad?: number, visibilidad?: string) {

    this.codVisibilidad = codVisibilidad || 0;
    this.visibilidad = visibilidad || '';


  }
}
// responses
export class ResponseVisibilidad extends ApiResponse {
  data: Visibilidades;

  constructor(data: Visibilidades) {
    super(data);
  }
}
export class ResponseVisibilidades extends ApiResponse {
  data: Visibilidades[];

  constructor(data: Visibilidades[]) {
    super(data);
  }
}
