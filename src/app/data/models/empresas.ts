import {ApiResponse} from './api-response';
// model
export class Empresas {
  id?: number;
  codigo: number;
  nombre: string;
  descripcion: string;
  facturable: string;
  perforadora: string;
  codigoGdb: string;

  constructor(codigo?: number, descripcion?: string, nombre?: string, codigoGdb?: string, facturable?: string, perforadora?: string) {
    this.codigo = codigo || null;
    this.nombre = nombre || '';
    this.descripcion = descripcion || '';
    this.facturable = facturable || '';
    this.perforadora = perforadora || '';
    this.codigoGdb = codigoGdb || '';
  }
}
// responses
export class ResponseEmpresa extends ApiResponse {
  data: Empresas;

  constructor(data: Empresas) {
    super(data);
  }
}
export class ResponseEmpresas extends ApiResponse {
  data: Empresas[];

  constructor(data: Empresas[]) {
    super(data);
  }
}
