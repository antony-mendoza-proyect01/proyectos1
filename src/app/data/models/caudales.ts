import {ApiResponse} from './api-response';
// model
export class Caudales {
  id?: number;
  codigo: string;
  caudal: string;


  constructor(codigo?: string, caudal?: string) {

    this.codigo = codigo || '';
    this.caudal = caudal || '';


  }
}
// responses
export class ResponseCaudal extends ApiResponse {
  data: Caudales;

  constructor(data: Caudales) {
    super(data);
  }
}
export class ResponseCaudales extends ApiResponse {
  data: Caudales[];

  constructor(data: Caudales[]) {
    super(data);
  }
}
