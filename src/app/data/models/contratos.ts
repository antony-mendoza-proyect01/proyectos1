import {ApiResponse} from './api-response';
// model
export class Contratos {
  codigo: string;
  descripcion: string;
  fechaCreacion: string;


  constructor(codigo?: string, descripcion?: string, fechaCreacion?: string) {
    this.codigo = codigo || '';
    this.descripcion = descripcion || '';
    this.fechaCreacion = fechaCreacion || new Date().toISOString().slice(0, 10);
  }
}
// responses
export class ResponseContrato extends ApiResponse {
  data: Contratos;

  constructor(data: Contratos) {
    super(data);
  }
}
export class ResponseContratos extends ApiResponse {
  data: Contratos[];

  constructor(data: Contratos[]) {
    super(data);
  }
}
