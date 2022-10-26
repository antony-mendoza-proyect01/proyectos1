import {ApiResponse} from './api-response';
// model
export class Sondas{
  id: string;
  nombre: string;
  constante: number;
  archivoOrigen: string;
  cierre: number;
  cverticalidad: number;

  constructor(id?: string, nombre?: string, constante?: number, archivoOrigen?: string, cierre?: number,cverticalidad?: number) {
    this.id = id || null;
    this.nombre = nombre || '';
    this.archivoOrigen = archivoOrigen ||'' ;
    this.constante = constante || 0;
    this.cierre = cierre || 0;
    this.cverticalidad = cverticalidad || 0;
  }
}
// responses
export class ResponseSonda extends ApiResponse {
  data: Sondas;

  constructor(data: Sondas) {
    super(data);
  }
}
export class ResponseSondas extends ApiResponse {
  data: Sondas[];

  constructor(data: Sondas[]) {
    super(data);
  }
}
