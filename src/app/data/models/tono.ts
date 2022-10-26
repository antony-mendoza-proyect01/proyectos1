import {ApiResponse} from './api-response';
// model
export class Tonos {

  codTono: string;
  tono: string;


  constructor(codTono?: string, tono?: string) {

    this.codTono = codTono || '';
    this.tono = tono || '';


  }
}
// responses
export class ResponseTono extends ApiResponse {
  data: Tonos;

  constructor(data: Tonos) {
    super(data);
  }
}
export class ResponseTonos extends ApiResponse {
  data: Tonos[];

  constructor(data: Tonos[]) {
    super(data);
  }
}
