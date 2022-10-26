import {ApiResponse} from './api-response';
// model
export class OrigenDatos {

  codOrigen: string;
  origen: string;


  constructor(codOrigen?: string, origen?: string) {

    this.codOrigen = codOrigen || '';
    this.origen = origen || '';


  }
}
// responses
export class ResponseOrigenDato extends ApiResponse {
  data: OrigenDatos;

  constructor(data: OrigenDatos) {
    super(data);
  }
}
export class ResponseOrigenDatos extends ApiResponse {
  data: OrigenDatos[];

  constructor(data: OrigenDatos[]) {
    super(data);
  }
}
