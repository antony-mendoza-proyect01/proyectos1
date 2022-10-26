import {ApiResponse} from './api-response';
// model
export class ContratosRegistro {
  codigo: string;
  descripcion: string;
  fechaCreacion: any;
  cargoBasico: number;

  constructor(codigo?: string, descripcion?: string, fechaCreacion?: string, cargoBasico?: number) {
    this.codigo = codigo || null;
    this.descripcion = descripcion || '';
    this.fechaCreacion = fechaCreacion || new Date().toISOString().slice(0, 10);
    this.cargoBasico = cargoBasico  || 0;
  }

}
// responses
export class ResponseContratosRegistro extends ApiResponse {
  data: ContratosRegistro;

  constructor(data: ContratosRegistro) {
    super(data);
  }
}
export class ResponseContratosRegistros extends ApiResponse {
  data: ContratosRegistro[];

  constructor(data: ContratosRegistro[]) {
    super(data);
  }
}
