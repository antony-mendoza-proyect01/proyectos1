import {ApiResponse} from './api-response';
// model
export class Fluidos {
  id?: number;
  codigo: string;
  fluido: string;


  constructor(codigo?: string, fluido?: string) {

    this.codigo = codigo || '';
    this.fluido = fluido || '';


  }
}
// responses
export class ResponseFluido extends ApiResponse {
  data: Fluidos;

  constructor(data: Fluidos) {
    super(data);
  }
}
export class ResponseFluidos extends ApiResponse {
  data: Fluidos[];

  constructor(data: Fluidos[]) {
    super(data);
  }
}
