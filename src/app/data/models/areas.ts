import {ApiResponse} from './api-response';
// model
export class Areas {
  id?: number;
  codigo: number;
  area: string;
  codigoGdb: string;
  buzamientoPromedio: number;
  pozoDesviado: number;

  constructor(codigo?: number, area?: string, codigoGdb?: string, buzamientoPromedio?: number, pozoDesviado?: number) {
    this.codigo = codigo || null;
    this.area = area || '';
    this.codigoGdb = codigoGdb || '';
    this.buzamientoPromedio = buzamientoPromedio || 0;
    this.pozoDesviado = pozoDesviado || 0;
  }
}
// responses
export class ResponseArea extends ApiResponse {
  data: Areas;

  constructor(data: Areas) {
    super(data);
  }
}
export class ResponseAreas extends ApiResponse {
  data: Areas[];

  constructor(data: Areas[]) {
    super(data);
  }
}
