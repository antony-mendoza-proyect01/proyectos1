import {ApiResponse} from './api-response';
// model
export class Programas {
  id?: number;
  codigo: number;
  programa: string;


  constructor(codigo?: number, programa?: string) {

    this.codigo = codigo || null;
    this.programa = programa || '';


  }
}
// responses
export class ResponsePrograma extends ApiResponse {
  data: Programas;

  constructor(data: Programas) {
    super(data);
  }
}
export class ResponseProgramas extends ApiResponse {
  data: Programas[];

  constructor(data: Programas[]) {
    super(data);
  }
}
