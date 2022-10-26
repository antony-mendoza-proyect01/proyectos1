import {ApiResponse} from './api-response';
// model
export class CalibracionDatosPozoRegistrado {
  id: number;
  codCalificador: string;
  calificador: string;

  constructor(id?: number, codCalificador?: string, calificador?: string) {
    this.id = id || 0;
    this.codCalificador = codCalificador || '';
    this.calificador = calificador || '';
  }
}
// responses
export class ResponseCalibracionDatosPozoRegistrado extends ApiResponse {
  data: CalibracionDatosPozoRegistrado;

  constructor(data: CalibracionDatosPozoRegistrado) {
    super(data);
  }
}
export class ResponseCalibracionDatosPozoRegistrados extends ApiResponse {
  data: CalibracionDatosPozoRegistrado[];

  constructor(data: CalibracionDatosPozoRegistrado[]) {
    super(data);
  }
}
