import {ApiResponse} from './api-response';
// model
export class Minabilidades {
  id?: number;
  codMinabilidad: number;
  minabilidad: string;


  constructor(codMinabilidad?: number, minabilidad?: string) {

    this.codMinabilidad = codMinabilidad || 0;
    this.minabilidad = minabilidad || '';


  }
}
// responses
export class ResponseMinabilidad extends ApiResponse {
  data: Minabilidades;

  constructor(data: Minabilidades) {
    super(data);
  }
}
export class ResponseMinabilidades extends ApiResponse {
  data: Minabilidades[];

  constructor(data: Minabilidades[]) {
    super(data);
  }
}
