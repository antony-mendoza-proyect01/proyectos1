import {ApiResponse} from './api-response';
// model
export class CalibracionSondaRuedaContadora {
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
export class ResponseCalibracionSondaRuedaContadora extends ApiResponse {
  data: CalibracionSondaRuedaContadora;

  constructor(data: CalibracionSondaRuedaContadora) {
    super(data);
  }
}
export class ResponseCalibracionSondaRuedaContadoras extends ApiResponse {
  data: CalibracionSondaRuedaContadora[];

  constructor(data: CalibracionSondaRuedaContadora[]) {
    super(data);
  }
}
