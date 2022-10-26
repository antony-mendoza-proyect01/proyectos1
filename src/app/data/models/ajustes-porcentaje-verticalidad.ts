import {ApiResponse} from './api-response';
// model
export class ContratoPerforacionAjustesRegistro {
  codigo?: number;
  codContrato: string;
  tipoPozo: string;
  rinicial: number;
  rfinal: number;
  porcentaje: string;



  constructor(codigo?: number, codContrato?: string, tipoPozo?: string, rinicial?: number, rfinal?: number, porcentaje?: string) {
    this.codigo= codigo || null;
    this.codContrato = codContrato || '';
    this.tipoPozo = tipoPozo || '';
    this.rinicial = rinicial || null;
    this.rfinal = rfinal || null;
    this.porcentaje = porcentaje || '';

  }
}
// responses
export class ResponseContratoPerforacionAjustesRegistro extends ApiResponse {
  data: ContratoPerforacionAjustesRegistro;

  constructor(data: ContratoPerforacionAjustesRegistro) {
    super(data);
  }
}
export class ResponseContratoPerforacionAjustesRegistros extends ApiResponse {
  data: ContratoPerforacionAjustesRegistro[];

  constructor(data: ContratoPerforacionAjustesRegistro[]) {
    super(data);
  }
}
