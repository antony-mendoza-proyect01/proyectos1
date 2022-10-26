import {ApiResponse} from './api-response';
// model
export class CalibracionSondaSusceptibilidadMagnetica {
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
export class ResponseCalibracionSondaSusceptibilidadMagnetica extends ApiResponse {
  data: CalibracionSondaSusceptibilidadMagnetica;

  constructor(data: CalibracionSondaSusceptibilidadMagnetica) {
    super(data);
  }
}
export class ResponseCalibracionSondaSusceptibilidadMagneticas extends ApiResponse {
  data: CalibracionSondaSusceptibilidadMagnetica[];

  constructor(data: CalibracionSondaSusceptibilidadMagnetica[]) {
    super(data);
  }
}
