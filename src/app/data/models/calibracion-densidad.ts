import {ApiResponse} from './api-response';
// model
export class CalibracionDensidad {
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
export class ResponseCalibracionDensidad extends ApiResponse {
  data: CalibracionDensidad;

  constructor(data: CalibracionDensidad) {
    super(data);
  }
}
export class ResponseCalibracionDensidades extends ApiResponse {
  data: CalibracionDensidad[];

  constructor(data: CalibracionDensidad[]) {
    super(data);
  }
}
