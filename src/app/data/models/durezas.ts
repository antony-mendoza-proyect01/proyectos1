import {ApiResponse} from './api-response';
// model
export class Durezas {

  codDureza: number;
  dureza: string;


  constructor(codDureza?: number, dureza?: string) {

    this.codDureza = codDureza || null;
    this.dureza = dureza || '';


  }
}
// responses
export class ResponseDureza extends ApiResponse {
  data: Durezas;

  constructor(data: Durezas) {
    super(data);
  }
}
export class ResponseDurezas extends ApiResponse {
  data: Durezas[];

  constructor(data: Durezas[]) {
    super(data);
  }
}
