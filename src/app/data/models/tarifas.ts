import {ApiResponse} from './api-response';
// model
export class Tarifas {
  codigoTarifa: number;
  codContrato: string;
  tipoPozo: string;
  tarifaDesde: number;
  tarifaHasta: number;
  valor: number;


  constructor(codigoTarifa?: number, codContrato?: string, tipoPozo?: string, desde?: number, hasta?: number, tarifaDesde?: number, tarifaHasta?: number, valor?: number) {
    this.codigoTarifa= codigoTarifa || null;
    this.codContrato = codContrato || '';
    this.tipoPozo = tipoPozo || '';
    this.tarifaDesde = tarifaDesde || null;
    this.tarifaHasta = tarifaHasta || null;
    this.valor = valor || 0;
  }
}
// responses
export class ResponseTarifa extends ApiResponse {
  data: Tarifas;

  constructor(data: Tarifas) {
    super(data);
  }
}
export class ResponseTarifas extends ApiResponse {
  data: Tarifas[];

  constructor(data: Tarifas[]) {
    super(data);
  }
}
