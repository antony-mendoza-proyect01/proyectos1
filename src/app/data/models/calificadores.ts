import {ApiResponse} from './api-response';
// model
export class Calificadores {
  id?: number;
  codCalificador: string;
  calificador: string;


  constructor(codCalificador?: string, calificador?: string) {

    this.codCalificador = codCalificador || '';
    this.calificador = calificador || '';


  }
}
// responses
export class ResponseCalificador extends ApiResponse {
  data: Calificadores;

  constructor(data: Calificadores) {
    super(data);
  }
}
export class ResponseCalificadores extends ApiResponse {
  data: Calificadores[];

  constructor(data: Calificadores[]) {
    super(data);
  }
}
