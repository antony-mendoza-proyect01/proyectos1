import {ApiResponse} from './api-response';
// model
export class CalibracionDipmeter {
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
export class ResponseCalibracionDipmeter extends ApiResponse {
  data: CalibracionDipmeter;

  constructor(data: CalibracionDipmeter) {
    super(data);
  }
}
export class ResponseCalibracionDipmetes extends ApiResponse {
  data: CalibracionDipmeter[];

  constructor(data: CalibracionDipmeter[]) {
    super(data);
  }
}
