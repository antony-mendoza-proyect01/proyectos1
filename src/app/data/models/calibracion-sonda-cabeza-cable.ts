import {ApiResponse} from './api-response';
// model
export class CalibracionSondaCabezaCable {
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
export class ResponseCalibracionSondaCabezaCable extends ApiResponse {
  data: CalibracionSondaCabezaCable;

  constructor(data: CalibracionSondaCabezaCable) {
    super(data);
  }
}
export class ResponseCalibracionSondaCabezaCables extends ApiResponse {
  data: CalibracionSondaCabezaCable[];

  constructor(data: CalibracionSondaCabezaCable[]) {
    super(data);
  }
}
